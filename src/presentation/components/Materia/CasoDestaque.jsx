import { casoEmDestaque as caso } from '../../../data/projetosDestaque';
import { ProjetoLogo } from '../ProjectCard/ProjetoLogo';
import { Icone } from '../Icone/Icone';
import styles from './CasoDestaque.module.css';

// Estudo de caso do projeto em destaque: origem, antes × depois, quem usa e regras definidas.
export function CasoDestaque() {
  return (
    <article id="prismaq" className={`${styles.caso} revelar`} aria-labelledby="caso-titulo">
      <header className={styles.topo}>
        <ProjetoLogo nome={caso.nome} logoUrl={caso.logoUrl} />
        <div className={styles.identidade}>
          <p className={styles.rotulo}>{caso.rotulo}</p>
          <h3 id="caso-titulo" className={styles.titulo}>
            <span className={styles.nome}>{caso.nome}:</span> {caso.titulo}
          </h3>
          <p className={styles.slogan}>{caso.slogan}</p>
        </div>
        <span className={styles.selo}>{caso.situacao}</span>
      </header>

      <p className={styles.abertura}>{caso.abertura}</p>

      <div className={styles.corpo}>
        <section aria-labelledby="caso-antes-depois">
          <h4 id="caso-antes-depois" className={styles.subtitulo}>O que muda</h4>
          <div className={styles.comparativo} role="table" aria-label="Antes, no papel, e com o PrismaQ">
            <div className={styles.linhaCabecalho} role="row">
              <span role="columnheader">Antes, no papel</span>
              <span role="columnheader">Com o PrismaQ</span>
            </div>
            {caso.antesDepois.map((item) => (
              <div key={item.antes} className={styles.linha} role="row">
                <span role="cell" className={styles.antes}>{item.antes}</span>
                <span role="cell" className={styles.depois}>{item.depois}</span>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.lateral}>
          <section aria-labelledby="caso-perfis">
            <h4 id="caso-perfis" className={styles.subtitulo}>Quem usa</h4>
            <dl className={styles.perfis}>
              {caso.perfis.map((perfil) => (
                <div key={perfil.titulo}>
                  <dt>{perfil.titulo}</dt>
                  <dd>{perfil.texto}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="caso-regras">
            <h4 id="caso-regras" className={styles.subtitulo}>Regras que defini</h4>
            <ul className={styles.regras}>
              {caso.regras.map((regra) => (
                <li key={regra}>{regra}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <footer className={styles.rodape}>
        <p className={styles.tecnologias}>{caso.tecnologias}</p>
        <a href={caso.url} target="_blank" rel="noopener noreferrer" className={styles.botao}>
          Abrir o PrismaQ
          <Icone nome="seta" tamanho={18} />
        </a>
        <p className={styles.nota}>{caso.nota}</p>
      </footer>
    </article>
  );
}
