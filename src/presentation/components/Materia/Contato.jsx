import { perfil, atributosDoLink } from '../../../data/perfil';
import { Icone } from '../Icone/Icone';
import { BotaoCurriculo } from './BotaoCurriculo';
import styles from './Materia.module.css';

export function Contato() {
  return (
    <section id="contato" className={styles.contato} aria-labelledby="contato-titulo">
      <div className={`${styles.contatoCaixa} revelar`}>
        <h2 id="contato-titulo" className={styles.contatoTitulo}>Vamos conversar?</h2>
        <p className={styles.contatoTexto}>
          Estou aberto a vagas em requisitos, implantação, qualidade e projetos, e a conversas sobre qualquer um dos
          projetos acima.
        </p>
        <ul className={styles.contatoLista}>
          {perfil.contatos.map((contato) => (
            <li key={contato.id}>
              <a
                href={contato.url}
                className={`${styles.contatoBotao} ${styles[contato.id]}`}
                {...atributosDoLink(contato)}
              >
                <Icone nome={contato.id} tamanho={18} />
                <span>
                  <span className={styles.contatoRotulo}>{contato.rotulo}</span>
                  <span className={styles.contatoValor}> {contato.valor}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <BotaoCurriculo />
      </div>
    </section>
  );
}
