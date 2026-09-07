import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { About } from './About';

describe('About Page', () => {
  it('deve renderizar as seções de governança e ferramentas técnicas corretamente', () => {
    render(<About />);

    expect(screen.getByText(/Sobre a GomesTech & Governança/i)).toBeInTheDocument();
    expect(screen.getByText(/Visão Geral do Projeto/i)).toBeInTheDocument();
    
    // Como "Clean Architecture" aparece em dois lugares, usamos getAllByText para garantir que existem
    const elementosClean = screen.getAllByText(/Clean Architecture/i);
    expect(elementosClean.length).toBeGreaterThan(0);

    expect(screen.getByText(/React & Vite/i)).toBeInTheDocument();
  });
});