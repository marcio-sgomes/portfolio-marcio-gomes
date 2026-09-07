import styles from './ProjectCard.module.css';

export function ProjectCard({ projeto }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.titulo}>{projeto.nome}</h3>
      <p className={styles.descricao}>{projeto.descricao}</p>
      
      <div className={styles.tecnologias}>
        {projeto.tecnologias.map((tech, index) => (
          <span key={index} className={styles.tag}>{tech}</span>
        ))}
      </div>

      <a 
        href={projeto.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.link}
      >
        Ver Repositório
      </a>
    </article>
  );
}