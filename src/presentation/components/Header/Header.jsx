import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { perfil } from '../../../data/perfil';
import styled from './Header.module.css';

// Mesma ordem em que as seções aparecem na página
const secoes = [
  { ancora: 'projetos', rotulo: 'Projetos' },
  { ancora: 'historia', rotulo: 'Trajetória' },
  { ancora: 'competencias', rotulo: 'Competências' },
  { ancora: 'encaixe', rotulo: 'Onde me encaixo' },
];

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    if (!menuAberto) return undefined;
    const fecharNoEsc = (evento) => evento.key === 'Escape' && setMenuAberto(false);
    window.addEventListener('keydown', fecharNoEsc);
    return () => window.removeEventListener('keydown', fecharNoEsc);
  }, [menuAberto]);

  // Cada link fecha o menu do celular ao levar à seção
  const fechar = () => setMenuAberto(false);

  return (
    <header className={styled.header}>
      <div className={styled.progresso} aria-hidden="true" />
      <div className={styled.conteudo}>
        <Link to="/" className={styled.logo} onClick={fechar}>
          <span className={styled.marca}>{perfil.iniciais}</span>
          <span className={styled.nome}>{perfil.nome}</span>
        </Link>
        <nav className={styled.nav} aria-label="Navegação principal">
          <button
            type="button"
            className={styled.botaoMenu}
            aria-expanded={menuAberto}
            aria-controls="menu-secoes"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <span className={styled.iconeMenu} aria-hidden="true" data-aberto={menuAberto} />
            Menu
          </button>
          <ul id="menu-secoes" className={styled.lista} data-aberto={menuAberto}>
            {secoes.map((secao) => (
              <li key={secao.ancora}>
                <Link to={`/#${secao.ancora}`} className={styled.link} onClick={fechar}>
                  {secao.rotulo}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/#contato" className={styled.cta} onClick={fechar}>Contato</Link>
        </nav>
      </div>
    </header>
  );
}
