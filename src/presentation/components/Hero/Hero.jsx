import { useState } from 'react';
import { perfil, contatoPorId } from '../../../data/perfil';
import { Icone } from '../Icone/Icone';
import styles from './Hero.module.css';

export function Hero() {
  const [fotoIndisponivel, setFotoIndisponivel] = useState(false);
  const email = contatoPorId('email');

  return (
    <section className={styles.hero} aria-labelledby="hero-titulo">
      <div className={styles.foto}>
        <figure className={styles.moldura}>
          {fotoIndisponivel ? (
            <div className={styles.monograma} data-testid="monograma" aria-hidden="true">
              {perfil.iniciais}
            </div>
          ) : (
            <img
              src={perfil.foto}
              alt={`Retrato de ${perfil.nome}`}
              className={styles.imagem}
              onError={() => setFotoIndisponivel(true)}
            />
          )}
          <figcaption className={styles.legenda}>
            <span>{perfil.nomeCompleto}</span>
            {perfil.cargo}
          </figcaption>
        </figure>
      </div>

      <div className={styles.conteudo}>
        <span className={styles.rotulo}>Gestão de Projetos · Desenvolvimento de Software</span>
        <h1 id="hero-titulo" className={styles.nome}>{perfil.nome}</h1>
        <p className={styles.chamada}>{perfil.chamada}</p>
        <p className={styles.resumo}>{perfil.resumo}</p>

        <ul className={styles.caracteristicas}>
          {perfil.caracteristicas.map((item, indice) => (
            <li key={item.titulo} className={styles.caracteristica}>
              <span className={styles.numero}>{String(indice + 1).padStart(2, '0')}</span>
              <div>
                <h3 className={styles.caracteristicaTitulo}>{item.titulo}</h3>
                <p className={styles.caracteristicaTexto}>{item.descricao}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.acoes}>
          <a href={email.url} className={styles.botaoPrincipal}>
            Entrar em contato <Icone nome="seta" tamanho={18} />
          </a>
          <a href="#projetos" className={styles.botaoSecundario}>Ver projetos</a>
        </div>

        <ul className={styles.redes} aria-label="Redes e contato">
          {perfil.contatos.map((contato) => (
            <li key={contato.id}>
              <a
                href={contato.url}
                className={styles.rede}
                aria-label={contato.rotulo}
                title={contato.rotulo}
                {...(contato.id !== 'email' && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <Icone nome={contato.id} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
