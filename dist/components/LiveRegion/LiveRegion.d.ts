import { ReactNode } from 'react';
export interface LiveRegionProps {
    children?: ReactNode;
    className?: string;
}
/**
 *Declarative placement of a polite screen-reader announcement panel
 * (role="status" + aria-live="polite"). Use it inline for static or
 * freshbound announcements; for imperative announcements use the
 * `useLiveRegion` hook instead.
 */
export declare function LiveRegion({ children, className }: LiveRegionProps): import("react").JSX.Element;
