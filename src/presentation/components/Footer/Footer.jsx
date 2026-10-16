import { Link } from 'react-router-dom';
import { perfil } from '../../../data/perfil';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.conteudo}>
        <p>
          © {new Date().getFullYear()} {perfil.nomeCompleto} · {perfil.cargo}
        </p>
        <nav className={styles.links} aria-label="Links do rodapé">
          {perfil.contatos.map((contato) => (
            <a
              key={contato.id}
              href={contato.url}
              {...(contato.id !== 'email' && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {contato.rotulo}
            </a>
          ))}
          <Link to="/sobre">Sobre este site</Link>
        </nav>
      </div>
    </footer>
  );
}
