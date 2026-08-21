import { useCallback, useEffect, useId, useRef, useState } from "react";
import styles from "./FabMenu.module.css";

export interface FabMenuItem {
  text: string;
  icon?: string;
  value?: string;
  disabled?: boolean;
}

export interface FabMenuItemEventArgs {
  text: string;
  value?: string;
}

export type FabMenuPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";

export interface FabMenuProps {
  items: FabMenuItem[];
  position?: FabMenuPosition;
  /** @deprecated use position */
  Position?: FabMenuPosition;
  icon?: string;
  onClick?: (args: FabMenuItemEventArgs) => void;
  /** @deprecated use onClick */
  Click?: (args: FabMenuItemEventArgs) => void;
  ariaLabel?: string;
  className?: string;
}

export function FabMenu({
  items,
  position,
  Position,
  icon = "+",
  onClick,
  Click,
  ariaLabel = "Open menu",
  className,
}: FabMenuProps) {
  const effectivePosition = position ?? Position ?? "bottom-right";
  const baseId = useId();
  const menuId = `${baseId}-menu`;
  const rootRef = useRef<HTMLDivElement>(null);
  const mainBtnRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const emit = useCallback(
    (item: FabMenuItem) => {
      if (item.disabled) return;
      const args: FabMenuItemEventArgs = { text: item.text, value: item.value };
      const handler = onClick ?? Click;
      handler?.(args);
      setOpen(false);
      mainBtnRef.current?.focus();
    },
    [onClick, Click],
  );

  useEffect(() => {
    if (!open) return;
    const onMouseDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        mainBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const positionClass =
    effectivePosition === "bottom-right"
      ? styles.bottomRight
      : effectivePosition === "bottom-left"
        ? styles.bottomLeft
        : effectivePosition === "top-right"
          ? styles.topRight
          : styles.topLeft;

  const handleMainKeyDown = (e: React.KeyboardEvent) => {
    if (!open && (e.key === "Enter" || e.key === " " || e.key === "ArrowDown" || e.key === "ArrowUp")) {
      e.preventDefault();
      setOpen(true);
    } else if (open && e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      mainBtnRef.current?.focus();
    }
  };

  return (
    <div
      ref={rootRef}
      className={[styles.root, positionClass, className].filter(Boolean).join(" ")}
      data-testid="fab-menu"
    >
      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label={ariaLabel}
          className={styles.menu}
          onKeyDown={handleMenuKeyDown}
        >
          {items.map((item, idx) => {
            const disabled = !!item.disabled;
            return (
              <div key={`${item.text}-${idx}`} className={styles.itemWrapper}>
                <span className={styles.tooltip} aria-hidden="true">
                  {item.text}
                </span>
                <button
                  type="button"
                  role="menuitem"
                  aria-label={item.text}
                  aria-disabled={disabled || undefined}
                  title={item.text}
                  disabled={disabled}
                  tabIndex={disabled ? -1 : 0}
                  className={[styles.item, disabled ? styles.disabled : null].filter(Boolean).join(" ")}
                  onClick={() => emit(item)}
                >
                  <span className={styles.itemIcon} aria-hidden="true">
                    {item.icon ?? "•"}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
      <button
        ref={mainBtnRef}
        type="button"
        className={styles.main}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleMainKeyDown}
      >
        <span aria-hidden="true" className={[styles.mainIcon, open ? styles.mainOpen : null].filter(Boolean).join(" ")}>
          {icon}
        </span>
      </button>
    </div>
  );
}
