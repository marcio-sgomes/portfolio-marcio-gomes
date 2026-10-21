import { perfil } from '../../../data/perfil';
import { Icone } from '../Icone/Icone';
import styles from './Materia.module.css';

// `destaque` = botão cheio (ação principal da abertura); sem ele, contorno.
export function BotaoCurriculo({ destaque = false }) {
  const classe = destaque ? `${styles.botaoCurriculo} ${styles.botaoCurriculoDestaque}` : styles.botaoCurriculo;

  return (
    <a href={perfil.curriculo} download="Curriculo-Marcio-Gomes.pdf" className={classe}>
      <Icone nome="download" tamanho={18} />
      Baixar currículo (PDF)
    </a>
  );
}
