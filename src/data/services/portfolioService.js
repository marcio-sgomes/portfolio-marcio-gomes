import { Projeto } from '../../domain/models/Projeto';
import { projetosPrivados } from '../projetosPrivados';
import { obterProjetos as obterProjetosDoGithub } from './githubService';

// Autorais antes dos estudos; dentro de cada grupo, os mais recentes primeiro
const ordenar = (a, b) =>
  Number(a.estudo) - Number(b.estudo) || (b.atualizadoEm ?? '').localeCompare(a.atualizadoEm ?? '');

export const obterProjetos = async () => {
  const publicos = await obterProjetosDoGithub();
  const privados = projetosPrivados.map(
    (projeto) => new Projeto({ ...projeto, privado: true, codigoUrl: null, tecnologias: [] }),
  );

  return [...publicos, ...privados].sort(ordenar);
};
