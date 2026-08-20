import { ComponentSize } from '../../sizes';
export type SecurityCodeSize = ComponentSize;
export interface SecurityCodeProps {
    length?: number;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    invalid?: boolean;
    size?: SecurityCodeSize;
    autoFocus?: boolean;
    disabled?: boolean;
    label?: string;
    liveAnnounce?: boolean;
    className?: string;
    "aria-label"?: string;
}
export declare const SecurityCode: import('react').ForwardRefExoticComponent<SecurityCodeProps & import('react').RefAttributes<HTMLInputElement>>;
