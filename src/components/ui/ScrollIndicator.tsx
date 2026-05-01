import React from 'react';
import { sections } from '../../data/sections';
import type { SectionId } from '../../types';

interface ScrollIndicatorProps {
  activeSection: SectionId;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: SectionId) => void;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  activeSection,
  onNavClick,
}) => (
  <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-50 p-4 hidden md:block">
    <ul className="flex flex-col space-y-4">
      {sections.map((section) => (
        <li key={section.id} className="group relative flex items-center">
          <a
            href={`#${section.id}`}
            onClick={(e) => onNavClick(e, section.id)}
            aria-label={`Ir a la sección ${section.title}`}
            className={`block w-3 h-3 rounded-full transition-all duration-300 ease-in-out
              ${
                activeSection === section.id
                  ? 'bg-white scale-150 shadow-[0_0_0_4px_rgba(255,255,255,0.2)]'
                  : 'bg-white/50 hover:bg-white hover:scale-125'
              }`}
          >
            <span className="sr-only">{section.title}</span>
          </a>
          <div className="absolute left-full ml-4 px-3 py-1 bg-brand-dark text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {section.title}
          </div>
        </li>
      ))}
    </ul>
  </nav>
);
