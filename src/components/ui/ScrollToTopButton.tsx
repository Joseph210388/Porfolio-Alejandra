import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUpIcon } from '../icons';

interface ScrollToTopButtonProps {
  show: boolean;
  onClick: () => void;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ show, onClick }) => (
  <AnimatePresence>
    {show && (
      <motion.button
        onClick={onClick}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] sm:bottom-8 sm:right-8 bg-white text-brand-primary p-3 rounded-full shadow-lg z-50 hover:bg-opacity-90 transition-all transform hover:scale-110"
        aria-label="Volver al inicio"
      >
        <ChevronUpIcon />
      </motion.button>
    )}
  </AnimatePresence>
);
