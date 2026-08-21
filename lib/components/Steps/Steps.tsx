import { useCallback, useRef, useState } from "react";
import styles from "./Steps.module.css";

export interface StepsItem {
  text: string;
  icon?: string;
  disabled?: boolean;
}

export interface StepsProps {
  items: StepsItem[];
  selectedIndex?: number;
  SelectedIndex?: number;
  defaultIndex?: number;
  linear?: boolean;
  Linear?: boolean;
  onChange?: (index: number) => void;
  Change?: (index: number) => void;
  onSelectedIndexChange?: (index: number) => void;
  ariaLabel?: string;
  className?: string;
}

export function Steps({
  items,
  selectedIndex,
  SelectedIndex,
  defaultIndex = 0,
  linear,
  Linear,
  onChange,
  Change,
  onSelectedIndexChange,
  ariaLabel = "Steps",
  className,
}: StepsProps) {
  const isLinear = linear ?? Linear ?? false;
  const controlledIndex = selectedIndex ?? SelectedIndex;
  const isControlled = controlledIndex !== undefined;
  const [internalIndex, setInternalIndex] = useState(() => {
    const initial = controlledIndex ?? defaultIndex;
    return Math.min(Math.max(0, initial), Math.max(0, items.length - 1));
  });
  const activeIndex = isControlled ? (controlledIndex as number) : internalIndex;
  const clampedActive = Math.min(Math.max(0, activeIndex), Math.max(0, items.length - 1));

  const listRef = useRef<HTMLOListElement>(null);

  const emitChange = useCallback(
    (next: number) => {
      const clamped = Math.min(Math.max(0, next), Math.max(0, items.length - 1));
      if (!isControlled) setInternalIndex(clamped);
      const handler = onChange ?? Change ?? onSelectedIndexChange;
      handler?.(clamped);
    },
    [isControlled, onChange, Change, onSelectedIndexChange, items.length],
  );

  const isStepDisabled = useCallback(
    (index: number, item: StepsItem): boolean => {
      if (item.disabled) return true;
      if (isLinear && index > clampedActive + 1) return true;
      return false;
    },
    [isLinear, clampedActive],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const buttons = Array.from(
      e.currentTarget.querySelectorAll<HTMLButtonElement>("button[data-step]"),
    ).filter((b) => b.getAttribute("aria-disabled") !== "true" && !b.disabled);
    const active = document.activeElement as HTMLButtonElement | null;
    const idx = active ? buttons.indexOf(active) : -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      if (buttons.length === 0) return;
      const nextIdx = idx === -1 ? 0 : (idx + 1) % buttons.length;
      const next = buttons[nextIdx];
      if (next) next.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      if (buttons.length === 0) return;
      const prevIdx = idx === -1 ? buttons.length - 1 : (idx - 1 + buttons.length) % buttons.length;
      const prev = buttons[prevIdx];
      if (prev) prev.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      buttons[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      buttons[buttons.length - 1]?.focus();
    }
  };

  return (
    <nav
      aria-label={ariaLabel}
      className={[styles.root, className].filter(Boolean).join(" ")}
      onKeyDown={handleKeyDown}
    >
      <ol ref={listRef} role="list" className={styles.list}>
        {items.map((item, index) => {
          const isActive = index === clampedActive;
          const isCompleted = index < clampedActive;
          const disabled = isStepDisabled(index, item);
          return (
            <li key={`${item.text}-${index}`} role="listitem" className={styles.item}>
              {index > 0 ? (
                <span className={[styles.connector, isCompleted ? styles.connectorCompleted : null].filter(Boolean).join(" ")} aria-hidden="true" />
              ) : null}
              <button
                type="button"
                data-step={index}
                aria-current={isActive ? "step" : undefined}
                aria-disabled={disabled ? "true" : undefined}
                disabled={disabled}
                tabIndex={disabled ? -1 : 0}
                className={[
                  styles.step,
                  isActive ? styles.active : null,
                  isCompleted ? styles.completed : null,
                  disabled ? styles.disabled : null,
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => {
                  if (disabled) return;
                  emitChange(index);
                }}
              >
                <span className={styles.circle} aria-hidden="true">
                  {isCompleted ? (
                    <span className={styles.check} aria-hidden="true">✓</span>
                  ) : item.icon ? (
                    <span className={styles.icon}>{item.icon}</span>
                  ) : (
                    <span className={styles.number}>{index + 1}</span>
                  )}
                </span>
                <span className={styles.text}>{item.text}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
