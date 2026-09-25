import { ReactNode } from 'react';
export type ThemeName = 'light' | 'dark' | 'system';
export interface ThemeSwitcherProps {
    /** Controlled theme. Omit for uncontrolled. */
    value?: ThemeName;
    /** Uncontrolled initial theme. Defaults to following the OS. */
    defaultValue?: ThemeName;
    /**
     * localStorage key for the explicit choice. Set to `null` to disable
     * persistence. Defaults to `"dx-theme"`.
     */
    storageKey?: string | null;
    onChange?: (theme: Exclude<ThemeName, 'system'>) => void;
    label?: ReactNode;
    className?: string;
}
export declare function ThemeSwitcher({ value, defaultValue, storageKey, onChange, label, className, }: ThemeSwitcherProps): import("react").JSX.Element;
