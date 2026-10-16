export class Projeto {
  constructor({
    id,
    nome,
    descricao,
    codigoUrl = null,
    paginaUrl = null,
    tecnologias = [],
    logoUrl = null,
    estudo = false,
    emDesenvolvimento = false,
    privado = false,
    atualizadoEm = null,
  }) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.codigoUrl = codigoUrl; // null em projetos privados: o código nunca é exposto
    this.paginaUrl = paginaUrl;
    this.tecnologias = tecnologias;
    this.logoUrl = logoUrl;
    this.estudo = estudo;
    this.emDesenvolvimento = emDesenvolvimento;
    this.privado = privado;
    this.atualizadoEm = atualizadoEm;
  }
}
