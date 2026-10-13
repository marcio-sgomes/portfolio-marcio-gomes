# Como contribuir

Obrigado pelo interesse! Este guia resume o fluxo de trabalho usado no projeto.

## Fluxo de branches

1. Toda mudança começa por uma **issue** (use os formulários de bug ou funcionalidade).
2. Crie a branch a partir da `main`, citando o número da issue:
   - `feat/issue-12-secao-hero`
   - `fix/issue-15-link-quebrado`
   - `style/issue-16-responsividade`
   - `test/issue-17-testes-header`
   - `chore/issue-18-atualiza-dependencias`
3. Abra um Pull Request para a `main` preenchendo o checklist do template.
4. O CI (GitHub Actions) precisa passar: lint, testes e build.
5. Após o merge na `main`, a Vercel publica automaticamente em produção
   (cada PR também ganha um *preview* da Vercel).

> No histórico do projeto também foi usada uma branch `develop` como integração
> entre as features e a `main`. Se ela for recriada, abra os PRs de feature para
> `develop` e depois um PR de `develop` para `main`.

## Commits (Conventional Commits em pt-BR)

Formato: `tipo: descrição no imperativo, em minúsculas` (cite a issue quando houver).

| Tipo       | Quando usar                          | Exemplo                                                    |
|------------|--------------------------------------|------------------------------------------------------------|
| `feat`     | nova funcionalidade                  | `feat: adiciona seção de formação acadêmica (ref #12)`     |
| `fix`      | correção de bug                      | `fix: corrige link do card de projeto`                     |
| `style`    | CSS, tokens, responsividade          | `style: ajusta espaçamento do header no mobile`            |
| `refactor` | melhoria interna sem mudar comportamento | `refactor: extrai estilos inline da Home para CSS Module` |
| `test`     | testes                               | `test: cobre estado de erro do githubService`              |
| `docs`     | documentação                         | `docs: atualiza instruções de instalação`                  |
| `chore`    | configuração, dependências           | `chore: atualiza vite para 8.3`                            |
| `ci`       | pipeline                             | `ci: adiciona etapa de cobertura no workflow`              |

## Antes de abrir o PR

```bash
npm run lint           # análise estática (ESLint)
npm run test           # testes unitários (Vitest + Testing Library)
npm run test:coverage  # cobertura — o projeto exige no mínimo 97%
npm run build          # garante que o build de produção funciona
```

Os testes ficam **ao lado do arquivo testado** (`Componente.spec.jsx`), seguindo a
organização em camadas `domain` / `data` / `presentation`.
