import { TextareaHTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type TextAreaSize = ComponentSize;
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    size?: TextAreaSize;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
    invalid?: boolean;
}
export declare const TextArea: import('react').ForwardRefExoticComponent<TextAreaProps & import('react').RefAttributes<HTMLTextAreaElement>>;
