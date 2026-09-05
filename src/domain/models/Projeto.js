/**
 * Entidade de Domínio: Projeto
 * Define o contrato exato que a interface (Presentation) espera receber.
 * Se a API do GitHub mudar no futuro, a interface não quebra, pois o 
 * Data Layer será obrigado a converter os dados para este formato.
 */
export class Projeto {
  constructor({ id, nome, descricao, url, tecnologias }) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.url = url || '#';
    this.tecnologias = tecnologias || [];
  }
}