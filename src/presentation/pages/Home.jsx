import { useState, useEffect } from 'react';
import { obterProjetos } from '../../data/services/githubService';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';

export function Home() {
  const [projetos, setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null); // Novo estado para capturar falhas de rede

  useEffect(() => {
    // Função assíncrona com try/catch conforme exigido na Issue
   const buscarProjetos = async () => {
      try {
        const dados = await obterProjetos();
        setProjetos(dados);
      } catch (err) {
        console.error(err); // <-- Adicione esta linha! Agora o ESLint sabe que a variável foi usada.
        setErro('Não foi possível carregar os projetos do GitHub no momento.');
      } finally {
        setCarregando(false);
      }
    };

    buscarProjetos();
  }, []);

  return (
    <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', marginBottom: '30px', textAlign: 'center' }}>Meus Projetos</h1>
      
      {carregando && (
        <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem' }}>
          Conectando ao GitHub...
        </p>
      )}

      {erro && (
        <p style={{ textAlign: 'center', color: '#d9534f', fontSize: '1.2rem', fontWeight: 'bold' }}>
          {erro}
        </p>
      )}

      {!carregando && !erro && (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px' 
        }}>
          {projetos.map((projeto) => (
            <ProjectCard key={projeto.id} projeto={projeto} />
          ))}
        </div>
      )}
    </main>
  );
}