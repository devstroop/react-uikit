import { useCallback, useEffect, useId, useRef, useState } from "react";
import styles from "./Menu.module.css";

export interface MenuItem {
  text: string;
  value?: string;
  icon?: string;
  path?: string;
  disabled?: boolean;
  children?: MenuItem[];
}

export interface MenuItemEventArgs {
  text: string;
  value?: string;
  path?: string;
}

export interface MenuProps {
  items: MenuItem[];
  orientation?: "horizontal" | "vertical";
  onClick?: (args: MenuItemEventArgs) => void;
  /** @deprecated use onClick */
  Click?: (args: MenuItemEventArgs) => void;
  ariaLabel?: string;
  className?: string;
}

function isDisabled(item: MenuItem): boolean {
  return !!item.disabled;
}

export function Menu({
  items,
  orientation = "horizontal",
  onClick,
  Click,
  ariaLabel = "Menu",
  className,
}: MenuProps) {
  const baseId = useId();
  const rootRef = useRef<HTMLElement>(null);
  const menubarRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const hoveredAtRef = useRef<number>(0);
  const pendingFocusRef = useRef<number | null>(null);

  const emit = useCallback(
    (item: MenuItem) => {
      const args: MenuItemEventArgs = { text: item.text, value: item.value, path: item.path };
      const handler = onClick ?? Click;
      handler?.(args);
    },
    [onClick, Click],
  );

  const handleTopClick = (item: MenuItem, index: number) => {
    if (isDisabled(item)) return;
    if (item.children && item.children.length > 0) {
      const isOpen = openIndex === index;
      const hoveredRecently = Date.now() - hoveredAtRef.current < 600;
      if (isOpen && hoveredRecently) {
        hoveredAtRef.current = 0;
        return;
      }
      setOpenIndex((prev) => (prev === index ? null : index));
      return;
    }
    emit(item);
    setOpenIndex(null);
  };

  const handleChildClick = (item: MenuItem) => {
    if (isDisabled(item)) return;
    if (item.children && item.children.length > 0) {
      return;
    }
    emit(item);
    setOpenIndex(null);
  };

  useEffect(() => {
    if (openIndex == null) return;
    const onMouseDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [openIndex]);

  useEffect(() => {
    if (pendingFocusRef.current != null && openIndex === pendingFocusRef.current) {
      const submenuId = `${baseId}-submenu-${openIndex}`;
      const submenu = document.getElementById(submenuId);
      const first = submenu?.querySelector<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])');
      first?.focus();
      pendingFocusRef.current = null;
    }
  }, [openIndex, baseId]);

  const handleMenubarKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const menubar = menubarRef.current;
    if (!menubar) return;
    const topButtons = Array.from(
      menubar.querySelectorAll<HTMLElement>('[data-top="true"]'),
    ).filter((el) => !el.hasAttribute("disabled") && el.getAttribute("aria-disabled") !== "true");

    // If submenu is open, handle navigation inside submenu first
    if (openIndex != null) {
      const submenuId = `${baseId}-submenu-${openIndex}`;
      const submenu = document.getElementById(submenuId);
      if (submenu) {
        const subItems = Array.from(submenu.querySelectorAll<HTMLElement>('[role="menuitem"]')).filter(
          (el) => el.getAttribute("aria-disabled") !== "true",
        );
        const active = document.activeElement as HTMLElement | null;
        const subIdx = active ? subItems.indexOf(active) : -1;

        if (event.key === "ArrowDown") {
          event.preventDefault();
          if (subIdx === -1) {
            subItems[0]?.focus();
          } else {
            const next = subItems[(subIdx + 1) % subItems.length];
            next?.focus();
          }
          return;
        }
        if (event.key === "ArrowUp") {
          event.preventDefault();
          if (subIdx === -1) {
            subItems[subItems.length - 1]?.focus();
          } else {
            const prev = subItems[(subIdx - 1 + subItems.length) % subItems.length];
            prev?.focus();
          }
          return;
        }
        if (event.key === "Escape") {
          event.preventDefault();
          setOpenIndex(null);
          const trigger = menubar.querySelector<HTMLElement>(`[data-top="true"][data-index="${openIndex}"]`);
          trigger?.focus();
          return;
        }
        if (event.key === "Enter" || event.key === " ") {
          // let button handle click; prevent menubar handling
          return;
        }
      }
      // also handle closing submenu with Escape when focus is on trigger
      if (event.key === "Escape") {
        event.preventDefault();
        setOpenIndex(null);
        return;
      }
    }

    // Top-level navigation when submenu not focused or after handling
    const focused = document.activeElement as HTMLElement | null;
    const idx = focused ? topButtons.indexOf(focused) : -1;

    if (event.key === "ArrowRight" || (orientation === "vertical" && event.key === "ArrowDown")) {
      event.preventDefault();
      if (topButtons.length === 0) return;
      const nextIdx = idx === -1 ? 0 : (idx + 1) % topButtons.length;
      const candidate = topButtons[nextIdx];
      candidate?.focus();
      return;
    }
    if (event.key === "ArrowLeft" || (orientation === "vertical" && event.key === "ArrowUp")) {
      event.preventDefault();
      if (topButtons.length === 0) return;
      const prevIdx = idx === -1 ? topButtons.length - 1 : (idx - 1 + topButtons.length) % topButtons.length;
      const candidate = topButtons[prevIdx];
      candidate?.focus();
      return;
    }
    if (event.key === "ArrowDown") {
      // open submenu if focused item has children
      if (idx >= 0) {
        const itemIndexAttr = focused?.getAttribute("data-index");
        const itemIndex = itemIndexAttr != null ? Number(itemIndexAttr) : -1;
        const item = itemIndex >= 0 ? items[itemIndex] : undefined;
        if (item?.children && item.children.length > 0 && !isDisabled(item)) {
          event.preventDefault();
          pendingFocusRef.current = itemIndex;
          setOpenIndex(itemIndex);
        }
      }
      return;
    }
    if (event.key === "Home") {
      event.preventDefault();
      topButtons[0]?.focus();
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      topButtons[topButtons.length - 1]?.focus();
      return;
    }
  };

  return (
    <nav
      ref={rootRef}
      aria-label={ariaLabel}
      className={[styles.root, styles[orientation], className].filter(Boolean).join(" ")}
    >
      <div
        ref={menubarRef}
        role="menubar"
        aria-label={ariaLabel}
        className={styles.menubar}
        onKeyDown={handleMenubarKeyDown}
      >
        {items.map((item, index) => {
          const hasChildren = !!item.children && item.children.length > 0;
          const isOpen = openIndex === index;
          const disabled = isDisabled(item);
          const submenuId = `${baseId}-submenu-${index}`;
          return (
            <div
              key={`${item.text}-${index}`}
              className={styles.itemWrapper}
              onMouseEnter={() => {
                if (orientation === "horizontal" && hasChildren && !disabled) {
                  hoveredAtRef.current = Date.now();
                  setOpenIndex(index);
                }
              }}
              onMouseLeave={() => {
                if (orientation === "horizontal" && hasChildren) setOpenIndex((prev) => (prev === index ? null : prev));
              }}
              data-dt-menu-item=""
            >
              <button
                type="button"
                role="menuitem"
                data-top="true"
                data-index={index}
                data-dt-menu-item=""
                aria-disabled={disabled || undefined}
                aria-haspopup={hasChildren ? "menu" : undefined}
                aria-expanded={hasChildren ? isOpen : undefined}
                aria-controls={hasChildren ? submenuId : undefined}
                aria-current={item.path && !hasChildren ? undefined : undefined}
                tabIndex={disabled ? -1 : 0}
                disabled={disabled}
                className={[styles.item, disabled ? styles.disabled : null, hasChildren ? styles.hasChildren : null]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => handleTopClick(item, index)}
              >
                {item.icon ? (
                  <span className={styles.icon} aria-hidden="true">
                    {item.icon}
                  </span>
                ) : null}
                <span className={styles.text}>{item.text}</span>
                {hasChildren ? (
                  <span className={styles.caret} aria-hidden="true">
                    ▾
                  </span>
                ) : null}
              </button>
              {hasChildren && isOpen ? (
                <div
                  id={submenuId}
                  role="menu"
                  className={styles.submenu}
                  data-dt-menu-submenu=""
                  aria-label={item.text}
                >
                  {item.children?.map((child, childIndex) => {
                    const childDisabled = isDisabled(child);
                    const nestedHasChildren = !!child.children && child.children.length > 0;
                    return (
                      <button
                        key={`${child.text}-${childIndex}`}
                        type="button"
                        role="menuitem"
                        aria-disabled={childDisabled || undefined}
                        aria-haspopup={nestedHasChildren ? "menu" : undefined}
                        tabIndex={childDisabled ? -1 : 0}
                        disabled={childDisabled}
                        className={[styles.submenuItem, childDisabled ? styles.disabled : null]
                          .filter(Boolean)
                          .join(" ")}
                        onClick={() => handleChildClick(child)}
                      >
                        {child.icon ? (
                          <span className={styles.icon} aria-hidden="true">
                            {child.icon}
                          </span>
                        ) : null}
                        <span className={styles.text}>{child.text}</span>
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
