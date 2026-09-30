import { ReactNode } from 'react';
import { Severity } from '../../types/severity';
import { Shade } from '../../types/shade';
import { Variant } from '../../types/variant';
import { IconName } from '../Icon/Icon';
export type SplitButtonSize = 'sm' | 'md' | 'lg';
/** Severity axis — Radzen ButtonStyle parity (neutral excluded, like Button). */
export type SplitButtonSeverity = Exclude<Severity, 'neutral'>;
export type SplitButtonVariant = Variant;
export type SplitButtonShade = Shade;
export interface SplitButtonItem {
    key: string;
    label: string;
    /** Leading glyph, Radzen `SplitButtonItem.Icon` parity (Menu item parity). */
    icon?: IconName;
    danger?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
export interface SplitButtonProps {
    label?: ReactNode;
    onClick?: () => void;
    items?: readonly SplitButtonItem[];
    severity?: SplitButtonSeverity;
    variant?: SplitButtonVariant;
    shade?: SplitButtonShade;
    size?: SplitButtonSize;
    /** Spinner + `aria-busy` on the action button; both halves disable. */
    loading?: boolean;
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
    /** Accessible name for the action button — Radzen `ButtonAriaLabel` parity. */
    'aria-label'?: string;
    /** Accessible name for the caret and menu — Radzen `OpenAriaLabel` parity. */
    openAriaLabel?: string;
}
export declare const SplitButton: import('react').ForwardRefExoticComponent<SplitButtonProps & import('react').RefAttributes<HTMLDivElement>>;
