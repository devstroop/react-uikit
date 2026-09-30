import { useEffect, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Icon } from '../Icon/Icon';
import {
  Togglebutton,
  type TogglebuttonSize,
} from '../Togglebutton/Togglebutton';

export type ThemeName = 'light' | 'dark' | 'system';

export interface ThemeToggleProps {
  /** Controlled appearance. Omit for uncontrolled. */
  value?: ThemeName;
  /** Uncontrolled initial appearance. Defaults to following the OS. */
  defaultValue?: ThemeName;
  /**
   * localStorage key for the explicit choice. Set to `null` to disable
   * persistence. Defaults to `"dx-theme"`.
   */
  storageKey?: string | null;
  onChange?: (theme: Exclude<ThemeName, 'system'>) => void;
  /** Accessible name for the icon-only toggle button. */
  label?: string;
  /** Forwarded to the underlying toggle button. */
  id?: string;
  className?: string;
  size?: TogglebuttonSize;
}

const STORAGE_KEY = 'dx-theme';

function readStored(key: string | null | undefined): ThemeName | undefined {
  const resolved = key === undefined ? STORAGE_KEY : key;
  if (resolved === null || typeof localStorage === 'undefined')
    return undefined;
  try {
    const raw = localStorage.getItem(resolved);
    return raw === 'light' || raw === 'dark' || raw === 'system'
      ? raw
      : undefined;
  } catch {
    // Blocked storage (private mode, disabled cookies) must never crash render.
    return undefined;
  }
}

function writeStored(key: string | null | undefined, value: ThemeName): void {
  const resolved = key === undefined ? STORAGE_KEY : key;
  if (resolved === null || typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(resolved, value);
  } catch {
    /* persistence is best-effort */
  }
}

export function ThemeToggle({
  value,
  defaultValue,
  storageKey,
  onChange,
  label = 'Dark mode',
  id,
  className,
  size,
}: ThemeToggleProps) {
  const systemDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [internal, setInternal] = useState<ThemeName | undefined>(undefined);
  const controlled = value !== undefined;

  // Explicit choice precedence: controlled prop, persisted choice,
  // initial default. Absent all three the OS is followed and nothing
  // is written, so the stylesheet fallback stays in charge.
  const applicable =
    value ?? internal ?? readStored(storageKey) ?? defaultValue ?? 'system';
  const effective =
    applicable === 'system' ? (systemDark ? 'dark' : 'light') : applicable;

  // Uncontrolled mode owns `<html data-theme>`; controlled mode is pure
  // UI so the parent (e.g. preview chrome) stays the single writer.
  useEffect(() => {
    if (controlled) return;
    if (applicable === 'system') {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = applicable;
  }, [applicable, controlled]);

  const handleToggle = (dark: boolean) => {
    const next: 'light' | 'dark' = dark ? 'dark' : 'light';
    if (!controlled) {
      setInternal(next);
      writeStored(storageKey, next);
    }
    onChange?.(next);
  };

  return (
    <Togglebutton
      id={id}
      size={size}
      className={className}
      aria-label={label}
      variant="text"
      severity="base"
      pressed={effective === 'dark'}
      onChange={handleToggle}
      // State icon (Radzen AppearanceToggle parity): moon while light,
      // sun while dark — the glyph previews the mode a click applies.
      toggleContent={<Icon icon="light_mode" size={size ?? 'md'} />}
    >
      <Icon icon="dark_mode" size={size ?? 'md'} />
    </Togglebutton>
  );
}
