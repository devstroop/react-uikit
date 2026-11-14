import { ReactNode } from 'react';
export interface ChipProps {
    /** Label text. */
    label: ReactNode;
    /** Optional leading icon glyph. */
    icon?: string;
    /** When provided, renders a remove button. */
    onRemove?: () => void;
    /** Disabled state. */
    disabled?: boolean;
    className?: string;
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
}
export declare function Chip({ label, icon, onRemove, disabled, className, visible, }: ChipProps): import("react").JSX.Element | null;
