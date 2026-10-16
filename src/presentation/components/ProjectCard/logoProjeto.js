const PALETA = ['#c9a45c', '#6fa8a0', '#8f9fd6', '#d08c6b', '#a98bc7', '#7fb07a', '#d6a3b5', '#5f9fc9'];

export const iniciaisDoNome = (nome) => {
  const palavras = nome.trim().split(/\s+/);
  const iniciais = palavras.length > 1 ? palavras[0][0] + palavras[1][0] : palavras[0].slice(0, 2);
  return iniciais.toUpperCase();
};

// Cor estável por projeto: o mesmo nome sempre gera a mesma cor
export const corDoNome = (nome) => {
  const soma = [...nome].reduce((total, letra) => total + letra.charCodeAt(0), 0);
  return PALETA[soma % PALETA.length];
};
