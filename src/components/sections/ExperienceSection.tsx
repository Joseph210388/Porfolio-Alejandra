import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExperienceCarousel } from '../ui';
import { TimelineItem } from '../TimelineItem';
import { experience, experienceCarouselData } from '../../data/experience';
import { education } from '../../data/education';
import { sectionVariants, itemVariants, timelineVariants } from '../../lib/animations';

interface ExperienceSectionProps {
  sectionViewport: any;
}

export const ExperienceSection = React.forwardRef<HTMLDivElement, ExperienceSectionProps>(
  function ExperienceSection({ sectionViewport }, ref) {
    const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

    return (
      <motion.section
        ref={ref}
        id="experience"
        className="relative isolate min-h-[100dvh] overflow-hidden flex flex-col justify-start box-border px-4 pt-20 pb-20 sm:px-8 sm:pt-20 sm:pb-20 md:px-10 md:py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <div className="relative z-[1] w-full flex flex-col flex-1 min-h-0 justify-center">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

              {/* Columna izquierda: carrusel de imágenes */}
              <motion.div
                variants={itemVariants}
                className="hidden md:flex w-full items-center"
              >
                <ExperienceCarousel cards={experienceCarouselData} />
              </motion.div>

              {/* Columna derecha: tabs + timeline */}
              <div>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-8">
                  <button
                    onClick={() => setActiveTab('experience')}
                    className={`font-playfair text-lg sm:text-xl py-2 px-4 sm:px-6 rounded-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
                      activeTab === 'experience'
                        ? 'bg-white text-brand-primary shadow-lg'
                        : 'bg-white/5 text-white border border-dashed border-white/45 backdrop-blur-[2px]'
                    }`}
                  >
                    Experiencia Laboral
                  </button>
                  <button
                    onClick={() => setActiveTab('education')}
                    className={`font-playfair text-lg sm:text-xl py-2 px-4 sm:px-6 rounded-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
                      activeTab === 'education'
                        ? 'bg-white text-brand-primary shadow-lg'
                        : 'bg-white/5 text-white border border-dashed border-white/45 backdrop-blur-[2px]'
                    }`}
                  >
                    Formación
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    variants={timelineVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    data-section-nested-scroll
                    className="relative border-l-2 border-white/30 space-y-8 max-h-[calc(100dvh-16rem)] sm:max-h-[calc(100dvh-18rem)] md:max-h-[500px] overflow-y-auto overscroll-y-contain no-scrollbar pr-4"
                  >
                    {activeTab === 'experience' &&
                      experience.map((item, index) => (
                        <motion.div key={`exp-${index}`} variants={itemVariants}>
                          <TimelineItem {...item} />
                        </motion.div>
                      ))}
                    {activeTab === 'education' &&
                      education.map((item, index) => (
                        <motion.div key={`edu-${index}`} variants={itemVariants}>
                          <TimelineItem {...item} />
                        </motion.div>
                      ))}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </motion.section>
    );
  },
);

ExperienceSection.displayName = 'ExperienceSection';
