import { ReactNode } from 'react';
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
export declare function MediaQuery({ query, children }: MediaQueryProps): import("react").JSX.Element | null;
