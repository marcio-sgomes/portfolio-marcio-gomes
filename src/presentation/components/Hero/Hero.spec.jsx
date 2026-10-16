import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from './Hero';

describe('Hero Component', () => {
  // 1. Happy Path
  it('deve exibir nome, foto, características e links de contato', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { level: 1, name: 'Márcio Gomes' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /retrato de márcio gomes/i })).toBeInTheDocument();
    expect(screen.getByText('Liderança ponta a ponta')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/marcio-sgomes');
    expect(screen.getByRole('link', { name: 'E-mail' })).not.toHaveAttribute('target');
  });

  // 2. Edge Case: foto ainda não adicionada em public/
  it('deve exibir o monograma quando a foto não carregar', () => {
    render(<Hero />);

    fireEvent.error(screen.getByRole('img', { name: /retrato/i }));

    expect(screen.queryByRole('img', { name: /retrato/i })).not.toBeInTheDocument();
    expect(screen.getByTestId('monograma')).toHaveTextContent('MG');
  });
});
