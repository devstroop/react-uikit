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
import styles from "./Datepicker.module.css";

export type DatepickerSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface DatepickerProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "value" | "defaultValue" | "onChange"
  > {
  size?: DatepickerSize;
  invalid?: boolean;
  value?: string;
  defaultValue?: string;
  format?: string;
  min?: string;
  max?: string;
  showTime?: boolean;
  showButton?: boolean;
  allowClear?: boolean;
  inline?: boolean;
  disabledDates?: readonly string[];
  locale?: string;
  onChange?: (value: string) => void;
  onValueChange?: (value: string) => void;
  onOpen?: () => void;
  onClose?: () => void;
  ariaLabel?: string;
  triggerLabel?: string;
  clearLabel?: string;
}

interface DateParts {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

const GRID_CELLS = 42;

function pad2(value: number): string {
  return String(value).padStart(2, "0");
}

function isoDate(parts: DateParts): string {
  return `${parts.year}-${pad2(parts.month)}-${pad2(parts.day)}`;
}

function toIso(parts: DateParts, includeTime: boolean): string {
  const date = isoDate(parts);
  if (!includeTime) return date;
  return `${date} ${pad2(parts.hour)}:${pad2(parts.minute)}:${pad2(parts.second)}`;
}

function dateFromIso(value: string): DateParts | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    value.trim(),
  );
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = match[4] != null ? Number(match[4]) : 0;
  const minute = match[5] != null ? Number(match[5]) : 0;
  const second = match[6] != null ? Number(match[6]) : 0;
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  const probe = new Date(year, month - 1, day, hour, minute, second);
  if (
    probe.getFullYear() !== year ||
    probe.getMonth() !== month - 1 ||
    probe.getDate() !== day
  ) {
    return null;
  }
  return { year, month, day, hour, minute, second };
}

function todayParts(): DateParts {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
    hour: 0,
    minute: 0,
    second: 0,
  };
}

function addDays(parts: DateParts, delta: number): DateParts {
  const probe = new Date(
    parts.year,
    parts.month - 1,
    parts.day + delta,
    parts.hour,
    parts.minute,
    parts.second,
  );
  return {
    year: probe.getFullYear(),
    month: probe.getMonth() + 1,
    day: probe.getDate(),
    hour: parts.hour,
    minute: parts.minute,
    second: parts.second,
  };
}

function addMonths(parts: DateParts, delta: number): DateParts {
  const probe = new Date(parts.year, parts.month - 1 + delta, 1);
  const year = probe.getFullYear();
  const month = probe.getMonth() + 1;
  const daysInMonth = new Date(year, month, 0).getDate();
  return {
    year,
    month,
    day: Math.min(parts.day, daysInMonth),
    hour: parts.hour,
    minute: parts.minute,
    second: parts.second,
  };
}

function weekday(parts: DateParts): number {
  return new Date(parts.year, parts.month - 1, parts.day).getDay();
}

const TOKEN_FORMATTERS: Record<string, (p: DateParts, date: Date, locale: string) => string> = {
  yyyy: (p) => String(p.year).padStart(4, "0"),
  yy: (p) => pad2(p.year % 100),
  MM: (p) => pad2(p.month),
  M: (p) => String(p.month),
  dd: (p) => pad2(p.day),
  d: (p) => String(p.day),
  HH: (p) => pad2(p.hour),
  H: (p) => String(p.hour),
  mm: (p) => pad2(p.minute),
  m: (p) => String(p.minute),
  ss: (p) => pad2(p.second),
  s: (p) => String(p.second),
  tt: (_p, date, locale) => {
    const parts = new Intl.DateTimeFormat(locale, {
      hour: "numeric",
      hour12: true,
    }).formatToParts(date);
    return parts.find((part) => part.type === "dayPeriod")?.value ?? "";
  },
};

const MULTI_TOKENS = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"] as const;
const SINGLE_TOKENS = ["y", "M", "d", "H", "m", "s"] as const;

