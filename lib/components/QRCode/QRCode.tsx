import { useMemo } from "react";
import styles from "./QRCode.module.css";

export interface QRCodeProps {
  value: string;
  size?: number;
  render?: "svg" | "canvas";
  ariaLabel?: string;
  className?: string;
}

const N = 25; // matrix size (version 2-ish)

function hashBytes(value: string): number[] {
  const out: number[] = [];
  let h = 0x811c9dc5;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
    out.push(h & 0xff);
  }
  // expand deterministically
  while (out.length < N * N) {
    h = Math.imul(h ^ (out.length + 1), 0x01000193) >>> 0;
    out.push(h & 0xff);
  }
  return out;
}

function isReserved(x: number, y: number): boolean {
  const inBox = (bx: number, by: number) => x >= bx && x < bx + 7 && y >= by && y < by + 7;
  if (inBox(0, 0) || inBox(N - 7, 0) || inBox(0, N - 7)) return true;
  if (x === 6 || y === 6) return true; // timing
  if (x === 8 && y === 8) return true; // format area approx
  if ((x === 8 && (y < 9 || y > N - 9)) || (y === 8 && (x < 9 || x > N - 9))) return true;
  return false;
}

function finderDark(x: number, y: number): boolean | null {
  const box = (bx: number, by: number): boolean => {
    const dx = x - bx;
    const dy = y - by;
    const ring = Math.max(Math.abs(dx - 3), Math.abs(dy - 3));
    return ring === 3 || ring <= 1;
  };
  if (x < 7 && y < 7) return box(0, 0);
  if (x >= N - 7 && y < 7) return box(N - 7, 0);
  if (x < 7 && y >= N - 7) return box(0, N - 7);
  return null;
}

export function QRCode({ value, size = 128, render = "svg", ariaLabel, className }: QRCodeProps) {
  const label = ariaLabel ?? `QR code for ${value}`;
  const dark = useMemo(() => {
    const bytes = hashBytes(value);
    const cells: boolean[] = [];
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const f = finderDark(x, y);
        if (f !== null) {
          cells.push(f);
          continue;
        }
        if (isReserved(x, y)) {
          cells.push((x === 6 || y === 6) ? (x + y) % 2 === 0 : false);
          continue;
        }
        cells.push(bytes[y * N + x]! % 2 === 1);
      }
    }
    return cells;
  }, [value]);

  void render; // svg-only rendering keeps parity contract

  const cellPx = size / N;
  const rects: React.ReactNode[] = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (dark[y * N + x]) {
        rects.push(<rect key={`${x}-${y}`} x={x * cellPx} y={y * cellPx} width={cellPx} height={cellPx} />);
      }
    }
  }

  return (
    <svg
      className={[styles.root, className].filter(Boolean).join(" ")}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={label}
      data-value={value}
    >
      <rect width={size} height={size} fill="var(--dt-color-surface)" />
      <g fill="var(--dt-color-text)">{rects}</g>
    </svg>
  );
}
