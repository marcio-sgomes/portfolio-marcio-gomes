import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header style={{ padding: '20px', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
      <h2>GomesTech</h2>
      <nav>
        <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#333' }}>Início</Link>
        <Link to="/sobre" style={{ textDecoration: 'none', color: '#333' }}>Sobre Mim</Link>
      </nav>
    </header>
  );
}