export type QRCodeErrorCorrection = 'low' | 'medium' | 'quartile' | 'high';
export interface QRCodeProps {
    value: string;
    size?: number;
    render?: 'svg' | 'canvas';
    /** Error correction level (default medium). Higher survives more damage. */
    errorCorrection?: QRCodeErrorCorrection;
    /** Quiet-zone width in modules (default 4, the spec minimum). Clamped to >= 0. */
    margin?: number;
    ariaLabel?: string;
    className?: string;
    /** Called once per value when encoding fails (payload exceeds capacity). */
    onError?: (message: string) => void;
}
/**
 * Real scannable QR code (Project Nayuki encoder, vendored in
 * `./qrcodegen`). The smallest version fitting `value` is chosen
 * automatically; the symbol includes finder/alignment/timing patterns,
 * format info, masking, and Reed-Solomon error correction.
 */
export declare function QRCode({ value, size, render, errorCorrection, margin, ariaLabel, className, onError, }: QRCodeProps): import("react").JSX.Element;
