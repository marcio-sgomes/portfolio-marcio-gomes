import { Link } from 'react-router-dom';
import { perfil } from '../../../data/perfil';
import styled from './Header.module.css';

const secoes = [
  { ancora: 'historia', rotulo: 'A história' },
  { ancora: 'projetos', rotulo: 'Projetos' },
  { ancora: 'competencias', rotulo: 'Competências' },
  { ancora: 'encaixe', rotulo: 'Onde me encaixo' },
];

export function Header() {
  return (
    <header className={styled.header}>
      <div className={styled.progresso} aria-hidden="true" />
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
          <Link to="/#contato" className={styled.cta}>Contato</Link>
        </nav>
      </div>
    </header>
  );
}
