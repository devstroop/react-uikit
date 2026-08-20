import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from "react";
import { Icon } from "../Icon/Icon";
import styles from "./Timespanpicker.module.css";

export type TimespanpickerPrecision = "day" | "hour" | "minute" | "second";
export type TimespanpickerSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface TimespanpickerProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "value" | "defaultValue" | "onChange"
  > {
  size?: TimespanpickerSize;
  invalid?: boolean;
  value?: string;
  defaultValue?: string;
  min?: string;
  max?: string;
  step?: string;
  precision?: TimespanpickerPrecision;
  showDays?: boolean;
  showHours?: boolean;
  showMinutes?: boolean;
  showSeconds?: boolean;
  allowClear?: boolean;
  inline?: boolean;
  onChange?: (value: string) => void;
  onValueChange?: (value: string) => void;
  onOpen?: () => void;
  onClose?: () => void;
  ariaLabel?: string;
  triggerLabel?: string;
  clearLabel?: string;
}

const TIMESPAN_MIN = "-10675199.02:48:05.4775808";
const TIMESPAN_MAX = "10675199.02:48:05.4775808";

const SECONDS_PER_DAY = 86400;
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MINUTE = 60;

type TimeUnit = "days" | "hours" | "minutes" | "seconds";

const UNIT_LABELS: Record<TimeUnit, string> = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
};

const UNIT_SECONDS: Record<TimeUnit, number> = {
  days: SECONDS_PER_DAY,
  hours: SECONDS_PER_HOUR,
  minutes: SECONDS_PER_MINUTE,
  seconds: 1,
};

const PRECISION_SECONDS: Record<TimespanpickerPrecision, number> = {
  day: SECONDS_PER_DAY,
  hour: SECONDS_PER_HOUR,
  minute: SECONDS_PER_MINUTE,
  second: 1,
};

interface TimeSpanParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function pad2(value: number): string {
  return String(value).padStart(2, "0");
}

export function parseTimeSpan(value: string): number | null {
  const text = value.trim();
  if (!text) return null;
  let sign = 1;
  let body = text;
  if (body.startsWith("-")) {
    sign = -1;
    body = body.slice(1);
  } else if (body.startsWith("+")) {
    body = body.slice(1);
  }

  const iso =
    /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
      body,
    );
  if (iso) {
    const hasComponent = iso.slice(1).some((part) => part != null);
    if (!hasComponent) return null;
    const days = iso[1] != null ? Number(iso[1]) : 0;
    const hours = iso[2] != null ? Number(iso[2]) : 0;
    const minutes = iso[3] != null ? Number(iso[3]) : 0;
    const seconds = iso[4] != null ? Number(iso[4]) : 0;
    return (
      sign *
      (days * SECONDS_PER_DAY + hours * SECONDS_PER_HOUR + minutes * SECONDS_PER_MINUTE + seconds)
    );
  }

  const net =
    /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(body);
  if (net) {
    const days = net[1] != null ? Number(net[1]) : 0;
    const hours = Number(net[2]);
    const minutes = Number(net[3]);
    const seconds = net[4] != null ? Number(net[4]) : 0;
    const fraction = net[5] != null ? Number(`0.${net[5]}`) : 0;
    if (hours > 23 || minutes > 59 || seconds > 59) return null;
    return (
      sign *
      (days * SECONDS_PER_DAY +
        hours * SECONDS_PER_HOUR +
        minutes * SECONDS_PER_MINUTE +
        seconds +
        fraction)
    );
  }

  return null;
}

function magnitudeToSeconds(parts: TimeSpanParts): number {
  return (
    parts.days * SECONDS_PER_DAY +
    parts.hours * SECONDS_PER_HOUR +
    parts.minutes * SECONDS_PER_MINUTE +
    parts.seconds
  );
}

function decompose(totalSeconds: number): TimeSpanParts {
  let magnitude = Math.abs(totalSeconds);
  const days = Math.floor(magnitude / SECONDS_PER_DAY);
  magnitude %= SECONDS_PER_DAY;
  const hours = Math.floor(magnitude / SECONDS_PER_HOUR);
  magnitude %= SECONDS_PER_HOUR;
  const minutes = Math.floor(magnitude / SECONDS_PER_MINUTE);
  const seconds = Math.round((magnitude % SECONDS_PER_MINUTE) * 1e9) / 1e9;
  return { days, hours, minutes, seconds };
}

