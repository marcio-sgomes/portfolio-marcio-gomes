// Projetos da seção "Os projetos", agrupados pela situação de cada um.
// Repositórios privados: mostrar apenas o que o projeto faz e o link da página publicada.
// Logos em /logos/*.svg foram criadas para os apps que ainda não tinham uma.

export const gruposDeProjetos = [
  {
    id: 'prontos',
    titulo: 'Prontos',
    selo: 'Pronto',
    tom: 'pronto',
    projetos: [
      {
        nome: 'Currículo Perfeito',
        categoria: 'Social · pessoas sem recursos',
        descricao:
          'Quem mais precisa de currículo muitas vezes tem celular, mas não tem internet. Defini app instalável e offline, que pede comprovação de cada emprego e avisa o que falta.',
        url: 'https://curriculo-perfeito-tan.vercel.app',
        logoUrl: 'https://curriculo-perfeito-tan.vercel.app/favicon.svg',
      },
      {
        nome: 'DG Downloader',
        categoria: 'Mídia · uso geral',
        descricao:
          'Baixar fotos, vídeos e reels das redes sociais e guardar no celular. Defini instalação por link (Android, iOS e PC), galeria separada por tipo e envio direto para o WhatsApp.',
        url: 'https://dg-downloader.vercel.app',
        logoUrl: 'https://dg-downloader.vercel.app/favicon-180x180.png',
      },
      {
        nome: 'Removedor',
        categoria: 'Imagem · uso geral',
        descricao:
          "Remover marca d'água de imagens. Defini detecção automática da marca, sem estragar a foto, em app instalável por link e com visual leve.",
        url: 'https://removedor-marca-dagua-one.vercel.app',
        logoUrl: '/logos/removedor.svg',
      },
      {
        nome: 'YouTube MP3',
        categoria: 'Áudio · PC e Android',
        descricao:
          'Buscar vídeos e converter em MP3. Defini checagem de atualização antes de cada download, porque o YouTube muda sempre, e aviso quando for demorar.',
        logoUrl: '/logos/youtube-mp3.svg',
      },
      {
        nome: 'GomesTech Entregas',
        categoria: 'Logística · motoristas de entrega',
        descricao:
          'Motoristas de rota registram as entregas, calculam ganhos, dividem valores com colegas e acompanham o lucro real, mesmo sem internet.',
        url: 'https://gomestech-gestao-de-entregas.vercel.app',
        logoUrl: 'https://gomestech-gestao-de-entregas.vercel.app/icones/icone-192.png',
      },
      {
        nome: 'Calculadora de Prazos',
        categoria: 'Jurídico · uso profissional',
        descricao: 'Calcula prazos processuais em dias úteis ou corridos, já considerando os feriados nacionais e locais.',
        url: 'https://calculadora-de-prazos-sigma.vercel.app',
        logoUrl: '/logos/calculadora-de-prazos.svg',
      },
      {
        nome: 'Jardinagem Profissional',
        categoria: 'Site · cliente',
        descricao:
          'Site de uma empresa de jardinagem do Rio de Janeiro, com apresentação dos serviços e pedido de orçamento direto pelo WhatsApp.',
        url: 'https://jardinagem-profissional.vercel.app',
        logoUrl: 'https://jardinagem-profissional.vercel.app/favicon.png',
      },
      {
        nome: 'Associação Bela Brisa',
        categoria: 'Consultoria de processos · associação comunitária',
        descricao:
          'Diagnóstico da operação, mapeamento e redesenho dos processos internos e implantação de uma metodologia de organização e acompanhamento das atividades.',
      },
    ],
  },
  {
    id: 'testes',
    titulo: 'Em testes',
    selo: 'Em testes',
    tom: 'testes',
    projetos: [
      {
        nome: 'PrismaQ',
        categoria: 'Telecom · certificação de qualidade',
        descricao:
          'A certificação de qualidade em campo era feita em papel. Defini checklist digital com nota automática, fotos com data e local, conferência de material e retorno com prazo de 7 dias.',
        nota: 'Ideia de 2019, da minha experiência na Procisa. Desenvolvido em 2026.',
        url: 'https://prismaq-flax.vercel.app',
        logoUrl: 'https://prismaq-flax.vercel.app/icons/icone.svg',
      },
      {
        nome: 'Mesadinha Familiar',
        categoria: 'Família · uso próprio',
        descricao:
          'Tarefas da casa que compõem a mesada das crianças. Defini aprovação dos pais com foto de antes e depois, regras de comportamento sempre visíveis, bônus com teto e aviso para todos quando uma tarefa é concluída.',
        url: 'https://mesadinha-familiar.vercel.app',
        logoUrl: 'https://mesadinha-familiar.vercel.app/favicon.svg',
      },
      {
        nome: 'LinkDrive Beta',
        categoria: 'Transporte · motoristas particulares',
        descricao:
          'Motoristas montam orçamento e agenda no improviso. Defini orçamento pronto para o WhatsApp, lembretes com o app fechado e painel em que motorista é desativado, nunca apagado.',
        url: 'https://linkdrive-beta.vercel.app',
        logoUrl: 'https://linkdrive-beta.vercel.app/icon.svg',
      },
      {
        nome: 'winXP',
        categoria: 'Windows · uso próprio',
        descricao:
          'A aparência e os sons do Windows XP em qualquer Windows, sem mexer nas funções. Defini segurança primeiro: ponto de restauração automático e reverter tudo com um clique.',
        logoUrl: '/logos/winxp.svg',
      },
    ],
  },
  {
    id: 'desenvolvimento',
    titulo: 'Em desenvolvimento',
    selo: 'Em desenvolvimento',
    tom: 'desenvolvimento',
    projetos: [
      {
        nome: 'Compra Inteligente',
        categoria: 'Consumo · uso geral',
        descricao:
          'Comparar encartes de vários mercados à mão toma tempo. Defini leitura do encarte inteiro por IA, o mercado de melhor custo-benefício com o porquê e lista para conferir o total antes de pagar.',
        nota: 'Código privado · meta de 100% de testes',
        logoUrl: '/logos/compra-inteligente.svg',
      },
      {
        nome: 'Sintonia',
        categoria: 'Relacionamento · casais',
        descricao:
          'App para casais se comunicarem pelas 5 linguagens do amor, com brincadeiras. Defini um app único para público geral e cristão, com fé leve, área de administração e etapa de testes antes de cada versão.',
        url: 'https://sintonia-eta.vercel.app',
        logoUrl: 'https://sintonia-eta.vercel.app/icons/icone.svg',
      },
      {
        nome: 'GomesTech Admin',
        categoria: 'Gestão · uso próprio',
        descricao:
          'Mais de 40 projetos espalhados. Defini um único painel com todos eles, kanban de problemas, e-mails corporativos gratuitos e avisos para colaboradores.',
        logoUrl: '/logos/gomestech-admin.svg',
      },
      {
        nome: 'Gestor de Contas',
        categoria: 'Organização · uso próprio',
        descricao:
          'Muitas contas de e-mail, cada uma ligada a um serviço. Defini um mapa de cada conta e onde ela está conectada, com alertas, na web e no PC.',
        logoUrl: '/logos/gestor-de-contas.svg',
      },
      {
        nome: 'Nebulosa Geek',
        categoria: 'Loja virtual · streetwear',
        descricao: 'Loja virtual de streetwear geek com visual cyberpunk, pensada para ser acessível a todos.',
        url: 'https://nebulosa-geek.vercel.app',
        logoUrl: '/logos/nebulosa-geek.svg',
      },
    ],
  },
  {
    id: 'planejamento',
    titulo: 'Em planejamento',
    selo: 'Planejamento',
    tom: 'planejamento',
    projetos: [
      {
        nome: 'Plataforma Ascanius',
        categoria: 'Meio ambiente · cliente',
        descricao:
          'Pedidos de manejo de fauna e controle de pragas. Planejei a plataforma a partir dos requisitos da cliente: custo zero no início, segurança e conversa direta com o cliente.',
      },
    ],
  },
];

export const todosOsProjetos = () => gruposDeProjetos.flatMap((grupo) => grupo.projetos);
