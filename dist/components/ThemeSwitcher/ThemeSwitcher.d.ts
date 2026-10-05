import { ReactNode } from 'react';
import { SelectSize } from '../Select/Select';
/** Default theme names offered by the picker (the demos palettes). */
export declare const DEFAULT_THEMES: readonly ["default", "fluent", "github", "material", "material-3", "shadcn"];
export interface ThemeSwitcherProps {
    /** Theme names to offer. Defaults to `DEFAULT_THEMES`. */
    themes?: readonly string[];
    /** Controlled theme. Omit for uncontrolled. */
    value?: string;
    /** Uncontrolled initial theme. Omit to start with no selection. */
    defaultValue?: string;
    /**
     * localStorage key for the choice. Set to `null` to disable
     * persistence. Defaults to `"dx-palette"`.
     */
    storageKey?: string | null;
    /**
     * Document attribute written in uncontrolled mode. Defaults to
     * `"data-palette"` (the demos's palette hook).
     */
    attribute?: string;
    onChange?: (theme: string) => void;
    label?: ReactNode;
    /** Shown in the select until a theme is chosen. */
    placeholder?: string;
    /** Forwarded to the underlying select. */
    id?: string;
    size?: SelectSize;
    className?: string;
}
export declare function ThemeSwitcher({ themes, value, defaultValue, storageKey, attribute, onChange, label, placeholder, id, size, className, }: ThemeSwitcherProps): import("react").JSX.Element;
