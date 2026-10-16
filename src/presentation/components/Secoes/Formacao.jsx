import { perfil } from '../../../data/perfil';
import { Secao } from '../Secao/Secao';
import styles from './Secoes.module.css';

export function Formacao() {
  return (
    <Secao
      id="formacao"
      rotulo="Formação"
      titulo="Base acadêmica em tecnologia e gestão"
      descricao="Uma formação que combina a engenharia de software com a gestão ágil de projetos."
    >
      <ol className={styles.formacao}>
        {perfil.formacao.map((item) => (
          <li key={item.curso} className={styles.formacaoItem}>
            <span className={styles.formacaoNivel}>{item.nivel}</span>
            <h3 className={styles.formacaoCurso}>{item.curso}</h3>
            <p className={styles.formacaoInstituicao}>{item.instituicao}</p>
            <p className={styles.formacaoTexto}>{item.descricao}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
