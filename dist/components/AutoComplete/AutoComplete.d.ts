import { ComponentSize } from '../../sizes';
export interface AutoCompleteOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface AutoCompleteProps {
    options?: readonly AutoCompleteOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    onSelect?: (value: string, option: AutoCompleteOption) => void;
    placeholder?: string;
    size?: ComponentSize;
    invalid?: boolean;
    disabled?: boolean;
    filter?: (option: AutoCompleteOption, query: string) => boolean;
    className?: string;
    name?: string;
    id?: string;
    'aria-label'?: string;
}
export declare function AutoComplete({ options, value, defaultValue, onChange, onSelect, placeholder, size, invalid, disabled, filter, className, ...restProps }: AutoCompleteProps): import("react").JSX.Element;
