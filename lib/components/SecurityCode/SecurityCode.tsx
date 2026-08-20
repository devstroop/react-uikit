import {
  forwardRef,
  useId,
  useRef,
  useState,
  type ClipboardEvent,
  type KeyboardEvent,
} from "react";
import type { ComponentSize } from "../../sizes";
import styles from "./SecurityCode.module.css";

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

function digitsOf(value: string | undefined): string[] {
  const cleaned = (value ?? "").replace(/\D/g, "");
  return cleaned.split("");
}

export const SecurityCode = forwardRef<HTMLInputElement, SecurityCodeProps>(
  function SecurityCode(
    {
      length = 6,
      value,
      defaultValue,
      onChange,
      invalid = false,
      size = "md",
      autoFocus = false,
      disabled = false,
      label = "Security code",
      liveAnnounce = true,
      className,
      "aria-label": ariaLabel,
    },
    ref,
  ) {
    const id = useId();
    const isControlled = value !== undefined;
    const [text, setText] = useState(digitsOf(defaultValue).join(""));
    const code = isControlled ? digitsOf(value).join("") : text;
    const cells = Array.from({ length }, (_, i) => code[i] ?? "");
    const cellRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [liveText, setLiveText] = useState("");

    const commit = (next: string) => {
      if (!isControlled) setText(next);
      onChange?.(next);
    };

    const focusCell = (index: number) => {
      const cell = cellRefs.current[index];
      if (cell && !cell.disabled) {
        cell.focus();
        cell.select();
      }
    };

    const handleChange = (index: number, raw: string) => {
      const digit = raw.replace(/\D/g, "").slice(-1);
      const next = code.split("");
      if (digit) {
        next[index] = digit;
        const joined = next.join("").slice(0, length);
        commit(joined);
        if (joined.length < length) {
          focusCell(index + 1);
        } else if (liveAnnounce) {
          setLiveText("Code complete");
        }
      }
    };

    const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Backspace") {
        event.preventDefault();
        if (code[index]) {
          const next = code.split("");
          next[index] = "";
          commit(next.join(""));
        } else if (index > 0) {
          const next = code.split("");
          next[index - 1] = "";
          commit(next.join(""));
          focusCell(index - 1);
        }
      } else if (event.key === "ArrowLeft" && index > 0) {
        event.preventDefault();
        focusCell(index - 1);
      } else if (event.key === "ArrowRight" && index < length - 1) {
        event.preventDefault();
        focusCell(index + 1);
      } else if (event.key === "Home") {
        event.preventDefault();
        focusCell(0);
      } else if (event.key === "End") {
        event.preventDefault();
        focusCell(length - 1);
      }
    };

    const handlePaste = (index: number, event: ClipboardEvent<HTMLInputElement>) => {
      event.preventDefault();
      const digits = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!digits) return;
      const next = code.split("");
      let written = 0;
      for (let i = 0; i < digits.length && index + i < length; i++) {
        next[index + i] = digits[i] ?? "";
        written++;
      }
      const joined = next.join("");
      commit(joined);
      if (joined.length >= length) {
        if (liveAnnounce) setLiveText("Code complete");
      } else {
        focusCell(index + written);
      }
    };

    return (
      <div
        className={[styles.wrapper, className].filter(Boolean).join(" ")}
        role="group"
        aria-label={ariaLabel ?? label}
        data-invalid={invalid || undefined}
      >
        <div className={[styles.cells, styles[size]].join(" ")}>
          {cells.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                cellRefs.current[index] = el;
                if (index === 0 && ref) {
                  if (typeof ref === "function") ref(el);
                  else ref.current = el;
                }
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              autoComplete="one-time-code"
              value={digit}
              disabled={disabled}
              aria-label={`Digit ${index + 1} of ${length}`}
              aria-invalid={invalid && digit !== "" ? true : undefined}
              autoFocus={autoFocus && index === 0}
              className={[styles.cell, styles[`cell-${size}`], invalid ? styles.invalid : null]
                .filter(Boolean)
                .join(" ")}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={(e) => handlePaste(index, e)}
              onFocus={(e) => e.target.select()}
              onBlur={() => {
                if (liveAnnounce) setLiveText("");
              }}
            />
          ))}
        </div>
        {liveAnnounce && (
          <span id={`${id}-live`} role="status" aria-live="polite" className={styles.live}>
            {liveText}
          </span>
        )}
      </div>
    );
  },
);