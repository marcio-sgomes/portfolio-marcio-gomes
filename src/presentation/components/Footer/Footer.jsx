import { Link } from 'react-router-dom';
import { perfil, atributosDoLink } from '../../../data/perfil';
import { Letreiro } from '../Letreiro/Letreiro';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Letreiro />
      <div className={styles.conteudo}>
        <p>© {new Date().getFullYear()} GomesTech — feito por {perfil.nome}</p>
        <nav className={styles.links} aria-label="Links do rodapé">
          {perfil.contatos.map((contato) => (
            <a key={contato.id} href={contato.url} {...atributosDoLink(contato)}>
              {contato.rotulo}
            </a>
          ))}
          <Link to="/sobre">Sobre este site</Link>
        </nav>
      </div>
    </footer>
  );
}
