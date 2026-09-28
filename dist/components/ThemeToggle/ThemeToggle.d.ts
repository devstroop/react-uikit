import { ReactNode } from 'react';
export type ThemeName = 'light' | 'dark' | 'system';
export interface ThemeToggleProps {
    /** Controlled appearance. Omit for uncontrolled. */
    value?: ThemeName;
    /** Uncontrolled initial appearance. Defaults to following the OS. */
    defaultValue?: ThemeName;
    /**
     * localStorage key for the explicit choice. Set to `null` to disable
     * persistence. Defaults to `"dx-theme"`.
     */
    storageKey?: string | null;
    onChange?: (theme: Exclude<ThemeName, 'system'>) => void;
    label?: ReactNode;
    /** Forwarded to the underlying switch input. */
    id?: string;
    className?: string;
}
export declare function ThemeToggle({ value, defaultValue, storageKey, onChange, label, id, className, }: ThemeToggleProps): import("react").JSX.Element;
