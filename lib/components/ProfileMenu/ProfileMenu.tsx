import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import styles from "./ProfileMenu.module.css";

export interface ProfileMenuItem {
  text: string;
  path?: string;
  icon?: string;
  disabled?: boolean;
}

export interface ProfileMenuItemEventArgs {
  text: string;
  path?: string;
}

export interface ProfileMenuProps {
  items: ProfileMenuItem[];
  trigger?: ReactNode;
  /** @deprecated use trigger */
  Template?: ReactNode;
  onClick?: (args: ProfileMenuItemEventArgs) => void;
  /** @deprecated use onClick */
  Click?: (args: ProfileMenuItemEventArgs) => void;
  ariaLabel?: string;
  className?: string;
}

export function ProfileMenu({
  items,
  trigger,
  Template,
  onClick,
  Click,
  ariaLabel = "Profile menu",
  className,
}: ProfileMenuProps) {
  const baseId = useId();
  const menuId = `${baseId}-menu`;
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const effectiveTrigger = trigger ?? Template;

  const enabledIndexes = items
    .map((item, idx) => (!item.disabled ? idx : -1))
    .filter((idx) => idx >= 0);

  const emit = useCallback(
    (item: ProfileMenuItem) => {
      if (item.disabled) return;
      const args: ProfileMenuItemEventArgs = { text: item.text, path: item.path };
      const handler = onClick ?? Click;
      handler?.(args);
      setOpen(false);
      triggerRef.current?.focus();
    },
    [onClick, Click],
  );

  const openMenu = useCallback(() => {
    setActiveIndex(enabledIndexes[0] ?? -1);
    setOpen(true);
  }, [enabledIndexes]);

  const closeMenu = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onMouseDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  const move = (direction: 1 | -1) => {
    if (enabledIndexes.length === 0) return;
    const currentPos = enabledIndexes.indexOf(activeIndex);
    const nextPos = currentPos === -1 ? 0 : (currentPos + direction + enabledIndexes.length) % enabledIndexes.length;
    const nxt = enabledIndexes[nextPos];
    if (nxt != null) setActiveIndex(nxt);
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!open) {
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openMenu();
      }
      return;
    }
    // when open, handle navigation and activation from trigger (focus stays on trigger after click)
    switch (event.key) {
      case "Escape":
        event.preventDefault();
        closeMenu();
        break;
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
        if (activeIndex >= 0) {
          const item = items[activeIndex];
          if (item && !item.disabled) emit(item);
        }
        break;
      case "Tab":
        setOpen(false);
        setActiveIndex(-1);
        break;
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
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
        if (activeIndex >= 0) {
          const item = items[activeIndex];
          if (item && !item.disabled) emit(item);
        }
        break;
      case "Escape":
        event.preventDefault();
        closeMenu();
        break;
      case "Tab":
        setOpen(false);
        setActiveIndex(-1);
        break;
    }
  };

  return (
    <div
      ref={rootRef}
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-testid="profile-menu-root"
    >
      <nav aria-label={ariaLabel}>
        <button
          ref={triggerRef}
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={ariaLabel}
          className={styles.trigger}
          onClick={() => (open ? closeMenu() : openMenu())}
          onKeyDown={handleTriggerKeyDown}
        >
          {effectiveTrigger ?? (
            <span className={styles.defaultTrigger}>
              <span className={styles.avatar} aria-hidden="true">
                ●
              </span>
              <span>Profile</span>
            </span>
          )}
        </button>
        {open ? (
          <div
            id={menuId}
            role="menu"
            aria-label={ariaLabel}
            aria-activedescendant={activeIndex >= 0 ? `${baseId}-item-${activeIndex}` : undefined}
            className={styles.menu}
            onKeyDown={handleMenuKeyDown}
            tabIndex={-1}
          >
            {items.map((item, idx) => {
              const disabled = !!item.disabled;
              const isActive = idx === activeIndex;
              return (
                <div
                  key={`${item.text}-${idx}`}
                  id={`${baseId}-item-${idx}`}
                  role="menuitem"
                  aria-disabled={disabled || undefined}
                  tabIndex={disabled ? -1 : 0}
                  className={[styles.item, isActive ? styles.active : null, disabled ? styles.disabled : null]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => {
                    if (!disabled) emit(item);
                  }}
                  onMouseEnter={() => {
                    if (!disabled) setActiveIndex(idx);
                  }}
                >
                  {item.icon ? (
                    <span className={styles.icon} aria-hidden="true">
                      {item.icon}
                    </span>
                  ) : null}
                  <span className={styles.text}>{item.text}</span>
                </div>
              );
            })}
          </div>
        ) : null}
      </nav>
    </div>
  );
}
