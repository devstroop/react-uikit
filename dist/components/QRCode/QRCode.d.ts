export interface QRCodeProps {
    value: string;
    size?: number;
    render?: "svg" | "canvas";
    ariaLabel?: string;
    className?: string;
}
/**
 * Deterministic decorative matrix (NOT a scannable QR code).
 *
 * The cells are FNV-hashed payload bytes with drawn finder/timing
 * patterns — it *looks* like a QR code for placeholders and visual
 * parity, but no QR encoding (finder/alignment, format info,
 * Reed-Solomon, masking) is performed. Do not print this on anything
 * that must scan: integrate a real encoder (e.g. qrcodegen-style)
 * for production codes.
 */
export declare function QRCode({ value, size, render, ariaLabel, className }: QRCodeProps): import("react").JSX.Element;
