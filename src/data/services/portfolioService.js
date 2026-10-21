import { obterProjetos as obterProjetosDoGithub } from './githubService';

// Autorais antes dos estudos; dentro de cada grupo, os mais recentes primeiro
const ordenar = (a, b) =>
  Number(a.estudo) - Number(b.estudo) || (b.atualizadoEm ?? '').localeCompare(a.atualizadoEm ?? '');

// Só os repositórios públicos. Os apps de código privado já aparecem,
// com status e descrição revisados, na seção "Projetos" (projetosDestaque).
export const obterProjetos = async () => {
  const publicos = await obterProjetosDoGithub();
  return [...publicos].sort(ordenar);
};
