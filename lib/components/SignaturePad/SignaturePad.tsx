import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import styles from "./SignaturePad.module.css";

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

export const SignaturePad = forwardRef<SignaturePadHandle, SignaturePadProps>(
  function SignaturePad(
    {
      value,
      defaultValue,
      onChange,
      penColor = "#1c1c1c",
      penWidth = 2.5,
      clearLabel = "Clear",
      ariaLabel = "Signature",
      width,
      height = 140,
      disabled = false,
      className,
    },
    ref,
  ) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const drawing = useRef(false);
    const moved = useRef(false);
    const last = useRef({ x: 0, y: 0 });

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const w = Math.round((width ?? canvas.clientWidth) * dpr);
      const h = Math.round(height * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineWidth = penWidth;
      ctx.strokeStyle = penColor;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const source = value ?? defaultValue;
      if (source) {
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.clientWidth, height);
        };
        img.src = source;
      }
    }, [value, defaultValue, penColor, penWidth, width, height]);

    const commit = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dataUrl = canvas.toDataURL("image/png");
      onChange?.(dataUrl);
    };

    const clear = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      onChange?.("");
    };

    useImperativeHandle(ref, () => ({
      clear,
      toDataURL: (type = "image/png", quality) => canvasRef.current?.toDataURL(type, quality) ?? "",
    }));

    const pointOf = (e: React.PointerEvent<HTMLCanvasElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (disabled) return;
      e.preventDefault();
      if (typeof e.currentTarget.setPointerCapture === "function") {
        e.currentTarget.setPointerCapture(e.pointerId);
      }
      drawing.current = true;
      moved.current = false;
      last.current = pointOf(e);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!drawing.current) return;
      e.preventDefault();
      const ctx = e.currentTarget.getContext("2d");
      if (!ctx) return;
      const cur = pointOf(e);
      ctx.beginPath();
      ctx.moveTo(last.current.x, last.current.y);
      ctx.lineTo(cur.x, cur.y);
      ctx.stroke();
      last.current = cur;
      moved.current = true;
    };

    const endStroke = (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!drawing.current) return;
      e.preventDefault();
      drawing.current = false;
      if (moved.current) commit();
    };

    return (
      <div className={[styles.wrapper, className, disabled ? styles.disabled : null].filter(Boolean).join(" ")}>
        <div className={styles.header}>
          <span className={styles.label}>{ariaLabel}</span>
          <button type="button" className={styles.clear} onClick={clear} disabled={disabled}>
            {clearLabel}
          </button>
        </div>
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={ariaLabel}
          aria-disabled={disabled || undefined}
          style={{ width: width ? `${width}px` : undefined, height: `${height}px` }}
          className={styles.canvas}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endStroke}
          onPointerCancel={endStroke}
        />
      </div>
    );
  },
);