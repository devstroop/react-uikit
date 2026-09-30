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

function toggleButton(name = 'Dark mode') {
  return screen.getByRole('button', { name });
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
    expect(toggleButton()).toHaveAttribute('aria-pressed', 'false');
  });

  it('reflects a dark OS without writing an override', () => {
    stubMatchMedia(true);
    render(<ThemeToggle />);
    expect(document.documentElement.dataset.theme).toBeUndefined();
    expect(toggleButton()).toHaveAttribute('aria-pressed', 'true');
  });

  it('persists an explicit toggle and writes the theme', async () => {
    stubMatchMedia(false);
    const user = userEvent.setup();
    render(<ThemeToggle />);
    await user.click(toggleButton());
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('dx-theme')).toBe('dark');
    await user.click(toggleButton());
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(localStorage.getItem('dx-theme')).toBe('light');
  });

  it('initializes from a persisted choice', () => {
    stubMatchMedia(false);
    localStorage.setItem('dx-theme', 'dark');
    render(<ThemeToggle />);
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(toggleButton()).toHaveAttribute('aria-pressed', 'true');
  });

  it('supports a controlled value without touching the document', () => {
    stubMatchMedia(false);
    const { rerender } = render(<ThemeToggle value="dark" />);
    expect(document.documentElement.dataset.theme).toBeUndefined();
    expect(toggleButton()).toHaveAttribute('aria-pressed', 'true');
    rerender(<ThemeToggle value="light" />);
    expect(document.documentElement.dataset.theme).toBeUndefined();
    expect(toggleButton()).toHaveAttribute('aria-pressed', 'false');
  });

  it('does not persist in controlled mode', async () => {
    stubMatchMedia(false);
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ThemeToggle value="light" onChange={onChange} />);
    await user.click(toggleButton());
    expect(onChange).toHaveBeenCalledWith('dark');
    expect(localStorage.getItem('dx-theme')).toBeNull();
  });

  it('forwards id and renders the label as the accessible name', () => {
    stubMatchMedia(false);
    render(<ThemeToggle id="preview-dark" label="Toggle appearance" />);
    expect(toggleButton('Toggle appearance')).toHaveAttribute(
      'id',
      'preview-dark'
    );
  });

  it('calls onChange with the new explicit theme', async () => {
    stubMatchMedia(false);
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ThemeToggle onChange={onChange} />);
    await user.click(toggleButton());
    expect(onChange).toHaveBeenCalledWith('dark');
  });

  it('swaps the state icon: dark_mode while light, light_mode while dark', () => {
    stubMatchMedia(false);
    const { container, rerender } = render(<ThemeToggle value="light" />);
    expect(container.querySelector('button')).toHaveTextContent('dark_mode');
    rerender(<ThemeToggle value="dark" />);
    expect(container.querySelector('button')).toHaveTextContent('light_mode');
  });

  it('toggles with Enter and Space on the button', async () => {
    stubMatchMedia(false);
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ThemeToggle onChange={onChange} />);
    toggleButton().focus();
    await user.keyboard('{Enter}');
    expect(onChange).toHaveBeenLastCalledWith('dark');
    await user.keyboard(' ');
    expect(onChange).toHaveBeenLastCalledWith('light');
  });
});
