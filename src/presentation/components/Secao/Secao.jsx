import styles from './Secao.module.css';

// Estrutura comum das seções da Home: rótulo, título, descrição e conteúdo.
export function Secao({ id, rotulo, titulo, descricao, destacada = false, children }) {
  return (
    <section id={id} className={`${styles.secao} ${destacada ? styles.destacada : ''}`}>
      <div className={styles.conteudo}>
        <header className={styles.cabecalho}>
          <span className={styles.rotulo}>{rotulo}</span>
          <h2 className={styles.titulo}>{titulo}</h2>
          {descricao && <p className={styles.descricao}>{descricao}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
