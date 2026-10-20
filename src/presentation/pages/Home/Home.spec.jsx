import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Home } from './Home';
import * as portfolioService from '../../../data/services/portfolioService';
import { Projeto } from '../../../domain/models/Projeto';

vi.mock('../../../data/services/portfolioService', () => ({
  obterProjetos: vi.fn()
}));

describe('Home Page', () => {
  // 1. Loading State
  it('deve exibir o indicador de carregamento inicialmente', () => {
    portfolioService.obterProjetos.mockReturnValue(new Promise(() => {}));

    render(<Home />);

    expect(screen.getByText(/conectando ao github/i)).toBeInTheDocument();
  });

  // 2. Happy Path + filtros
  it('deve renderizar os projetos e filtrar por autorais, estudos e em desenvolvimento', async () => {
    portfolioService.obterProjetos.mockResolvedValue([
      new Projeto({ id: 1, nome: 'GomesTech Portfolio', descricao: 'Sistema web', codigoUrl: 'http://url.com', tecnologias: ['React'] }),
      new Projeto({ id: 2, nome: 'Curso Alura', descricao: 'Estudo', codigoUrl: 'http://url.com', estudo: true }),
      new Projeto({ id: 3, nome: 'App Novo', descricao: 'Em obra', paginaUrl: 'https://app.vercel.app', privado: true, emDesenvolvimento: true }),
    ]);

    render(<Home />);

    expect(await screen.findByText('GomesTech Portfolio')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /todos/i })).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(screen.getByRole('button', { name: /^estudos/i }));
    expect(screen.getByText('Curso Alura')).toBeInTheDocument();
    expect(screen.queryByText('GomesTech Portfolio')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /^autorais/i }));
    expect(screen.getByText('GomesTech Portfolio')).toBeInTheDocument();
    expect(screen.queryByText('Curso Alura')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /^em desenvolvimento/i }));
    expect(screen.getByText('App Novo')).toBeInTheDocument();
    expect(screen.queryByText('GomesTech Portfolio')).not.toBeInTheDocument();
  });

  // 3. Edge Case: Lista vazia retornada pela API
  it('deve lidar com uma lista vazia de projetos sem quebrar a interface', async () => {
    portfolioService.obterProjetos.mockResolvedValue([]);

    render(<Home />);

    await screen.findByRole('heading', { name: /estudos e código/i });
    expect(await screen.findByRole('button', { name: /todos/i })).toBeInTheDocument();
    expect(screen.queryByText(/conectando ao github/i)).not.toBeInTheDocument();
  });

  // 4. Error Handling
  it('deve exibir mensagem de erro amigável se a busca de projetos falhar', async () => {
    portfolioService.obterProjetos.mockRejectedValue(new Error('Falha na API'));

    render(<Home />);

    const mensagemErro = await screen.findByText('Não foi possível carregar os projetos do GitHub no momento.');
    expect(mensagemErro).toBeInTheDocument();
  });
});
