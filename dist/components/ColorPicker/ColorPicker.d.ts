export type ColorPickerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface ColorPickerProps {
    value?: string;
    showSaturation?: boolean;
    showRgba?: boolean;
    showPalette?: boolean;
    palette?: readonly string[];
    showButton?: boolean;
    showArrow?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    placeholder?: string;
    size?: ColorPickerSize;
    tabIndex?: number;
    className?: string;
    onChange?: (value: string) => void;
    onValueChange?: (value: string) => void;
    onOpen?: () => void;
    onClose?: () => void;
}
export declare const DEFAULT_PALETTE: readonly ["#ff2800", "#fe9300", "#fefb00", "#02f900", "#00fdff", "#0433ff", "#ff40ff", "#942292", "#aa7942", "#ffffff", "#000000", "#53d5fd", "#73a7fe", "#874efe", "#d357fe", "#ed719e", "#ff8c82", "#ffa57d", "#ffc677", "#fff995", "#ebf38f", "#b1dd8c"];
export declare const ColorPicker: ({ value, showSaturation, showRgba, showPalette, palette, showButton, showArrow, disabled, invalid, placeholder, size, tabIndex, className, onChange, onValueChange, onOpen, onClose, }: ColorPickerProps) => import("react").JSX.Element;
