import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LoadingScreen,
  ScrollIndicator,
  SectionNavigation,
  AnimatedBackground,
  MouseGlowEffect,
} from './components/ui';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ContactSection,
} from './components/sections';
import { sections } from './data/sections';
import {
  useFontLoader,
  useSectionScroll,
  useNestedScrollLock,
} from './hooks';
import type { SectionId } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  // Refs para cada sección
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Viewport configuration para whileInView
  const sectionViewport = { root: scrollContainerRef, once: false, amount: 0.35 };

  // Cargar fuentes
  const fontsLoaded = useFontLoader();

  // Manejar scroll de secciones
  useSectionScroll(
    scrollContainerRef,
    { home: homeRef, about: aboutRef, skills: skillsRef, experience: experienceRef, contact: contactRef },
    setActiveSection,
    () => {},
  );

  // Bloquear scroll anidado
  useNestedScrollLock(scrollContainerRef);

  // Obtener índice de la sección activa
  const activeSectionIndexRaw = sections.findIndex((s) => s.id === activeSection);
  const activeSectionIndex = activeSectionIndexRaw === -1 ? 0 : activeSectionIndexRaw;
  const canNavigateUp = activeSectionIndex > 0;
  const canNavigateDown = activeSectionIndex < sections.length - 1;

  // Navegar a sección por ID
  const goToSectionById = useCallback((sectionId: string) => {
    const container = scrollContainerRef.current;
    const sectionElement = document.getElementById(sectionId);
    if (container && sectionElement) {
      const containerRect = container.getBoundingClientRect();
      const sectionRect = sectionElement.getBoundingClientRect();
      const offset = sectionRect.top - containerRect.top + container.scrollTop;
      container.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }, [scrollContainerRef]);

  // Manejadores de navegación
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: SectionId) => {
      e.preventDefault();
      goToSectionById(sectionId);
    },
    [goToSectionById],
  );

  const goPrevSection = useCallback(() => {
    if (activeSectionIndex > 0) {
      goToSectionById(sections[activeSectionIndex - 1].id);
    }
  }, [activeSectionIndex, goToSectionById]);

  const goNextSection = useCallback(() => {
    if (activeSectionIndex < sections.length - 1) {
      goToSectionById(sections[activeSectionIndex + 1].id);
    }
  }, [activeSectionIndex, goToSectionById]);

  return (
    <AnimatePresence>
      {!fontsLoaded ? (
        <LoadingScreen key="loader" />
      ) : (
        <motion.div
          key="main-app"
          ref={scrollContainerRef}
          className="relative art-page-base text-brand-light font-montserrat h-[100dvh] max-h-[100dvh] overflow-hidden scroll-smooth"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Artistic background blobs */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="art-blob art-blob-a" />
            <div className="art-blob art-blob-b" />
            <div className="art-blob art-blob-c" />
            <div className="art-blob art-blob-d" />
          </div>
          {/* Animated preschool background */}
          <AnimatedBackground />
          {/* Mouse glow effect */}
          <MouseGlowEffect />
          {/* Navigation UI */}
          <ScrollIndicator activeSection={activeSection} onNavClick={handleNavClick} />
          <SectionNavigation
            canNavigateUp={canNavigateUp}
            canNavigateDown={canNavigateDown}
            onPrevSection={goPrevSection}
            onNextSection={goNextSection}
          />
          {/* Sections */}
          <HeroSection ref={homeRef} />
          <AboutSection ref={aboutRef} sectionViewport={sectionViewport} />
          <SkillsSection ref={skillsRef} sectionViewport={sectionViewport} />
          <ExperienceSection ref={experienceRef} sectionViewport={sectionViewport} />
          <ContactSection ref={contactRef} sectionViewport={sectionViewport} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
