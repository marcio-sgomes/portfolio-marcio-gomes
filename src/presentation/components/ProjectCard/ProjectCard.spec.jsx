import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from './ProjectCard';
import { iniciaisDoNome, corDoNome } from './logoProjeto';
import { Projeto } from '../../../domain/models/Projeto';

describe('ProjectCard Component', () => {
  const projetoMock = new Projeto({
    id: 1,
    nome: 'Portfólio Profissional',
    descricao: 'Aplicação desenvolvida com Clean Architecture.',
    codigoUrl: 'https://github.com/marcio-sgomes/portfolio',
    paginaUrl: 'https://portfolio.vercel.app',
    tecnologias: ['React', 'Vite', 'Vitest'],
    logoUrl: 'https://portfolio.vercel.app/logo.svg',
  });

  // 1. Happy Path
  it('deve renderizar as informações do projeto corretamente', () => {
    render(<ProjectCard projeto={projetoMock} />);

    expect(screen.getByText('Portfólio Profissional')).toBeInTheDocument();
    expect(screen.getByText('Aplicação desenvolvida com Clean Architecture.')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Autoral')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /logo de portfólio profissional/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ver repositório/i })).toHaveAttribute('href', projetoMock.codigoUrl);
    expect(screen.getByRole('link', { name: /ver página/i })).toHaveAttribute('href', projetoMock.paginaUrl);
    expect(screen.queryByText('Em desenvolvimento')).not.toBeInTheDocument();
  });

  // 2. Projeto privado: só o que faz e a página, nunca o código
  it('não deve mostrar código nem tecnologias de projeto privado', () => {
    const privado = new Projeto({
      id: 2,
      nome: 'App Privado',
      descricao: 'Organiza tarefas.',
      paginaUrl: 'https://app.vercel.app',
      privado: true,
      emDesenvolvimento: true,
    });

    render(<ProjectCard projeto={privado} />);

    expect(screen.getByText('Código privado')).toBeInTheDocument();
    expect(screen.getByText('Em desenvolvimento')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /repositório/i })).not.toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });

  // 3. Estudo sem logo e sem página: emblema com iniciais
  it('deve exibir selo de estudo e emblema com iniciais quando não houver logo', () => {
    const estudo = new Projeto({ id: 3, nome: 'todo', descricao: 'Lista', codigoUrl: 'https://x', estudo: true });

    render(<ProjectCard projeto={estudo} />);

    expect(screen.getByText('Estudo')).toBeInTheDocument();
    expect(screen.getByTestId('logo-monograma')).toHaveTextContent('TO');
    expect(screen.queryByRole('link', { name: /ver página/i })).not.toBeInTheDocument();
  });

  // 4. Logo que não carrega cai para o emblema
  it('deve trocar a logo pelo emblema quando a imagem falhar', () => {
    render(<ProjectCard projeto={projetoMock} />);

    fireEvent.error(screen.getByRole('img', { name: /logo/i }));

    expect(screen.getByTestId('logo-monograma')).toHaveTextContent('PP');
  });

  it('deve gerar iniciais e cor estáveis a partir do nome', () => {
    expect(iniciaisDoNome('neon drop')).toBe('ND');
    expect(corDoNome('neon drop')).toBe(corDoNome('neon drop'));
  });
});
