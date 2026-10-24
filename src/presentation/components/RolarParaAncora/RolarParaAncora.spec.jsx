import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Link } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { RolarParaAncora } from './RolarParaAncora';
import { comportamentoDaRolagem } from '../../utils/rolagem';

const preferirMenosMovimento = (reduzir) => {
  window.matchMedia = vi.fn().mockReturnValue({ matches: reduzir });
};

function Pagina({ inicial = '/' }) {
  return (
    <MemoryRouter initialEntries={[inicial]}>
      <RolarParaAncora />
      <Link to="/#projetos">Projetos</Link>
      <Link to="/sobre">Sobre</Link>
      <section id="projetos">Seção</section>
      <section id="ação">Com acento</section>
    </MemoryRouter>
  );
}

describe('RolarParaAncora', () => {
  let rolar;

  beforeEach(() => {
    window.scrollTo = vi.fn();
    rolar = vi.fn();
    Element.prototype.scrollIntoView = rolar;
    preferirMenosMovimento(false);
  });

  afterEach(() => {
    delete Element.prototype.scrollIntoView;
    delete window.matchMedia;
  });

  it('sem âncora, abre a página no topo', () => {
    render(<Pagina />);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(rolar).not.toHaveBeenCalled();
  });

  it('com âncora, rola até a seção com animação', () => {
    render(<Pagina inicial="/#projetos" />);
    expect(rolar).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('clicar de novo no mesmo item do menu rola outra vez até a seção', () => {
    render(<Pagina />);
    fireEvent.click(screen.getByText('Projetos'));
    fireEvent.click(screen.getByText('Projetos'));
    expect(rolar).toHaveBeenCalledTimes(2);
  });

  it('respeita quem pediu para reduzir o movimento', () => {
    preferirMenosMovimento(true);
    render(<Pagina inicial="/#projetos" />);
    expect(rolar).toHaveBeenCalledWith({ behavior: 'auto' });
  });

  it('entende âncora com acento e ignora âncora que não existe', () => {
    render(<Pagina inicial="/#a%C3%A7%C3%A3o" />);
    expect(rolar).toHaveBeenCalledTimes(1);

    rolar.mockClear();
    render(<Pagina inicial="/#nao-existe" />);
    expect(rolar).not.toHaveBeenCalled();
  });

  it('volta ao topo ao trocar de página', () => {
    render(<Pagina inicial="/#projetos" />);
    fireEvent.click(screen.getByText('Sobre'));
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it('sem matchMedia no navegador, usa a rolagem com animação', () => {
    delete window.matchMedia;
    expect(comportamentoDaRolagem()).toBe('smooth');
  });
});