function formatSeconds(totalSeconds: number, precision: TimespanpickerPrecision): string {
  const negative = totalSeconds < 0;
  let magnitude = Math.abs(totalSeconds);
  if (precision === "minute") magnitude = Math.round(magnitude / SECONDS_PER_MINUTE) * SECONDS_PER_MINUTE;
  else if (precision === "hour") magnitude = Math.round(magnitude / SECONDS_PER_HOUR) * SECONDS_PER_HOUR;
  else if (precision === "day") magnitude = Math.round(magnitude / SECONDS_PER_DAY) * SECONDS_PER_DAY;

  let seconds = Math.round(magnitude % SECONDS_PER_MINUTE);
  const minutesFromSeconds = seconds === 60 ? 1 : 0;
  seconds = seconds === 60 ? 0 : seconds;
  const totalMinutes = Math.floor(magnitude / SECONDS_PER_MINUTE) + minutesFromSeconds;
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);

  const sign = negative ? "-" : "";
  const dayPrefix = days > 0 ? `${days}.` : "";
  switch (precision) {
    case "day":
      return `${sign}${days} day${days === 1 ? "" : "s"}`;
    case "hour":
      return `${sign}${dayPrefix}${pad2(hours)}`;
    case "minute":
      return `${sign}${dayPrefix}${pad2(hours)}:${pad2(minutes)}`;
    case "second":
    default:
      return `${sign}${dayPrefix}${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}`;
  }
}

/**
 * Normalizes any supported duration string (ISO 8601 or .NET `[d.]HH:MM:SS`)
 * into canonical `HH:MM:SS` form, prefixed with `d.` when whole days are
 * present. `precision` trims the smallest displayed unit.
 */
export function formatTimeSpan(
  value: string,
  precision: TimespanpickerPrecision = "second",
): string {
  const total = parseTimeSpan(value);
  if (total === null) return "";
  return formatSeconds(total, precision);
}

