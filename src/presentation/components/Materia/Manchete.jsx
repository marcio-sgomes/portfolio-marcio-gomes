import { useState } from 'react';
import { perfil } from '../../../data/perfil';
import { BotaoCurriculo } from './BotaoCurriculo';
import styles from './Materia.module.css';

// Abertura no formato de matéria: rótulo, título, linha fina, crédito e foto com legenda.
export function Manchete() {
  const [fotoIndisponivel, setFotoIndisponivel] = useState(false);
  const { manchete } = perfil;

  return (
    <section id="inicio" className={styles.manchete} aria-labelledby="manchete-titulo">
      <div className={styles.conteudo}>
        <p className={styles.rotulo}>{manchete.rotulo}</p>
        <h1 id="manchete-titulo" className={styles.titulo}>{manchete.titulo}</h1>
        <p className={styles.linhaFina}>{manchete.linhaFina}</p>
        <p className={styles.credito}>
          <span>{manchete.local}</span>
          <span aria-hidden="true">·</span>
          <span>{manchete.atualizacao}</span>
        </p>
        <BotaoCurriculo />

        <figure className={`${styles.foto} revelar`}>
          {fotoIndisponivel ? (
            <div className={styles.monograma} data-testid="monograma" aria-hidden="true">
              {perfil.iniciais}
            </div>
          ) : (
            <img
              src={perfil.foto}
              alt={`Foto de ${perfil.nome}`}
              className={styles.imagem}
              onError={() => setFotoIndisponivel(true)}
            />
          )}
          <figcaption className={styles.legenda}>{manchete.legendaFoto}</figcaption>
        </figure>
      </div>
    </section>
  );
}
