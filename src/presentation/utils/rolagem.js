// Quem pediu "reduzir movimento" no sistema rola sem animação
export const comportamentoDaRolagem = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
