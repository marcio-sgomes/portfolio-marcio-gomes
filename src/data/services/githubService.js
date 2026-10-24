import { Projeto } from '../../domain/models/Projeto';
import { logosRepositorios } from '../logosRepositorios';

const GITHUB_USER = 'marcio-sgomes';
const TOPICO_ESTUDO = 'projeto-de-estudo';
const TOPICO_EM_DESENVOLVIMENTO = 'em-desenvolvimento';
const PREFIXO_ESTUDO = /^\[Estudo\]\s*/i;
// Tópicos de controle viram selos no card, não tags de tecnologia
const TOPICOS_DE_CONTROLE = [TOPICO_ESTUDO, TOPICO_EM_DESENVOLVIMENTO];

// Se a API do GitHub não responder nesse tempo, a página mostra o aviso em vez de ficar carregando
export const TEMPO_LIMITE_MS = 10000;

// AbortSignal.timeout não existe em navegadores antigos (ex.: iPhone com iOS 15); ali o limite é feito à mão
const sinalComTempoLimite = (ms) => {
  if (typeof AbortSignal.timeout === 'function') return AbortSignal.timeout(ms);
  const controle = new AbortController();
  setTimeout(() => controle.abort(), ms);
  return controle.signal;
};

const normalizarUrl = (url) => {
  const endereco = url?.trim();
  if (!endereco) return null;
  return /^https?:\/\//i.test(endereco) ? endereco : `https://${endereco}`;
};

const paginaDoRepositorio = (repo) =>
  normalizarUrl(repo.homepage) || (repo.has_pages ? `https://${GITHUB_USER}.github.io/${repo.name}/` : null);

// Ignora forks, repositórios vazios (size 0) e o repositório de README do perfil
const deveExibir = (repo) => !repo.fork && repo.size !== 0 && repo.name !== GITHUB_USER;

export const mapearRepositorio = (repo) => {
  const topicos = repo.topics ?? [];
  const tecnologias = topicos.filter((topico) => !TOPICOS_DE_CONTROLE.includes(topico));

  return new Projeto({
    id: repo.id,
    nome: repo.name.replace(/-/g, ' ').trim(),
    descricao: repo.description ? repo.description.replace(PREFIXO_ESTUDO, '') : 'Sem descrição disponível.',
    codigoUrl: repo.html_url,
    paginaUrl: paginaDoRepositorio(repo),
    tecnologias: tecnologias.length > 0 ? tecnologias : ['GitHub'],
    logoUrl: logosRepositorios[repo.name] ?? null,
    estudo: topicos.includes(TOPICO_ESTUDO) || PREFIXO_ESTUDO.test(repo.description ?? ''),
    emDesenvolvimento: topicos.includes(TOPICO_EM_DESENVOLVIMENTO),
    atualizadoEm: repo.pushed_at ?? null,
  });
};

export const obterProjetos = async () => {
  try {
    // per_page=100: o padrão da API é 30 e cortava parte dos repositórios
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`, {
      signal: sinalComTempoLimite(TEMPO_LIMITE_MS),
    });

    if (!response.ok) {
      throw new Error('Falha ao buscar repositórios na API do GitHub.');
    }

    const repos = await response.json();
    // A API devolve um objeto (ex.: { message }) em vez da lista quando algo dá errado
    if (!Array.isArray(repos)) {
      throw new Error('Resposta inesperada da API do GitHub.');
    }
    return repos.filter(deveExibir).map(mapearRepositorio);
  } catch (error) {
    console.error('Erro no githubService:', error);
    throw error; // Repassa o erro para a página tratar
  }
};
