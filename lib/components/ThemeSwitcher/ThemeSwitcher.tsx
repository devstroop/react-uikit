import { useEffect, useState, type ChangeEvent, type ReactNode } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Switch } from '../Switch/Switch';
import styles from './ThemeSwitcher.module.css';

export type ThemeName = 'light' | 'dark' | 'system';

export interface ThemeSwitcherProps {
  /** Controlled theme. Omit for uncontrolled. */
  value?: ThemeName;
  /** Uncontrolled initial theme. Defaults to following the OS. */
  defaultValue?: ThemeName;
  /**
   * localStorage key for the explicit choice. Set to `null` to disable
   * persistence. Defaults to `"dx-theme"`.
   */
  storageKey?: string | null;
  onChange?: (theme: Exclude<ThemeName, 'system'>) => void;
  label?: ReactNode;
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

export function ThemeSwitcher({
  value,
  defaultValue,
  storageKey,
  onChange,
  label = 'Dark mode',
  className,
}: ThemeSwitcherProps) {
  const systemDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [internal, setInternal] = useState<ThemeName | undefined>(undefined);

  // Explicit choice precedence: controlled prop, persisted choice,
  // initial default. Absent all three the OS is followed and nothing
  // is written, so the stylesheet fallback stays in charge.
  const applicable =
    value ??
    internal ??
    readStored(storageKey) ??
    defaultValue ??
    'system';
  const effective =
    applicable === 'system' ? (systemDark ? 'dark' : 'light') : applicable;

  useEffect(() => {
    if (applicable === 'system') {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = applicable;
  }, [applicable]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = event.target.checked ? 'dark' : 'light';
    if (value === undefined) {
      setInternal(next);
    }
    writeStored(storageKey, next);
    onChange?.(next);
  };

  return (
    <label className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      {label}
      <Switch checked={effective === 'dark'} onChange={handleChange} />
    </label>
  );
}
