import { useCallback, useEffect, useId, useRef, useState } from "react";
import styles from "./Carousel.module.css";

export interface CarouselProps {
  items: React.ReactNode[];
  selectedIndex?: number;
  SelectedIndex?: number;
  defaultIndex?: number;
  auto?: boolean;
  Auto?: boolean;
  interval?: number;
  Interval?: number;
  pauseOnHover?: boolean;
  PauseOnHover?: boolean;
  showArrows?: boolean;
  ShowArrows?: boolean;
  showIndicators?: boolean;
  ShowIndicators?: boolean;
  onChange?: (index: number) => void;
  Change?: (index: number) => void;
  ariaLabel?: string;
  className?: string;
}

export function Carousel({
  items,
  selectedIndex,
  SelectedIndex,
  defaultIndex = 0,
  auto,
  Auto,
  interval,
  Interval,
  pauseOnHover,
  PauseOnHover,
  showArrows,
  ShowArrows,
  showIndicators,
  ShowIndicators,
  onChange,
  Change,
  ariaLabel = "Carousel",
  className,
}: CarouselProps) {
  const controlled = selectedIndex ?? SelectedIndex;
  const isControlled = controlled !== undefined;
  const [internalIndex, setInternalIndex] = useState(() => {
    const idx = controlled ?? defaultIndex;
    return Math.min(Math.max(0, idx), Math.max(0, items.length - 1));
  });
  const activeIndex = isControlled ? (controlled as number) : internalIndex;
  const clamped = items.length === 0 ? 0 : Math.min(Math.max(0, activeIndex), items.length - 1);

  const isAuto = auto ?? Auto ?? false;
  const intervalMs = interval ?? Interval ?? 3000;
  const shouldPauseOnHover = pauseOnHover ?? PauseOnHover ?? true;
  const shouldShowArrows = showArrows ?? ShowArrows ?? true;
  const shouldShowIndicators = showIndicators ?? ShowIndicators ?? true;

  const [manualPaused, setManualPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const paused = manualPaused || hoverPaused;
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesId = useId();

  const emitChange = useCallback(
    (next: number) => {
      const clampedNext = items.length === 0 ? 0 : ((next % items.length) + items.length) % items.length;
      if (!isControlled) setInternalIndex(clampedNext);
      const handler = onChange ?? Change;
      handler?.(clampedNext);
    },
    [isControlled, onChange, Change, items.length],
  );

  const goPrev = useCallback(() => {
    emitChange(clamped - 1);
  }, [emitChange, clamped]);

  const goNext = useCallback(() => {
    emitChange(clamped + 1);
  }, [emitChange, clamped]);

  const goTo = useCallback(
    (idx: number) => {
      emitChange(idx);
    },
    [emitChange],
  );

  // auto play
  useEffect(() => {
    if (!isAuto || paused || items.length <= 1) return;
    const id = setInterval(() => {
      emitChange(clamped + 1);
    }, intervalMs);
    return () => clearInterval(id);
  }, [isAuto, paused, intervalMs, clamped, emitChange, items.length]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (items.length === 0) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "Home") {
      e.preventDefault();
      goTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goTo(items.length - 1);
    }
  };

  const handleMouseEnter = () => {
    if (shouldPauseOnHover && isAuto) setHoverPaused(true);
  };
  const handleMouseLeave = () => {
    if (shouldPauseOnHover && isAuto) setHoverPaused(false);
  };
  const handleFocusIn = () => {
    if (shouldPauseOnHover && isAuto) setHoverPaused(true);
  };
  const handleFocusOut = () => {
    if (shouldPauseOnHover && isAuto) setHoverPaused(false);
  };

  if (items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      className={[styles.root, className].filter(Boolean).join(" ")}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={handleFocusIn}
      onBlurCapture={handleFocusOut}
    >
      <div id={slidesId} className={styles.viewport}>
        {items.map((child, index) => {
          const isActive = index === clamped;
          return (
            <div
              key={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${items.length}`}
              aria-hidden={isActive ? undefined : true}
              hidden={!isActive}
              className={[styles.slide, isActive ? styles.active : null].filter(Boolean).join(" ")}
            >
              {child}
            </div>
          );
        })}
      </div>

      {shouldShowArrows && items.length > 1 ? (
        <>
          <button
            type="button"
            className={[styles.arrow, styles.prev].filter(Boolean).join(" ")}
            aria-label="Previous slide"
            aria-controls={slidesId}
            onClick={goPrev}
          >
            ‹
          </button>
          <button
            type="button"
            className={[styles.arrow, styles.next].filter(Boolean).join(" ")}
            aria-label="Next slide"
            aria-controls={slidesId}
            onClick={goNext}
          >
            ›
          </button>
        </>
      ) : null}

      {isAuto ? (
        <button
          type="button"
          className={styles.pauseBtn}
          aria-label={manualPaused ? "Resume" : "Pause"}
          aria-pressed={manualPaused}
          onClick={() => setManualPaused((p) => !p)}
        >
          {manualPaused ? "▶" : "⏸"}
        </button>
      ) : null}

      {shouldShowIndicators && items.length > 1 ? (
        <div className={styles.indicators} role="group" aria-label="Slide indicators">
          {items.map((_, index) => {
            const isActive = index === clamped;
            return (
              <button
                key={index}
                type="button"
                className={[styles.indicator, isActive ? styles.indicatorActive : null].filter(Boolean).join(" ")}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                aria-controls={slidesId}
                onClick={() => goTo(index)}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
