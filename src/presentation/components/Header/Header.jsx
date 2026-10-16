import { Link } from 'react-router-dom';
import { perfil } from '../../../data/perfil';
import styled from './Header.module.css';

const secoes = [
  { ancora: 'perfil', rotulo: 'Perfil' },
  { ancora: 'competencias', rotulo: 'Competências' },
  { ancora: 'formacao', rotulo: 'Formação' },
  { ancora: 'cases', rotulo: 'Cases' },
  { ancora: 'projetos', rotulo: 'Projetos' },
];

export function Header() {
  return (
    <header className={styled.header}>
      <div className={styled.conteudo}>
        <Link to="/" className={styled.logo}>
          <span className={styled.marca}>{perfil.iniciais}</span>
          <span className={styled.nome}>{perfil.nome}</span>
        </Link>
        <nav className={styled.nav} aria-label="Navegação principal">
          {secoes.map((secao) => (
            <Link key={secao.ancora} to={`/#${secao.ancora}`} className={styled.link}>
              {secao.rotulo}
            </Link>
          ))}
          <Link to="/#contato" className={styled.cta}>Fale comigo</Link>
        </nav>
      </div>
    </header>
  );
}
