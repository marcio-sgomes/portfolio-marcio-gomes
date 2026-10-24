import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { PularParaConteudo } from './PularParaConteudo';

describe('PularParaConteudo', () => {
  afterEach(() => {
    delete Element.prototype.scrollIntoView;
  });

  it('leva o foco ao conteúdo principal sem mexer no endereço', () => {
    Element.prototype.scrollIntoView = vi.fn();
    render(
      <>
        <PularParaConteudo />
        <main id="conteudo" tabIndex={-1}>Conteúdo</main>
      </>,
    );

    const link = screen.getByRole('link', { name: /pular para o conteúdo/i });
    const evento = fireEvent.click(link);

    expect(evento).toBe(false); // preventDefault: o #conteudo não vai para a barra de endereço
    expect(screen.getByRole('main')).toHaveFocus();
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

  it('sem conteúdo na página, deixa o link agir normalmente', () => {
    render(<PularParaConteudo />);
    expect(fireEvent.click(screen.getByRole('link'))).toBe(true);
  });

  it('funciona mesmo em navegador sem scrollIntoView', () => {
    render(
      <>
        <PularParaConteudo />
        <main id="conteudo" tabIndex={-1}>Conteúdo</main>
      </>,
    );
    fireEvent.click(screen.getByRole('link'));
    expect(screen.getByRole('main')).toHaveFocus();
  });
});
