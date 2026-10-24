import { Link } from 'react-router-dom';
import { useTituloDaPagina } from '../../hooks/useTituloDaPagina';
import styles from './NaoEncontrada.module.css';

// Página para endereços que não existem (link antigo ou digitado errado)
export function NaoEncontrada() {
  useTituloDaPagina('Página não encontrada');

  return (
    <main id="conteudo" tabIndex={-1} className={styles.pagina}>
      <p className={styles.codigo}>404</p>
      <h1 className={styles.titulo}>Página não encontrada</h1>
      <p className={styles.texto}>O endereço pode ter mudado ou foi digitado com algum erro.</p>
      <Link to="/" className={styles.botao}>
        Voltar ao início
      </Link>
    </main>
  );
}
