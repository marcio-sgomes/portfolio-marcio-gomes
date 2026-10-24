import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App, { Rotas } from './App';
import * as portfolioService from './data/services/portfolioService';

vi.mock('./data/services/portfolioService', () => ({ obterProjetos: vi.fn() }));

const abrir = (rota) =>
  render(
    <MemoryRouter initialEntries={[rota]}>
      <Rotas />
    </MemoryRouter>,
  );

describe('App: rotas, títulos e acessibilidade', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    Element.prototype.scrollIntoView = vi.fn();
    portfolioService.obterProjetos.mockResolvedValue([]);
  });

  afterEach(() => {
    delete Element.prototype.scrollIntoView;
  });

  it('Home tem o título do site e um único h1', async () => {
    abrir('/');
    await screen.findByRole('heading', { name: /estudos e código/i });
    expect(document.title).toBe('Márcio Gomes · Do campo à tecnologia');
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('main')).toHaveAttribute('id', 'conteudo');
  });

  it('/sobre tem título próprio na aba', () => {
    abrir('/sobre');
    expect(document.title).toBe('Sobre este site · Márcio Gomes');
    expect(screen.getByRole('main')).toHaveAttribute('id', 'conteudo');
  });

  it('endereço inexistente mostra a página 404 com caminho de volta', async () => {
    abrir('/pagina-que-nao-existe');
    const principal = screen.getByRole('main');
    expect(within(principal).getByRole('heading', { level: 1, name: /página não encontrada/i })).toBeInTheDocument();
    expect(document.title).toBe('Página não encontrada · Márcio Gomes');

    fireEvent.click(within(principal).getByRole('link', { name: /voltar ao início/i }));
    expect(await screen.findByRole('heading', { level: 1, name: /do campo à tecnologia/i })).toBeInTheDocument();
  });

  it('o primeiro link da página é "Pular para o conteúdo"', () => {
    abrir('/sobre');
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveTextContent('Pular para o conteúdo');
    expect(links[0]).toHaveAttribute('href', '#conteudo');
  });

  it('App monta com o roteador do navegador', () => {
    window.history.pushState({}, '', '/sobre');
    render(<App />);
    expect(screen.getByRole('heading', { name: /sobre a gomestech/i })).toBeInTheDocument();
    window.history.pushState({}, '', '/');
  });
});
