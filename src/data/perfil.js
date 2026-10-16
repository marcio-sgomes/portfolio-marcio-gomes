// Conteúdo do portfólio centralizado: altere textos, links e foto apenas aqui.

export const perfil = {
  nome: 'Márcio Gomes',
  nomeCompleto: 'Márcio dos Santos Gomes',
  iniciais: 'MG',
  cargo: 'Gestor de Projetos & Desenvolvedor de Software',
  // Coloque sua foto em public/foto-perfil.jpg (retrato vertical, mínimo 1000px de altura).
  foto: '/foto-perfil.jpg',
  chamada: 'Transformo estratégia em produto entregue.',
  resumo:
    'Uno a visão de gestor à precisão de quem escreve o código. Conduzo projetos do planejamento ao deploy: defino escopo, organizo o time em ciclos curtos e garanto que cada entrega tenha qualidade técnica, prazo cumprido e propósito de negócio.',

  caracteristicas: [
    {
      titulo: 'Liderança ponta a ponta',
      descricao: 'Do PRD e do roadmap até a entrega em produção, com visibilidade para todos os envolvidos.',
    },
    {
      titulo: 'Gestão ágil',
      descricao: 'Sprints, backlog priorizado, User Stories e quadros Kanban com métricas de andamento.',
    },
    {
      titulo: 'Engenharia de qualidade',
      descricao: 'Clean Architecture, SOLID, testes automatizados e CI/CD em cada Pull Request.',
    },
    {
      titulo: 'Ponte entre negócio e tecnologia',
      descricao: 'Traduzo objetivos em requisitos claros e decisões técnicas em linguagem de negócio.',
    },
  ],

  sobre: [
    'Sou Márcio dos Santos Gomes e atuo na interseção entre gestão de projetos e desenvolvimento de software. Acredito que bons projetos nascem de objetivos claros, avançam com cadência previsível e só terminam quando geram valor real para quem vai usá-los.',
    'Na prática, isso significa assumir a responsabilidade pelo todo: entender o problema junto aos stakeholders, transformar a visão em documento de produto e roadmap, organizar o trabalho em sprints e acompanhar cada entrega até a produção. Quando é hora de construir, coloco a mão no código com o mesmo rigor: arquitetura em camadas, testes automatizados e pipeline de integração contínua.',
    'Esse duplo olhar reduz o ruído entre as áreas, acelera decisões e oferece ao cliente algo raro: um único responsável que entende tanto o cronograma quanto o Pull Request.',
  ],
  citacao: 'Gestão sem execução é intenção. Execução sem gestão é sorte. Meu trabalho é unir as duas.',

  destaques: [
    { valor: '3', rotulo: 'sprints planejadas e entregues na construção deste portfólio' },
    { valor: '97%', rotulo: 'de cobertura mínima de testes exigida no pipeline' },
    { valor: '100%', rotulo: 'dos Pull Requests validados por CI: lint, testes e build' },
  ],

  competencias: [
    {
      titulo: 'Gestão de Projetos',
      resumo: 'Planejamento, execução e controle com foco em previsibilidade.',
      itens: [
        'PRD, roadmap e definição de escopo',
        'Scrum, Kanban e cerimônias ágeis',
        'Backlog, User Stories e critérios de aceite',
        'Gestão de stakeholders e riscos',
        'GitHub Projects, milestones e indicadores',
      ],
    },
    {
      titulo: 'Desenvolvimento de Software',
      resumo: 'Aplicações web modernas, modulares e fáceis de manter.',
      itens: [
        'React, JavaScript e Vite',
        'Clean Architecture e princípios SOLID',
        'Integração com APIs REST',
        'Testes com Vitest e Testing Library',
        'CSS Modules e Design Tokens',
      ],
    },
    {
      titulo: 'Governança & Entrega',
      resumo: 'Processos que garantem qualidade a cada versão.',
      itens: [
        'CI/CD com GitHub Actions',
        'Deploy contínuo na Vercel',
        'Conventional Commits e fluxo de branches',
        'Code review com checklist de PR',
        'Documentação técnica e de produto',
      ],
    },
  ],

  formacao: [
    {
      nivel: 'Pós-graduação',
      curso: 'Gestão de Projetos Ágeis',
      instituicao: 'Faveni',
      descricao:
        'Especialização em frameworks ágeis, planejamento adaptativo e liderança de times orientados a valor, base da forma como conduzo cada projeto.',
    },
    {
      nivel: 'Graduação',
      curso: 'Análise e Desenvolvimento de Sistemas',
      instituicao: 'Estácio',
      descricao:
        'Fundamentos de engenharia de software, modelagem de sistemas, banco de dados e programação que sustentam minhas decisões técnicas.',
    },
  ],

  cases: [
    {
      cliente: 'Associação Comunitária Bela Brisa',
      tipo: 'Consultoria de processos',
      resumo:
        'Estruturação dos processos da associação a partir de um diagnóstico da operação: identificação dos gargalos, desenho de fluxos de trabalho mais claros e implementação de metodologias de organização e acompanhamento das atividades.',
      entregas: [
        'Diagnóstico dos problemas e prioridades da operação',
        'Mapeamento e redesenho dos processos internos',
        'Implementação de metodologia de gestão e acompanhamento',
      ],
    },
    {
      cliente: 'Este portfólio',
      tipo: 'Produto digital ponta a ponta',
      resumo:
        'Meta-portfólio gerido como um produto real: PRD e roadmap documentados, User Stories no GitHub Projects, sprints com milestones e uma aplicação React com Clean Architecture, testes e deploy contínuo.',
      entregas: [
        'PRD, roadmap e backlog organizados em sprints',
        'Aplicação React integrada à API do GitHub',
        'Pipeline de CI com lint, testes e build a cada PR',
      ],
      link: { rotulo: 'Ver documentação do produto', url: 'https://github.com/marcio-sgomes/portfolio-tech' },
    },
  ],

  metodo: [
    {
      titulo: 'Diagnóstico',
      descricao: 'Escuto o negócio e mapeio objetivos, restrições e riscos antes de qualquer linha de código.',
    },
    {
      titulo: 'Planejamento',
      descricao: 'Consolido o escopo em um PRD e defino roadmap, milestones e critérios de aceite mensuráveis.',
    },
    {
      titulo: 'Execução',
      descricao: 'Sprints curtas, backlog priorizado e código revisado, testado e integrado continuamente.',
    },
    {
      titulo: 'Entrega e evolução',
      descricao: 'Deploy automatizado, acompanhamento dos resultados e melhoria contínua com base em dados.',
    },
  ],

  contatos: [
    {
      id: 'linkedin',
      rotulo: 'LinkedIn',
      valor: 'in/marciogomesdev',
      url: 'https://www.linkedin.com/in/marciogomesdev',
      chamada: 'Trajetória e recomendações',
    },
    {
      id: 'github',
      rotulo: 'GitHub',
      valor: 'marcio-sgomes',
      url: 'https://github.com/marcio-sgomes',
      chamada: 'Código, projetos e contribuições',
    },
    {
      id: 'email',
      rotulo: 'E-mail',
      valor: 'contatovazrodrigues@gmail.com',
      url: 'mailto:contatovazrodrigues@gmail.com',
      chamada: 'Propostas e oportunidades',
    },
  ],
};

export const contatoPorId = (id) => perfil.contatos.find((contato) => contato.id === id);
