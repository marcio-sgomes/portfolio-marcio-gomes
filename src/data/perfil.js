// Conteúdo do portfólio centralizado: altere textos, links e foto apenas aqui.

export const perfil = {
  nome: 'Márcio Gomes',
  nomeCompleto: 'Márcio dos Santos Gomes',
  iniciais: 'MG',
  cargo: 'Tecnologia e operações',
  foto: '/foto-perfil.jpg',
  curriculo: '/curriculo-marcio-gomes.pdf',

  manchete: {
    rotulo: 'Perfil · Tecnologia e operações',
    titulo: 'Do campo à tecnologia: transformo necessidades em produtos que funcionam.',
    linhaFina:
      'Antes de idealizar aplicativos, Márcio Gomes passou 12 anos na ponta da operação, entre redes de telecom, estoque e certificação de qualidade. É de lá que vêm as ideias dos seus projetos.',
    local: 'Rio de Janeiro',
    atualizacao: 'Atualizado em outubro de 2026',
    legendaFoto:
      'Márcio Gomes foi técnico de instalação, VT, certificação de qualidade e retorno de credenciada na Procisa do Brasil, na operação NET/Claro, entre 2019 e 2021.',
  },

  // Cada capítulo da matéria. Um parágrafo pode ser texto simples ou { destaque, texto }.
  historia: [
    {
      paragrafos: [
        'Márcio Gomes aprendeu tecnologia de fora para dentro. Antes de escrever a primeira linha de código, passou anos na rua, em redes de telecom, separando material para técnicos, vistoriando instalações e corrigindo o que tinha ficado errado na casa do cliente. Essa ordem, primeiro a operação e depois o sistema, explica quase tudo o que ele faz hoje.',
      ],
    },
    {
      titulo: 'Disciplina antes de tudo',
      paragrafos: [
        'A carreira começou em 2009, na Força Aérea Brasileira, como bombeiro de aeródromo. Foram quatro anos de protocolo, treino e decisão sob pressão. Em seguida veio a rua: entre 2014 e 2016, trabalhou como cabista na manutenção de redes da Oi, pela Telemont/Serede, e fez inventários por contrato na Ivallis.',
      ],
    },
    {
      titulo: 'Do ajudante ao chefe de estoque',
      paragrafos: [
        'Na R. Bockmann, na operação SKY, entre 2017 e 2018, entrou como técnico ajudante e foi promovido três vezes, até chefe de estoque. Cuidava da triagem de equipamentos danificados e recondicionados, lia as ordens de serviço para separar o material de cada técnico e conduzia os inventários.',
      ],
    },
    {
      titulo: 'A escola da qualidade',
      paragrafos: [
        'Na Procisa do Brasil, na operação NET/Claro, Márcio acumulou quatro funções entre 2019 e 2021:',
        { destaque: 'Instalação e visita técnica.', texto: 'Instalações residenciais de TV e internet e atendimento de chamados.' },
        {
          destaque: 'Certificação de qualidade.',
          texto:
            'Vistoria das instalações endereço por endereço, com OS, cliente, técnico e fotos de antes e depois, além da conferência de material para identificar fraude.',
        },
        {
          destaque: 'Retorno de credenciada.',
          texto:
            'Correção de falhas técnicas ou de sistema dentro do prazo da instalação, protegendo os indicadores do técnico e da empresa.',
        },
        {
          destaque: 'Formação.',
          texto:
            'Os técnicos recém-formados que iam para a Zona Oeste faziam dupla com ele: acompanhava o serviço, anotava os pontos e mostrava como fazer.',
        },
      ],
      citacao: 'Eu acompanhava o serviço deles, ia anotando os pontos e depois mostrava como deve ser feito.',
      fechamento: 'Tudo era feito em papel. A ideia de um aplicativo para esse trabalho nasceu ali, em 2019, e virou o PrismaQ em 2026.',
    },
    {
      titulo: 'A virada para o software',
      paragrafos: [
        'Em 2021, Márcio fez a formação de seis meses da Recode e começou os cursos da Cubos Academy e da DIO, que segue fazendo até hoje. Em 2022, antes mesmo de terminar a faculdade de Análise e Desenvolvimento de Sistemas, entrou na ESX/DevLand como desenvolvedor, e não ficou em uma frente só.',
        'Começou com Flutter e Firebase no projeto da BoutSex e seguiu com Flutter e .NET no Conecta Fé. Na SulAmérica Seguros, trabalhou com Spring Boot (Java) e AngularJS. Depois fez a sustentação da Genial Investimentos e, no novo projeto da empresa, a Genial Solar, atuou no front-end em React. Nos projetos seguintes, mais curtos, usou Ionic e Blazor (C#), e participou de um projeto interno: um jogo de batalha naval em C#, com partes em Python, integrado aos sistemas de outros times.',
      ],
      quadro: {
        titulo: 'As frentes na DevLand · 2022 – 2025',
        linhas: [
          ['BoutSex', 'Flutter e Firebase'],
          ['Conecta Fé', 'Flutter e .NET'],
          ['SulAmérica Seguros', 'Spring Boot (Java) e AngularJS'],
          ['Genial Investimentos', 'Sustentação'],
          ['Genial Solar', 'Front-end em React'],
          ['Projetos curtos', 'Ionic e Blazor (C#)'],
          ['Projeto interno', 'Batalha naval em C# e Python'],
        ],
      },
      fechamento:
        'Em todo o período trabalhou em ciclo ágil, com Jira e Azure DevOps, e fez suporte N1 e N2 com SQL. Em 2025, concluiu a pós em Gestão de Projetos e Métodos Ágeis.',
    },
    {
      titulo: 'Hoje: GomesTech',
      paragrafos: [
        'Desde 2025, Márcio se dedica a projetos próprios sob o nome GomesTech. São mais de 40, entre prontos, em testes, em desenvolvimento e em planejamento. O método é sempre o mesmo: entender o problema, para quem ele existe e por quê; definir o que o produto precisa fazer; entregar em partes; e validar com quem vai usar. A IA entra como ferramenta de construção. O que entra e o que fica de fora é decisão dele.',
      ],
    },
  ],

  raioX: [
    { rotulo: 'Em campo', valores: ['2009 – 2021 · FAB, telecom e estoque'] },
    { rotulo: 'Em software', valores: ['Desde 2022 · Flutter, .NET, Java, Angular, React, Ionic, Blazor, C# e Python'] },
    {
      rotulo: 'Formação',
      valores: [
        'Análise e Desenvolvimento de Sistemas · Estácio, 2023',
        'Pós em Gestão de Projetos e Métodos Ágeis · FAVENI, 2025',
      ],
    },
    { rotulo: 'Projetos', valores: ['Mais de 40'] },
    { rotulo: 'Procura', valores: ['Vagas em requisitos, implantação, qualidade e projetos'] },
  ],

  competencias: [
    {
      titulo: 'Pontos fortes',
      tom: 'dourado',
      itens: [
        'Entender o problema antes da solução: por quê, para quê e para quem',
        'Transformar uma ideia em definição clara do que o produto faz',
        'Investigar falhas com método, passo a passo, com logs e conversa com o usuário',
        'Operação de campo em telecom: instalação, VT, certificação de qualidade e retorno',
        'Estoque e inventário: triagem, separação por OS e controle',
        'Treinar e acompanhar técnicos em campo',
      ],
    },
    {
      titulo: 'Ferramentas do dia a dia',
      tom: 'azul',
      itens: [
        'Projetos com Flutter, Firebase, .NET, Spring Boot (Java), AngularJS, React, Ionic, Blazor, C# e Python',
        'React e TypeScript nos projetos próprios, com IA como ferramenta de construção',
        'Git em equipe: branches, commits, homologação e publicação na Vercel',
        'Scrum e Kanban, com Jira, Azure DevOps e GitHub Projects',
        'Suporte N1 e N2, com consultas em SQL',
        'Banco de dados e notificações com Supabase e Firebase',
      ],
    },
    {
      titulo: 'Em aperfeiçoamento',
      tom: 'verde',
      itens: [
        'Clean Architecture e Clean Code',
        'Design System e Design Patterns',
        'LLMs e Machine Learning',
        'Lógica de programação e integração de APIs, para codar com cada vez mais autonomia',
        'Histórias de usuário e critérios de aceite no formato Dado / Quando / Então',
      ],
    },
  ],

  encaixe: {
    introducao:
      'Gosto de ter a ideia, definir e ver ficar pronto. Prefiro um problema aberto a uma tarefa já mastigada. Em até 3 anos quero estar gerindo e idealizando projetos.',
    linhas: [
      { area: 'Analista de Requisitos / Negócios júnior', nivel: 'Alto', tom: 'alto', porque: 'Meu ponto mais forte é transformar necessidade em definição.' },
      {
        area: 'Qualidade e operações técnicas em telecom',
        nivel: 'Alto',
        tom: 'alto',
        porque: 'Fiz certificação de qualidade, retorno e formação de técnicos, e conheço o processo por dentro.',
      },
      {
        area: 'Analista de Implantação / Suporte N2',
        nivel: 'Alto',
        tom: 'alto',
        porque: 'Método de investigação sólido, mais a vivência de técnico e de suporte N1/N2.',
      },
      {
        area: 'Analista de Projetos / PMO júnior',
        nivel: 'Médio-alto',
        tom: 'medio',
        porque: 'Bom com pessoas e processo, com pós em Gestão Ágil. Aperfeiçoando priorização e planejamento.',
      },
      {
        area: 'Automação com IA / low-code',
        nivel: 'Médio',
        tom: 'medio',
        porque: 'Especifico bem o que a IA precisa fazer, e essas ferramentas pedem menos código.',
      },
      {
        area: 'Desenvolvedor Front-End / Full Stack júnior',
        nivel: 'Em evolução',
        tom: 'evolucao',
        porque:
          'Passagem por várias stacks em consultoria, Git e publicação sólidos; aperfeiçoando a lógica para programar com mais autonomia.',
      },
    ],
    proximoPasso: 'Product Owner ou Gestão de Projetos, em 1 a 3 anos.',
  },

  // Empresas e clientes do letreiro do rodapé. Logos oficiais, na cor do texto do site;
  // quem não tem arquivo em public/empresas aparece pelo nome.
  empresas: [
    { nome: 'Força Aérea Brasileira', logo: '/empresas/fab.png' },
    { nome: 'Telemont', logo: '/empresas/telemont.png' },
    { nome: 'Serede', logo: '/empresas/serede.png' },
    { nome: 'Ivallis', logo: '/empresas/ivalis.png' },
    { nome: 'R. Bockmann' },
    { nome: 'SKY', logo: '/empresas/sky.png' },
    { nome: 'Procisa do Brasil', logo: '/empresas/procisa.png' },
    { nome: 'NET/Claro', logo: '/empresas/claro.png' },
    { nome: 'ESX', logo: '/empresas/esx.png' },
    { nome: 'DevLand', logo: '/empresas/devland.png' },
    { nome: 'BoutSex', logo: '/empresas/boutsex.png' },
    { nome: 'Conecta Fé' },
    { nome: 'SulAmérica Seguros', logo: '/empresas/sulamerica.png' },
    { nome: 'Genial Investimentos', logo: '/empresas/genial-investimentos.png' },
    { nome: 'Genial Solar', logo: '/empresas/genial-solar.png' },
  ],

  contatos: [
    {
      id: 'email',
      rotulo: 'E-mail',
      valor: 'marcio.sant.gomes@gmail.com',
      url: 'mailto:marcio.sant.gomes@gmail.com',
    },
    {
      id: 'whatsapp',
      rotulo: 'WhatsApp',
      valor: '(21) 97560-4306',
      url: 'https://wa.me/5521975604306',
    },
    {
      id: 'linkedin',
      rotulo: 'LinkedIn',
      valor: 'in/marciogomesdev',
      url: 'https://www.linkedin.com/in/marciogomesdev',
    },
    {
      id: 'github',
      rotulo: 'GitHub',
      valor: 'marcio-sgomes',
      url: 'https://github.com/marcio-sgomes',
    },
  ],
};

export const contatoPorId = (id) => perfil.contatos.find((contato) => contato.id === id);

// Links externos abrem em nova aba; e-mail abre no aplicativo de e-mail.
export const atributosDoLink = (contato) =>
  contato.id === 'email' ? {} : { target: '_blank', rel: 'noopener noreferrer' };
