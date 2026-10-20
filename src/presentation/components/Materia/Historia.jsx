import { perfil } from '../../../data/perfil';
import styles from './Materia.module.css';

function Paragrafo({ conteudo }) {
  if (typeof conteudo === 'string') return <p>{conteudo}</p>;

  return (
    <p>
      <strong>{conteudo.destaque}</strong> {conteudo.texto}
    </p>
  );
}

function Quadro({ titulo, linhas }) {
  return (
    <div className={`${styles.quadro} revelar`}>
      <p className={styles.quadroTitulo}>{titulo}</p>
      <dl>
        {linhas.map(([cliente, tecnologia]) => (
          <div key={cliente} className={styles.quadroLinha}>
            <dt>{cliente}</dt>
            <dd>{tecnologia}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// A história contada como matéria, com o quadro "Raio-X" ao lado.
export function Historia() {
  return (
    <section id="historia" className={styles.historia} aria-label="A história">
      <article className={styles.texto}>
        {perfil.historia.map((capitulo, indice) => (
          <div key={capitulo.titulo ?? indice} className={styles.capitulo}>
            {capitulo.titulo && <h2 className={`${styles.intertitulo} revelar`}>{capitulo.titulo}</h2>}
            {capitulo.paragrafos.map((paragrafo, posicao) => (
              <Paragrafo key={posicao} conteudo={paragrafo} />
            ))}
            {capitulo.citacao && (
              <blockquote className={`${styles.citacao} revelar`}>
                <p>“{capitulo.citacao}”</p>
              </blockquote>
            )}
            {capitulo.quadro && <Quadro {...capitulo.quadro} />}
            {capitulo.fechamento && <p>{capitulo.fechamento}</p>}
          </div>
        ))}
      </article>

      <aside className={`${styles.raioX} revelar`} aria-label="Raio-X">
        <p className={styles.raioXTitulo}>Raio-X</p>
        <dl>
          {perfil.raioX.map((item) => (
            <div key={item.rotulo} className={styles.raioXItem}>
              <dt>{item.rotulo}</dt>
              {item.valores.map((valor) => (
                <dd key={valor}>{valor}</dd>
              ))}
            </div>
          ))}
        </dl>
        <a href="#contato" className={styles.botao}>
          Falar com Márcio
        </a>
      </aside>
    </section>
  );
}
