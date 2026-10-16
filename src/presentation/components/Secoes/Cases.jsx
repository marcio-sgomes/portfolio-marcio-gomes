import { perfil } from '../../../data/perfil';
import { Secao } from '../Secao/Secao';
import styles from './Secoes.module.css';

export function Cases() {
  return (
    <Secao
      id="cases"
      rotulo="Cases & Consultoria"
      titulo="Projetos que saíram do papel"
      descricao="Atuação técnica e gerencial em problemas reais: do diagnóstico à entrega."
      destacada
    >
      <div className={styles.cases}>
        {perfil.cases.map((item) => (
          <article key={item.cliente} className={styles.case}>
            <span className={styles.caseTipo}>{item.tipo}</span>
            <h3 className={styles.caseCliente}>{item.cliente}</h3>
            <p className={styles.caseResumo}>{item.resumo}</p>
            <ul className={styles.competenciaItens}>
              {item.entregas.map((entrega) => (
                <li key={entrega}>{entrega}</li>
              ))}
            </ul>
            {item.link && (
              <a href={item.link.url} target="_blank" rel="noopener noreferrer" className={styles.caseLink}>
                {item.link.rotulo} →
              </a>
            )}
          </article>
        ))}
      </div>
    </Secao>
  );
}
