import { useLayoutEffect, useState, RefObject } from 'react';

/**
 * Hook para manejar animación marquee/carrusel
 */
export function useMarquee(trackRef: RefObject<HTMLDivElement | null>, dependency: any[]) {
  const [animationWidth, setAnimationWidth] = useState(0);

  useLayoutEffect(() => {
    if (trackRef.current) {
      const scrollWidth = trackRef.current.scrollWidth;
      setAnimationWidth(scrollWidth / 2);
    }
  }, dependency);

  return animationWidth;
}
