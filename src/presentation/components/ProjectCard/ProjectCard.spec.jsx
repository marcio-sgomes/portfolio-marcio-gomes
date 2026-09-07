import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard Component', () => {
  const projetoMock = {
    id: 1,
    nome: 'Portfólio Profissional',
    descricao: 'Aplicação desenvolvida com Clean Architecture.',
    url: 'https://github.com/marcio-sgomes/portfolio',
    tecnologias: ['React', 'Vite', 'Vitest']
  };

  // 1. Happy Path
  it('deve renderizar as informações do projeto corretamente', () => {
    render(<ProjectCard projeto={projetoMock} />);

    expect(screen.getByText('Portfólio Profissional')).toBeInTheDocument();
    expect(screen.getByText('Aplicação desenvolvida com Clean Architecture.')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Vite')).toBeInTheDocument();
    expect(screen.getByText('Vitest')).toBeInTheDocument();
    
    const link = screen.getByRole('link', { name: /ver repositório/i });
    expect(link).toHaveAttribute('href', projetoMock.url);
  });
});