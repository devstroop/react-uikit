import { useEffect, useState } from 'react';

/**
 * Reactive `window.matchMedia` binding (RadzenSidebar JS-sync parity).
 * Seeds eagerly from the live list (no first-render flash) with an
 * `addListener` fallback for older engines. False on the server.
 */
function queryMatches(query: string): boolean {
  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia !== 'function'
  ) {
    return false;
  }
  return window.matchMedia(query).matches;
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => queryMatches(query));

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      typeof window.matchMedia !== 'function'
    ) {
      return;
    }
    const list = window.matchMedia(query);
    // Re-sync here in case the value flipped between render and commit.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMatches(list.matches);
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    if (typeof list.addEventListener === 'function') {
      list.addEventListener('change', onChange);
      return () => list.removeEventListener('change', onChange);
    }
    list.addListener(onChange);
    return () => list.removeListener(onChange);
  }, [query]);

  return matches;
}
