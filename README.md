# Portfólio — Márcio Gomes

Portfólio profissional em React que lista automaticamente meus projetos públicos direto da API do GitHub, construído com Clean Architecture, testes e CI/CD.

[![Status: Ativo](https://img.shields.io/badge/status-ativo-brightgreen)](#status-do-projeto)
[![Stack: React + Vite](https://img.shields.io/badge/stack-React_%7C_Vite-61dafb)](#tecnologias)
[![Testes: Vitest](https://img.shields.io/badge/testes-Vitest_%7C_RTL-yellow)](#scripts-disponíveis)
[![Deploy: Vercel](https://img.shields.io/badge/deploy-Vercel-black)](https://portfolio-marcio-gomes.vercel.app)

🌐 **Em produção:** <https://portfolio-marcio-gomes.vercel.app>

📚 **Documentação de produto (PRD, roadmap):** [marcio-sgomes/portfolio-tech](https://github.com/marcio-sgomes/portfolio-tech)

---

## Sobre

Currículos estáticos não mostram *como* um desenvolvedor trabalha. Este projeto é um **meta-portfólio**: além de exibir os projetos, a própria construção dele (arquitetura em camadas, testes, issues como User Stories, pipeline de CI e deploy contínuo) serve como evidência técnica.

**Público:** recrutadores técnicos, tech leads, gestores de TI e clientes de consultoria.

O que a aplicação faz hoje:

- **Início (`/`)** — página única no estilo portfólio executivo, com navegação por âncoras:
  - **Hero:** foto, nome, proposta de valor, 4 características principais e atalhos para LinkedIn, GitHub e e-mail.
  - **Perfil, Competências, Formação, Cases e Método:** trajetória, áreas de atuação, formação (Estácio e Faveni), case Bela Brisa e forma de conduzir projetos.
  - **Projetos e estudos:** junta os repositórios públicos de `marcio-sgomes` (API do GitHub, até 100, ignorando forks, repositórios vazios e o README do perfil) com os projetos privados que têm página publicada (`src/data/projetosPrivados.js`). Cada card tem logo (ícone do site ou emblema com iniciais), selos *Autoral/Estudo*, *Em desenvolvimento* e *Código privado*, e os botões "Ver página" e "Ver repositório". Filtros: Todos, Autorais, Estudos e Em desenvolvimento.
  - **Contato:** cartões de LinkedIn, GitHub e e-mail.
- **Sobre (`/sobre`)** — explica a visão geral do projeto e a stack escolhida (link no rodapé).
- **404** — qualquer rota desconhecida mostra "Página não encontrada".

> 💡 Os cards usam a **descrição** e os **tópicos** de cada repositório no GitHub. Para um card ficar bonito, basta preencher esses campos no próprio repositório.

> 🏷️ Marcação pelos **tópicos** do repositório no GitHub: `projeto-de-estudo` (ou descrição começando com `[Estudo]`) gera o selo *Estudo*; `em-desenvolvimento` gera o selo *Em desenvolvimento* — basta remover o tópico quando o projeto ficar pronto. O link "Ver página" vem do campo *Website* do repositório ou do GitHub Pages.
>
> 🔒 Projetos privados entram só pela lista em `src/data/projetosPrivados.js`, com o que o projeto faz e o link da página — **nunca** link de código, tecnologias ou detalhes de implementação.

> ✏️ Todos os textos, links de contato e o caminho da foto ficam em [`src/data/perfil.js`](src/data/perfil.js). A foto é servida de `public/foto-perfil.jpg` (se faltar, o Hero mostra o monograma "MG").

## Status do projeto

**Ativo** — as 3 sprints planejadas (Fundação, Integração/Design e Qualidade/Entrega) foram concluídas e o site está publicado na Vercel.

| A Fazer | Fazendo | Feito |
|---|---|---|
| Botão "Baixar CV" no Hero (#24) | — | Setup do Vite e Design Tokens (#1) |
| Proteger a `main` e configurar o Prettier (#27) | — | Camada de domínio e serviço mock (#2) |
| | | React Router e componentes base (#3) |
| | | Listagem de projetos (#4) e integração com a API do GitHub (#5) |
| | | CSS Modules e estilização global (#6), página Sobre (#7) |
| | | Testes unitários com Vitest (#8), pipeline de CI (#9), deploy na Vercel (#10) |
| | | Redesign executivo: Hero com foto, Perfil, Competências, Formação, Cases, Método, Contato e Footer (#24) |
| | | Remoção de código não usado e estilos inline (#25), SEO e favicon próprio (#26) |

O planejamento é feito no GitHub Projects (quadro `portfolio-marcio-gomes`) e nas [issues](https://github.com/marcio-sgomes/portfolio-marcio-gomes/issues).

## Tecnologias

- **React 19** — componentização da interface e controle de estado com hooks.
- **Vite 8** — servidor de desenvolvimento instantâneo e build otimizado.
- **React Router DOM 7** — navegação entre páginas sem recarregar (SPA).
- **CSS Modules + variáveis CSS (Design Tokens)** — estilos isolados por componente e paleta centralizada.
- **API REST do GitHub** — fonte dos projetos exibidos, sempre atualizada sem editar código.
- **Vitest + React Testing Library + jsdom** — testes unitários que validam o comportamento visto pelo usuário.
- **ESLint** — padronização e detecção de erros no código.
- **GitHub Actions** — CI que roda lint, testes e build em cada PR e push na `main`.
- **Vercel** — hospedagem com deploy automático e *preview* por Pull Request (`vercel.json` reescreve rotas para a SPA).

## Como rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) **20 ou superior** (o CI usa Node 24). Confira com `node -v`.
- [Git](https://git-scm.com/).
- Conexão com a internet (a página inicial consulta a API do GitHub).

### Passo a passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/marcio-sgomes/portfolio-marcio-gomes.git
   ```
2. Entre na pasta:
   ```bash
   cd portfolio-marcio-gomes
   ```
3. Instale as dependências (usa as versões exatas do `package-lock.json`):
   ```bash
   npm ci
   ```
4. Suba o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

**Resultado esperado:** o navegador abre sozinho em `http://localhost:5173` mostrando "Conectando ao GitHub..." e, em seguida, os cards com os repositórios.

### Erros comuns

| Sintoma | Causa provável | Como corrigir |
|---|---|---|
| `'vite' não é reconhecido como um comando` | Dependências não instaladas | Rode `npm ci` antes de `npm run dev`. |
| `npm ci` reclama do lockfile | `package.json` e `package-lock.json` fora de sincronia | Rode `npm install` e versione o lock atualizado. |
| "Não foi possível carregar os projetos do GitHub no momento." | Sem internet ou limite da API do GitHub atingido (60 req/hora por IP sem autenticação) | Verifique a conexão ou aguarde alguns minutos. |
| Porta 5173 ocupada | Outro servidor Vite rodando | Feche o outro processo; o Vite também tenta a próxima porta livre. |
| Testes falham por *timeout* em máquina lenta | Criação do ambiente jsdom demorando mais que 5 s | Rode de novo com `npx vitest run --testTimeout=20000`. |

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com recarregamento automático. |
| `npm run build` | Gera o build de produção em `dist/`. |
| `npm run preview` | Serve localmente o conteúdo de `dist/` para conferência. |
| `npm run lint` | Analisa o código com ESLint. |
| `npm run test` | Executa os testes uma vez (Vitest). |
| `npm run test:ui` | Abre a interface visual do Vitest. |
| `npm run test:coverage` | Testes com relatório de cobertura em `coverage/` (mínimo exigido: **97%**). |

## Estrutura de pastas

```text
src/
├── domain/           # Regras de negócio puras
│   └── models/       #   Entidade Projeto (contrato usado pelas outras camadas)
├── data/             # Acesso a dados
│   ├── perfil.js     #   Conteúdo do portfólio (textos, formação, cases, contatos)
│   ├── projetosPrivados.js # Privados com página publicada e logos dos projetos
│   └── services/     #   githubService (API do GitHub) e portfolioService (junta públicos e privados)
├── presentation/     # Tudo o que é React
│   ├── components/   #   Header, Hero, Secao, Secoes/*, ProjectCard, Footer, Icone, RolarParaAncora
│   └── pages/        #   Home e About
├── styles/           # global.css e variables.css (Design Tokens)
├── test/             # setupTests.js (jest-dom)
├── App.jsx           # Rotas da aplicação
└── main.jsx          # Ponto de entrada
.github/              # Workflow de CI, templates de issue e de PR
vercel.json           # Reescrita de rotas para a SPA na Vercel
```

Os testes ficam **ao lado** do arquivo que validam (`*.spec.js` / `*.spec.jsx`).

## Arquitetura

- **Clean Architecture:** `presentation` depende de `data`, que depende de `domain`; o domínio não conhece React nem a API.
- **SOLID:** cada componente tem uma única responsabilidade e o serviço de dados converte a resposta da API para a entidade `Projeto`, isolando a UI de mudanças externas.

## Gestão do projeto

O desenvolvimento foi organizado em três sprints (milestones):

1. **Sprint 1 — Fundação e Arquitetura:** setup do Vite, camadas, roteamento e componentes base.
2. **Sprint 2 — Integração e Design:** integração com a API do GitHub, estilização global e responsividade.
3. **Sprint 3 — Qualidade e Entrega:** testes unitários, pipeline de CI e deploy contínuo.

## Como contribuir

Veja o [CONTRIBUTING.md](CONTRIBUTING.md): branches por issue (`feat/issue-N-...`), Conventional Commits em pt-BR e checklist de PR.

---

Feito por **Márcio dos Santos Gomes** — [GitHub](https://github.com/marcio-sgomes)
