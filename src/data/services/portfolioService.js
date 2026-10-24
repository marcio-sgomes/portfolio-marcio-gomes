import { obterProjetos as obterProjetosDoGithub } from './githubService';
import { repositoriosEmDestaque } from '../projetosDestaque';

// Autorais antes dos estudos; dentro de cada grupo, os mais recentes primeiro
const ordenar = (a, b) =>
  Number(a.estudo) - Number(b.estudo) || (b.atualizadoEm ?? '').localeCompare(a.atualizadoEm ?? '');

// Só os repositórios públicos. Os apps de código privado já aparecem,
// com status e descrição revisados, na seção "Projetos" (projetosDestaque).
// Os públicos que já estão na seção "Projetos" (ex.: GomesTech Otimizador) não se repetem aqui.
export const obterProjetos = async () => {
  const publicos = await obterProjetosDoGithub();
  const emDestaque = repositoriosEmDestaque();
  const jaNaSecao = (projeto) => emDestaque.some((nome) => projeto.codigoUrl?.endsWith(`/${nome}`));
  return publicos.filter((projeto) => !jaNaSecao(projeto)).sort(ordenar);
};
