import { Link } from 'react-router-dom';
import styled from './Header.module.css';

export function Header() {
  return (
    <header className={styled.header}>
      <h2 className={styled.logo}>GomesTech</h2>
      <nav className={styled.nav}>
        <Link to="/" className={styled.link}>Início</Link>
        <Link to="/sobre" className={styled.link}>Sobre Mim</Link>
      </nav>
    </header>
  );
}