import { type ReactNode } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export interface MediaQueryProps {
  /** CSS media query, e.g. "(min-width: 768px)". */
  query: string;
  children: ReactNode;
}

/**
 * Renders children only while `query` matches (react counterpart of the
 * htmx `[data-dx-media-query]` gate). SSR-safe: no match server-side, so
 * nothing renders until the client evaluates. For the raw boolean, use
 * the `useMediaQuery` hook directly.
 */
export function MediaQuery({ query, children }: MediaQueryProps) {
  const matches = useMediaQuery(query);
  if (!matches) return null;
  return <>{children}</>;
}
