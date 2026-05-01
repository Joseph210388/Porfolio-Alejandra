import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUpIcon, ChevronDownIcon } from '../icons';

interface SectionNavigationProps {
  canNavigateUp: boolean;
  canNavigateDown: boolean;
  onPrevSection: () => void;
  onNextSection: () => void;
}

const btnClass =
  'bg-white text-brand-primary p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80';

export const SectionNavigation: React.FC<SectionNavigationProps> = ({
  canNavigateUp,
  canNavigateDown,
  onPrevSection,
  onNextSection,
}) => (
  <>
    <AnimatePresence>
      {canNavigateUp && (
        <motion.div
          key="nav-up"
          className="fixed top-[max(1rem,env(safe-area-inset-top,0px))] left-1/2 -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            onClick={onPrevSection}
            className={btnClass}
            aria-label="Ir a la sección anterior"
          >
            <ChevronUpIcon />
          </button>
        </motion.div>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {canNavigateDown && (
        <motion.div
          key="nav-down"
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            onClick={onNextSection}
            className={btnClass}
            aria-label="Ir a la sección siguiente"
          >
            <ChevronDownIcon />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);
