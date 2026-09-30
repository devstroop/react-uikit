import { ReactElement } from 'react';
export type SelectBarSize = 'sm' | 'md' | 'lg';
export type SelectBarOrientation = 'horizontal' | 'vertical';
export interface SelectBarOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface SelectBarBaseProps {
    options?: readonly SelectBarOption[];
    orientation?: SelectBarOrientation;
    size?: SelectBarSize;
    className?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
}
export interface SelectBarSingleProps extends SelectBarBaseProps {
    multiple?: false;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}
export interface SelectBarMultiProps extends SelectBarBaseProps {
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
export interface SelectBarLooseProps extends SelectBarBaseProps {
    multiple?: boolean;
    value?: string | string[];
    defaultValue?: string | string[];
    onChange?(value: string | string[]): void;
}
export type SelectBarProps = SelectBarSingleProps | SelectBarMultiProps | SelectBarLooseProps;
export declare function SelectBar(props: SelectBarSingleProps): ReactElement;
export declare function SelectBar(props: SelectBarMultiProps): ReactElement;
export declare function SelectBar(props: SelectBarLooseProps): ReactElement;
export {};
