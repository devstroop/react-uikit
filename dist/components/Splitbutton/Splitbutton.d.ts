import { ReactNode } from 'react';
export type SplitbuttonSize = "sm" | "md" | "lg";
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
    size?: SplitbuttonSize;
    disabled?: boolean;
    className?: string;
    "aria-label"?: string;
}
export declare function Splitbutton({ label, onClick, items, size, disabled, className, ...ariaProps }: SplitbuttonProps): import("react").JSX.Element;
