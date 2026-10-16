import { useState, useEffect } from 'react';
import { obterProjetos } from '../../../data/services/githubService';
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

export function Home() {
  const [projetos, setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
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
        rotulo="Portfólio"
        titulo="Meus Projetos"
        descricao="Atualizados automaticamente a partir dos meus repositórios públicos no GitHub: cada card é código real, versionado e documentado."
        destacada
      >
        {carregando && <p className={styles.status}>Conectando ao GitHub...</p>}

        {erro && <p className={`${styles.status} ${styles.erro}`}>{erro}</p>}

        {!carregando && !erro && (
          <>
            <div className={styles.grade}>
              {projetos.map((projeto) => (
                <ProjectCard key={projeto.id} projeto={projeto} />
              ))}
            </div>
            <a href={github.url} target="_blank" rel="noopener noreferrer" className={styles.verTodos}>
              Ver todos os repositórios no GitHub →
            </a>
          </>
        )}
      </Secao>

      <Contato />
    </main>
  );
}