function clampSeconds(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export const Timespanpicker = forwardRef<HTMLInputElement, TimespanpickerProps>(
  function Timespanpicker(
    {
      size = "md",
      invalid = false,
      value,
      defaultValue,
      min = TIMESPAN_MIN,
      max = TIMESPAN_MAX,
      step = "1",
      precision = "second",
      showDays = true,
      showHours = true,
      showMinutes = true,
      showSeconds = true,
      allowClear = false,
      inline = false,
      onChange,
      onValueChange,
      onOpen,
      onClose,
      disabled,
      placeholder,
      ariaLabel,
      triggerLabel,
      clearLabel,
      tabIndex,
      className,
      onBlur,
      onKeyDown,
      ...props
    },
    ref,
  ) {
    const rootRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const popupId = useId();

    const isControlled = value !== undefined;
    const [text, setText] = useState(() =>
      defaultValue != null ? formatTimeSpan(defaultValue, precision) : "",
    );
    const [open, setOpen] = useState(false);
    const [staged, setStaged] = useState<number | null>(null);
    const [draft, setDraft] = useState<Partial<Record<TimeUnit, string>> | null>(null);

    const minSeconds = useMemo(
      () => parseTimeSpan(min) ?? -Number.MAX_SAFE_INTEGER,
      [min],
    );
    const maxSeconds = useMemo(
      () => parseTimeSpan(max) ?? Number.MAX_SAFE_INTEGER,
      [max],
    );
    const stepSeconds = useMemo(() => {
      const parsed = Number.parseFloat(step);
      return Number.isNaN(parsed) || parsed <= 0 ? 1 : parsed;
    }, [step]);

    const currentSeconds = useMemo<number | null>(() => {
      const raw = isControlled ? (value ?? "") : text;
      if (!raw) return null;
      return parseTimeSpan(raw);
    }, [value, text, isControlled]);

    const commit = useCallback(
      (total: number | null) => {
        const output = total === null ? "" : formatSeconds(total, precision);
        if (!isControlled) setText(output);
        onChange?.(output);
        onValueChange?.(output);
      },
      [isControlled, precision, onChange, onValueChange],
    );

    const closePopup = useCallback(
      (confirm: boolean) => {
        if (confirm && staged !== null) commit(staged);
        setOpen(false);
        setStaged(null);
        setDraft(null);
        onClose?.();
        if (!inline) triggerRef.current?.focus();
      },
      [inline, staged, commit, onClose],
    );

    const openPopup = useCallback(() => {
      if (disabled) return;
      setStaged(currentSeconds ?? 0);
      setOpen(true);
      onOpen?.();
    }, [disabled, currentSeconds, onOpen]);

    const togglePopup = useCallback(() => {
      if (open) closePopup(false);
      else openPopup();
    }, [open, closePopup, openPopup]);

    const stepUnit = useCallback(
      (unit: TimeUnit, direction: 1 | -1) => {
        setStaged((previous) => {
          const base = previous ?? currentSeconds ?? 0;
          const next = base + direction * stepSeconds * UNIT_SECONDS[unit];
          return clampSeconds(next, minSeconds, maxSeconds);
        });
      },
      [currentSeconds, stepSeconds, minSeconds, maxSeconds],
    );

    const commitDraft = useCallback(
      (unit: TimeUnit) => {
        const raw = draft?.[unit];
        if (raw == null) return;
        const parsed = Number.parseFloat(raw);
        const unitValue = Number.isNaN(parsed) ? 0 : parsed;
        setStaged((previous) => {
          const base = previous ?? currentSeconds ?? 0;
          const parts = decompose(base);
          parts[unit] = unitValue;
          const sign = base < 0 ? -1 : 1;
          const total = sign * magnitudeToSeconds(parts);
          return clampSeconds(total, minSeconds, maxSeconds);
        });
        setDraft(null);
      },
      [draft, currentSeconds, minSeconds, maxSeconds],
    );

    const handleUnitChange = (unit: TimeUnit, raw: string) => {
      setDraft((previous) => ({ ...(previous ?? {}), [unit]: raw }));
    };

    const handleUnitKeyDown = (unit: TimeUnit, event: KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          commitDraft(unit);
          stepUnit(unit, 1);
          break;
        case "ArrowDown":
          event.preventDefault();
          commitDraft(unit);
          stepUnit(unit, -1);
          break;
        case "Home":
          event.preventDefault();
          commitDraft(unit);
          setStaged(minSeconds);
          break;
        case "End":
          event.preventDefault();
          commitDraft(unit);
          setStaged(maxSeconds);
          break;
        case "Enter":
          event.preventDefault();
          commitDraft(unit);
          closePopup(true);
          break;
      }
    };

    const commitFromText = useCallback(() => {
      if (open) return;
      const parsed = parseTimeSpan(text);
      if (parsed !== null) {
        commit(clampSeconds(parsed, minSeconds, maxSeconds));
      } else {
        commit(null);
      }
    }, [open, text, minSeconds, maxSeconds, commit]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setText(event.target.value);
    };

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (open) {
          closePopup(true);
        } else {
          commitFromText();
        }
      } else if (event.key === "Escape" && open) {
        event.preventDefault();
        closePopup(false);
      } else if (event.key === "ArrowDown" && !open) {
        event.preventDefault();
        openPopup();
      } else if (event.key === "Tab" && open) {
        setOpen(false);
      }
      onKeyDown?.(event);
    };

    const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
      commitFromText();
      onBlur?.(event);
    };

    const handleClear = () => {
      if (!isControlled) setText("");
      onChange?.("");
      onValueChange?.("");
      inputRef.current?.focus();
    };

    useEffect(() => {
      if (!open) return;
      const onMouseDown = (event: MouseEvent) => {
        if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
          closePopup(false);
        }
      };
      document.addEventListener("mousedown", onMouseDown);
      return () => document.removeEventListener("mousedown", onMouseDown);
    }, [open, closePopup]);

    useEffect(() => {
      if (!open) return;
      const onKeyDown = (event: globalThis.KeyboardEvent) => {
        if (event.key === "Escape") closePopup(false);
      };
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }, [open, closePopup]);

    useEffect(() => {
      if (inline && staged !== null) {
        const committed = currentSeconds;
        if (committed === null || Math.abs(staged - committed) > 1e-9) {
          commit(staged);
        }
      }
    }, [inline, staged, currentSeconds, commit]);

    const setInputRef = useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    const displayedText = isControlled
      ? value
        ? formatTimeSpan(value, precision)
        : ""
      : text;
    const hasValue = isControlled ? Boolean(value) : text.length > 0;
    const effectiveOpen = inline || open;

    const stagedSeconds = staged ?? currentSeconds ?? 0;
    const parts = decompose(stagedSeconds);
    const precisionSeconds = PRECISION_SECONDS[precision];
    const unitOrder: TimeUnit[] = ["days", "hours", "minutes", "seconds"];
    const visibleUnits = unitOrder.filter(
      (unit) =>
        UNIT_SECONDS[unit] >= precisionSeconds &&
        (unit === "days"
          ? showDays
          : unit === "hours"
            ? showHours
            : unit === "minutes"
              ? showMinutes
              : showSeconds),
    );

    const sizeClass =
      size === "xs"
        ? styles.dtTimespanpickerInputXs
        : size === "sm"
          ? styles.dtTimespanpickerInputSm
          : size === "lg"
            ? styles.dtTimespanpickerInputLg
            : size === "xl"
              ? styles.dtTimespanpickerInputXl
              : styles.dtTimespanpickerInputMd;

    const panel = (
      <div className={styles.dtTimespanpickerPanel}>
        <div className={styles.dtTimespanpickerPreview} aria-live="polite">
          {formatSeconds(stagedSeconds, precision)}
        </div>
        <div className={styles.dtTimespanpickerUnits}>
          {visibleUnits.map((unit) => (
            <label key={unit} className={styles.dtTimespanpickerUnit}>
              <span className={styles.dtTimespanpickerUnitLabel}>
                {UNIT_LABELS[unit]}
              </span>
              <span className={styles.dtTimespanpickerUnitControl}>
                <input
                  className={styles.dtTimespanpickerUnitInput}
                  inputMode="decimal"
                  value={draft?.[unit] ?? String(parts[unit])}
                  onChange={(event) => handleUnitChange(unit, event.target.value)}
                  onKeyDown={(event) => handleUnitKeyDown(unit, event)}
                  onBlur={() => commitDraft(unit)}
                />
                <span className={styles.dtTimespanpickerUnitButtons}>
                  <button
                    type="button"
                    aria-label={`Increase ${UNIT_LABELS[unit].toLowerCase()}`}
                    onClick={() => {
                      commitDraft(unit);
                      stepUnit(unit, 1);
                    }}
                  >
                    <Icon name="chevron-up" size={11} />
                  </button>
                  <button
                    type="button"
                    aria-label={`Decrease ${UNIT_LABELS[unit].toLowerCase()}`}
                    onClick={() => {
                      commitDraft(unit);
                      stepUnit(unit, -1);
                    }}
                  >
                    <Icon name="chevron-down" size={11} />
                  </button>
                </span>
              </span>
            </label>
          ))}
        </div>
        <div className={styles.dtTimespanpickerFooter}>
          <button
            type="button"
            className={styles.dtTimespanpickerOk}
            onClick={() => closePopup(true)}
          >
            OK
          </button>
        </div>
      </div>
    );

    return (
      <div
        ref={rootRef}
        className={[
          styles.dtTimespanpicker,
          inline ? styles.dtTimespanpickerInline : null,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {!inline && (
          <>
            <input
              ref={setInputRef}
              type="text"
              autoComplete="off"
              value={displayedText}
              disabled={disabled}
              placeholder={placeholder}
              tabIndex={tabIndex}
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls={popupId}
              aria-invalid={invalid || undefined}
              className={[
                styles.dtTimespanpickerInput,
                sizeClass,
                invalid ? styles.dtTimespanpickerInputInvalid : null,
              ]
                .filter(Boolean)
                .join(" ")}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              onBlur={handleInputBlur}
              {...props}
            />
            {allowClear && !disabled && hasValue && (
              <button
                type="button"
                className={styles.dtTimespanpickerClear}
                aria-label={clearLabel ?? "Clear"}
                onClick={handleClear}
              >
                <Icon name="close" size={14} />
              </button>
            )}
            <button
              ref={triggerRef}
              type="button"
              className={[
                styles.dtTimespanpickerTrigger,
                open ? styles.dtTimespanpickerTriggerOpen : null,
              ]
                .filter(Boolean)
                .join(" ")}
              aria-label={triggerLabel ?? "Open timespan picker"}
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls={popupId}
              disabled={disabled}
              onClick={togglePopup}
            >
              <Icon name="clock" size={16} />
            </button>
          </>
        )}
        {effectiveOpen && (
          <div
            id={popupId}
            role={inline ? undefined : "dialog"}
            aria-label={ariaLabel ?? "Time span picker"}
            className={inline ? undefined : styles.dtTimespanpickerPopup}
          >
            {panel}
          </div>
        )}
      </div>
    );
  },
);