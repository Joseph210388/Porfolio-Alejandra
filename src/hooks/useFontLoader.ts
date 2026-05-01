import { useEffect, useState } from 'react';

/**
 * Hook para cargar las fuentes del documento
 */
export function useFontLoader(delay: number = 1200) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setTimeout(() => setFontsLoaded(true), delay);
    });
  }, [delay]);

  return fontsLoaded;
}
