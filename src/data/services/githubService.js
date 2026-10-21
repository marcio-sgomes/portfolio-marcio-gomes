import { Projeto } from '../../domain/models/Projeto';
import { logosRepositorios } from '../logosRepositorios';

const GITHUB_USER = 'marcio-sgomes';
const TOPICO_ESTUDO = 'projeto-de-estudo';
const TOPICO_EM_DESENVOLVIMENTO = 'em-desenvolvimento';
const PREFIXO_ESTUDO = /^\[Estudo\]\s*/i;
// Tópicos de controle viram selos no card, não tags de tecnologia
const TOPICOS_DE_CONTROLE = [TOPICO_ESTUDO, TOPICO_EM_DESENVOLVIMENTO];

const normalizarUrl = (url) => {
  if (!url) return null;
  return /^https?:\/\//.test(url) ? url : `https://${url}`;
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
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`);

    if (!response.ok) {
      throw new Error('Falha ao buscar repositórios na API do GitHub.');
    }

    const repos = await response.json();
    return repos.filter(deveExibir).map(mapearRepositorio);
  } catch (error) {
    console.error('Erro no githubService:', error);
    throw error; // Repassa o erro para a página tratar
  }
};
