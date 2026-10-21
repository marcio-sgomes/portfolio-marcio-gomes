import { perfil } from '../../../data/perfil';
import { Secao } from '../Secao/Secao';
import styles from './Materia.module.css';

export function Competencias() {
  return (
    <Secao
      id="competencias"
      rotulo="Competências"
      titulo="O que eu entrego, e o que aperfeiçoo a cada projeto"
      descricao="Onde já entrego resultado, as ferramentas que uso no dia a dia e o que estou aperfeiçoando."
    >
      <div className={styles.colunas}>
        {perfil.competencias.map((bloco) => (
          <article key={bloco.titulo} className={`${styles.coluna} ${styles[bloco.tom]} revelar`}>
            <h3>{bloco.titulo}</h3>
            <ul>
              {bloco.itens.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Secao>
  );
}
