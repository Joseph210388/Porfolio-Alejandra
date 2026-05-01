import { useEffect, RefObject } from 'react';
import {
  getNearestVerticalScrollable,
  wheelDecisionOnNested,
  isVerticallyScrollable,
} from '../lib/utils';

const NESTED_SECTION_SCROLL_SELECTOR = '[data-section-nested-scroll]';

/**
 * Hook para bloquear scroll en elementos anidados y evitar chaining
 */
export function useNestedScrollLock(scrollContainerRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const onWheel = (e: WheelEvent) => {
      const target = e.target instanceof HTMLElement ? e.target : null;
      if (!target) return;

      const marked = target.closest(NESTED_SECTION_SCROLL_SELECTOR);
      if (marked instanceof HTMLElement && scrollContainer.contains(marked)) {
        if (wheelDecisionOnNested(marked, e) === 'prevent') e.preventDefault();
        return;
      }

      const nearest = getNearestVerticalScrollable(target, scrollContainer);
      if (nearest && nearest !== scrollContainer) {
        if (wheelDecisionOnNested(nearest, e) === 'prevent') e.preventDefault();
        return;
      }

      e.preventDefault();
    };

    let touchStartX = 0;
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - touchStartX;
      const dy = e.touches[0].clientY - touchStartY;
      if (Math.abs(dx) > Math.abs(dy)) return;

      const target = e.target instanceof HTMLElement ? e.target : null;
      if (!target) return;

      const marked = target.closest(NESTED_SECTION_SCROLL_SELECTOR);
      if (marked instanceof HTMLElement && scrollContainer.contains(marked)) {
        if (marked.scrollHeight <= marked.clientHeight + 1) {
          e.preventDefault();
          return;
        }
        const { scrollTop, scrollHeight, clientHeight } = marked;
        const atTop = scrollTop <= 0;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
        if (atTop && dy > 0) {
          e.preventDefault();
          return;
        }
        if (atBottom && dy < 0) {
          e.preventDefault();
          return;
        }
        return;
      }

      const nearest = getNearestVerticalScrollable(target, scrollContainer);
      if (nearest && nearest !== scrollContainer) {
        if (nearest.scrollHeight <= nearest.clientHeight + 1) {
          e.preventDefault();
          return;
        }
        const { scrollTop, scrollHeight, clientHeight } = nearest;
        const atTop = scrollTop <= 0;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
        if (atTop && dy > 0) {
          e.preventDefault();
          return;
        }
        if (atBottom && dy < 0) {
          e.preventDefault();
          return;
        }
        return;
      }

      e.preventDefault();
    };

    scrollContainer.addEventListener('wheel', onWheel, { passive: false });
    scrollContainer.addEventListener('touchstart', onTouchStart, { passive: true });
    scrollContainer.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', onWheel);
      scrollContainer.removeEventListener('touchstart', onTouchStart);
      scrollContainer.removeEventListener('touchmove', onTouchMove);
    };
  }, [scrollContainerRef]);
}
