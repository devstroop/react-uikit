import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { Icon } from "../Icon/Icon";
import styles from "./Colorpicker.module.css";

export type ColorpickerSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ColorpickerProps {
  value?: string;
  showSaturation?: boolean;
  showRgba?: boolean;
  showPalette?: boolean;
  palette?: readonly string[];
  showButton?: boolean;
  showArrow?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  placeholder?: string;
  size?: ColorpickerSize;
  tabIndex?: number;
  className?: string;
  onChange?: (value: string) => void;
  onValueChange?: (value: string) => void;
  onOpen?: () => void;
  onClose?: () => void;
}

export const DEFAULT_PALETTE = [
  "#ff2800",
  "#fe9300",
  "#fefb00",
  "#02f900",
  "#00fdff",
  "#0433ff",
  "#ff40ff",
  "#942292",
  "#aa7942",
  "#ffffff",
  "#000000",
  "#53d5fd",
  "#73a7fe",
  "#874efe",
  "#d357fe",
  "#ed719e",
  "#ff8c82",
  "#ffa57d",
  "#ffc677",
  "#fff995",
  "#ebf38f",
  "#b1dd8c",
] as const;

interface Rgb {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface Hsv {
  h: number;
  s: number;
  v: number;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function hexToRgb(value: string): Rgb | null {
  const match = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(value.trim());
  if (!match) return null;
  let hex = match[1]!;
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }
  return {
    r: Number.parseInt(hex.slice(0, 2), 16),
    g: Number.parseInt(hex.slice(2, 4), 16),
    b: Number.parseInt(hex.slice(4, 6), 16),
    a: 1,
  };
}

function rgbToHex({ r, g, b }: Rgb): string {
  const to2 = (v: number) => Math.round(v).toString(16).padStart(2, "0");
  return `#${to2(r)}${to2(g)}${to2(b)}`;
}

function rgbToHsv({ r, g, b }: Rgb): Hsv {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;
  let h = 0;
  if (delta !== 0) {
    if (max === rn) {
      h = ((gn - bn) / delta) % 6;
    } else if (max === gn) {
      h = (bn - rn) / delta + 2;
    } else {
      h = (rn - gn) / delta + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  return {
    h,
    s: max === 0 ? 0 : delta / max,
    v: max,
  };
}

function hsvToRgb({ h, s, v }: Hsv): Rgb {
  const c = v * s;
  const hp = h / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let rn = 0;
  let gn = 0;
  let bn = 0;
  if (hp < 1) {
    rn = c;
    gn = x;
  } else if (hp < 2) {
    rn = x;
    gn = c;
  } else if (hp < 3) {
    gn = c;
    bn = x;
  } else if (hp < 4) {
    gn = x;
    bn = c;
  } else if (hp < 5) {
    rn = x;
    bn = c;
  } else {
    rn = c;
    bn = x;
  }
  const m = v - c;
  return {
    r: Math.round((rn + m) * 255),
    g: Math.round((gn + m) * 255),
    b: Math.round((bn + m) * 255),
    a: 1,
  };
}

function parseCssColor(value: string): Rgb | null {
  const hex = hexToRgb(value);
  if (hex) return hex;
  const match =
    /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
      value.trim(),
    );
  if (!match) return null;
  return {
    r: clamp(Number(match[1]), 0, 255),
    g: clamp(Number(match[2]), 0, 255),
    b: clamp(Number(match[3]), 0, 255),
    a: match[4] != null ? clamp(Number(match[4]), 0, 1) : 1,
  };
}

function toCss({ r, g, b, a }: Rgb): string {
  if (a >= 1) return `rgb(${r}, ${g}, ${b})`;
  return `rgba(${r}, ${g}, ${b}, ${Math.round(a * 100) / 100})`;
}

export const Colorpicker = ({
  value = "#000000",
  showSaturation = true,
  showRgba = true,
  showPalette = true,
  palette = DEFAULT_PALETTE,
  showButton = false,
  showArrow = true,
  disabled = false,
  invalid = false,
  placeholder = "",
  size = "md",
  tabIndex = 0,
  className,
  onChange,
  onValueChange,
  onOpen,
  onClose,
}: ColorpickerProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const satRef = useRef<HTMLDivElement>(null);
  const hueRef = useRef<HTMLDivElement>(null);
  const alphaRef = useRef<HTMLDivElement>(null);
  const popupId = useId();
  const dragging = useRef<"sat" | "hue" | "alpha" | null>(null);

  const committed = useMemo<Rgb>(
    () => parseCssColor(value) ?? { r: 0, g: 0, b: 0, a: 1 },
    [value],
  );

  const [open, setOpen] = useState(false);
  const [staged, setStaged] = useState<Rgb | null>(null);

  const current: Rgb = staged ?? committed;
  const hsv = useMemo(() => rgbToHsv(current), [current]);

  const commit = useCallback(
    (rgb: Rgb) => {
      const output = toCss(rgb);
      onChange?.(output);
      onValueChange?.(output);
    },
    [onChange, onValueChange],
  );

  const applyStaged = useCallback(
    (rgb: Rgb, immediate: boolean) => {
      setStaged(rgb);
      if (immediate && !showButton) commit(rgb);
    },
    [showButton, commit],
  );

  const closePopup = useCallback(() => {
    setOpen(false);
    setStaged(null);
    onClose?.();
    triggerRef.current?.focus();
  }, [onClose]);

  const openPopup = useCallback(() => {
    if (disabled) return;
    setStaged(committed);
    setOpen(true);
    onOpen?.();
  }, [disabled, committed, onOpen]);

  const togglePopup = useCallback(() => {
    if (open) closePopup();
    else openPopup();
  }, [open, closePopup, openPopup]);

  const satPointer = useCallback(
    (clientX: number, clientY: number): Hsv => {
      const el = satRef.current;
      if (!el) return hsv;
      const rect = el.getBoundingClientRect();
      const s = clamp((clientX - rect.left) / rect.width, 0, 1);
      const v = clamp(1 - (clientY - rect.top) / rect.height, 0, 1);
      return { h: hsv.h, s, v };
    },
    [hsv],
  );

  const stripPointer = useCallback(
    (clientX: number, el: HTMLDivElement | null): number => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      return clamp((clientX - rect.left) / rect.width, 0, 1);
    },
    [],
  );

  const handleSatPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (disabled) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragging.current = "sat";
    const next = satPointer(event.clientX, event.clientY);
    applyStaged({ ...hsvToRgb(next), a: current.a }, true);
  };

