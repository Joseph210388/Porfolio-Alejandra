import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SkillCard, RatingStars } from '../ui';
import { personalSkills, professionalSkills } from '../../data/skills';
import { languages } from '../../data/languages';
import { sectionVariants, itemVariants, containerVariants } from '../../lib/animations';
import { useMarquee } from '../../hooks';
import type { SkillCategory } from '../../types/skill';

interface SkillsSectionProps {
  sectionViewport: any;
}

export const SkillsSection = React.forwardRef<HTMLDivElement, SkillsSectionProps>(
  function SkillsSection({ sectionViewport }, ref) {
    const [activeSkillTab, setActiveSkillTab] = useState<SkillCategory>('personal');
    const trackRef = React.useRef<HTMLDivElement>(null);

    const currentSkills = activeSkillTab === 'personal' ? personalSkills : professionalSkills;
    const duplicatedSkills = [...currentSkills, ...currentSkills];
    const animationWidth = useMarquee(trackRef, [activeSkillTab]);

    const marqueeVariants = (width: number): Variants => ({
      animate: {
        x: [-width, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: currentSkills.length * 4,
            ease: 'linear',
          },
        },
      },
    });

    return (
      <motion.section
        ref={ref}
        id="skills"
        className="relative isolate min-h-[100dvh] overflow-hidden flex flex-col justify-center box-border px-4 py-[max(1rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:px-6 sm:py-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <div className="relative z-[1] w-full flex flex-col shrink-0">
          <div className="container mx-auto max-w-4xl px-2 text-center w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-6 sm:mb-8 inline-block border-b border-dashed border-white/35 pb-2">
              Habilidades
            </h2>

            {/* TABS */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveSkillTab('personal')}
                className={`font-playfair text-lg sm:text-xl py-2 px-4 sm:px-6 rounded-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
                  activeSkillTab === 'personal'
                    ? 'bg-white text-brand-primary shadow-lg'
                    : 'bg-white/5 text-white border border-dashed border-white/45 backdrop-blur-[2px]'
                }`}
              >
                Personales
              </button>
              <button
                onClick={() => setActiveSkillTab('professional')}
                className={`font-playfair text-lg sm:text-xl py-2 px-4 sm:px-6 rounded-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
                  activeSkillTab === 'professional'
                    ? 'bg-white text-brand-primary shadow-lg'
                    : 'bg-white/5 text-white border border-dashed border-white/45 backdrop-blur-[2px]'
                }`}
              >
                Profesionales
              </button>
            </div>

            {/* SKILLS CAROUSEL */}
            <div className="w-full overflow-hidden cursor-grab mb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkillTab}
                  ref={trackRef}
                  className="flex gap-6"
                  variants={marqueeVariants(animationWidth)}
                  animate={animationWidth > 0 ? 'animate' : ''}
                  custom={animationWidth}
                  drag="x"
                  dragConstraints={{ right: 0, left: -animationWidth }}
                  whileTap={{ cursor: 'grabbing' }}
                >
                  {duplicatedSkills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} variants={itemVariants} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair mt-10 sm:mt-12 mb-6 sm:mb-8 inline-block border-b border-dashed border-white/35 pb-2">
              Idiomas
            </h2>
            <motion.div
              className="flex flex-col items-center space-y-6 max-w-sm mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
            >
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between w-full"
                  variants={itemVariants}
                >
                  <span className="font-dancing tracking-wide text-lg sm:text-xl">
                    {lang.name}
                  </span>
                  <RatingStars level={lang.level} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  },
);

SkillsSection.displayName = 'SkillsSection';
