import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ThemeToggle } from './ThemeToggle';

function stubMatchMedia(matches: boolean) {
  const list = {
    matches,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  };
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => list)
  );
  return list;
}

afterEach(() => {
  delete document.documentElement.dataset.theme;
  localStorage.clear();
  vi.unstubAllGlobals();
});

describe('ThemeToggle', () => {
  it('follows the OS by default and writes nothing', () => {
    stubMatchMedia(false);
    render(<ThemeToggle />);
    expect(document.documentElement.dataset.theme).toBeUndefined();
    expect(screen.getByRole('switch')).not.toBeChecked();
  });

  it('reflects a dark OS without writing an override', () => {
    stubMatchMedia(true);
    render(<ThemeToggle />);
    expect(document.documentElement.dataset.theme).toBeUndefined();
    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('persists an explicit toggle and writes the theme', async () => {
    stubMatchMedia(false);
    const user = userEvent.setup();
    render(<ThemeToggle />);
    await user.click(screen.getByRole('switch'));
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('dx-theme')).toBe('dark');
    await user.click(screen.getByRole('switch'));
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(localStorage.getItem('dx-theme')).toBe('light');
  });

  it('initializes from a persisted choice', () => {
    stubMatchMedia(false);
    localStorage.setItem('dx-theme', 'dark');
    render(<ThemeToggle />);
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('supports a controlled value without touching the document', () => {
    stubMatchMedia(false);
    const { rerender } = render(<ThemeToggle value="dark" />);
    expect(document.documentElement.dataset.theme).toBeUndefined();
    expect(screen.getByRole('switch')).toBeChecked();
    rerender(<ThemeToggle value="light" />);
    expect(document.documentElement.dataset.theme).toBeUndefined();
    expect(screen.getByRole('switch')).not.toBeChecked();
  });

  it('does not persist in controlled mode', async () => {
    stubMatchMedia(false);
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ThemeToggle value="light" onChange={onChange} />);
    await user.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalledWith('dark');
    expect(localStorage.getItem('dx-theme')).toBeNull();
  });

  it('forwards id to the switch input', () => {
    stubMatchMedia(false);
    render(<ThemeToggle id="preview-dark" />);
    expect(screen.getByRole('switch')).toHaveAttribute('id', 'preview-dark');
  });

  it('calls onChange with the new explicit theme', async () => {
    stubMatchMedia(false);
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ThemeToggle onChange={onChange} />);
    await user.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalledWith('dark');
  });
});
