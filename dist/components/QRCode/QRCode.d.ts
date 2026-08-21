export interface QRCodeProps {
    value: string;
    size?: number;
    render?: "svg" | "canvas";
    ariaLabel?: string;
    className?: string;
}
export declare function QRCode({ value, size, render, ariaLabel, className }: QRCodeProps): import("react").JSX.Element;
