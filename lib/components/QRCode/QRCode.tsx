import { useEffect, useMemo, useRef, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { qrcodegen } from "./qrcodegen";
import styles from "./QRCode.module.css";

export type QRCodeErrorCorrection = "low" | "medium" | "quartile" | "high";

export interface QRCodeProps {
  value: string;
  size?: number;
  render?: "svg" | "canvas";
  /** Error correction level (default medium). Higher survives more damage. */
  errorCorrection?: QRCodeErrorCorrection;
  /** Quiet-zone width in modules (default 4, the spec minimum). Clamped to >= 0. */
  margin?: number;
  ariaLabel?: string;
  className?: string;
  /** Called once per value when encoding fails (payload exceeds capacity). */
  onError?: (message: string) => void;
}

const ECL: Record<QRCodeErrorCorrection, qrcodegen.QrCode.Ecc> = {
  low: qrcodegen.QrCode.Ecc.LOW,
  medium: qrcodegen.QrCode.Ecc.MEDIUM,
  quartile: qrcodegen.QrCode.Ecc.QUARTILE,
  high: qrcodegen.QrCode.Ecc.HIGH,
};

/**
 * Real scannable QR code (Project Nayuki encoder, vendored in
 * `./qrcodegen`). The smallest version fitting `value` is chosen
 * automatically; the symbol includes finder/alignment/timing patterns,
 * format info, masking, and Reed-Solomon error correction.
 */
export function QRCode({
  value,
  size = 128,
  render = "svg",
  errorCorrection = "medium",
  margin = 4,
  ariaLabel,
  className,
  onError,
}: QRCodeProps) {
  const label = ariaLabel ?? `QR code for ${value}`;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Theme change subscriptions for canvas art (no CSS to inherit it).
  const osTheme = useMediaQuery("(prefers-color-scheme: dark)");
  const [attrTheme, setAttrTheme] = useState<string | null>(null);
  useEffect(() => {
    const root = document.documentElement;
    setAttrTheme(root.dataset.theme ?? null);
    const observer = new MutationObserver(() => {
      setAttrTheme(root.dataset.theme ?? null);
    });
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const qr = useMemo<qrcodegen.QrCode | null>(() => {
    try {
      return qrcodegen.QrCode.encodeText(value, ECL[errorCorrection]);
    } catch {
      // Payload exceeds version-40 capacity. No logging here — this runs
      // during render (twice under StrictMode); reporting lives in the
      // effect below.
      return null;
    }
  }, [value, errorCorrection]);

  // Report encode failure as an effect: dev-gated console + onError, once
  // per failure episode (StrictMode double-invokes effects in dev; the ref
  // guards that duplicate). The guard resets on recovery so a later
  // bad→good→bad sequence re-reports, and it tracks the onError identity
  // so a changed host callback is still invoked for the same value.
  const reported = useRef<{ value: string; onError?: (message: string) => void } | null>(null);
  useEffect(() => {
    if (qr !== null) {
      reported.current = null;
      return;
    }
    const message = `[QRCode] value too long to encode (${value.length} chars)`;
    if (typeof process !== "undefined" && process.env?.NODE_ENV !== "production") {
      console.error(message);
    }
    if (reported.current?.value !== value || reported.current?.onError !== onError) {
      reported.current = { value, onError };
      onError?.(message);
    }
  }, [qr, value, onError]);

  // Negative or fractional margins would shrink offsets below zero and
  // break the quiet zone; clamp once and use everywhere below.
  const safeMargin = Math.max(0, Math.floor(margin));
  const cls = [styles.root, className].filter(Boolean).join(" ");
  useEffect(() => {
    if (render !== "canvas" || qr === null) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    // Theme subscriptions only re-trigger this effect; colors are read
    // fresh below so attribute/OS flips never leave stale art.
    void osTheme;
    void attrTheme;
    const cs = getComputedStyle(canvas);
    const fg = cs.getPropertyValue("--dx-text-color").trim() || "#000";
    const bg = cs.getPropertyValue("--dx-surface-color").trim() || "#fff";
    paint(ctx, qr, size, safeMargin, fg, bg);
  }, [render, qr, size, safeMargin, osTheme, attrTheme]);

  // Encode failure renders an accessible placeholder (role + label, no
  // silent null) so assistive tech and layouts still see the element.
  // (All hooks are above this return, so hook order stays stable.)
  if (qr === null) {
    return <div className={cls} role="img" aria-label={label} data-qr-error="true" />;
  }

  const modules = qr.size + safeMargin * 2;
  const cellPx = size / modules;

  if (render === "canvas") {
    return (
      <canvas
        ref={canvasRef}
        className={cls}
        width={size}
        height={size}
        role="img"
        aria-label={label}
        data-value={value}
      />
    );
  }

  const rects: React.ReactNode[] = [];
  for (let y = 0; y < qr.size; y++) {
    for (let x = 0; x < qr.size; x++) {
      if (qr.getModule(x, y)) {
        rects.push(
          <rect
            key={`${x}-${y}`}
            x={(x + safeMargin) * cellPx}
            y={(y + safeMargin) * cellPx}
            width={cellPx + 0.5}
            height={cellPx + 0.5}
          />,
        );
      }
    }
  }

  return (
    <svg
      className={cls}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={label}
      data-value={value}
    >
      <rect width={size} height={size} fill="var(--dx-surface-color)" />
      <g fill="var(--dx-text-color)">{rects}</g>
    </svg>
  );
}

function paint(
  ctx: CanvasRenderingContext2D,
  qr: qrcodegen.QrCode,
  size: number,
  margin: number,
  fg: string,
  bg: string,
): void {
  const px = size / (qr.size + margin * 2);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = fg;
  for (let y = 0; y < qr.size; y++) {
    for (let x = 0; x < qr.size; x++) {
      if (qr.getModule(x, y)) {
        ctx.fillRect((x + margin) * px, (y + margin) * px, px + 0.5, px + 0.5);
      }
    }
  }
}
