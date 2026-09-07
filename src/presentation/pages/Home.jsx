import { useState, useEffect } from 'react';
import { obterProjetosMock } from '../../data/services/mockProjetoService';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';

export function Home() {
  // Estados para guardar os dados e controlar a tela de carregamento
  const [projetos, setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // O useEffect roda assim que a página é montada na tela
  useEffect(() => {
    obterProjetosMock().then((dados) => {
      setProjetos(dados);
      setCarregando(false); // Desliga o "loading" quando os dados chegam
    });
  }, []);

  return (
    <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', marginBottom: '30px', textAlign: 'center' }}>Meus Projetos</h1>
      
      {carregando ? (
        <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem' }}>
          Carregando portfólio...
        </p>
      ) : (
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