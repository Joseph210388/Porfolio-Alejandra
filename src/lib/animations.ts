import { Variants } from 'framer-motion';

export const loadingContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};

export const loadingStarVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const timelineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export const marqueeVariants = (width: number): Variants => ({
  animate: {
    x: [-width, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 32, // Ajustar según necesidad
        ease: 'linear',
      },
    },
  },
});
