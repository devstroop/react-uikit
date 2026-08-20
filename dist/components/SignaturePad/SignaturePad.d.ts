export interface SignaturePadHandle {
    clear: () => void;
    toDataURL: (type?: string, quality?: number) => string;
}
export interface SignaturePadProps {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    penColor?: string;
    penWidth?: number;
    clearLabel?: string;
    ariaLabel?: string;
    width?: number;
    height?: number;
    disabled?: boolean;
    className?: string;
}
export declare const SignaturePad: import('react').ForwardRefExoticComponent<SignaturePadProps & import('react').RefAttributes<SignaturePadHandle>>;
