import { useEffect, useRef, RefObject } from 'react';
import type { SectionId } from '../types';

/**
 * Hook para manejar la sincronización de scroll y sección activa
 */
export function useSectionScroll(
  scrollContainerRef: RefObject<HTMLDivElement | null>,
  sectionRefs: Record<SectionId, RefObject<HTMLDivElement | null>>,
  onActiveSection: (id: SectionId) => void,
  onShowScrollButton: (show: boolean) => void,
) {
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const sectionEntries: { id: SectionId; ref: RefObject<HTMLDivElement | null> }[] = [
      { id: 'home', ref: sectionRefs.home },
      { id: 'about', ref: sectionRefs.about },
      { id: 'skills', ref: sectionRefs.skills },
      { id: 'experience', ref: sectionRefs.experience },
      { id: 'contact', ref: sectionRefs.contact },
    ];

    const syncActiveSectionAndScrollButton = () => {
      const rootRect = scrollContainer.getBoundingClientRect();
      const rootTop = rootRect.top;
      const rootBottom = rootRect.bottom;

      let bestId: SectionId = 'home';
      let bestOverlap = -1;

      for (let i = sectionEntries.length - 1; i >= 0; i--) {
        const { id, ref } = sectionEntries[i];
        const el = ref.current;
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const overlap = Math.max(
          0,
          Math.min(r.bottom, rootBottom) - Math.max(r.top, rootTop),
        );
        if (overlap >= bestOverlap) {
          bestOverlap = overlap;
          bestId = id;
        }
      }

      onActiveSection(bestId);

      const h = scrollContainer.clientHeight || window.innerHeight;
      const pastHalf = scrollContainer.scrollTop > h / 2;
      onShowScrollButton(pastHalf);
    };

    scrollContainer.addEventListener('scroll', syncActiveSectionAndScrollButton, {
      passive: true,
    });
    window.addEventListener('resize', syncActiveSectionAndScrollButton);
    window.addEventListener('hashchange', syncActiveSectionAndScrollButton);

    const t = requestAnimationFrame(() => {
      syncActiveSectionAndScrollButton();
      requestAnimationFrame(syncActiveSectionAndScrollButton);
    });
    const t2 = window.setTimeout(syncActiveSectionAndScrollButton, 200);

    return () => {
      cancelAnimationFrame(t);
      window.clearTimeout(t2);
      scrollContainer.removeEventListener('scroll', syncActiveSectionAndScrollButton);
      window.removeEventListener('resize', syncActiveSectionAndScrollButton);
      window.removeEventListener('hashchange', syncActiveSectionAndScrollButton);
    };
  }, [scrollContainerRef, sectionRefs, onActiveSection, onShowScrollButton]);
}
