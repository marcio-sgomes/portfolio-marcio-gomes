import { perfil } from '../../../data/perfil';
import { todosOsProjetos } from '../../../data/projetosDestaque';
import { ProjetoLogo } from '../ProjectCard/ProjetoLogo';
import styles from './Letreiro.module.css';

function Faixa({ rotulo, itens, renderizar, sentido }) {
  // A lista aparece duas vezes para o movimento emendar sem corte; a cópia fica oculta para leitores de tela.
  const grupo = (copia) => (
    <ul className={styles.grupo} aria-hidden={copia || undefined} data-testid={copia ? 'letreiro-copia' : undefined}>
      {itens.map((item) => (
        <li key={item.chave} className={styles.item}>
          {renderizar(item)}
          <span className={styles.separador} aria-hidden="true">✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.faixa} aria-label={rotulo}>
      <div className={`${styles.trilho} ${styles[sentido]}`}>
        {grupo(false)}
        {grupo(true)}
      </div>
    </div>
  );
}

// Carrossel infinito e lento com as empresas onde trabalhei e os projetos que construí.
export function Letreiro() {
  const empresas = perfil.empresas.map((nome) => ({ chave: nome, nome }));
  const projetos = todosOsProjetos().map((projeto) => ({ chave: projeto.nome, ...projeto }));

  return (
    <div className={styles.letreiro}>
      <p className={styles.titulo}>Onde trabalhei e o que construí</p>
      <Faixa
        rotulo="Empresas e clientes"
        sentido="ida"
        itens={empresas}
        renderizar={(empresa) => <span className={styles.empresa}>{empresa.nome}</span>}
      />
      <Faixa
        rotulo="Projetos"
        sentido="volta"
        itens={projetos}
        renderizar={(projeto) => (
          <span className={styles.projeto}>
            <ProjetoLogo nome={projeto.nome} logoUrl={projeto.logoUrl} compacto />
            {projeto.nome}
          </span>
        )}
      />
    </div>
  );
}
