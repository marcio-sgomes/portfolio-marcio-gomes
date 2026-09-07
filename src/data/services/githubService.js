import { Projeto } from '../../domain/models/Projeto';

// Utilizando o seu usuário real do GitHub
const GITHUB_USER = 'marcio-sgomes';

export const obterProjetos = async () => {
  try {
    // Busca os repositórios públicos ordenados pelos mais recentes
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated`);
    
    if (!response.ok) {
      throw new Error('Falha ao buscar repositórios na API do GitHub.');
    }
    
    const repos = await response.json();
    
    // Mapeia o retorno da API para o nosso contrato de Domínio (Clean Architecture)
    const projetosMapeados = repos
      // Ignora repositórios que são forks de outros projetos (opcional)
      .filter(repo => !repo.fork)
      .map(repo => {
        return new Projeto(
          repo.id,
          repo.name.replace(/-/g, ' '), // Troca hífens por espaços no nome
          repo.description || 'Sem descrição disponível.',
          repo.html_url,
          repo.topics && repo.topics.length > 0 ? repo.topics : ['GitHub'] // Mapeia as tags do repositório
        );
      });
      
    return projetosMapeados;
  } catch (error) {
    console.error('Erro no githubService:', error);
    throw error; // Repassa o erro para a página tratar
  }
};