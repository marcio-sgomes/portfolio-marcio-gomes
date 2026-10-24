import { useState, useRef } from 'react';
import { perfil } from '../../../data/perfil';
import { Secao } from '../Secao/Secao';
import { comportamentoDaRolagem } from '../../utils/rolagem';
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

function Capitulo({ capitulo }) {
  return (
    <div className={styles.capitulo}>
      {capitulo.titulo && <h3 className={`${styles.intertitulo} revelar`}>{capitulo.titulo}</h3>}
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
  );
}

// A trajetória contada como matéria. Abre com a introdução;
// o restante fica a um clique, para a página não ficar longa demais.
export function Historia() {
  const [aberta, setAberta] = useState(false);
  const inicio = useRef(null);
  const [abertura, ...capitulos] = perfil.historia;

  const alternar = () => {
    if (aberta) inicio.current?.scrollIntoView?.({ block: 'start', behavior: comportamentoDaRolagem() });
    setAberta(!aberta);
  };

  return (
    <Secao id="historia" rotulo="Trajetória" titulo="Doze anos de operação antes do primeiro código" destacada>
      <article ref={inicio} className={styles.texto}>
        <Capitulo capitulo={abertura} />

        <div id="historia-completa" hidden={!aberta} className={styles.texto}>
          {capitulos.map((capitulo, indice) => (
            <Capitulo key={`${indice}-${capitulo.titulo}`} capitulo={capitulo} />
          ))}
        </div>

        <button
          type="button"
          className={styles.lerMais}
          aria-expanded={aberta}
          aria-controls="historia-completa"
          onClick={alternar}
        >
          {aberta ? 'Recolher a trajetória' : 'Ler a trajetória completa'}
          <span aria-hidden="true" className={styles.lerMaisSeta}>{aberta ? '↑' : '↓'}</span>
        </button>
      </article>
    </Secao>
  );
}
