import { Projeto } from '../../domain/models/Projeto';

const projetosMock = [
  new Projeto(
    1, 
    'GomesTech', 
    'Landing page e sistema de serviços de consultoria em TI para microempreendedores.', 
    'https://github.com/seu-usuario/gomestech', 
    ['React', 'Vite', 'Clean Architecture']
  ),
  new Projeto(
    2, 
    'Portal RH - Bela Brisa', 
    'Plataforma de consultoria em Recursos Humanos e gestão de entrevistas para associação comunitária.', 
    'https://github.com/seu-usuario/portal-rh', 
    ['JavaScript', 'HTML', 'CSS']
  ),
  new Projeto(
    3, 
    'Catálogo Vintage Bootleg', 
    'E-commerce focado em coleções de vestuário com temática histórica de 1987 e 1990.', 
    'https://github.com/seu-usuario/vintage-store', 
    ['React', 'CSS Modules']
  )
];

export const obterProjetosMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projetosMock);
    }, 1500);
  });
};