import { perfil } from '../../../data/perfil';
import { Secao } from '../Secao/Secao';
import styles from './Secoes.module.css';

export function Perfil() {
  return (
    <Secao id="perfil" rotulo="Perfil" titulo="Visão de gestor. Mãos de desenvolvedor.">
      <div className={styles.perfil}>
        <div className={styles.perfilTexto}>
          {perfil.sobre.map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}
        </div>
        <blockquote className={styles.citacao}>
          <p>“{perfil.citacao}”</p>
          <footer>{perfil.nomeCompleto}</footer>
        </blockquote>
      </div>

      <dl className={styles.destaques}>
        {perfil.destaques.map((destaque) => (
          <div key={destaque.rotulo} className={styles.destaque}>
            <dt className={styles.destaqueValor}>{destaque.valor}</dt>
            <dd className={styles.destaqueRotulo}>{destaque.rotulo}</dd>
          </div>
        ))}
      </dl>
    </Secao>
  );
}
