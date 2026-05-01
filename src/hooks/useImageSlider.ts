import { useEffect, useState } from 'react';

/**
 * Hook para manejar slider/carrusel de imágenes
 */
export function useImageSlider(imageCount: number, autoplayInterval: number = 5000) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % imageCount);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + imageCount) % imageCount);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, autoplayInterval);
    return () => clearInterval(timer);
  }, [autoplayInterval, imageCount]);

  return { currentImage, nextImage, prevImage, goToImage };
}
