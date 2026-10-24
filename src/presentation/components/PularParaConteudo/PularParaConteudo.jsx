import { comportamentoDaRolagem } from '../../utils/rolagem';
import styles from './PularParaConteudo.module.css';

// Primeiro item do Tab: quem navega pelo teclado ou leitor de tela pula o menu e vai direto ao conteúdo.
export function PularParaConteudo() {
  const pular = (evento) => {
    const conteudo = document.getElementById('conteudo');
    if (!conteudo) return;
    evento.preventDefault();
    conteudo.focus({ preventScroll: true });
    conteudo.scrollIntoView?.({ behavior: comportamentoDaRolagem() });
  };

  return (
    <a href="#conteudo" className={styles.pular} onClick={pular}>
      Pular para o conteúdo
    </a>
  );
}
