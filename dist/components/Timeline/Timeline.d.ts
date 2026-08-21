import { ReactNode } from 'react';
export interface TimelineItem {
    label: ReactNode;
    content?: ReactNode;
}
export interface TimelineProps {
    items: TimelineItem[];
    reverse?: boolean;
    ariaLabel?: string;
    className?: string;
}
export declare function Timeline({ items, reverse, ariaLabel, className }: TimelineProps): import("react").JSX.Element;
