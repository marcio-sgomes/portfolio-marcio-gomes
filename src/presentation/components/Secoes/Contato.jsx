import { perfil } from '../../../data/perfil';
import { Icone } from '../Icone/Icone';
import { Secao } from '../Secao/Secao';
import styles from './Secoes.module.css';

export function Contato() {
  return (
    <Secao
      id="contato"
      rotulo="Contato"
      titulo="Vamos conversar sobre o seu próximo projeto."
      descricao="Seja para liderar uma iniciativa, estruturar um time ou construir uma aplicação do zero, estou a uma mensagem de distância."
    >
      <ul className={styles.contatos}>
        {perfil.contatos.map((contato) => (
          <li key={contato.id}>
            <a
              href={contato.url}
              className={styles.contato}
              {...(contato.id !== 'email' && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <span className={styles.contatoIcone}>
                <Icone nome={contato.id} tamanho={22} />
              </span>
              <span className={styles.contatoRotulo}>{contato.rotulo}</span>
              <span className={styles.contatoValor}>{contato.valor}</span>
              <span className={styles.contatoChamada}>
                {contato.chamada} <Icone nome="seta" tamanho={16} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
