import { perfil } from '../../../data/perfil';
import { Secao } from '../Secao/Secao';
import styles from './Secoes.module.css';

export function Metodo() {
  return (
    <Secao
      id="metodo"
      rotulo="Método"
      titulo="Como conduzo um projeto"
      descricao="Um processo claro, do primeiro diagnóstico à evolução contínua, para que ninguém precise adivinhar o próximo passo."
    >
      <ol className={styles.etapas}>
        {perfil.metodo.map((etapa, indice) => (
          <li key={etapa.titulo} className={styles.etapa}>
            <span className={styles.etapaNumero}>{String(indice + 1).padStart(2, '0')}</span>
            <h3 className={styles.etapaTitulo}>{etapa.titulo}</h3>
            <p className={styles.etapaTexto}>{etapa.descricao}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
