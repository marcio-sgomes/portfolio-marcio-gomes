import styles from './About.module.css';

export function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Sobre a GomesTech & Governança</h1>
      
      <section className={styles.card}>
        <h2 className={styles.subtitulo}>Visão Geral do Projeto</h2>
        <p className={styles.texto}>
          Este portfólio foi arquitetado e desenvolvido com rigor de engenharia de software, 
          aplicando os princípios de <strong>Clean Architecture</strong>, separação estrita de camadas 
          (Domínio, Dados e Apresentação) e padronização rigorosa de nomenclaturas.
        </p>
        <p className={styles.texto}>
          O objetivo central é demonstrar a capacidade de construir aplicações web escaláveis, 
          modulares e altamente testáveis, integrando-se diretamente com serviços externos 
          via API REST (como a listagem dinâmica de repositórios do GitHub).
        </p>
      </section>

      <section className={styles.card}>
        <h2 className={styles.subtitulo}>Foco Técnico e Ferramentas</h2>
        <p className={styles.texto}>
          A stack tecnológica foi escolhida visando performance, ecossistema moderno e 
          boas práticas de desenvolvimento ágil:
        </p>
        
        <div className={styles.listaTech}>
          <div className={styles.techItem}>React & Vite</div>
          <div className={styles.techItem}>React Router DOM</div>
          <div className={styles.techItem}>CSS Modules & Tokens</div>
          <div className={styles.techItem}>Clean Architecture</div>
          <div className={styles.techItem}>GitFlow & Conventional Commits</div>
          <div className={styles.techItem}>GitHub Actions (CI/CD)</div>
        </div>
      </section>
    </main>
  );
}