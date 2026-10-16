import { perfil } from '../../../data/perfil';
import { Secao } from '../Secao/Secao';
import styles from './Secoes.module.css';

export function Competencias() {
  return (
    <Secao
      id="competencias"
      rotulo="Competências"
      titulo="Onde eu gero resultado"
      descricao="Três frentes complementares que sustentam projetos entregues com qualidade, no prazo e alinhados ao negócio."
      destacada
    >
      <div className={styles.competencias}>
        {perfil.competencias.map((area, indice) => (
          <article key={area.titulo} className={styles.competencia}>
            <span className={styles.competenciaIndice}>{String(indice + 1).padStart(2, '0')}</span>
            <h3 className={styles.competenciaTitulo}>{area.titulo}</h3>
            <p className={styles.competenciaResumo}>{area.resumo}</p>
            <ul className={styles.competenciaItens}>
              {area.itens.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Secao>
  );
}
