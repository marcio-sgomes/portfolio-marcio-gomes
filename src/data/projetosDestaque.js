// Projetos da seção "Projetos", agrupados pela situação de cada um.
// Repositórios privados: mostrar apenas o que o projeto faz e o link da página publicada.
// Logos em /logos/*.svg foram criadas para os apps que ainda não tinham uma.

// Situação de cada projeto: dá o selo e a cor do cartão
export const situacoes = {
  pronto: { selo: 'Pronto', tom: 'pronto' },
  testes: { selo: 'Em testes', tom: 'testes' },
  desenvolvimento: { selo: 'Em desenvolvimento', tom: 'desenvolvimento' },
  planejamento: { selo: 'Planejamento', tom: 'planejamento' },
};

export const gruposDeProjetos = [
  {
    id: 'prontos',
    titulo: 'Prontos',
    selo: 'Pronto',
    tom: 'pronto',
    projetos: [
      {
        nome: 'Currículo Perfeito',
        slogan: 'Seu currículo pronto, mesmo sem internet.',
        categoria: 'Social · pessoas sem recursos',
        descricao:
          'Quem mais precisa de currículo muitas vezes tem celular, mas não tem internet. Defini app instalável e offline, que pede comprovação de cada emprego e avisa o que falta.',
        url: 'https://curriculo-perfeito-tan.vercel.app',
        logoUrl: 'https://curriculo-perfeito-tan.vercel.app/favicon.svg',
      },
      {
        nome: 'DG Downloader',
        slogan: 'Salve o que você ama das redes.',
        categoria: 'Mídia · uso geral',
        descricao:
          'Baixar fotos, vídeos e reels das redes sociais e guardar no celular. Defini instalação por link (Android, iOS e PC), galeria separada por tipo e envio direto para o WhatsApp.',
        url: 'https://dg-downloader.vercel.app',
        logoUrl: 'https://dg-downloader.vercel.app/favicon-180x180.png',
      },
      {
        nome: 'Removedor',
        slogan: 'Sua imagem limpa, sem marca d\'água.',
        categoria: 'Imagem · uso geral',
        descricao:
          "Remover marca d'água de imagens. Defini detecção automática da marca, sem estragar a foto, em app instalável por link e com visual leve.",
        url: 'https://removedor-marca-dagua-one.vercel.app',
        logoUrl: '/logos/removedor.svg',
      },
      {
        nome: 'YouTube MP3',
        slogan: 'Do vídeo à música em um toque.',
        categoria: 'Áudio · PC e Android',
        descricao:
          'Buscar vídeos e converter em MP3. Defini checagem de atualização antes de cada download, porque o YouTube muda sempre, e aviso quando for demorar.',
        logoUrl: '/logos/youtube-mp3.svg',
      },
      {
        nome: 'GomesTech Entregas',
        slogan: 'Cada rota com o lucro real.',
        categoria: 'Logística · motoristas de entrega',
        descricao:
          'Motoristas de rota registram as entregas, calculam ganhos, dividem valores com colegas e acompanham o lucro real, mesmo sem internet.',
        url: 'https://gomestech-gestao-de-entregas.vercel.app',
        logoUrl: 'https://gomestech-gestao-de-entregas.vercel.app/icones/icone-192.png',
      },
      {
        nome: 'Calculadora de Prazos',
        slogan: 'Prazos certos, sem conta de cabeça.',
        categoria: 'Jurídico · uso profissional',
        descricao: 'Calcula prazos processuais em dias úteis ou corridos, já considerando os feriados nacionais e locais.',
        url: 'https://calculadora-de-prazos-sigma.vercel.app',
        logoUrl: '/logos/calculadora-de-prazos.svg',
      },
      {
        nome: 'Jardinagem Profissional',
        slogan: 'Seu jardim em boas mãos.',
        categoria: 'Site · cliente',
        descricao:
          'Site de uma empresa de jardinagem do Rio de Janeiro, com apresentação dos serviços e pedido de orçamento direto pelo WhatsApp.',
        url: 'https://jardinagem-profissional.vercel.app',
        logoUrl: 'https://jardinagem-profissional.vercel.app/favicon.png',
      },
      {
        nome: 'Associação Bela Brisa',
        slogan: 'Processos organizados, comunidade mais forte.',
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
        slogan: 'Qualidade de campo, sem papel.',
        categoria: 'Telecom · certificação de qualidade',
        descricao:
          'A certificação de qualidade em campo era feita em papel. Defini checklist digital com nota automática, fotos com data e local, conferência de material e retorno com prazo de 7 dias.',
        nota: 'Ideia de 2019, da minha experiência na Procisa. Desenvolvido em 2026.',
        url: 'https://prismaq-flax.vercel.app',
        logoUrl: 'https://prismaq-flax.vercel.app/icons/icone.svg',
      },
      {
        nome: 'Mesadinha Familiar',
        slogan: 'Tarefa feita, cofrinho cheio!',
        categoria: 'Família · uso próprio',
        descricao:
          'Tarefas da casa que compõem a mesada das crianças. Defini aprovação dos pais com foto de antes e depois, regras de comportamento sempre visíveis, bônus com teto e aviso para todos quando uma tarefa é concluída.',
        url: 'https://mesadinha-familiar.vercel.app',
        logoUrl: 'https://mesadinha-familiar.vercel.app/favicon.svg',
      },
      {
        nome: 'LinkDrive Beta',
        slogan: 'O motorista no controle da agenda.',
        categoria: 'Transporte · motoristas particulares',
        descricao:
          'Motoristas montam orçamento e agenda no improviso. Defini orçamento pronto para o WhatsApp, lembretes com o app fechado e painel em que motorista é desativado, nunca apagado.',
        url: 'https://linkdrive-beta.vercel.app',
        logoUrl: 'https://linkdrive-beta.vercel.app/icon.svg',
      },
      {
        nome: 'Máscara XP',
        slogan: 'O visual clássico no Windows de hoje.',
        categoria: 'Windows 7 a 11 · uso próprio',
        descricao:
          'A aparência e os sons do Windows XP no Windows de hoje, sem mexer nas funções: botão e menu Iniciar, telas de boas-vindas e de desligar com som e proteção de tela. Defini segurança primeiro: ponto de restauração automático e volta ao Windows normal com um clique.',
        nota: 'Programa para Windows · em uso no meu PC',
        logoUrl: '/logos/winxp.svg',
      },
      {
        nome: 'Guia Solar',
        slogan: 'Do telhado ao inversor, sem esquecer nada.',
        categoria: 'Energia solar · instaladores iniciantes',
        descricao:
          'Quem termina o curso de energia solar esquece contas e regras na hora de instalar. Defini guia passo a passo on-grid e off-grid, cálculo de material, orçamento na hora, planta de ligação e cada conta explicada.',
        nota: 'Funciona sem internet · Android, iPhone e PC',
        url: 'https://guia-solar-seven.vercel.app',
        logoUrl: 'https://guia-solar-seven.vercel.app/icone.svg',
      },
      {
        nome: 'GomesTech Otimizador',
        slogan: 'Celular mais leve, sem promessa falsa.',
        categoria: 'Android · todas as marcas',
        descricao:
          'Apps de limpeza prometem o que o Android não deixa fazer. Defini só o que funciona de verdade: nota de saúde, caches, apps esquecidos, arquivos grandes e bateria, com o caminho certo em cada marca e sem anúncios.',
        nota: 'Código aberto · Android 7 em diante',
        url: 'https://github.com/marcio-sgomes/gomestech-otimizador/releases/latest',
        rotuloLink: 'Baixar o APK',
        repositorio: 'gomestech-otimizador',
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
        slogan: 'O mercado certo para a sua lista.',
        categoria: 'Consumo · uso geral',
        descricao:
          'Comparar encartes de vários mercados à mão toma tempo. Defini leitura do encarte inteiro por IA, o mercado de melhor custo-benefício com o porquê e lista para conferir o total antes de pagar.',
        nota: 'Código privado · meta de 100% de testes',
        logoUrl: '/logos/compra-inteligente.svg',
      },
      {
        nome: 'Sintonia',
        slogan: 'Mais perto um do outro, todo dia.',
        categoria: 'Relacionamento · casais',
        descricao:
          'App para casais se comunicarem pelas 5 linguagens do amor, com brincadeiras. Defini um app único para público geral e cristão, com fé leve, área de administração e etapa de testes antes de cada versão.',
        url: 'https://sintonia-eta.vercel.app',
        logoUrl: 'https://sintonia-eta.vercel.app/icons/icone.svg',
      },
      {
        nome: 'GomesTech Admin',
        slogan: 'Todos os projetos num só painel.',
        categoria: 'Gestão · uso próprio',
        descricao:
          'Mais de 40 projetos espalhados. Defini um único painel com todos eles, kanban de problemas, e-mails corporativos gratuitos e avisos para colaboradores.',
        logoUrl: '/logos/gomestech-admin.svg',
      },
      {
        nome: 'Gestor de Contas',
        slogan: 'Cada conta no seu lugar.',
        categoria: 'Organização · uso próprio',
        descricao:
          'Muitas contas de e-mail, cada uma ligada a um serviço. Defini um mapa de cada conta e onde ela está conectada, cofre de senhas criptografado e alertas de segurança, na web e no PC.',
        logoUrl: '/logos/gestor-de-contas.svg',
      },
      {
        nome: 'Nebulosa Geek',
        slogan: 'Streetwear geek para todo mundo.',
        categoria: 'Loja virtual · streetwear',
        descricao: 'Loja virtual de streetwear geek com visual cyberpunk, pensada para ser acessível a todos.',
        url: 'https://nebulosa-geek.vercel.app',
        logoUrl: '/logos/nebulosa-geek.svg',
      },
      {
        nome: 'MeuTom',
        slogan: 'Cante. O MeuTom diz em que tom tocar.',
        categoria: 'Música · quem canta e toca',
        descricao:
          'Achar o tom certo para a própria voz exige ouvido treinado. Defini afinador de voz, teste de extensão vocal e o tom ideal já traduzido para violão, cavaquinho, teclado e sopros.',
        nota: 'Tudo no celular · o áudio não é gravado nem enviado',
      },
      {
        nome: 'PedeAí',
        slogan: 'Pedido feito, entrega a caminho.',
        categoria: 'Entregas · backend',
        descricao:
          'Backend de um app de pedidos e entregas em C# e .NET 10, com as regras de negócio separadas do banco de dados (DDD), Entity Framework Core e testes automáticos.',
        nota: 'Fase inicial · cadastro de clientes pronto',
      },
    ],
  },
  {
    id: 'jogos',
    titulo: 'Jogos',
    tom: 'jogos',
    projetos: [
      {
        nome: 'Guardiões do Saber',
        situacao: 'desenvolvimento',
        slogan: 'Ler, contar e conhecer o Brasil brincando.',
        categoria: 'Educação · 1º ao 6º ano',
        descricao:
          'Aventura em blocos 3D para alfabetização, cálculo de cabeça e história do Brasil. Defini funcionamento 100% offline e sem nuvem, para proteger os dados das crianças e chegar a quem não tem internet, e um modo Mestre para o professor criar missões por QR Code ou código.',
        nota: 'Android, iPhone e PC pelo mesmo link',
      },
      {
        nome: 'Soberania: Era das Forças',
        situacao: 'desenvolvimento',
        slogan: 'Estratégia com as três Forças do Brasil.',
        categoria: 'Estratégia em tempo real · PC, até 8 jogadores',
        descricao:
          'Exército, Marinha e Força Aérea evoluindo por eras, com a hierarquia militar de verdade, matérias-primas reais de cada país e campanha com o Brasil contra facções criminosas fictícias.',
        nota: 'Arte criada em família · lançamento previsto para novembro de 2026',
      },
      {
        nome: 'Neon Drop',
        situacao: 'desenvolvimento',
        slogan: 'Quem sabe mais, cai melhor.',
        categoria: 'Quiz · navegador',
        descricao:
          'Cada resposta certa vira uma bola que cai num muro de pinos até um multiplicador. Conhecimento, sorte e uma decisão de risco no meio da partida definem o placar.',
        nota: 'Projeto de estudo · React e animações em CSS',
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
        slogan: 'Do pedido ao manejo, sem papelada.',
        categoria: 'Meio ambiente · cliente',
        descricao:
          'Pedidos de manejo de fauna e controle de pragas. Planejei a plataforma a partir dos requisitos da cliente: custo zero no início, segurança e conversa direta com o cliente.',
      },
      {
        nome: 'Finance App',
        slogan: 'Para onde vai o seu dinheiro.',
        categoria: 'Finanças pessoais · uso geral',
        descricao:
          'Muita gente não sabe para onde vai o próprio dinheiro. Planejei um app em que registrar um gasto leva segundos, mesmo sem internet, com metas e gráficos fáceis de entender.',
      },
    ],
  },
];

