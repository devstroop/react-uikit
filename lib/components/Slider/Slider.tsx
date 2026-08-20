import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import styles from "./Slider.module.css";

export type SliderOrientation = "horizontal" | "vertical";

export interface SliderProps {
  value?: number;
  valueMin?: number;
  valueMax?: number;
  min?: number;
  max?: number;
  step?: number;
  range?: boolean;
  orientation?: SliderOrientation;
  disabled?: boolean;
  label?: string;
  minLabel?: string;
  maxLabel?: string;
  tabIndex?: number;
  className?: string;
  onChange?: (value: number | { min: number; max: number }) => void;
  onInput?: (value: number | { min: number; max: number }) => void;
  onValueChange?: (value: number | { min: number; max: number }) => void;
  onInputChange?: (value: number | { min: number; max: number }) => void;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export const Slider = ({
  value = 0,
  valueMin = 0,
  valueMax = 100,
  min = 0,
  max = 100,
  step = 1,
  range = false,
  orientation = "horizontal",
  disabled = false,
  label = "Value",
  minLabel = "Min",
  maxLabel = "Max",
  tabIndex = 0,
  className,
  onChange,
  onInput,
  onValueChange,
  onInputChange,
}: SliderProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef<{ key: "min" | "max"; pointerId: number } | null>(null);
  const [live, setLive] = useState<number | null>(null);

  const effective = live ?? value;
  const single = useMemo(() => clamp(effective, min, max), [effective, min, max]);
  const minValue = useMemo(
    () => clamp(range ? valueMin : single, min, max),
    [range, valueMin, single, min, max],
  );
  const maxValue = useMemo(
    () => clamp(range ? Math.max(valueMax, minValue) : single, min, max),
    [range, valueMax, minValue, single, min, max],
  );

  const position = useCallback(
    (v: number): number => {
      const span = max - min;
      if (span <= 0) return 0;
      return ((clamp(v, min, max) - min) / span) * 100;
    },
    [min, max],
  );

  const valueFromPointer = useCallback(
    (clientX: number, clientY: number): number => {
      const track = trackRef.current;
      if (!track) return min;
      const rect = track.getBoundingClientRect();
      let ratio: number;
      if (orientation === "vertical") {
        ratio = 1 - (clientY - rect.top) / rect.height;
      } else {
        ratio = (clientX - rect.left) / rect.width;
      }
      const raw = min + clamp(ratio, 0, 1) * (max - min);
      if (step > 0) {
        return clamp(Math.round(raw / step) * step, min, max);
      }
      return clamp(raw, min, max);
    },
    [min, max, step, orientation],
  );

  const commit = useCallback(
    (next: { min: number; max: number } | number) => {
      if (typeof next === "number") setLive(next);
      onChange?.(next);
      onValueChange?.(next);
    },
    [onChange, onValueChange],
  );

  const input = useCallback(
    (next: { min: number; max: number } | number) => {
      if (typeof next === "number") setLive(next);
      onInput?.(next);
      onInputChange?.(next);
    },
    [onInput, onInputChange],
  );

  const setFromPointer = useCallback(
    (key: "min" | "max", clientX: number, clientY: number) => {
      const raw = valueFromPointer(clientX, clientY);
      let next: { min: number; max: number } | number;
      if (range) {
        if (key === "min") {
          next = { min: Math.min(raw, maxValue), max: maxValue };
        } else {
          next = { min: minValue, max: Math.max(raw, minValue) };
        }
      } else {
        next = raw;
      }
      input(next);
      if (dragging.current === null) commit(next);
    },
    [range, valueFromPointer, minValue, maxValue, input, commit],
  );

  const stepFromKey = useCallback(
    (key: "min" | "max", direction: 1 | -1) => {
      const amount = (step > 0 ? step : 1) * direction;
      let next: { min: number; max: number } | number;
      if (range) {
        if (key === "min") {
          next = {
            min: clamp(minValue + amount, min, maxValue),
            max: maxValue,
          };
        } else {
          next = {
            min: minValue,
            max: clamp(maxValue + amount, minValue, max),
          };
        }
      } else {
        next = clamp(single + amount, min, max);
      }
      commit(next);
    },
    [range, step, min, max, minValue, maxValue, single, commit],
  );

  const handleKeyDown = (
    key: "min" | "max",
    event: KeyboardEvent<HTMLDivElement>,
  ) => {
    if (disabled) return;
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowDown":
        event.preventDefault();
        stepFromKey(key, -1);
        break;
      case "ArrowRight":
      case "ArrowUp":
        event.preventDefault();
        stepFromKey(key, 1);
        break;
      case "Home":
        event.preventDefault();
        if (range) {
          if (key === "min") {
            commit({ min: min, max: maxValue });
          } else {
            commit({ min: minValue, max: minValue });
          }
        } else {
          commit(min);
        }
        break;
      case "End":
        event.preventDefault();
        if (range) {
          if (key === "min") {
            commit({ min: maxValue, max: maxValue });
          } else {
            commit({ min: minValue, max: max });
          }
        } else {
          commit(max);
        }
        break;
    }
  };

