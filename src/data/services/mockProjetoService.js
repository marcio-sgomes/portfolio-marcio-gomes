import { Projeto } from '../../domain/models/Projeto';

const mockProjetos = [
  {
    id: 1,
    nome: 'GomesTech - Consultoria Corporativa',
    descricao: 'Sistema e landing page para serviços de consultoria tecnológica, gestão de projetos e metodologias ágeis.',
    url: 'https://github.com/marcio-sgomes/gomestech-consultoria',
    tecnologias: ['React', 'CSS Modules', 'JavaScript']
  },
  {
    id: 2,
    nome: 'Portal RH - Associação Bela Brisa',
    descricao: 'Plataforma para gestão de formulários de entrevista e mapeamento de situação-problema.',
    url: 'https://github.com/marcio-sgomes/rh-bela-brisa',
    tecnologias: ['Vite', 'Clean Architecture', 'HTML']
  },
  {
    id: 3,
    nome: 'Catálogo Vintage Apparel 1987',
    descricao: 'Catálogo interativo para exposição de conceitos de vestuário histórico e bootleg.',
    url: 'https://github.com/marcio-sgomes/vintage-apparel',
    tecnologias: ['React', 'Design Tokens']
  }
];

export const obterProjetosMock = () => {
  return new Promise((resolve) => {
    // Simula o atraso de uma requisição de rede (1.5 segundos)
    setTimeout(() => {
      // Mapeia o objeto bruto do mock para a nossa Entidade de Domínio protegida
      const projetosDomain = mockProjetos.map((projeto) => new Projeto(projeto));
      resolve(projetosDomain);
    }, 1500);
  });
};