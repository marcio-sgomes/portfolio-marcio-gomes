import { useState } from 'react';
import { perfil } from '../../../data/perfil';
import { BotaoCurriculo } from './BotaoCurriculo';
import { Icone } from '../Icone/Icone';
import styles from './Materia.module.css';

// Abertura no formato de matéria: rótulo e título na largura toda;
// abaixo, linha fina, crédito e ações à esquerda e a foto com legenda à direita.
// Fecha com o Raio-X: o resumo para quem só tem alguns segundos.
export function Manchete() {
  const [fotoIndisponivel, setFotoIndisponivel] = useState(false);
  const { manchete } = perfil;

  return (
    <section id="inicio" className={styles.manchete} aria-labelledby="manchete-titulo">
      <div className={styles.conteudo}>
        <p className={styles.rotulo}>{manchete.rotulo}</p>
        <h1 id="manchete-titulo" className={styles.titulo}>{manchete.titulo}</h1>

        <div className={styles.abertura}>
          <div className={styles.aberturaTexto}>
            <p className={styles.linhaFina}>{manchete.linhaFina}</p>
            <p className={styles.credito}>
              <span>{manchete.local}</span>
              <span aria-hidden="true">·</span>
              <span>{manchete.atualizacao}</span>
            </p>
            <div className={styles.acoes}>
              <BotaoCurriculo destaque />
              <a href="#projetos" className={styles.botaoSecundario}>
                Ver projetos
                <Icone nome="seta" tamanho={18} />
              </a>
            </div>
          </div>

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

        <aside className={`${styles.raioX} revelar`} aria-label="Raio-X">
          <p className={styles.raioXTitulo}>Raio-X · em resumo</p>
          <dl className={styles.raioXLista}>
            {perfil.raioX.map((item) => (
              <div key={item.rotulo} className={styles.raioXItem}>
                <dt>{item.rotulo}</dt>
                {item.valores.map((valor) => (
                  <dd key={valor}>{valor}</dd>
                ))}
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
