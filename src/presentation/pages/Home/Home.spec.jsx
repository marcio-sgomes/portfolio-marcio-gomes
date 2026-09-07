import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Home } from './Home';
import * as githubService from '../../../data/services/githubService';

vi.mock('../../../data/services/githubService', () => ({
  obterProjetos: vi.fn()
}));

describe('Home Page', () => {
  // 1. Loading State
  it('deve exibir o indicador de carregamento inicialmente', () => {
    githubService.obterProjetos.mockReturnValue(new Promise(() => {}));

    render(<Home />);
    
    expect(screen.getByText(/conectando ao github/i)).toBeInTheDocument();
  });

  // 2. Happy Path
  it('deve renderizar a lista de projetos após o carregamento bem-sucedido', async () => {
    const mockProjetos = [
      { id: 10, nome: 'GomesTech Portfolio', descricao: 'Sistema web', url: 'http://url.com', tecnologias: ['React'] }
    ];
    
    githubService.obterProjetos.mockResolvedValue(mockProjetos);

    render(<Home />);

    const tituloProjeto = await screen.findByText('GomesTech Portfolio');
    expect(tituloProjeto).toBeInTheDocument();
  });

  // 3. Edge Case: Lista vazia retornada pela API
  it('deve lidar com uma lista vazia de projetos sem quebrar a interface', async () => {
    githubService.obterProjetos.mockResolvedValue([]);

    render(<Home />);

    // Garante que o loading sumiu e não gerou erro de renderização
    await screen.findByRole('heading', { name: /meus projetos/i });
    expect(screen.queryByText(/conectando ao github/i)).not.toBeInTheDocument();
  });

  // 4. Error Handling
  it('deve exibir mensagem de erro amigável se a busca de projetos falhar', async () => {
    githubService.obterProjetos.mockRejectedValue(new Error('Falha na API'));

    render(<Home />);

    const mensagemErro = await screen.findByText('Não foi possível carregar os projetos do GitHub no momento.');
    expect(mensagemErro).toBeInTheDocument();
  });
});