import { ReactElement } from 'react';
export type SelectbarSize = "sm" | "md" | "lg";
export type SelectbarOrientation = "horizontal" | "vertical";
export interface SelectbarOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface SelectbarBaseProps {
    options?: readonly SelectbarOption[];
    orientation?: SelectbarOrientation;
    size?: SelectbarSize;
    className?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
}
export interface SelectbarSingleProps extends SelectbarBaseProps {
    multiple?: false;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}
export interface SelectbarMultiProps extends SelectbarBaseProps {
    multiple: true;
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
}
/**
 * Loose escape hatch: un-narrowed `string | string[]` usage without a
 * `multiple` discriminant. Prefer Single/Multi for type safety.
 * (Method shorthand keeps this compatible with both strict signatures.)
 */
export interface SelectbarLooseProps extends SelectbarBaseProps {
    multiple?: boolean;
    value?: string | string[];
    defaultValue?: string | string[];
    onChange?(value: string | string[]): void;
}
export type SelectbarProps = SelectbarSingleProps | SelectbarMultiProps | SelectbarLooseProps;
export declare function Selectbar(props: SelectbarSingleProps): ReactElement;
export declare function Selectbar(props: SelectbarMultiProps): ReactElement;
export declare function Selectbar(props: SelectbarLooseProps): ReactElement;
export {};
