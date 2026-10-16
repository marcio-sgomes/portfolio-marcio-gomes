import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// O React Router não rola até a âncora (#secao) sozinho; este componente faz isso a cada navegação.
export function RolarParaAncora() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}
