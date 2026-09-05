# Documentação de Projeto e Arquitetura de Software

[![Status: Em Desenvolvimento](https://img.shields.io/badge/Status-Em_Desenvolvimento-blue)](#)
[![Stack: React + Vite](https://img.shields.io/badge/Stack-React_%7C_Vite_%7C_JS-yellow)](#)
[![Arquitetura: Clean & SOLID](https://img.shields.io/badge/Arquitetura-Clean_Architecture_%7C_SOLID-success)](#)
[![Testes: Vitest](https://img.shields.io/badge/Testes-Vitest_%7C_RTL-brightgreen)](#)
[![Deploy: Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](#)

## Escopo e Ideação do Produto
Este repositório contém o código-fonte e a governança técnica de uma aplicação web focada em alta performance e escalabilidade. O objetivo central do produto é exibir um perfil profissional de forma dinâmica, integrando e apresentando projetos e códigos consumidos diretamente da API do GitHub.

A concepção do projeto foi guiada por práticas de Product Discovery, garantindo que a engenharia de software aplicada atenda diretamente aos requisitos de negócios, com foco em manutenibilidade e entrega contínua de valor.

## Governança Técnica e Arquitetura
A base de código foi estruturada visando o isolamento de responsabilidades e a facilidade de testes, adotando:
- Padrão Arquitetural: Clean Architecture, garantindo a separação entre regras de negócio (Domain), manipulação de dados (Data) e interface gráfica (Presentation).
- Princípios de Engenharia: Aplicação estrita de SOLID (com destaque para Inversão de Dependência e Responsabilidade Única).
- Core Tecnológico: React e JavaScript (ES6+), utilizando Vite como bundler para otimização de tempo de build e execução.

## Esteira de Desenvolvimento e Qualidade (CI/CD)
O ciclo de vida do código é protegido por automações de integração e entrega contínua:
- Testes Automatizados: Cobertura de regras de negócio e componentes visuais utilizando Vitest e React Testing Library.
- Integração Contínua (CI): Pipelines configurados via GitHub Actions para validação de linter e execução de testes a cada Pull Request aberto.
- Entrega Contínua (CD): Deploy automatizado no ambiente de produção hospedado na Vercel após aprovação e merge na branch principal.

## Gestão Ágil e Ciclo de Vida
O gerenciamento das entregas segue o framework Agile, com planejamento Just-in-Time orientado a fluxo de valor:
- Rastreabilidade: Uso do GitHub Projects (Kanban) integrado a Issues formatadas como User Stories.
- Controle de Versão: Adoção do GitHub Flow, com branches semânticas (feat/, fix/, chore/) e bloqueio de commits diretos na branch principal.

### Mapa de Sprints (Roadmap)
- Sprint 1 (Fundação e Arquitetura): Setup do Vite, Clean Architecture, roteamento e componentização base.
- Sprint 2 (Integração e Design): Conexão com APIs externas (Inversão de Dependência), estilização global e responsividade.
- Sprint 3 (Qualidade e Entrega): Implementação de testes unitários isolados, configuração da esteira CI/CD e deploy automatizado.

## Configuração do Ambiente Local

Para espelhar o ambiente de desenvolvimento e executar a aplicação, siga as diretrizes abaixo:

1. Clone o repositório:
```bash
git clone https://github.com/marcio-sgomes/portfolio-marcio-gomes.git
