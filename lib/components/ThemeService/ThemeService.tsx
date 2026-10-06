import { useEffect, useState } from 'react';

/**
 * Theme service (uikit#98): the imperative counterpart of the
 * ThemeToggle component (and the demos' ThemeSwitcher). Owns `<html data-palette>` and
 * `<html data-theme>` plus `dx-palette`/`dx-theme` storage, and notifies
 * subscribers on every change. Components stay thin: they read through
 * `useThemeService` and write through the service verbs, so app code,
 * controls, and storage never disagree.
 */
export type Appearance = 'light' | 'dark';

export interface ThemeState {
  theme: string | null;
  appearance: Appearance | null;
}

export type ThemeListener = (state: ThemeState) => void;

const PALETTE_KEY = 'dx-palette';
const THEME_KEY = 'dx-theme';
const PALETTE_ATTR = 'data-palette';
const THEME_ATTR = 'data-theme';

const listeners = new Set<ThemeListener>();

function readDom(): ThemeState {
  if (typeof document === 'undefined') return { theme: null, appearance: null };
  const theme = document.documentElement.getAttribute(PALETTE_ATTR);
  const raw = document.documentElement.getAttribute(THEME_ATTR);
  return {
    theme,
    appearance: raw === 'light' || raw === 'dark' ? raw : null,
  };
}

function applyDom(state: ThemeState) {
  if (typeof document === 'undefined') return;
  if (state.theme == null)
    document.documentElement.removeAttribute(PALETTE_ATTR);
  else document.documentElement.setAttribute(PALETTE_ATTR, state.theme);
  if (state.appearance == null)
    document.documentElement.removeAttribute(THEME_ATTR);
  else document.documentElement.setAttribute(THEME_ATTR, state.appearance);
}

function writeStored(key: string, value: string | null) {
  try {
    if (typeof localStorage === 'undefined') return;
    if (value == null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* persistence is best-effort */
  }
}

function readStored(key: string): string | null {
  try {
    if (typeof localStorage === 'undefined') return null;
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

// Reads are always fresh from the DOM (the live source of truth), so
// writes from ThemeToggle and the demos' ThemeSwitcher — which carry their own richer
// local logic on the same keys — are visible to the service immediately.
// Storage seeds the DOM once per process when no attribute is applied.
let adopted = false;

function current(): ThemeState {
  const dom = readDom();
  if (!adopted) {
    adopted = true;
    const storedTheme = readStored(PALETTE_KEY);
    const storedAppearance = readStored(THEME_KEY);
    const appearance =
      dom.appearance ??
      (storedAppearance === 'light' || storedAppearance === 'dark'
        ? storedAppearance
        : null);
    const seeded = { theme: dom.theme ?? storedTheme, appearance };
    if (seeded.theme != null || seeded.appearance != null) applyDom(seeded);
    return seeded;
  }
  return dom;
}

function notify() {
  const state = current();
  listeners.forEach((fn) => fn({ ...state }));
}

/** Subscribe to theme/appearance changes. Returns an unsubscribe fn. */
export function subscribe(listener: ThemeListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Currently applied theme name (palette), or null when unset. */
export function getTheme(): string | null {
  return current().theme;
}

/** Apply a theme name; null clears the attribute and the stored choice. */
export function setTheme(name: string | null): void {
  const state = current();
  if (state.theme === name) return;
  state.theme = name;
  applyDom(state);
  writeStored(PALETTE_KEY, name);
  notify();
}

/** Currently applied appearance, or null when unset. */
export function getAppearance(): Appearance | null {
  return current().appearance;
}

/** Apply an appearance; null clears the attribute and the stored choice. */
export function setAppearance(mode: Appearance | null): void {
  const state = current();
  if (state.appearance === mode) return;
  state.appearance = mode;
  applyDom(state);
  writeStored(THEME_KEY, mode);
  notify();
}

export interface ThemeService {
  theme: string | null;
  appearance: Appearance | null;
  setTheme: typeof setTheme;
  setAppearance: typeof setAppearance;
  subscribe: typeof subscribe;
}

/**
 * Reactive binding to the theme service: re-renders on every change and
 * hands out the current state plus the service verbs.
 */
export function useThemeService(): ThemeService {
  const [, bump] = useState(0);
  useEffect(() => subscribe(() => bump((n) => n + 1)), []);
  const state = current();
  return {
    theme: state.theme,
    appearance: state.appearance,
    setTheme,
    setAppearance,
    subscribe,
  };
}

/** Reset module state. Test-only seam: jsdom suites share one document. */
export function __resetThemeServiceForTests(): void {
  adopted = false;
  listeners.clear();
}