  const handlePointerDown = (
    key: "min" | "max",
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    if (disabled) return;
    event.preventDefault();
    event.currentTarget.focus();
    if (typeof event.currentTarget.setPointerCapture === "function") {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    dragging.current = { key, pointerId: event.pointerId };
    setFromPointer(key, event.clientX, event.clientY);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current || dragging.current.pointerId !== event.pointerId) {
      return;
    }
    event.preventDefault();
    setFromPointer(dragging.current.key, event.clientX, event.clientY);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current || dragging.current.pointerId !== event.pointerId) {
      return;
    }
    dragging.current = null;
    event.preventDefault();
    if (range) {
      commit({ min: minValue, max: maxValue });
    } else {
      commit(single);
    }
  };

  const [focused, setFocused] = useState<"min" | "max" | null>(null);

  const minPos = position(minValue);
  const maxPos = position(maxValue);
  const fillStart = range ? minPos : 0;
  const fillEnd = range ? maxPos : maxPos;

  return (
    <div
      className={[
        styles.dtSlider,
        orientation === "vertical" ? styles.dtSliderVertical : null,
        disabled ? styles.dtSliderDisabled : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div ref={trackRef} className={styles.dtSliderTrack}>
        <div
          className={styles.dtSliderRange}
          style={
            orientation === "vertical"
              ? { bottom: `${fillStart}%`, height: `${fillEnd - fillStart}%` }
              : { left: `${fillStart}%`, width: `${fillEnd - fillStart}%` }
          }
        />
        <div
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={Math.round(minValue)}
          aria-orientation={orientation}
          aria-label={range ? minLabel : label}
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : range ? (focused === "max" ? -1 : tabIndex) : tabIndex}
          className={styles.dtSliderHandle}
          style={
            orientation === "vertical"
              ? { bottom: `calc(${minPos}% - 8px)` }
              : { left: `calc(${minPos}% - 8px)` }
          }
          onKeyDown={(event) => handleKeyDown("min", event)}
          onPointerDown={(event) => handlePointerDown("min", event)}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onFocus={() => setFocused("min")}
        />
        {range && (
          <div
            role="slider"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={Math.round(maxValue)}
            aria-orientation={orientation}
            aria-label={maxLabel}
            aria-disabled={disabled || undefined}
            tabIndex={disabled ? -1 : focused === "min" ? -1 : tabIndex}
            className={styles.dtSliderHandle}
            style={
              orientation === "vertical"
                ? { bottom: `calc(${maxPos}% - 8px)` }
                : { left: `calc(${maxPos}% - 8px)` }
            }
            onKeyDown={(event) => handleKeyDown("max", event)}
            onPointerDown={(event) => handlePointerDown("max", event)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onFocus={() => setFocused("max")}
          />
        )}
      </div>
    </div>
  );
};