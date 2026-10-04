import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import {
  __resetThemeServiceForTests,
  getAppearance,
  getTheme,
  setAppearance,
  setTheme,
  subscribe,
  useThemeService,
} from './ThemeService';

afterEach(() => {
  __resetThemeServiceForTests();
  localStorage.clear();
  document.documentElement.removeAttribute('data-palette');
  document.documentElement.removeAttribute('data-theme');
});

describe('ThemeService', () => {
  it('starts unset and applies theme + appearance with persistence', () => {
    expect(getTheme()).toBeNull();
    expect(getAppearance()).toBeNull();

    setTheme('github');
    expect(document.documentElement.getAttribute('data-palette')).toBe(
      'github'
    );
    expect(localStorage.getItem('dx-palette')).toBe('github');

    setAppearance('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('dx-theme')).toBe('dark');
  });

  it('clears attributes and storage on null', () => {
    setTheme('github');
    setAppearance('dark');
    setTheme(null);
    setAppearance(null);
    expect(document.documentElement.hasAttribute('data-palette')).toBe(false);
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false);
    expect(localStorage.getItem('dx-palette')).toBeNull();
    expect(localStorage.getItem('dx-theme')).toBeNull();
  });

  it('notifies subscribers on change and stops after unsubscribe', () => {
    const seen: string[] = [];
    const off = subscribe((s) => seen.push(`${s.theme}/${s.appearance}`));
    setTheme('fluent');
    setAppearance('light');
    off();
    setTheme('github');
    expect(seen).toEqual(['fluent/null', 'fluent/light']);
  });

  it('reads an explicitly applied attribute over storage', () => {
    localStorage.setItem('dx-palette', 'github');
    document.documentElement.setAttribute('data-palette', 'fluent');
    expect(getTheme()).toBe('fluent');
  });

  it('useThemeService re-renders with the service state', () => {
    const { result } = renderHook(() => useThemeService());
    expect(result.current.theme).toBeNull();
    act(() => {
      result.current.setTheme('material');
      result.current.setAppearance('dark');
    });
    expect(result.current.theme).toBe('material');
    expect(result.current.appearance).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