function formatDate(parts: DateParts, format: string, locale: string): string {
  const date = new Date(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour,
    parts.minute,
    parts.second,
  );
  let out = "";
  let index = 0;
  while (index < format.length) {
    let matched = false;
    for (const token of MULTI_TOKENS) {
      if (format.startsWith(token, index)) {
        out += TOKEN_FORMATTERS[token]!(parts, date, locale);
        index += token.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;
    const char = format[index]!;
    if ((SINGLE_TOKENS as readonly string[]).includes(char)) {
      out += TOKEN_FORMATTERS[char]!(parts, date, locale);
      index += 1;
      continue;
    }
    out += char;
    index += 1;
  }
  return out;
}

const PARSE_TOKENS = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "y",
  "M",
  "d",
  "H",
  "m",
  "s",
] as const;

function parseFormatted(text: string, format: string): DateParts | null {
  const out: Partial<DateParts> = {};
  let textIndex = 0;
  let formatIndex = 0;
  while (formatIndex < format.length) {
    let token: (typeof PARSE_TOKENS)[number] | null = null;
    for (const candidate of PARSE_TOKENS) {
      if (format.startsWith(candidate, formatIndex)) {
        token = candidate;
        break;
      }
    }
    if (token) {
      const slice = text.slice(textIndex, textIndex + token.length);
      if (!/^\d+$/.test(slice)) return null;
      const number = Number(slice);
      switch (token) {
        case "yyyy":
          out.year = number;
          break;
        case "yy":
        case "y":
          out.year = 2000 + number;
          break;
        case "MM":
        case "M":
          out.month = number;
          break;
        case "dd":
        case "d":
          out.day = number;
          break;
        case "HH":
        case "H":
          out.hour = number;
          break;
        case "mm":
        case "m":
          out.minute = number;
          break;
        case "ss":
        case "s":
          out.second = number;
          break;
      }
      textIndex += token.length;
      formatIndex += token.length;
      continue;
    }
    if (text[textIndex] !== format[formatIndex]) return null;
    textIndex += 1;
    formatIndex += 1;
  }
  const parsed: DateParts = {
    year: out.year ?? new Date().getFullYear(),
    month: out.month ?? 1,
    day: out.day ?? 1,
    hour: out.hour ?? 0,
    minute: out.minute ?? 0,
    second: out.second ?? 0,
  };
  if (parsed.month < 1 || parsed.month > 12 || parsed.day < 1 || parsed.day > 31) {
    return null;
  }
  const probe = new Date(
    parsed.year,
    parsed.month - 1,
    parsed.day,
    parsed.hour,
    parsed.minute,
    parsed.second,
  );
  if (
    probe.getFullYear() !== parsed.year ||
    probe.getMonth() !== parsed.month - 1 ||
    probe.getDate() !== parsed.day
  ) {
    return null;
  }
  return parsed;
}

function parseDateInput(value: string, format: string): DateParts | null {
  const iso = dateFromIso(value);
  if (iso) return iso;
  return parseFormatted(value, format);
}

function clampDate(
  parts: DateParts,
  minParts: DateParts | null,
  maxParts: DateParts | null,
): DateParts {
  if (minParts && isoDate(parts) < isoDate(minParts)) return minParts;
  if (maxParts && isoDate(parts) > isoDate(maxParts)) return maxParts;
  return parts;
}

const TIME_FIELDS = ["hour", "minute", "second"] as const;
type TimeField = (typeof TIME_FIELDS)[number];

function timeFieldLabel(field: TimeField): string {
  switch (field) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}

export const Datepicker = forwardRef<HTMLInputElement, DatepickerProps>(function Datepicker(
  {
    size = "md",
    invalid = false,
    value,
    defaultValue,
    format = "yyyy-MM-dd",
    min,
    max,
    showTime = false,
    showButton = true,
    allowClear = false,
    inline = false,
    disabledDates,
    locale = "en-US",
    onChange,
    onValueChange,
    onOpen,
    onClose,
    disabled,
    readOnly,
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
  const gridRef = useRef<HTMLDivElement>(null);
  const popupId = useId();

  const isControlled = value !== undefined;
  const [text, setText] = useState(() =>
    defaultValue != null
      ? formatDate(parseDateInput(defaultValue, format) ?? todayParts(), format, locale)
      : "",
  );
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState<DateParts | null>(null);
  const [focusDate, setFocusDate] = useState<DateParts>(() => {
    const initial = value !== undefined ? (value ?? "") : (defaultValue ?? "");
    if (initial) {
      const parsed = parseDateInput(initial, format);
      if (parsed) return parsed;
    }
    return todayParts();
  });

  const minParts = useMemo(() => (min ? dateFromIso(min) : null), [min]);
  const maxParts = useMemo(() => (max ? dateFromIso(max) : null), [max]);
  const disabledSet = useMemo(
    () => new Set(disabledDates ?? []),
    [disabledDates],
  );

  const currentParts = useMemo<DateParts | null>(() => {
    const raw = isControlled ? (value ?? "") : text;
    if (!raw) return null;
    return parseDateInput(raw, format);
  }, [value, text, isControlled, format]);

  const isDisabled = useCallback(
    (parts: DateParts): boolean => {
      const date = isoDate(parts);
      if (disabledSet.has(date)) return true;
      if (minParts && date < isoDate(minParts)) return true;
      if (maxParts && date > isoDate(maxParts)) return true;
      return false;
    },
    [disabledSet, minParts, maxParts],
  );

  const nearestEnabled = useCallback(
    (parts: DateParts): DateParts => {
      if (!isDisabled(parts)) return parts;
      for (let offset = 1; offset <= 366; offset += 1) {
        const forward = addDays(parts, offset);
        if (!isDisabled(forward)) return forward;
        const backward = addDays(parts, -offset);
        if (!isDisabled(backward)) return backward;
      }
      return parts;
    },
    [isDisabled],
  );

  const commit = useCallback(
    (parts: DateParts | null) => {
      if (!isControlled) {
        setText(parts ? formatDate(parts, format, locale) : "");
      }
      const output = parts ? toIso(parts, showTime) : "";
      onChange?.(output);
      onValueChange?.(output);
    },
    [isControlled, format, locale, showTime, onChange, onValueChange],
  );

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

  const closePopup = useCallback(() => {
    setOpen(false);
    setPending(null);
    onClose?.();
    if (!inline) triggerRef.current?.focus();
  }, [inline, onClose]);

  const openPopup = useCallback(() => {
    if (disabled) return;
    const base = currentParts ?? todayParts();
    setPending(base);
    setFocusDate(nearestEnabled(base));
    setOpen(true);
    onOpen?.();
  }, [disabled, currentParts, nearestEnabled, onOpen]);

  const togglePopup = useCallback(() => {
    if (open) closePopup();
    else openPopup();
  }, [open, closePopup, openPopup]);

  const focusCell = useCallback((parts: DateParts) => {
    const cell = gridRef.current?.querySelector<HTMLElement>(
      `[data-date="${isoDate(parts)}"]`,
    );
    cell?.focus();
  }, []);

  const selectDay = useCallback(
    (parts: DateParts) => {
      if (isDisabled(parts)) return;
      const base = pending ?? currentParts;
      const time = showTime
        ? {
            hour: base?.hour ?? 0,
            minute: base?.minute ?? 0,
            second: base?.second ?? 0,
          }
        : { hour: 0, minute: 0, second: 0 };
      const merged: DateParts = {
        ...time,
        year: parts.year,
        month: parts.month,
        day: parts.day,
      };
      setPending(merged);
      if (!showTime) {
        commit(merged);
        closePopup();
      }
    },
    [isDisabled, pending, currentParts, showTime, commit, closePopup],
  );

  const stepTime = useCallback(
    (field: TimeField, delta: number) => {
      setPending((previous) => {
        const base = previous ?? currentParts ?? todayParts();
        const limit = field === "hour" ? 23 : 59;
        const next = Math.min(limit, Math.max(0, base[field] + delta));
        return { ...base, [field]: next };
      });
    },
    [currentParts],
  );

  const changeTimeField = useCallback(
    (field: TimeField, raw: string) => {
      const cleaned = raw.replace(/\D/g, "");
      const number = cleaned === "" ? 0 : Number(cleaned);
      const limit = field === "hour" ? 23 : 59;
      setPending((previous) => {
        const base = previous ?? currentParts ?? todayParts();
        return { ...base, [field]: Math.min(limit, number) };
      });
    },
    [currentParts],
  );

  const confirmTime = useCallback(() => {
    if (pending) {
      commit(pending);
      closePopup();
    }
  }, [pending, commit, closePopup]);

  const commitFromText = useCallback(() => {
    if (open) return;
    const parsed = parseDateInput(text, format);
    if (parsed) {
      commit(clampDate(parsed, minParts, maxParts));
    } else {
      commit(null);
    }
  }, [open, text, format, minParts, maxParts, commit]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value;
    if (!isControlled) setText(raw);
    if (open) setPending(null);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (open) {
        if (pending) {
          commit(pending);
          closePopup();
        }
      } else {
        commitFromText();
      }
    } else if (event.key === "Escape") {
      if (open) {
        event.preventDefault();
        closePopup();
      }
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

  const handleGridKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    let next: DateParts | null = null;
    switch (event.key) {
      case "ArrowLeft":
        next = addDays(focusDate, -1);
        event.preventDefault();
        break;
      case "ArrowRight":
        next = addDays(focusDate, 1);
        event.preventDefault();
        break;
      case "ArrowUp":
        next = addDays(focusDate, -7);
        event.preventDefault();
        break;
      case "ArrowDown":
        next = addDays(focusDate, 7);
        event.preventDefault();
        break;
      case "Home":
        next = addDays(focusDate, -weekday(focusDate));
        event.preventDefault();
        break;
      case "End":
        next = addDays(focusDate, 6 - weekday(focusDate));
        event.preventDefault();
        break;
      case "PageUp":
        next = addMonths(focusDate, event.shiftKey ? -12 : -1);
        event.preventDefault();
        break;
      case "PageDown":
        next = addMonths(focusDate, event.shiftKey ? 12 : 1);
        event.preventDefault();
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        selectDay(focusDate);
        break;
      case "Escape":
        event.preventDefault();
        closePopup();
        break;
      case "Tab":
        setOpen(false);
        break;
    }
    if (next) {
      const enabled = nearestEnabled(next);
      setFocusDate(enabled);
      setTimeout(() => focusCell(enabled), 0);
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

  const handleClear = () => {
    if (!isControlled) setText("");
    onChange?.("");
    onValueChange?.("");
    inputRef.current?.focus();
  };

  const displayedText = open && pending
    ? formatDate(pending, format, locale)
    : isControlled
      ? value
        ? formatDate(parseDateInput(value, format) ?? todayParts(), format, locale)
        : ""
      : text;

  const hasValue = isControlled ? Boolean(value) : text.length > 0;
  const effectiveOpen = inline || open;
  const view = { year: focusDate.year, month: focusDate.month };
  const firstWeekday = new Date(view.year, view.month - 1, 1).getDay();
  const baseDay: DateParts = {
    year: view.year,
    month: view.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
  };
  const cells: DateParts[] = [];
  for (let index = 0; index < GRID_CELLS; index += 1) {
    cells.push(addDays(baseDay, index - firstWeekday));
  }

  const selectedDate = pending
    ? isoDate(pending)
    : currentParts
      ? isoDate(currentParts)
      : null;
  const todayString = isoDate(todayParts());
  const viewPrefix = `${view.year}-${pad2(view.month)}`;

  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [locale],
  );
  const monthTitle = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(new Date(view.year, view.month - 1, 1));
  const weekdays = Array.from({ length: 7 }, (_, index) =>
    new Intl.DateTimeFormat(locale, { weekday: "short" }).format(
      new Date(2021, 0, 3 + index),
    ),
  );

  const sizeClass =
    size === "xs"
      ? styles.dtDatepickerInputXs
      : size === "sm"
        ? styles.dtDatepickerInputSm
        : size === "lg"
          ? styles.dtDatepickerInputLg
          : size === "xl"
            ? styles.dtDatepickerInputXl
            : styles.dtDatepickerInputMd;

  const calendar = (
    <div
      className={styles.dtDatepickerCalendar}
      aria-label={ariaLabel ?? "Date picker"}
    >
      <div className={styles.dtDatepickerHeader}>
        <button
          type="button"
          className={styles.dtDatepickerNav}
          aria-label="Previous month"
          onClick={() => {
            const next = nearestEnabled(addMonths(focusDate, -1));
            setFocusDate(next);
            setTimeout(() => focusCell(next), 0);
          }}
        >
          <Icon name="chevron-left" size={16} />
        </button>
        <span className={styles.dtDatepickerTitle}>{monthTitle}</span>
        <button
          type="button"
          className={styles.dtDatepickerNav}
          aria-label="Next month"
          onClick={() => {
            const next = nearestEnabled(addMonths(focusDate, 1));
            setFocusDate(next);
            setTimeout(() => focusCell(next), 0);
          }}
        >
          <Icon name="chevron-right" size={16} />
        </button>
      </div>
      <div
        ref={gridRef}
        role="grid"
        className={styles.dtDatepickerGrid}
        onKeyDown={handleGridKeyDown}
      >
        <div role="row" className={styles.dtDatepickerWeekRow}>
          {weekdays.map((day) => (
            <div
              key={day}
              role="columnheader"
              className={styles.dtDatepickerWeekday}
              aria-hidden="true"
            >
              {day}
            </div>
          ))}
        </div>
        {Array.from({ length: 6 }, (_, rowIndex) => (
          <div role="row" key={rowIndex} className={styles.dtDatepickerRow}>
            {cells.slice(rowIndex * 7, rowIndex * 7 + 7).map((cell) => {
              const cellDate = isoDate(cell);
              const disabled = isDisabled(cell);
              const inMonth = cellDate.startsWith(viewPrefix);
              return (
                <button
                  key={cellDate}
                  type="button"
                  role="gridcell"
                  data-date={cellDate}
                  tabIndex={cellDate === isoDate(focusDate) ? 0 : -1}
                  aria-selected={cellDate === selectedDate || undefined}
                  aria-disabled={disabled || undefined}
                  aria-label={dateFormatter.format(
                    new Date(cell.year, cell.month - 1, cell.day),
                  )}
                  className={[
                    styles.dtDatepickerDay,
                    inMonth ? null : styles.dtDatepickerDayOutside,
                    cellDate === todayString ? styles.dtDatepickerDayToday : null,
                    cellDate === selectedDate ? styles.dtDatepickerDaySelected : null,
                    disabled ? styles.dtDatepickerDayDisabled : null,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => selectDay(cell)}
                  onFocus={() => setFocusDate(cell)}
                >
                  {cell.day}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      {showTime && (
        <div className={styles.dtDatepickerTime}>
          {TIME_FIELDS.map((field) => (
            <label key={field} className={styles.dtDatepickerTimeField}>
              <span className={styles.dtDatepickerTimeLabel}>
                {timeFieldLabel(field)}
              </span>
              <div className={styles.dtDatepickerTimeControl}>
                <input
                  className={styles.dtDatepickerTimeInput}
                  inputMode="numeric"
                  aria-label={timeFieldLabel(field)}
                  value={pad2((pending ?? currentParts ?? todayParts())[field])}
                  onChange={(event) => changeTimeField(field, event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowUp") {
                      event.preventDefault();
                      stepTime(field, 1);
                    } else if (event.key === "ArrowDown") {
                      event.preventDefault();
                      stepTime(field, -1);
                    } else if (event.key === "Enter") {
                      event.preventDefault();
                      confirmTime();
                    }
                  }}
                />
                <span className={styles.dtDatepickerTimeButtons}>
                  <button
                    type="button"
                    aria-label={`Increase ${timeFieldLabel(field).toLowerCase()}`}
                    onClick={() => stepTime(field, 1)}
                  >
                    <Icon name="chevron-up" size={11} />
                  </button>
                  <button
                    type="button"
                    aria-label={`Decrease ${timeFieldLabel(field).toLowerCase()}`}
                    onClick={() => stepTime(field, -1)}
                  >
                    <Icon name="chevron-down" size={11} />
                  </button>
                </span>
              </div>
            </label>
          ))}
          <button
            type="button"
            className={styles.dtDatepickerOk}
            onClick={confirmTime}
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
        styles.dtDatepicker,
        inline ? styles.dtDatepickerInline : null,
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
            readOnly={readOnly}
            placeholder={placeholder}
            tabIndex={tabIndex}
            aria-haspopup={showButton ? undefined : "dialog"}
            aria-expanded={showButton ? undefined : effectiveOpen}
            aria-controls={showButton ? undefined : popupId}
            aria-invalid={invalid || undefined}
            className={[
              styles.dtDatepickerInput,
              sizeClass,
              invalid ? styles.dtDatepickerInputInvalid : null,
            ]
              .filter(Boolean)
              .join(" ")}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            onBlur={handleInputBlur}
            onClick={() => {
              if (!showButton) togglePopup();
            }}
            {...props}
          />
          {allowClear && !disabled && hasValue && (
            <button
              type="button"
              className={[
                styles.dtDatepickerClear,
                showButton ? styles.dtDatepickerClearInset : null,
              ]
                .filter(Boolean)
                .join(" ")}
              aria-label={clearLabel ?? "Clear"}
              onClick={handleClear}
            >
              <Icon name="close" size={14} />
            </button>
          )}
          {showButton && (
            <button
              ref={triggerRef}
              type="button"
              className={[
                styles.dtDatepickerTrigger,
                open ? styles.dtDatepickerTriggerOpen : null,
              ]
                .filter(Boolean)
                .join(" ")}
              aria-label={triggerLabel ?? "Open calendar"}
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls={popupId}
              disabled={disabled}
              onClick={togglePopup}
            >
              <Icon name="calendar" size={16} />
            </button>
          )}
        </>
      )}
      {effectiveOpen && (
        <div
          id={popupId}
          role={inline ? undefined : "dialog"}
          className={inline ? undefined : styles.dtDatepickerPopup}
        >
          {calendar}
        </div>
      )}
    </div>
  );
});