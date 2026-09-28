import { ReactNode } from 'react';
export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
export interface TooltipProps {
    content: ReactNode;
    /** Trigger element wrapped in the hit area. Omit when using `targetSelector`. */
    children?: ReactNode;
    placement?: TooltipPlacement;
    delayMs?: number;
    /**
     * Auto-dismiss this many ms after showing. Omit for the sticky default
     * (stays until pointer leaves, blur, or Escape).
     */
    durationMs?: number;
    /**
     * Delegate to every element matching a document-wide CSS selector
     * instead of wrapping `children`. The tooltip renders position:fixed
     * next to the hovered/focused target and wires aria-describedby on it
     * while open. Dismisses on Escape or scroll (position goes stale).
     */
    targetSelector?: string;
    className?: string;
}
export declare function Tooltip({ content, children, placement, delayMs, durationMs, targetSelector, className, }: TooltipProps): import("react").JSX.Element | null;
