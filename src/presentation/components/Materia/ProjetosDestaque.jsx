import { gruposDeProjetos, casoEmDestaque, situacaoDoProjeto } from '../../../data/projetosDestaque';
import { CasoDestaque } from './CasoDestaque';
import { ProjetoLogo } from '../ProjectCard/ProjetoLogo';
import { Secao } from '../Secao/Secao';
import styles from './Materia.module.css';

function CartaoProjeto({ projeto, grupo }) {
  const situacao = situacaoDoProjeto(projeto, grupo);

  return (
    <article className={`${styles.cartao} ${styles[situacao.tom]} revelar`}>
      <div className={styles.cartaoTopo}>
        <ProjetoLogo nome={projeto.nome} logoUrl={projeto.logoUrl} />
        <span className={styles.selo}>{situacao.selo}</span>
      </div>
      <h4 className={styles.cartaoTitulo}>{projeto.nome}</h4>
      <p className={styles.slogan}>{projeto.slogan}</p>
      <p className={styles.categoria}>{projeto.categoria}</p>
      <p className={styles.descricaoProjeto}>{projeto.descricao}</p>
      {projeto.nota && <p className={styles.nota}>{projeto.nota}</p>}
      {projeto.url && (
        <a href={projeto.url} target="_blank" rel="noopener noreferrer" className={styles.abrir}>
          {projeto.rotuloLink ?? 'Abrir o app'} <span aria-hidden="true">→</span>
          <span className={styles.somenteLeitor}> {projeto.nome}</span>
        </a>
      )}
    </article>
  );
}

export function ProjetosDestaque() {
  return (
    <Secao
      id="projetos"
      rotulo="Projetos"
      titulo="Problemas reais, decisões claras"
      descricao="Para quem é cada projeto, o problema e o que foi definido. Separados por situação."
    >
      <CasoDestaque />

      {gruposDeProjetos.map((grupo) => (
        <div key={grupo.id} className={styles.grupo}>
          <h3 className={`${styles.grupoTitulo} ${styles[grupo.tom]}`}>{grupo.titulo}</h3>
          <div className={styles.grade}>
            {grupo.projetos
              .filter((projeto) => projeto.nome !== casoEmDestaque.nome)
              .map((projeto) => (
                <CartaoProjeto key={projeto.nome} projeto={projeto} grupo={grupo} />
              ))}
          </div>
        </div>
      ))}
    </Secao>
  );
}
