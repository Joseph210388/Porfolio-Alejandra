import React, { useState, useEffect, useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';

interface ExperienceCard {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
}

interface CardProps {
  card: ExperienceCard;
  index: number;
  activeIndex: number;
  totalCards: number;
}

interface ExperienceCarouselProps {
  cards: ExperienceCard[];
}

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(cards.length / 2));
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToNext = () => setActiveIndex((prev) => (prev + 1) % cards.length);

  useEffect(() => {
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [isPaused, activeIndex]);

  const changeSlide = (newIndex: number) => {
    setActiveIndex((newIndex + cards.length) % cards.length);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, 5000);
    }
  };

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 75) changeSlide(activeIndex - 1);
    else if (info.offset.x < -75) changeSlide(activeIndex + 1);
  };

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Imagen con animación */}
      <div className="relative w-full h-[350px] md:h-[550px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="w-full h-full flex items-center justify-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {cards.map((card, index) => (
            <ExperienceCard
              key={card.id}
              card={card}
              index={index}
              activeIndex={activeIndex}
              totalCards={cards.length}
            />
          ))}
        </motion.div>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-center gap-5 mt-4">
        <button
          onClick={() => changeSlide(activeIndex - 1)}
          aria-label="Imagen anterior"
          className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 text-white transition-colors focus:outline-none"
        >
          <ChevronLeftIcon />
        </button>

        <div className="flex items-center gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              aria-label={`Ir a la imagen ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                activeIndex === index ? 'w-6 bg-white' : 'w-2 bg-white/35 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => changeSlide(activeIndex + 1)}
          aria-label="Imagen siguiente"
          className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 text-white transition-colors focus:outline-none"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

function ExperienceCard({ card, index, activeIndex, totalCards }: CardProps) {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) offset -= totalCards;
  else if (offset < -totalCards / 2) offset += totalCards;

  const isVisible = Math.abs(offset) <= 1;

  return (
    <motion.div
      className="absolute w-2/3 md:w-1/2 h-[95%]"
      style={{ transformStyle: 'preserve-3d' }}
      animate={{
        x: `${offset * 50}%`,
        scale: offset === 0 ? 1 : 0.8,
        zIndex: totalCards - Math.abs(offset),
        opacity: isVisible ? 1 : 0,
        transition: { type: 'spring', stiffness: 260, damping: 30 },
      }}
      initial={false}
    >
      <div className="relative w-full h-full rounded-2xl shadow-xl overflow-hidden">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-full object-cover pointer-events-none"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://placehold.co/400x600/6D9BFF/ffffff?text=Imagen';
          }}
        />
      </div>
    </motion.div>
  );
}
