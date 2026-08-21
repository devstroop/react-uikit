import { useCallback, useId, useState } from "react";
import styles from "./PanelMenu.module.css";

export interface PanelMenuItem {
  text: string;
  icon?: string;
  value?: string;
  path?: string;
  disabled?: boolean;
  children?: PanelMenuItem[];
}

export interface PanelMenuItemEventArgs {
  text: string;
  value?: string;
  path?: string;
}

export interface PanelMenuProps {
  items: PanelMenuItem[];
  multiple?: boolean;
  /** @deprecated use multiple */
  Multiple?: boolean;
  showArrow?: boolean;
  /** @deprecated use showArrow */
  ShowArrow?: boolean;
  displayStyle?: "icon" | "iconAndText";
  /** @deprecated use displayStyle */
  DisplayStyle?: "icon" | "iconAndText";
  onClick?: (args: PanelMenuItemEventArgs) => void;
  /** @deprecated use onClick */
  Click?: (args: PanelMenuItemEventArgs) => void;
  ariaLabel?: string;
  className?: string;
}

function NestedItem({
  item,
  baseId,
  parentKey,
  onEmit,
}: {
  item: PanelMenuItem;
  baseId: string;
  parentKey: string;
  onEmit: (args: PanelMenuItemEventArgs) => void;
}) {
  const hasChildren = !!item.children && item.children.length > 0;
  const [open, setOpen] = useState(false);
  const nestedId = `${baseId}-nested-${parentKey}`;
  const disabled = !!item.disabled;

  const handleClick = () => {
    if (disabled) return;
    if (hasChildren) {
      setOpen((v) => !v);
      return;
    }
    onEmit({ text: item.text, value: item.value, path: item.path });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    } else if (e.key === "Escape" && open) {
      e.preventDefault();
      setOpen(false);
    }
  };

  if (hasChildren) {
    return (
      <div className={styles.nestedWrapper}>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={nestedId}
          aria-disabled={disabled || undefined}
          disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          className={[styles.nestedTrigger, disabled ? styles.disabled : null].filter(Boolean).join(" ")}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          {item.icon ? (
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
          ) : null}
          <span className={styles.text}>{item.text}</span>
          <span className={[styles.caret, open ? styles.open : null].filter(Boolean).join(" ")} aria-hidden="true">
            ▾
          </span>
        </button>
        {open ? (
          <div id={nestedId} role="menu" className={styles.nestedMenu}>
            {item.children?.map((child, ci) => {
              const childDisabled = !!child.disabled;
              return (
                <div
                  key={`${child.text}-${ci}`}
                  role="menuitem"
                  aria-disabled={childDisabled || undefined}
                  tabIndex={childDisabled ? -1 : 0}
                  className={[styles.submenuItem, childDisabled ? styles.disabled : null].filter(Boolean).join(" ")}
                  onClick={() => {
                    if (childDisabled) return;
                    if (child.children && child.children.length > 0) return;
                    onEmit({ text: child.text, value: child.value, path: child.path });
                  }}
                  onKeyDown={(ev) => {
                    if (ev.key === "Enter" || ev.key === " ") {
                      ev.preventDefault();
                      if (childDisabled) return;
                      onEmit({ text: child.text, value: child.value, path: child.path });
                    }
                  }}
                >
                  {child.icon ? (
                    <span className={styles.icon} aria-hidden="true">
                      {child.icon}
                    </span>
                  ) : null}
                  <span className={styles.text}>{child.text}</span>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      role="menuitem"
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      className={[styles.submenuItem, disabled ? styles.disabled : null].filter(Boolean).join(" ")}
      onClick={() => {
        if (disabled) return;
        onEmit({ text: item.text, value: item.value, path: item.path });
      }}
      onKeyDown={(ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          if (disabled) return;
          onEmit({ text: item.text, value: item.value, path: item.path });
        }
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
}

export function PanelMenu({
  items,
  multiple,
  Multiple,
  showArrow,
  ShowArrow,
  displayStyle,
  DisplayStyle,
  onClick,
  Click,
  ariaLabel = "Panel menu",
  className,
}: PanelMenuProps) {
  const baseId = useId();
  const effectiveMultiple = multiple ?? Multiple ?? false;
  const effectiveShowArrow = showArrow ?? ShowArrow ?? true;
  const effectiveDisplayStyle = displayStyle ?? DisplayStyle ?? "iconAndText";

  const [expanded, setExpanded] = useState<number[]>([]);

  const emit = useCallback(
    (item: PanelMenuItem) => {
      const args: PanelMenuItemEventArgs = { text: item.text, value: item.value, path: item.path };
      const handler = onClick ?? Click;
      handler?.(args);
    },
    [onClick, Click],
  );

  const toggle = (index: number, hasChildren: boolean, item: PanelMenuItem) => {
    if (item.disabled) return;
    if (hasChildren) {
      setExpanded((prev) => {
        const isOpen = prev.includes(index);
        if (isOpen) return prev.filter((i) => i !== index);
        if (effectiveMultiple) return [...prev, index];
        return [index];
      });
      return;
    }
    emit(item);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    // Enter/Space handled by button itself, but ensure toggle for triggers
    if (event.key === "Enter" || event.key === " ") {
      // let button click handle; no extra
      return;
    }
    if (event.key === "Escape") {
      // collapse current expanded
      const triggerId = target.getAttribute("aria-controls");
      if (triggerId) {
        // find index from id
        const match = triggerId.match(/-panel-(\d+)$/);
        if (match) {
          const idx = Number(match[1]);
          setExpanded((prev) => prev.filter((i) => i !== idx));
        }
      } else {
        // if inside submenu, close parent
        const parentPanel = target.closest('[role="menu"]');
        if (parentPanel) {
          const pid = parentPanel.id;
          const m = pid.match(/-panel-(\d+)$/);
          if (m) {
            const idx = Number(m[1]!);
            setExpanded((prev) => prev.filter((i) => i !== idx));
            // focus trigger
            const trigger = document.getElementById(`${baseId}-trigger-${idx}`);
            (trigger as HTMLElement | null)?.focus();
          }
        }
      }
      event.preventDefault();
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      const focusable = Array.from(
        event.currentTarget.querySelectorAll<HTMLElement>('button, [role="menuitem"]'),
      ).filter((el) => !el.hasAttribute("disabled") && el.getAttribute("aria-disabled") !== "true");
      const idx = focusable.indexOf(target as HTMLElement);
      if (idx === -1) return;
      event.preventDefault();
      const dir = event.key === "ArrowDown" ? 1 : -1;
      const next = focusable[(idx + dir + focusable.length) % focusable.length];
      next?.focus();
    }
  };

  return (
    <nav
      aria-label={ariaLabel}
      className={[
        styles.root,
        effectiveDisplayStyle === "icon" ? styles.iconOnly : styles.iconAndText,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.list} role="presentation">
        {items.map((item, index) => {
          const hasChildren = !!item.children && item.children.length > 0;
          const isOpen = expanded.includes(index);
          const disabled = !!item.disabled;
          const panelId = `${baseId}-panel-${index}`;
          const triggerId = `${baseId}-trigger-${index}`;
          return (
            <div key={`${item.text}-${index}`} className={styles.item}>
              <button
                type="button"
                id={triggerId}
                aria-expanded={hasChildren ? isOpen : undefined}
                aria-controls={hasChildren ? panelId : undefined}
                aria-disabled={disabled || undefined}
                disabled={disabled}
                tabIndex={disabled ? -1 : 0}
                className={[
                  styles.trigger,
                  disabled ? styles.disabled : null,
                  isOpen ? styles.expanded : null,
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => toggle(index, hasChildren, item)}
              >
                {item.icon ? (
                  <span className={styles.icon} aria-hidden="true">
                    {item.icon}
                  </span>
                ) : null}
                {effectiveDisplayStyle === "iconAndText" ? (
                  <span className={styles.text}>{item.text}</span>
                ) : (
                  <span className={styles.text} aria-label={item.text}>
                    {item.icon ? null : item.text.slice(0, 1)}
                  </span>
                )}
                {hasChildren && effectiveShowArrow ? (
                  <span className={[styles.caret, isOpen ? styles.open : null].filter(Boolean).join(" ")} aria-hidden="true">
                    ▾
                  </span>
                ) : null}
              </button>
              {hasChildren && isOpen ? (
                <div id={panelId} role="menu" className={styles.submenu} aria-labelledby={triggerId}>
                  {item.children?.map((child, childIndex) => (
                    <NestedItem
                      key={`${child.text}-${childIndex}`}
                      item={child}
                      baseId={baseId}
                      parentKey={`${index}-${childIndex}`}
                      onEmit={emit}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
