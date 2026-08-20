import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import styles from "./Splitbutton.module.css";

export type SplitbuttonSize = "sm" | "md" | "lg";

export interface SplitbuttonItem {
  key: string;
  label: string;
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface SplitbuttonProps {
  label?: ReactNode;
  onClick?: () => void;
  items?: readonly SplitbuttonItem[];
  size?: SplitbuttonSize;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

export function Splitbutton({
  label,
  onClick,
  items = [],
  size = "md",
  disabled = false,
  className,
  ...ariaProps
}: SplitbuttonProps) {
  const baseId = useId();
  const menuId = `${baseId}-menu`;
  const rootRef = useRef<HTMLDivElement>(null);
  const caretRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const enabledIndexes = items
    .map((item, index) => (item.disabled ? -1 : index))
    .filter((index) => index >= 0);

  const openMenu = useCallback(() => {
    if (disabled) return;
    setActiveIndex(enabledIndexes[0] ?? -1);
    setOpen(true);
  }, [disabled, enabledIndexes]);

  const closeMenu = useCallback(() => {
    setOpen(false);
    caretRef.current?.focus();
  }, []);

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

  const activate = (index: number) => {
    const item = items[index];
    if (!item || item.disabled) return;
    item.onClick?.();
    setOpen(false);
    caretRef.current?.focus();
  };

  const move = (direction: 1 | -1) => {
    if (enabledIndexes.length === 0) return;
    const current = enabledIndexes.includes(activeIndex)
      ? enabledIndexes.indexOf(activeIndex)
      : direction === 1
        ? -1
        : 0;
    const next =
      enabledIndexes[
        (current + direction + enabledIndexes.length) % enabledIndexes.length
      ];
    if (next != null) setActiveIndex(next);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!open) {
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openMenu();
      }
      return;
    }
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        move(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        move(-1);
        break;
      case "Home":
        event.preventDefault();
        if (enabledIndexes[0] != null) setActiveIndex(enabledIndexes[0]);
        break;
      case "End":
        event.preventDefault();
        if (enabledIndexes[enabledIndexes.length - 1] != null) {
          setActiveIndex(enabledIndexes[enabledIndexes.length - 1]!);
        }
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (activeIndex >= 0) activate(activeIndex);
        break;
      case "Escape":
        event.preventDefault();
        closeMenu();
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  return (
    <div
      ref={rootRef}
      className={[styles.root, styles[size], className].filter(Boolean).join(" ")}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className={styles.action}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
      <button
        ref={caretRef}
        type="button"
        className={styles.caret}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label="More actions"
        disabled={disabled}
        onClick={() => (open ? setOpen(false) : openMenu())}
      >
        ▾
      </button>
      {open && (
        <div
          id={menuId}
          role="menu"
          aria-activedescendant={
            activeIndex >= 0 ? `${baseId}-item-${activeIndex}` : undefined
          }
          className={styles.menu}
          {...ariaProps}
        >
          {items.map((item, index) => (
            <div
              key={item.key}
              id={`${baseId}-item-${index}`}
              role="menuitem"
              aria-disabled={item.disabled || undefined}
              className={[
                styles.item,
                index === activeIndex ? styles.active : null,
                item.danger ? styles.danger : null,
                item.disabled ? styles.disabled : null,
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => activate(index)}
              onMouseEnter={() => {
                if (!item.disabled) setActiveIndex(index);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}