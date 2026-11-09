import { afterEach, describe, expect, it, vi } from 'vitest';
import { warnIfThemeMissing, warnIfThemeMissingInDev } from './theme-contract';

describe('theme contract warning (GAP-015)', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('warns when the token resolves to nothing', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    warnIfThemeMissing(() => '');
    warnIfThemeMissing(() => '   ');
    expect(warn).toHaveBeenCalledTimes(2);
    expect(String(warn.mock.calls[0]?.[0])).toContain('--dx-primary-color');
  });

  it('names the files to import', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    warnIfThemeMissing(() => '');
    const message = String(warn.mock.calls[0]?.[0]);
    expect(message).toMatch(/themes\/.*\.css|tokens\.css/);
    expect(message).toMatch(/utilities\.css/);
    expect(message).toMatch(/style\.css/);
  });

  it('stays quiet when the theme is loaded', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    warnIfThemeMissing(() => '#2563eb');
    expect(warn).not.toHaveBeenCalled();
  });

  it('checks the live document on the next frame', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    warnIfThemeMissingInDev();
    await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));
    // jsdom carries no --dx-* declarations, so the default read finds an
    // unresolved token and warns; a themed document takes the early return.
    expect(warn).toHaveBeenCalledTimes(1);
  });
});
