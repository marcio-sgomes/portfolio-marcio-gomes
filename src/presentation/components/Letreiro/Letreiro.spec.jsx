import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { Letreiro } from './Letreiro';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { perfil } from '../../../data/perfil';
import { todosOsProjetos } from '../../../data/projetosDestaque';

describe('Letreiro do rodapé', () => {
  it('deve mostrar todas as empresas e todos os projetos, com a cópia escondida dos leitores de tela', () => {
    render(<Letreiro />);

    const empresas = screen.getByLabelText('Empresas e clientes');
    const projetos = screen.getByLabelText('Projetos');

    perfil.empresas.forEach((empresa) => {
      const marcas = empresa.logo
        ? within(empresas).getAllByAltText(empresa.nome)
        : within(empresas).getAllByText(empresa.nome);
      expect(marcas).toHaveLength(2);
    });
    expect(within(empresas).getAllByAltText('SulAmérica Seguros')[0]).toHaveAttribute('src', '/empresas/sulamerica.png');
    todosOsProjetos().forEach((projeto) => {
      expect(within(projetos).getAllByText(projeto.nome)).toHaveLength(2);
    });
    screen.getAllByTestId('letreiro-copia').forEach((copia) => {
      expect(copia).toHaveAttribute('aria-hidden', 'true');
    });
  });

  it('Footer deve trazer o letreiro, o crédito da GomesTech e os contatos', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    const ano = new Date().getFullYear();
    expect(screen.getByText(`© ${ano} GomesTech — feito por Márcio Gomes`)).toBeInTheDocument();
    expect(screen.getByText(/empresas e clientes por onde passei/i)).toBeInTheDocument();
    const rodape = screen.getByRole('navigation', { name: /links do rodapé/i });
    expect(within(rodape).getByRole('link', { name: 'WhatsApp' })).toHaveAttribute('target', '_blank');
    expect(within(rodape).getByRole('link', { name: 'E-mail' })).not.toHaveAttribute('target');
    expect(within(rodape).getByRole('link', { name: /sobre este site/i })).toHaveAttribute('href', '/sobre');
  });

  it('Header deve levar às seções da matéria', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'A história' })).toHaveAttribute('href', '/#historia');
    expect(screen.getByRole('link', { name: 'Onde me encaixo' })).toHaveAttribute('href', '/#encaixe');
    expect(screen.getByRole('link', { name: 'Contato' })).toHaveAttribute('href', '/#contato');
  });
});