  const handleSatPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragging.current !== "sat") return;
    event.preventDefault();
    const next = satPointer(event.clientX, event.clientY);
    applyStaged({ ...hsvToRgb(next), a: current.a }, true);
  };

  const handleHuePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (disabled) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragging.current = "hue";
    const ratio = stripPointer(event.clientX, hueRef.current);
    applyStaged({ ...hsvToRgb({ ...hsv, h: ratio * 360 }), a: current.a }, true);
  };

  const handleHuePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragging.current !== "hue") return;
    event.preventDefault();
    const ratio = stripPointer(event.clientX, hueRef.current);
    applyStaged({ ...hsvToRgb({ ...hsv, h: ratio * 360 }), a: current.a }, true);
  };

  const handleAlphaPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (disabled) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragging.current = "alpha";
    const ratio = stripPointer(event.clientX, alphaRef.current);
    applyStaged({ ...current, a: ratio }, true);
  };

  const handleAlphaPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragging.current !== "alpha") return;
    event.preventDefault();
    const ratio = stripPointer(event.clientX, alphaRef.current);
    applyStaged({ ...current, a: ratio }, true);
  };

  const handlePointerUp = () => {
    dragging.current = null;
  };

  const stepSaturation = useCallback(
    (dx: number, dy: number) => {
      const next = { h: hsv.h, s: clamp(hsv.s + dx, 0, 1), v: clamp(hsv.v + dy, 0, 1) };
      applyStaged({ ...hsvToRgb(next), a: current.a }, true);
    },
    [hsv, current.a, applyStaged],
  );

  const stepHue = useCallback(
    (delta: number) => {
      const h = (hsv.h + delta + 360) % 360;
      applyStaged({ ...hsvToRgb({ ...hsv, h }), a: current.a }, true);
    },
    [hsv, current.a, applyStaged],
  );

  const stepAlpha = useCallback(
    (delta: number) => {
      applyStaged({ ...current, a: clamp(current.a + delta, 0, 1) }, true);
    },
    [current, applyStaged],
  );

  const handleSatKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        stepSaturation(-0.05, 0);
        break;
      case "ArrowRight":
        event.preventDefault();
        stepSaturation(0.05, 0);
        break;
      case "ArrowUp":
        event.preventDefault();
        stepSaturation(0, 0.05);
        break;
      case "ArrowDown":
        event.preventDefault();
        stepSaturation(0, -0.05);
        break;
      case "Escape":
        event.preventDefault();
        closePopup();
        break;
    }
  };

  const handleStripKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    kind: "hue" | "alpha",
  ) => {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        if (kind === "hue") stepHue(-6);
        else stepAlpha(-0.05);
        break;
      case "ArrowRight":
        event.preventDefault();
        if (kind === "hue") stepHue(6);
        else stepAlpha(0.05);
        break;
      case "Escape":
        event.preventDefault();
        closePopup();
        break;
    }
  };

  const handleRgbaInput = (channel: "hex" | "r" | "g" | "b" | "a", raw: string) => {
    if (channel === "hex") {
      const parsed = hexToRgb(raw);
      if (parsed) applyStaged({ ...parsed, a: current.a }, true);
      return;
    }
    const cleaned = raw.replace(/[^\d.]/g, "");
    const number = Number.parseFloat(cleaned);
    if (Number.isNaN(number)) return;
    if (channel === "a") {
      const a = cleaned.includes(".") ? clamp(number, 0, 1) : clamp(number / 100, 0, 1);
      applyStaged({ ...current, a }, true);
      return;
    }
    const limit: Record<"r" | "g" | "b", number> = { r: 255, g: 255, b: 255 };
    applyStaged({ ...current, [channel]: clamp(number, 0, limit[channel]) }, true);
  };

  const handleOk = () => {
    if (staged) {
      commit(staged);
      setStaged(null);
      setOpen(false);
      onClose?.();
      triggerRef.current?.focus();
    }
  };

  useEffect(() => {
    if (!open) return;
    const onMouseDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        closePopup();
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open, closePopup]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closePopup]);

  const sizeClass =
    size === "xs"
      ? styles.dtColorpickerTriggerXs
      : size === "sm"
        ? styles.dtColorpickerTriggerSm
        : size === "lg"
          ? styles.dtColorpickerTriggerLg
          : size === "xl"
            ? styles.dtColorpickerTriggerXl
            : styles.dtColorpickerTriggerMd;

  const css = toCss(current);
  const hex = rgbToHex(current);
  const satPos = { x: hsv.s * 100, y: (1 - hsv.v) * 100 };
  const huePos = (hsv.h / 360) * 100;
  const alphaPos = current.a * 100;

  const body = (
    <div className={styles.dtColorpickerPanel}>
      {showSaturation && (
        <div
          ref={satRef}
          role="slider"
          aria-roledescription="2D slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(hsv.s * 100)}
          aria-valuetext={`Saturation ${Math.round(hsv.s * 100)}%, value ${Math.round(hsv.v * 100)}%`}
          aria-label="Color"
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : tabIndex}
          className={styles.dtSaturationPicker}
          style={{
            background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${hsv.h}, 100%, 50%)`,
          }}
          onKeyDown={handleSatKeyDown}
          onPointerDown={handleSatPointerDown}
          onPointerMove={handleSatPointerMove}
          onPointerUp={handlePointerUp}
        >
          <span
            className={styles.dtSaturationIndicator}
            style={{ left: `${satPos.x}%`, top: `${satPos.y}%` }}
            aria-hidden="true"
          />
        </div>
      )}
      {showSaturation && (
        <div
          ref={hueRef}
          role="slider"
          aria-label="Hue"
          aria-valuemin={0}
          aria-valuemax={360}
          aria-valuenow={Math.round(hsv.h)}
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : tabIndex}
          className={styles.dtHuePicker}
          onKeyDown={(event) => handleStripKeyDown(event, "hue")}
          onPointerDown={handleHuePointerDown}
          onPointerMove={handleHuePointerMove}
          onPointerUp={handlePointerUp}
        >
          <span
            className={styles.dtHueIndicator}
            style={{ left: `${huePos}%` }}
            aria-hidden="true"
          />
        </div>
      )}
      {showSaturation && (
        <div
          ref={alphaRef}
          role="slider"
          aria-label="Alpha"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(alphaPos)}
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : tabIndex}
          className={styles.dtAlphaPicker}
          style={{
            background: `repeating-conic-gradient(var(--dt-color-border) 0% 25%, var(--dt-color-surface) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${hsv.h}, 100%, 50%))`,
          }}
          onKeyDown={(event) => handleStripKeyDown(event, "alpha")}
          onPointerDown={handleAlphaPointerDown}
          onPointerMove={handleAlphaPointerMove}
          onPointerUp={handlePointerUp}
        >
          <span
            className={styles.dtAlphaIndicator}
            style={{ left: `${alphaPos}%` }}
            aria-hidden="true"
          />
        </div>
      )}
      {showRgba && (
        <div className={styles.dtColorpickerRgba}>
          <label className={styles.dtColorpickerRgbaField}>
            <span className={styles.dtColorpickerRgbaLabel}>Hex</span>
            <input
              type="text"
              maxLength={7}
              className={styles.dtColorpickerRgbaInput}
              aria-label="Hex"
              value={hex}
              onChange={(event) => handleRgbaInput("hex", event.target.value)}
            />
          </label>
          <label className={styles.dtColorpickerRgbaField}>
            <span className={styles.dtColorpickerRgbaLabel}>R</span>
            <input
              type="text"
              inputMode="numeric"
              maxLength={3}
              className={styles.dtColorpickerRgbaInput}
              aria-label="Red"
              value={current.r}
              onChange={(event) => handleRgbaInput("r", event.target.value)}
            />
          </label>
          <label className={styles.dtColorpickerRgbaField}>
            <span className={styles.dtColorpickerRgbaLabel}>G</span>
            <input
              type="text"
              inputMode="numeric"
              maxLength={3}
              className={styles.dtColorpickerRgbaInput}
              aria-label="Green"
              value={current.g}
              onChange={(event) => handleRgbaInput("g", event.target.value)}
            />
          </label>
          <label className={styles.dtColorpickerRgbaField}>
            <span className={styles.dtColorpickerRgbaLabel}>B</span>
            <input
              type="text"
              inputMode="numeric"
              maxLength={3}
              className={styles.dtColorpickerRgbaInput}
              aria-label="Blue"
              value={current.b}
              onChange={(event) => handleRgbaInput("b", event.target.value)}
            />
          </label>
          <label className={styles.dtColorpickerRgbaField}>
            <span className={styles.dtColorpickerRgbaLabel}>A</span>
            <input
              type="text"
              inputMode="decimal"
              maxLength={4}
              className={styles.dtColorpickerRgbaInput}
              aria-label="Alpha"
              value={Math.round(current.a * 100)}
              onChange={(event) => handleRgbaInput("a", event.target.value)}
            />
          </label>
        </div>
      )}
      {showPalette && (
        <div className={styles.dtColorpickerPalette}>
          {palette.map((swatch) => (
            <button
              key={swatch}
              type="button"
              role="button"
              className={styles.dtColorpickerSwatch}
              aria-label={swatch}
              aria-disabled={disabled || undefined}
              tabIndex={disabled ? -1 : tabIndex}
              style={{ backgroundColor: swatch }}
              onClick={() => {
                const parsed = hexToRgb(swatch)!;
                if (showButton) {
                  applyStaged({ ...parsed, a: current.a }, false);
                } else {
                  setStaged(null);
                  commit({ ...parsed, a: current.a });
                  setOpen(false);
                  onClose?.();
                  triggerRef.current?.focus();
                }
              }}
            />
          ))}
        </div>
      )}
      {showButton && (
        <div className={styles.dtColorpickerFooter}>
          <button
            type="button"
            className={styles.dtColorpickerOk}
            onClick={handleOk}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div
      ref={rootRef}
      className={[
        styles.dtColorpicker,
        open ? styles.dtColorpickerOpen : null,
        invalid ? styles.dtColorpickerInvalid : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        ref={triggerRef}
        type="button"
        role="button"
        className={[styles.dtColorpickerTrigger, sizeClass].join(" ")}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={popupId}
        aria-label="Pick a color"
        aria-disabled={disabled || undefined}
        disabled={disabled}
        tabIndex={tabIndex}
        onClick={togglePopup}
        onKeyDown={(event) => {
          if (event.key === "Escape" && open) {
            event.preventDefault();
            closePopup();
          }
        }}
      >
        <span
          className={styles.dtColorpickerValue}
          style={{ backgroundColor: css }}
          aria-hidden="true"
        />
        {placeholder && <span className={styles.dtColorpickerText}>{placeholder}</span>}
        {showArrow && (
          <span className={styles.dtColorpickerChevron} aria-hidden="true">
            <Icon name="chevron-down" size={14} />
          </span>
        )}
      </button>
      {open && (
        <div
          id={popupId}
          role="dialog"
          aria-label="Choose color"
          className={styles.dtColorpickerPopup}
        >
          {body}
        </div>
      )}
    </div>
  );
};