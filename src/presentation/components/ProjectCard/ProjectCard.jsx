import { ProjetoLogo } from './ProjetoLogo';
import styles from './ProjectCard.module.css';

export function ProjectCard({ projeto }) {
  return (
    <article className={styles.card}>
      <div className={styles.topo}>
        <ProjetoLogo nome={projeto.nome} logoUrl={projeto.logoUrl} />
        <div className={styles.selos}>
          <span className={projeto.estudo ? styles.seloEstudo : styles.seloAutoral}>
            {projeto.estudo ? 'Estudo' : 'Autoral'}
          </span>
          {projeto.emDesenvolvimento && <span className={styles.seloDesenvolvimento}>Em desenvolvimento</span>}
          {projeto.privado && <span className={styles.seloPrivado}>Código privado</span>}
        </div>
      </div>

      <h3 className={styles.titulo}>{projeto.nome}</h3>
      <p className={styles.descricao}>{projeto.descricao}</p>

      {projeto.tecnologias.length > 0 && (
        <div className={styles.tecnologias}>
          {projeto.tecnologias.map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>
      )}

      <div className={styles.acoes}>
        {projeto.paginaUrl && (
          <a href={projeto.paginaUrl} target="_blank" rel="noopener noreferrer" className={styles.linkPrincipal}>
            Ver página
          </a>
        )}
        {projeto.codigoUrl && (
          <a href={projeto.codigoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Ver repositório
          </a>
        )}
      </div>
    </article>
  );
}
