export interface BarcodeProps {
    value: string;
    format?: "Code128";
    height?: number;
    showValue?: boolean;
    ariaLabel?: string;
    className?: string;
}
export declare function Barcode({ value, format, height, showValue, ariaLabel, className }: BarcodeProps): import("react").JSX.Element;
