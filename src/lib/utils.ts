/**
 * Verifica si un elemento es verticalmente scrolleable
 */
export function isVerticallyScrollable(el: HTMLElement): boolean {
  const style = window.getComputedStyle(el);
  const oy = style.overflowY;
  if (oy !== 'auto' && oy !== 'scroll' && oy !== 'overlay') return false;
  return el.scrollHeight > el.clientHeight + 1;
}

/**
 * Obtiene el elemento scrolleable vertical más cercano
 */
export function getNearestVerticalScrollable(
  el: HTMLElement | null,
  root: HTMLElement,
): HTMLElement | null {
  let n = el;
  while (n) {
    if (n === root) {
      return isVerticallyScrollable(root) ? root : null;
    }
    if (isVerticallyScrollable(n)) return n;
    n = n.parentElement;
  }
  return null;
}

/**
 * Determina si permitir o prevenir scroll en elementos anidados
 */
export function wheelDecisionOnNested(
  nested: HTMLElement,
  e: WheelEvent,
): 'allow' | 'prevent' {
  if (nested.scrollHeight <= nested.clientHeight + 1) return 'prevent';
  const { scrollTop, scrollHeight, clientHeight } = nested;
  const deltaY = e.deltaY;
  const atTop = scrollTop <= 0;
  const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
  if ((deltaY < 0 && atTop) || (deltaY > 0 && atBottom)) return 'prevent';
  return 'allow';
}
