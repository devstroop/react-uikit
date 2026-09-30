import { HTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
import { Severity } from '../../types/severity';
import { Shade } from '../../types/shade';
export type ProgressTone = Extract<Severity, 'primary' | 'success' | 'warning' | 'danger'>;
export type ProgressShade = Shade;
export type ProgressVariant = 'linear' | 'circular';
export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'role'> {
    value?: number;
    max?: number;
    /**
     * Severity axis — the single severity prop. Native `style` is always
     * plain CSS and never a hue.
     */
    severity?: ProgressTone;
    shade?: ProgressShade;
    indeterminate?: boolean;
    variant?: ProgressVariant;
    size?: number | ComponentSize;
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
}
export declare function Progress({ value, max, severity, shade, indeterminate, variant, size, className, visible, ...props }: ProgressProps): import("react").JSX.Element | null;
