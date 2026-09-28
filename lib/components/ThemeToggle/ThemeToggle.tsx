import { useEffect, useState, type ChangeEvent, type ReactNode } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Switch } from '../Switch/Switch';
import styles from './ThemeToggle.module.css';

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
  label?: ReactNode;
  /** Forwarded to the underlying switch input. */
  id?: string;
  className?: string;
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = event.target.checked ? 'dark' : 'light';
    if (!controlled) {
      setInternal(next);
      writeStored(storageKey, next);
    }
    onChange?.(next);
  };

  return (
    <label className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      {label}
      <Switch id={id} checked={effective === 'dark'} onChange={handleChange} />
    </label>
  );
}
