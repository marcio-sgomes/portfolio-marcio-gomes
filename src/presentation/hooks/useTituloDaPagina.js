import { useEffect } from 'react';

export const TITULO_DO_SITE = 'Márcio Gomes · Do campo à tecnologia';

// Título da aba do navegador por página; sem argumento, volta ao título do site.
export function useTituloDaPagina(titulo) {
  useEffect(() => {
    document.title = titulo ? `${titulo} · Márcio Gomes` : TITULO_DO_SITE;
  }, [titulo]);
}