export const todosOsProjetos = () => gruposDeProjetos.flatMap((grupo) => grupo.projetos);

// Grupos por situação dão o selo a todos; grupos por tipo (Jogos) usam a situação de cada projeto
export const situacaoDoProjeto = (projeto, grupo) => (projeto.situacao ? situacoes[projeto.situacao] : grupo);

// Repositórios públicos que já aparecem aqui, com situação e descrição revisadas
export const repositoriosEmDestaque = () =>
  todosOsProjetos()
    .map((projeto) => projeto.repositorio)
    .filter(Boolean);

// Caso em destaque no topo de "Projetos": o app que nasceu da certificação de qualidade.
// O cartão dele sai da grade para não aparecer duas vezes (continua no letreiro do rodapé).
export const casoEmDestaque = {
  nome: 'PrismaQ',
  rotulo: 'Em destaque · do campo para o app',
  titulo: 'A vistoria que eu fazia no papel, agora no celular',
  slogan: 'Qualidade de campo, sem papel.',
  situacao: 'Em testes',
  abertura:
    'Em 2019, na Procisa do Brasil, eu fazia a certificação de qualidade das instalações de TV e internet da operação NET/Claro. Tudo era anotado em papel: OS, endereço, cliente, técnico e fotos de antes e depois, com o relatório montado depois. O PrismaQ é o aplicativo que eu queria ter tido naquela época.',
  antesDepois: [
    { antes: 'Formulário à mão e relatório montado depois', depois: 'Checklist digital e relatório em PDF gerado na hora' },
    { antes: 'Fotos soltas no celular', depois: 'Foto obrigatória no item reprovado, com data, hora e local na imagem' },
    { antes: 'Material declarado sem conferência', depois: 'Declarado × encontrado, com alerta de lançamento a maior' },
    { antes: 'Instalação registrada em terreno baldio', depois: 'Local da vistoria comparado com o endereço do contrato (raio de 200 m)' },
    { antes: 'Reprovação levava dias para virar ação', depois: 'Retorno criado na hora, com prazo de 7 dias e alerta' },
  ],
  perfis: [
    { titulo: 'Em campo · celular', texto: 'Roteiro do dia com mapa, checklist em 8 blocos (269 pontos), fotos, materiais e assinatura do cliente. Funciona sem sinal.' },
    { titulo: 'COP e supervisão · web', texto: 'Indicadores, mapa do dia, retornos por prazo, produção diária e alertas de fraude.' },
    { titulo: 'Coordenação · web', texto: 'Envio de lotes por região, pontos críticos e qualidade por técnico e por região.' },
  ],
  regras: [
    'Aprovação com nota mínima de 97%; item não inspecionado não entra na conta.',
    'Item reprovado exige foto e, se não for corrigido no local, vira retorno com prazo de 7 dias.',
    'Vistoria a mais de 200 m do endereço do contrato gera alerta.',
    'Lotes distribuídos por região e pela jornada, com metas e cálculo de horas extras.',
  ],
  tecnologias: 'React 19 · TypeScript · PWA instalável e offline · Leaflet e OpenStreetMap · jsPDF · IndexedDB · Vitest',
  nota: 'Demonstração com dados fictícios (empresa, pessoas, ruas e OS) na Zona Oeste do Rio de Janeiro.',
  url: 'https://prismaq-flax.vercel.app',
  logoUrl: 'https://prismaq-flax.vercel.app/icons/icone.svg',
};
