import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Perfil } from './Perfil';
import { Competencias } from './Competencias';
import { Metodo } from './Metodo';
import { Contato } from './Contato';
import { Formacao } from './Formacao';
import { Cases } from './Cases';

describe('Seções da Home', () => {
  it('Perfil deve exibir o texto de apresentação e os destaques', () => {
    render(<Perfil />);

    expect(screen.getByRole('heading', { name: /visão de gestor/i })).toBeInTheDocument();
    expect(screen.getByText('97%')).toBeInTheDocument();
  });

  it('Competencias deve listar as três áreas de atuação', () => {
    render(<Competencias />);

    expect(screen.getAllByRole('article')).toHaveLength(3);
    expect(screen.getByRole('heading', { name: 'Gestão de Projetos' })).toBeInTheDocument();
  });

  it('Metodo deve exibir as etapas em ordem', () => {
    render(<Metodo />);

    const etapas = screen.getAllByRole('listitem');
    expect(etapas).toHaveLength(4);
    expect(etapas[0]).toHaveTextContent('Diagnóstico');
  });

  it('Formacao deve exibir graduação e pós-graduação', () => {
    render(<Formacao />);

    expect(screen.getByRole('heading', { name: 'Análise e Desenvolvimento de Sistemas' })).toBeInTheDocument();
    expect(screen.getByText('Estácio')).toBeInTheDocument();
    expect(screen.getByText('Faveni')).toBeInTheDocument();
  });

  it('Cases deve exibir o case Bela Brisa e o link apenas quando existir', () => {
    render(<Cases />);

    expect(screen.getByRole('heading', { name: 'Associação Comunitária Bela Brisa' })).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(screen.getByRole('link', { name: /documentação do produto/i })).toHaveAttribute('target', '_blank');
  });

  it('Contato deve conectar LinkedIn, GitHub e e-mail', () => {
    render(<Contato />);

    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByRole('link', { name: /e-mail/i })).toHaveAttribute('href', expect.stringMatching(/^mailto:/));
  });
});
