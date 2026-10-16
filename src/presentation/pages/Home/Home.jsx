import { useState, useEffect } from 'react';
import { obterProjetos } from '../../../data/services/portfolioService';
import { contatoPorId } from '../../../data/perfil';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { Hero } from '../../components/Hero/Hero';
import { Secao } from '../../components/Secao/Secao';
import { Perfil } from '../../components/Secoes/Perfil';
import { Competencias } from '../../components/Secoes/Competencias';
import { Metodo } from '../../components/Secoes/Metodo';
import { Formacao } from '../../components/Secoes/Formacao';
import { Cases } from '../../components/Secoes/Cases';
import { Contato } from '../../components/Secoes/Contato';
import styles from './Home.module.css';

const FILTROS = [
  { id: 'todos', rotulo: 'Todos', aplicar: () => true },
  { id: 'autorais', rotulo: 'Autorais', aplicar: (projeto) => !projeto.estudo },
  { id: 'estudos', rotulo: 'Estudos', aplicar: (projeto) => projeto.estudo },
  { id: 'desenvolvimento', rotulo: 'Em desenvolvimento', aplicar: (projeto) => projeto.emDesenvolvimento },
];

export function Home() {
  const [projetos, setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [filtroAtivo, setFiltroAtivo] = useState('todos');
  const github = contatoPorId('github');

  useEffect(() => {
    const buscarProjetos = async () => {
      try {
        const dados = await obterProjetos();
        setProjetos(dados);
      } catch (err) {
        console.error(err);
        setErro('Não foi possível carregar os projetos do GitHub no momento.');
      } finally {
        setCarregando(false);
      }
    };

    buscarProjetos();
  }, []);

  const filtro = FILTROS.find((item) => item.id === filtroAtivo);
  const projetosVisiveis = projetos.filter(filtro.aplicar);

  return (
    <main>
      <Hero />
      <Perfil />
      <Competencias />
      <Formacao />
      <Cases />
      <Metodo />

      <Secao
        id="projetos"
        rotulo="Portfólio de estudos"
        titulo="Projetos e estudos"
        descricao="Minha trilha prática de aprendizado: projetos autorais e estudos de cursos. Os repositórios públicos vêm direto do GitHub; nos privados, mostro apenas o que o projeto faz e o link da página publicada."
        destacada
      >
        {carregando && <p className={styles.status}>Conectando ao GitHub...</p>}

        {erro && <p className={`${styles.status} ${styles.erro}`}>{erro}</p>}

        {!carregando && !erro && (
          <>
            <div className={styles.filtros} role="group" aria-label="Filtrar projetos">
              {FILTROS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={styles.filtro}
                  aria-pressed={filtroAtivo === item.id}
                  onClick={() => setFiltroAtivo(item.id)}
                >
                  {item.rotulo}
                  <span className={styles.contagem}>{projetos.filter(item.aplicar).length}</span>
                </button>
              ))}
            </div>

            <div className={styles.grade}>
              {projetosVisiveis.map((projeto) => (
                <ProjectCard key={projeto.id} projeto={projeto} />
              ))}
            </div>
            <a href={github.url} target="_blank" rel="noopener noreferrer" className={styles.verTodos}>
              Ver meu perfil no GitHub →
            </a>
          </>
        )}
      </Secao>

      <Contato />
    </main>
  );
}
