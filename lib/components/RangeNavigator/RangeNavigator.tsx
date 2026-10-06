import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as RPointerEvent,
} from 'react';
import styles from './RangeNavigator.module.css';

export interface RangeWindow {
  start: number;
  end: number;
}

export interface RangeNavigatorProps {
  min?: number;
  max?: number;
  /** Controlled window. Omit for uncontrolled. */
  value?: RangeWindow;
  /** Initial window for uncontrolled mode. Defaults to the full domain. */
  defaultValue?: RangeWindow;
  /** Fires on every committed window change. */
  onChange?: (window: RangeWindow) => void;
  /** Optional sparkline data rendered in the track. */
  data?: number[];
  /** Minimum window span in domain units. Defaults to 0 (free). */
  minSpan?: number;
  ariaLabel?: string;
  className?: string;
}

function clampWindow(
  start: number,
  end: number,
  min: number,
  max: number,
  minSpan: number
): RangeWindow {
  let s = Math.max(min, Math.min(max, start));
  let e = Math.max(min, Math.min(max, end));
  if (e - s < minSpan) {
    const mid = (s + e) / 2;
    s = Math.max(min, mid - minSpan / 2);
    e = Math.min(max, s + minSpan);
    s = Math.max(min, e - minSpan);
  }
  if (s > e) [s, e] = [e, s];
  return { start: s, end: e };
}

/**
 * Range navigator (uikit#97): a zoom/pan window over a value domain.
 * Two slider handles bound the window; dragging a handle (or the window
 * body) and arrow keys move it. Wire `onChange` into a chart's value
 * axis for linked zooming (the linkage itself stays consumer-side).
 */
export function RangeNavigator({
  min = 0,
  max = 100,
  value,
  defaultValue,
  onChange,
  data,
  minSpan = 0,
  ariaLabel = 'Range navigator',
  className,
}: RangeNavigatorProps) {
  const controlled = value !== undefined;
  const [internal, setInternal] = useState<RangeWindow>(
    () =>
      (defaultValue &&
        clampWindow(
          defaultValue.start,
          defaultValue.end,
          min,
          max,
          minSpan
        )) || {
        start: min,
        end: max,
      }
  );
  const window_ = controlled && value ? value : internal;
  const dragRef = useRef<null | {
    mode: 'start' | 'end' | 'pan';
    grabOffset: number;
  }>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const commit = useCallback(
    (next: RangeWindow) => {
      const clamped = clampWindow(next.start, next.end, min, max, minSpan);
      if (!controlled) setInternal(clamped);
      onChange?.(clamped);
    },
    [controlled, min, max, minSpan, onChange]
  );

  const toDomain = useCallback(
    (clientX: number) => {
      const el = trackRef.current;
      if (!el) return min;
      const rect = el.getBoundingClientRect();
      const frac = rect.width > 0 ? (clientX - rect.left) / rect.width : 0;
      return min + Math.max(0, Math.min(1, frac)) * (max - min || 1);
    },
    [min, max]
  );

  const toPercent = useCallback(
    (v: number) =>
      ((Math.max(min, Math.min(max, v)) - min) / (max - min || 1)) * 100,
    [min, max]
  );

  useEffect(() => {
    const move = (e: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag) return;
      const v = toDomain(e.clientX);
      if (drag.mode === 'start') commit({ start: v, end: window_.end });
      else if (drag.mode === 'end') commit({ start: window_.start, end: v });
      else {
        const span = window_.end - window_.start;
        const start = v - drag.grabOffset;
        commit({ start, end: start + span });
      }
    };
    const up = () => {
      dragRef.current = null;
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
    return () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
    };
  }, [commit, toDomain, window_]);

  const onHandleDown = (mode: 'start' | 'end', e: RPointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).focus?.();
    dragRef.current = { mode, grabOffset: 0 };
  };

  const onTrackDown = (e: RPointerEvent) => {
    // Clicking the selected span pans it; clicking outside jumps the
    // nearest edge. Distinguish by hit position.
    const v = toDomain(e.clientX);
    if (v >= window_.start && v <= window_.end) {
      dragRef.current = { mode: 'pan', grabOffset: v - window_.start };
    } else {
      const distStart = Math.abs(v - window_.start);
      const distEnd = Math.abs(v - window_.end);
      if (distStart <= distEnd) commit({ start: v, end: window_.end });
      else commit({ start: window_.start, end: v });
    }
  };

  const step = (max - min || 1) / 100;
  const onHandleKey = (mode: 'start' | 'end') => (e: React.KeyboardEvent) => {
    const big = e.shiftKey ? step * 10 : step;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      commit(
        mode === 'start'
          ? { start: window_.start - big, end: window_.end }
          : { start: window_.start, end: window_.end - big }
      );
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      commit(
        mode === 'start'
          ? { start: window_.start + big, end: window_.end }
          : { start: window_.start, end: window_.end + big }
      );
    } else if (e.key === 'Home') {
      e.preventDefault();
      commit(
        mode === 'start'
          ? { start: min, end: window_.end }
          : { start: window_.start, end: max }
      );
    } else if (e.key === 'End') {
      e.preventDefault();
      commit(
        mode === 'start'
          ? { start: window_.end - minSpan, end: window_.end }
          : { start: window_.start, end: max }
      );
    }
  };

  const left = toPercent(window_.start);
  const width = Math.max(0, toPercent(window_.end) - left);

  return (
    <div
      className={[styles.navigator, className].filter(Boolean).join(' ')}
      role="group"
      aria-label={ariaLabel}
    >
      <div ref={trackRef} className={styles.track} onPointerDown={onTrackDown}>
        {data && data.length > 1 && (
          <svg
            className={styles.spark}
            viewBox="0 0 100 24"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polyline
              points={data
                .map((d, i) => {
                  const x = (i / (data.length - 1)) * 100;
                  const peak = Math.max(...data);
                  const low = Math.min(...data);
                  const y =
                    peak === low ? 12 : 22 - ((d - low) / (peak - low)) * 20;
                  return `${x},${y}`;
                })
                .join(' ')}
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        )}
        <div
          className={styles.window}
          style={{ left: `${left}%`, width: `${width}%` }}
        />
        <div
          role="slider"
          tabIndex={0}
          aria-label="Window start"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={Math.round(window_.start * 100) / 100}
          className={[styles.handle, styles.handleStart]
            .filter(Boolean)
            .join(' ')}
          style={{ left: `${left}%` }}
          onPointerDown={(e) => onHandleDown('start', e)}
          onKeyDown={onHandleKey('start')}
        />
        <div
          role="slider"
          tabIndex={0}
          aria-label="Window end"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={Math.round(window_.end * 100) / 100}
          className={[styles.handle, styles.handleEnd]
            .filter(Boolean)
            .join(' ')}
          style={{ left: `${left + width}%` }}
          onPointerDown={(e) => onHandleDown('end', e)}
          onKeyDown={onHandleKey('end')}
        />
      </div>
    </div>
  );
}
