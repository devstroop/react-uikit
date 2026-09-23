import { ReactNode } from 'react';
export interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    description?: ReactNode;
    action?: ReactNode;
    className?: string;
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
}
export declare function EmptyState({ icon, title, description, action, className, visible }: EmptyStateProps): import("react").JSX.Element | null;
