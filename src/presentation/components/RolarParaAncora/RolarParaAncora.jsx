import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { comportamentoDaRolagem } from '../../utils/rolagem';

// O React Router não rola até a âncora (#secao) sozinho; este componente faz isso a cada navegação.
// Usa a `key` da navegação: clicar de novo no mesmo item do menu, depois de rolar, também volta à seção.
export function RolarParaAncora() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: comportamentoDaRolagem() });
  }, [pathname, hash, key]);

  return null;
}
