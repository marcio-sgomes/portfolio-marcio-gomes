import { useState, useEffect } from 'react';
import { obterProjetos } from '../../../data/services/portfolioService';
import { contatoPorId } from '../../../data/perfil';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { Secao } from '../../components/Secao/Secao';
import { Manchete } from '../../components/Materia/Manchete';
import { Historia } from '../../components/Materia/Historia';
import { ProjetosDestaque } from '../../components/Materia/ProjetosDestaque';
import { Competencias } from '../../components/Materia/Competencias';
import { Encaixe } from '../../components/Materia/Encaixe';
import { Contato } from '../../components/Materia/Contato';
import { useTituloDaPagina } from '../../hooks/useTituloDaPagina';
import styles from './Home.module.css';

const FILTROS = [
  { id: 'todos', rotulo: 'Todos', aplicar: () => true },
  { id: 'autorais', rotulo: 'Autorais', aplicar: (projeto) => !projeto.estudo },
  { id: 'estudos', rotulo: 'Estudos', aplicar: (projeto) => projeto.estudo },
  { id: 'desenvolvimento', rotulo: 'Em desenvolvimento', aplicar: (projeto) => projeto.emDesenvolvimento },
];

// Quantos cartões aparecem antes do "Mostrar todos" (evita uma página longa demais no celular)
const LIMITE_INICIAL = 6;

export function Home() {
  const [projetos, setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [filtroAtivo, setFiltroAtivo] = useState('todos');
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const github = contatoPorId('github');
  useTituloDaPagina();

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
  const projetosFiltrados = projetos.filter(filtro.aplicar);
  const projetosVisiveis = mostrarTodos ? projetosFiltrados : projetosFiltrados.slice(0, LIMITE_INICIAL);
  const restantes = projetosFiltrados.length - projetosVisiveis.length;
  // "Todos" sempre aparece; os outros filtros só quando têm algum projeto
  const filtrosDisponiveis = FILTROS.filter(
    (item) => item.id === 'todos' || projetos.some(item.aplicar),
  );

  const escolherFiltro = (id) => {
    setFiltroAtivo(id);
    setMostrarTodos(false);
  };

  return (
    <main id="conteudo" tabIndex={-1} className={styles.pagina}>
      <Manchete />
      <ProjetosDestaque />
      <Historia />
      <Competencias />
      <Encaixe />

      <Secao
        id="github"
        rotulo="No GitHub"
        titulo="Estudos e código"
        descricao="Repositórios públicos, direto do GitHub: estudos de cursos e projetos de código aberto. Os apps autorais de código privado estão na seção Projetos, acima."
        destacada
      >
        {carregando && <p className={styles.status}>Conectando ao GitHub...</p>}

        {erro && <p className={`${styles.status} ${styles.erro}`}>{erro}</p>}

        {!carregando && !erro && (
          <>
            <div className={styles.filtros} role="group" aria-label="Filtrar projetos">
              {filtrosDisponiveis.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={styles.filtro}
                  aria-pressed={filtroAtivo === item.id}
                  onClick={() => escolherFiltro(item.id)}
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

            <div className={styles.rodapeLista}>
              {restantes > 0 && (
                <button type="button" className={styles.mostrarTodos} onClick={() => setMostrarTodos(true)}>
                  Mostrar todos ({projetosFiltrados.length})
                </button>
              )}
              <a href={github.url} target="_blank" rel="noopener noreferrer" className={styles.verTodos}>
                Ver meu perfil no GitHub →
              </a>
            </div>
          </>
        )}
      </Secao>

      <Contato />
    </main>
  );
}
