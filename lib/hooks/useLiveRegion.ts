import { useCallback, useEffect, useRef } from 'react';

/**
 * Imperative screen-reader announcement channel (`data-dx-live-region`
 * parity). Mounts a visually-hidden `role="status"` panel on `<body>` and
 * returns an `announce(text)` callback that overwrites it: AT reads the
 * new text aloud on every call without disrupting the visual tree.
 *
 * React-only wiring — the DOM node is created (and cleaned up on unmount)
 * by the hook, so the host does not need to render a container.
 *
 * Notes:
 * SSR / tests without a DOM simply no-op until mounted.
 * Multiple independent channels can be mounted side by side;each renders its own hidden region.
 */
export function useLiveRegion(): (text: string) => void {
  const regionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.createElement('div');
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    Object.assign(el.style, {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: '0',
    });
    document.body.appendChild(el);
    regionRef.current = el;
    return () => {
      el.remove();
      regionRef.current = null;
    };
  }, []);

  return useCallback((text: string) => {
    const el = regionRef.current;
    if (el) el.textContent = text;
  }, []);
}
