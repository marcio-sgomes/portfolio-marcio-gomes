import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';

const montar = () =>
  render(
    <MemoryRouter>
      <Header />
      <main>Conteúdo da página</main>
    </MemoryRouter>,
  );

describe('Header: menu do celular', () => {
  it('abre e fecha pelo botão Menu', () => {
    montar();
    const menu = screen.getByRole('button', { name: /menu/i });

    fireEvent.click(menu);
    expect(menu).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(menu);
    expect(menu).toHaveAttribute('aria-expanded', 'false');
  });

  it('fecha ao tocar fora do topo, mas não ao tocar dentro dele', () => {
    montar();
    const menu = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menu);

    fireEvent.pointerDown(screen.getByRole('link', { name: 'Projetos' }));
    expect(menu).toHaveAttribute('aria-expanded', 'true');

    fireEvent.pointerDown(screen.getByText('Conteúdo da página'));
    expect(menu).toHaveAttribute('aria-expanded', 'false');
  });

  it('fecha com Esc e ignora outras teclas', () => {
    montar();
    const menu = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menu);

    fireEvent.keyDown(window, { key: 'Enter' });
    expect(menu).toHaveAttribute('aria-expanded', 'true');
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(menu).toHaveAttribute('aria-expanded', 'false');
  });

  it('fecha ao escolher uma seção, ao tocar no logo ou em Contato', () => {
    montar();
    const menu = screen.getByRole('button', { name: /menu/i });

    for (const nome of ['Competências', /márcio gomes/i, 'Contato']) {
      fireEvent.click(menu);
      expect(menu).toHaveAttribute('aria-expanded', 'true');
      fireEvent.click(screen.getByRole('link', { name: nome }));
      expect(menu).toHaveAttribute('aria-expanded', 'false');
    }
  });

  it('leva às seções na ordem da página', () => {
    montar();
    const rotulos = screen.getAllByRole('listitem').map((item) => item.textContent);
    expect(rotulos).toEqual(['Projetos', 'Trajetória', 'Competências', 'Onde me encaixo']);
    expect(screen.getByRole('link', { name: 'Trajetória' })).toHaveAttribute('href', '/#historia');
  });
});
