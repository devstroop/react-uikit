import { ToggleButtonSize } from '../ToggleButton/ToggleButton';
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
    /** Accessible name for the icon-only toggle button. */
    label?: string;
    /** Forwarded to the underlying toggle button. */
    id?: string;
    className?: string;
    size?: ToggleButtonSize;
}
export declare function ThemeToggle({ value, defaultValue, storageKey, onChange, label, id, className, size, }: ThemeToggleProps): import("react").JSX.Element;
