import { describe, it, expect, vi, beforeEach } from 'vitest';
import { obterProjetos, TEMPO_LIMITE_MS } from './githubService';

const mockFetch = (repos) => {
  globalThis.fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => repos });
};

describe('githubService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // 1. Happy Path
  it('deve realizar requisição e mapear corretamente os dados da API para o modelo Projeto', async () => {
    mockFetch([
      {
        id: 1,
        name: 'projeto-teste',
        description: 'Descrição de teste',
        html_url: 'https://github.com/marcio-sgomes/projeto-teste',
        homepage: 'https://projeto-teste.vercel.app',
        topics: ['react', 'vite', 'em-desenvolvimento'],
        pushed_at: '2026-10-01T00:00:00Z',
        size: 120,
        fork: false,
      },
    ]);

    const projetos = await obterProjetos();

    expect(globalThis.fetch).toHaveBeenCalledWith(expect.stringContaining('per_page=100'), expect.objectContaining({ signal: expect.anything() }));
    expect(projetos).toHaveLength(1);
    expect(projetos[0]).toMatchObject({
      id: 1,
      nome: 'projeto teste',
      descricao: 'Descrição de teste',
      codigoUrl: 'https://github.com/marcio-sgomes/projeto-teste',
      paginaUrl: 'https://projeto-teste.vercel.app',
      tecnologias: ['react', 'vite'],
      estudo: false,
      emDesenvolvimento: true,
      privado: false,
      atualizadoEm: '2026-10-01T00:00:00Z',
    });
  });

  // 2. Edge Case: Dados incompletos ou nulos (sem topics ou descrição)
  it('deve lidar com repositórios sem descrição ou tópicos sem quebrar o mapeamento', async () => {
    mockFetch([
      {
        id: 2,
        name: 'projeto-simples',
        description: null,
        html_url: 'https://github.com/marcio-sgomes/simples',
        topics: undefined,
        fork: false,
      },
    ]);

    const projetos = await obterProjetos();

    expect(projetos[0].descricao).toBe('Sem descrição disponível.');
    expect(projetos[0].tecnologias).toEqual(['GitHub']);
    expect(projetos[0].paginaUrl).toBeNull();
    expect(projetos[0].atualizadoEm).toBeNull();
  });

  // 3. Estudos, GitHub Pages, homepage sem protocolo e logo conhecida
  it('deve identificar estudos e montar o link da página', async () => {
    mockFetch([
      {
        id: 3,
        name: 'portifolio',
        description: '[Estudo] Primeiro portfólio',
        html_url: 'https://github.com/marcio-sgomes/portifolio',
        homepage: '',
        has_pages: true,
        topics: [],
        fork: false,
      },
      {
        id: 4,
        name: 'removedor-marca-dagua',
        description: 'PWA',
        html_url: 'https://github.com/marcio-sgomes/removedor-marca-dagua',
        homepage: 'removedor.vercel.app',
        topics: ['projeto-de-estudo', 'pwa'],
        fork: false,
      },
    ]);

    const [pages, removedor] = await obterProjetos();

    expect(pages).toMatchObject({
      descricao: 'Primeiro portfólio',
      estudo: true,
      paginaUrl: 'https://marcio-sgomes.github.io/portifolio/',
      logoUrl: null,
    });
    expect(removedor).toMatchObject({
      estudo: true,
      paginaUrl: 'https://removedor.vercel.app',
      tecnologias: ['pwa'],
    });
    expect(removedor.logoUrl).toContain('icon-192.png');
  });

  // 4. Filtro: forks, repositórios vazios e README do perfil
  it('deve ignorar forks, repositórios vazios e o repositório do perfil', async () => {
    mockFetch([
      { id: 5, name: 'fork', fork: true, html_url: '' },
      { id: 6, name: 'vazio', fork: false, size: 0, html_url: '' },
      { id: 7, name: 'marcio-sgomes', fork: false, size: 6, html_url: '' },
      { id: 8, name: 'valido', fork: false, size: 10, html_url: '' },
    ]);

    const projetos = await obterProjetos();

    expect(projetos.map((projeto) => projeto.id)).toEqual([8]);
  });

  // 5. Error Handling: Resposta não ok
  it('deve lançar um erro se a resposta da API não for ok', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({ ok: false });

    await expect(obterProjetos()).rejects.toThrow('Falha ao buscar repositórios na API do GitHub.');
  });

  // 6. A API às vezes devolve um objeto (ex.: limite de uso) com status 200
  it('deve lançar erro claro quando a resposta não for uma lista', async () => {
    mockFetch({ message: 'API rate limit exceeded' });

    await expect(obterProjetos()).rejects.toThrow('Resposta inesperada da API do GitHub.');
  });

  // 7. Homepage com espaços, maiúsculas ou só espaços
  it('deve limpar o endereço da página do repositório', async () => {
    mockFetch([
      { id: 9, name: 'com-espaco', html_url: 'x', homepage: '  meu-app.vercel.app  ', fork: false },
      { id: 10, name: 'maiusculo', html_url: 'x', homepage: 'HTTPS://APP.VERCEL.APP', fork: false },
      { id: 11, name: 'so-espaco', html_url: 'x', homepage: '   ', fork: false },
    ]);

    const [espaco, maiusculo, vazio] = await obterProjetos();

    expect(espaco.paginaUrl).toBe('https://meu-app.vercel.app');
    expect(maiusculo.paginaUrl).toBe('HTTPS://APP.VERCEL.APP');
    expect(vazio.paginaUrl).toBeNull();
  });

  // 8. GitHub que não responde: a busca é cancelada no tempo limite
  it('deve cancelar a busca quando o GitHub não responde', async () => {
    vi.useFakeTimers();
    globalThis.fetch = vi.fn(
      (_url, { signal }) =>
        new Promise((_resolve, reject) => {
          signal.addEventListener('abort', () => reject(new DOMException('Tempo esgotado', 'TimeoutError')));
        }),
    );
    const original = AbortSignal.timeout;
    AbortSignal.timeout = undefined; // simula navegador antigo, sem AbortSignal.timeout

    const busca = expect(obterProjetos()).rejects.toThrow('Tempo esgotado');
    await vi.advanceTimersByTimeAsync(TEMPO_LIMITE_MS);
    await busca;

    AbortSignal.timeout = original;
    vi.useRealTimers();
  });

  it('deve usar AbortSignal.timeout quando o navegador tem', async () => {
    const espiao = vi.spyOn(AbortSignal, 'timeout');
    mockFetch([]);

    await obterProjetos();

    expect(espiao).toHaveBeenCalledWith(TEMPO_LIMITE_MS);
    espiao.mockRestore();
  });

  // 9. Error Handling: Falha de rede
  it('deve capturar e propagar erros quando houver falha de rede', async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Erro de conexão'));

    await expect(obterProjetos()).rejects.toThrow('Erro de conexão');
  });
});
