import { useState } from 'react';
import { iniciaisDoNome, corDoNome } from './logoProjeto';
import styles from './ProjectCard.module.css';

export function ProjetoLogo({ nome, logoUrl }) {
  const [logoIndisponivel, setLogoIndisponivel] = useState(false);

  if (logoUrl && !logoIndisponivel) {
    return (
      <span className={styles.logo}>
        <img
          src={logoUrl}
          alt={`Logo de ${nome}`}
          className={styles.logoImagem}
          loading="lazy"
          onError={() => setLogoIndisponivel(true)}
        />
      </span>
    );
  }

  return (
    <span
      className={`${styles.logo} ${styles.monograma}`}
      style={{ '--cor-logo': corDoNome(nome) }}
      data-testid="logo-monograma"
      aria-hidden="true"
    >
      {iniciaisDoNome(nome)}
    </span>
  );
}
