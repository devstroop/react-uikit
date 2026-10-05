import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
} from 'react';
import { Select, type SelectSize } from '../Select/Select';
import styles from './ThemeSwitcher.module.css';

/** Default theme names offered by the picker (the demos palettes). */
export const DEFAULT_THEMES = [
  'default',
  'fluent',
  'github',
  'material',
  'material-3',
  'shadcn',
] as const;

export interface ThemeSwitcherProps {
  /** Theme names to offer. Defaults to `DEFAULT_THEMES`. */
  themes?: readonly string[];
  /** Controlled theme. Omit for uncontrolled. */
  value?: string;
  /** Uncontrolled initial theme. Omit to start with no selection. */
  defaultValue?: string;
  /**
   * localStorage key for the choice. Set to `null` to disable
   * persistence. Defaults to `"dx-palette"`.
   */
  storageKey?: string | null;
  /**
   * Document attribute written in uncontrolled mode. Defaults to
   * `"data-palette"` (the demos's palette hook).
   */
  attribute?: string;
  onChange?: (theme: string) => void;
  label?: ReactNode;
  /** Shown in the select until a theme is chosen. */
  placeholder?: string;
  /** Forwarded to the underlying select. */
  id?: string;
  size?: SelectSize;
  className?: string;
}

const STORAGE_KEY = 'dx-palette';
const ATTRIBUTE = 'data-palette';

function readStored(
  key: string | null | undefined,
  themes: readonly string[]
): string | undefined {
  const resolved = key === undefined ? STORAGE_KEY : key;
  if (resolved === null || typeof localStorage === 'undefined')
    return undefined;
  try {
    const raw = localStorage.getItem(resolved);
    return raw != null && themes.includes(raw) ? raw : undefined;
  } catch {
    // Blocked storage (private mode, disabled cookies) must never crash render.
    return undefined;
  }
}

function writeStored(key: string | null | undefined, value: string): void {
  const resolved = key === undefined ? STORAGE_KEY : key;
  if (resolved === null || typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(resolved, value);
  } catch {
    /* persistence is best-effort */
  }
}

export function ThemeSwitcher({
  themes = DEFAULT_THEMES,
  value,
  defaultValue,
  storageKey,
  attribute = ATTRIBUTE,
  onChange,
  label = 'Theme',
  placeholder = 'Theme…',
  id,
  size = 'md',
  className,
}: ThemeSwitcherProps) {
  const [internal, setInternal] = useState<string | undefined>(undefined);
  const controlled = value !== undefined;

  const applicable =
    value ?? internal ?? readStored(storageKey, themes) ?? defaultValue;
  const selected = applicable ?? '';

  // Uncontrolled mode owns `<html data-palette>`; controlled mode is pure
  // UI so the parent (e.g. the demos's palette loader) stays the single
  // writer. Nothing is applied until an explicit choice exists, so a host
  // whose default theme needs no attribute is never overridden. The applied
  // value is sticky across unmount (the picked theme must survive closing
  // the control), but is cleared if resolution ever becomes undefined
  // again while we still own the attribute.
  const appliedRef = useRef<string | undefined>(undefined);
  useEffect(() => {
    if (controlled) return;
    const root = document.documentElement;
    if (applicable === undefined) {
      if (
        appliedRef.current !== undefined &&
        root.getAttribute(attribute) === appliedRef.current
      ) {
        root.removeAttribute(attribute);
        appliedRef.current = undefined;
      }
      return;
    }
    root.setAttribute(attribute, applicable);
    appliedRef.current = applicable;
  }, [applicable, attribute, controlled]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const next = event.target.value;
    if (!controlled) {
      setInternal(next);
      writeStored(storageKey, next);
    }
    onChange?.(next);
  };

  return (
    <label className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      {label}
      <Select id={id} size={size} value={selected} onChange={handleChange}>
        {applicable === undefined && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {applicable !== undefined && !themes.includes(applicable) && (
          <option value={applicable}>{applicable}</option>
        )}
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </Select>
    </label>
  );
}
