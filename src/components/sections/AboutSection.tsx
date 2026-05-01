import React from 'react';
import { motion } from 'framer-motion';
import { about } from '../../data/about';
import { sectionVariants } from '../../lib/animations';

interface AboutSectionProps {
  sectionViewport: any;
}

export const AboutSection = React.forwardRef<HTMLDivElement, AboutSectionProps>(
  function AboutSection({ sectionViewport }, ref) {
    return (
      <motion.section
        ref={ref}
        id="about"
        className="relative isolate min-h-[100dvh] overflow-hidden flex flex-col justify-center items-center box-border px-4 py-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <div className="relative z-[1] w-full flex flex-col justify-center items-center flex-1">
          <div className="container mx-auto text-center max-w-3xl w-full">
            <h2 className="text-3xl sm:text-5xl font-playfair mb-4 sm:mb-8 inline-block border-b border-dashed border-white/35 pb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
              Sobre Mí
            </h2>
            <p className="text-base sm:text-xl font-dancing leading-relaxed">{about.paragraph}</p>
          </div>
        </div>
      </motion.section>
    );
  },
);

AboutSection.displayName = 'AboutSection';
