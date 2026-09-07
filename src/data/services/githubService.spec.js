import { describe, it, expect, vi, beforeEach } from 'vitest';
import { obterProjetos } from './githubService';

describe('githubService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // 1. Happy Path
  it('deve realizar requisição e mapear corretamente os dados da API para o modelo Projeto', async () => {
    const mockRepos = [
      {
        id: 1,
        name: 'projeto-teste',
        description: 'Descrição de teste',
        html_url: 'https://github.com/marcio-sgomes/projeto-teste',
        topics: ['react', 'vite'],
        fork: false
      }
    ];

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockRepos
    });

    const projetos = await obterProjetos();

    expect(projetos).toHaveLength(1);
    expect(projetos[0]).toMatchObject({
      id: 1,
      nome: 'projeto teste',
      descricao: 'Descrição de teste',
      url: 'https://github.com/marcio-sgomes/projeto-teste',
      tecnologias: ['react', 'vite']
    });
  });

  // 2. Edge Case: Dados incompletos ou nulos (sem topics ou descrição)
  it('deve lidar com repositórios sem descrição ou tópicos sem quebrar o mapeamento', async () => {
    const mockRepos = [
      {
        id: 2,
        name: 'projeto-simples',
        description: null,
        html_url: 'https://github.com/marcio-sgomes/simples',
        topics: undefined,
        fork: false
      }
    ];

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockRepos
    });

    const projetos = await obterProjetos();

    expect(projetos[0].descricao).toBe('Sem descrição disponível.'); // <-- Ajustado aqui
    expect(projetos[0].tecnologias).toEqual(['GitHub']);
  });

  // 3. Error Handling: Resposta não ok
  it('deve lançar um erro se a resposta da API não for ok', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });

    await expect(obterProjetos()).rejects.toThrow('Falha ao buscar repositórios na API do GitHub.');
  });

  // 4. Error Handling: Falha de rede
  it('deve capturar e propagar erros quando houver falha de rede', async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Erro de conexão'));

    await expect(obterProjetos()).rejects.toThrow('Erro de conexão');
  });
});