import { perfil } from '../../../data/perfil';
import { Icone } from '../Icone/Icone';
import styles from './Materia.module.css';

// Link para o recrutador baixar o currículo em PDF.
export function BotaoCurriculo() {
  return (
    <a href={perfil.curriculo} download="Curriculo-Marcio-Gomes.pdf" className={styles.botaoCurriculo}>
      <Icone nome="download" tamanho={18} />
      Baixar currículo (PDF)
    </a>
  );
}
