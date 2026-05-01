import React from 'react';
import { motion } from 'framer-motion';
import { LoadingStarIcon } from '../icons';
import { loadingContainerVariants, loadingStarVariants } from '../../lib/animations';

export const LoadingScreen: React.FC = () => (
  <motion.div
    className="fixed inset-0 art-page-base flex flex-col items-center justify-center z-[100]"
    key="loader"
    exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
  >
    <motion.div
      className="flex space-x-4"
      variants={loadingContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={loadingStarVariants}>
        <LoadingStarIcon />
      </motion.div>
      <motion.div variants={loadingStarVariants}>
        <LoadingStarIcon />
      </motion.div>
      <motion.div variants={loadingStarVariants}>
        <LoadingStarIcon />
      </motion.div>
    </motion.div>
    <motion.p
      className="mt-6 text-lg font-dancing tracking-wide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
    >
      Cargando...
    </motion.p>
  </motion.div>
);
