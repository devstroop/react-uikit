import { ComponentSize } from '../../sizes';
export interface AutocompleteOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface AutocompleteProps {
    options?: readonly AutocompleteOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    onSelect?: (value: string, option: AutocompleteOption) => void;
    placeholder?: string;
    size?: ComponentSize;
    invalid?: boolean;
    disabled?: boolean;
    filter?: (option: AutocompleteOption, query: string) => boolean;
    className?: string;
    name?: string;
    id?: string;
    "aria-label"?: string;
}
export declare function Autocomplete({ options, value, defaultValue, onChange, onSelect, placeholder, size, invalid, disabled, filter, className, ...restProps }: AutocompleteProps): import("react").JSX.Element;
