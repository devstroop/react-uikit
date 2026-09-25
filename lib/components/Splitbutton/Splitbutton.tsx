import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import type { Severity } from '../../types/severity';
import type { Shade } from '../../types/shade';
import { resolveVariant, type Variant } from '../../types/variant';
import { Icon } from '../Icon/Icon';
import styles from './Splitbutton.module.css';

export type SplitbuttonSize = 'sm' | 'md' | 'lg';
/** Severity axis — Radzen ButtonStyle parity (neutral excluded, like Button). */
export type SplitbuttonSeverity = Exclude<Severity, 'neutral'>;
export type SplitbuttonVariant = Variant;
export type SplitbuttonShade = Shade;

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
  severity?: SplitbuttonSeverity;
  variant?: SplitbuttonVariant;
  shade?: SplitbuttonShade;
  size?: SplitbuttonSize;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
}

export function Splitbutton({
  label,
  onClick,
  items = [],
  severity = 'primary',
  variant = 'filled',
  shade = 'default',
  size = 'md',
  disabled = false,
  className,
  ...ariaProps
}: SplitbuttonProps) {
  const baseId = useId();
  const menuId = `${baseId}-menu`;
  const rootRef = useRef<HTMLDivElement>(null);
  const caretRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const enabledIndexes = useMemo(
    () =>
      items
        .map((item, index) => (item.disabled ? -1 : index))
        .filter((index) => index >= 0),
    [items]
  );

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
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [open]);

  // Move focus to the active item on open. Items are native buttons, so
  // focus (not aria-activedescendant) is the source of truth; arrows move
  // it, Enter/Space activate natively, Escape returns to the caret.
  // Guarded to the closed→open transition so later re-renders (e.g. an
  // inline `items` array changing identity) never yank focus back.
  // activeIndex is already synced here: openMenu() sets it to the first
  // enabled item on every open path before flipping `open`.
  const wasOpenRef = useRef(open);
  useEffect(() => {
    const wasOpen = wasOpenRef.current;
    wasOpenRef.current = open;
    if (!open || wasOpen) return;
    const first = enabledIndexes.includes(activeIndex)
      ? activeIndex
      : (enabledIndexes[0] ?? -1);
    if (first >= 0) itemRefs.current[first]?.focus();
  }, [open, activeIndex, enabledIndexes]);

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
    if (next == null) return;
    setActiveIndex(next);
    itemRefs.current[next]?.focus();
  };

  const focusEdge = (edge: 'first' | 'last') => {
    const index =
      edge === 'first'
        ? enabledIndexes[0]
        : enabledIndexes[enabledIndexes.length - 1];
    if (index == null) return;
    setActiveIndex(index);
    itemRefs.current[index]?.focus();
  };

  // Arrow/Home/End/Escape/Tab handling for the composite menu. Enter and
  // Space are deliberately untouched: item buttons activate natively.
  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        move(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        move(-1);
        break;
      case 'Home':
        event.preventDefault();
        focusEdge('first');
        break;
      case 'End':
        event.preventDefault();
        focusEdge('last');
        break;
      case 'Escape':
        event.preventDefault();
        closeMenu();
        break;
      case 'Tab':
        setOpen(false);
        break;
    }
  };

  return (
    <div
      ref={rootRef}
      className={[
        styles.root,
        styles[size],
        styles[`style-${severity}`],
        styles[resolveVariant(variant, 'filled')],
        shade !== 'default' ? styles[`shade-${shade}`] : null,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
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
        onKeyDown={(event) => {
          if (!open && event.key === 'ArrowDown') {
            event.preventDefault();
            openMenu();
          }
        }}
      >
        <Icon name="chevron-down" />
      </button>
      {open && (
        <div
          id={menuId}
          role="menu"
          tabIndex={-1}
          className={styles.menu}
          onKeyDown={handleMenuKeyDown}
          {...ariaProps}
        >
          {items.map((item, index) => (
            <button
              key={item.key}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              type="button"
              role="menuitem"
              tabIndex={index === activeIndex ? 0 : -1}
              disabled={item.disabled}
              className={[
                styles.item,
                index === activeIndex ? styles.active : null,
                item.danger ? styles.danger : null,
                item.disabled ? styles.disabled : null,
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => activate(index)}
              onMouseEnter={() => {
                if (!item.disabled) setActiveIndex(index);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
