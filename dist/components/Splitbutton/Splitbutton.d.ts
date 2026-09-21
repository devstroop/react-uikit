import { ReactNode } from 'react';
import { Severity } from '../../types/severity';
import { Shade } from '../../types/shade';
import { Variant } from '../../types/variant';
export type SplitbuttonSize = "sm" | "md" | "lg";
/** Severity axis — Radzen ButtonStyle parity (neutral excluded, like Button). */
export type SplitbuttonSeverity = Exclude<Severity, "neutral">;
export type SplitbuttonVariant = Variant;
export type SplitbuttonShade = Shade;
export interface SplitbuttonItem {
    key: string;
    label: string;
    danger?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
export interface SplitbuttonProps {
    label?: ReactNode;
    onClick?: () => void;
    items?: readonly SplitbuttonItem[];
    severity?: SplitbuttonSeverity;
    variant?: SplitbuttonVariant;
    shade?: SplitbuttonShade;
    size?: SplitbuttonSize;
    disabled?: boolean;
    className?: string;
    "aria-label"?: string;
}
export declare function Splitbutton({ label, onClick, items, severity, variant, shade, size, disabled, className, ...ariaProps }: SplitbuttonProps): import("react").JSX.Element;
