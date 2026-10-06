import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { DEFAULT_THEMES, ThemeSwitcher } from './ThemeSwitcher';

function optionsOf(): string[] {
  const select = screen.getByRole<HTMLSelectElement>('combobox');
  // Skip the unresolved placeholder option (value "").
  return [...select.options]
    .map((option) => option.value)
    .filter((value) => value !== '');
}

afterEach(() => {
  delete document.documentElement.dataset.palette;
  localStorage.clear();
});

describe('ThemeSwitcher', () => {
  it('offers the default themes when themes is omitted', () => {
    render(<ThemeSwitcher />);
    expect(optionsOf()).toEqual([...DEFAULT_THEMES]);
    expect(DEFAULT_THEMES).toHaveLength(7);
  });

  it('accepts a custom themes list', () => {
    render(<ThemeSwitcher themes={['ocean', 'sunset']} />);
    expect(optionsOf()).toEqual(['ocean', 'sunset']);
  });

  it('starts with the placeholder and applies nothing until chosen', () => {
    render(<ThemeSwitcher />);
    expect(screen.getByRole('combobox')).toHaveValue('');
    expect(screen.getByText('Theme…')).toBeInTheDocument();
    expect(document.documentElement.dataset.palette).toBeUndefined();
  });

  it('uncontrolled: applies data-palette, persists, and notifies', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ThemeSwitcher onChange={onChange} />);
    await user.selectOptions(screen.getByRole('combobox'), 'material-3');
    expect(document.documentElement.dataset.palette).toBe('material-3');
    expect(localStorage.getItem('dx-palette')).toBe('material-3');
    expect(onChange).toHaveBeenCalledWith('material-3');
  });

  it('initializes from a persisted valid choice', () => {
    localStorage.setItem('dx-palette', 'github');
    render(<ThemeSwitcher />);
    expect(screen.getByRole('combobox')).toHaveValue('github');
    expect(document.documentElement.dataset.palette).toBe('github');
  });

  it('ignores persisted values outside the themes list', () => {
    localStorage.setItem('dx-palette', 'nope');
    render(<ThemeSwitcher />);
    expect(screen.getByRole('combobox')).toHaveValue('');
    expect(document.documentElement.dataset.palette).toBeUndefined();
  });

  it('supports a controlled value without touching the document', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { rerender } = render(
      <ThemeSwitcher value="fluent" onChange={onChange} />
    );
    expect(screen.getByRole('combobox')).toHaveValue('fluent');
    expect(document.documentElement.dataset.palette).toBeUndefined();
    await user.selectOptions(screen.getByRole('combobox'), 'shadcn');
    expect(onChange).toHaveBeenCalledWith('shadcn');
    expect(localStorage.getItem('dx-palette')).toBeNull();
    rerender(<ThemeSwitcher value="shadcn" onChange={onChange} />);
    expect(screen.getByRole('combobox')).toHaveValue('shadcn');
    expect(document.documentElement.dataset.palette).toBeUndefined();
  });

  it('storageKey null disables persistence', async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher storageKey={null} />);
    await user.selectOptions(screen.getByRole('combobox'), 'github');
    expect(document.documentElement.dataset.palette).toBe('github');
    expect(localStorage.getItem('dx-palette')).toBeNull();
  });

  it('clears the attribute it applied when resolution becomes undefined', () => {
    const { rerender } = render(<ThemeSwitcher defaultValue="github" />);
    expect(document.documentElement.dataset.palette).toBe('github');
    rerender(<ThemeSwitcher themes={['ocean']} />);
    expect(document.documentElement.dataset.palette).toBeUndefined();
  });

  it('keeps an unknown value visible as its own option', () => {
    render(<ThemeSwitcher value="sol" />);
    expect(screen.getByRole('combobox')).toHaveValue('sol');
    expect(screen.getByRole('combobox')).not.toHaveValue('');
    expect(screen.getByRole('option', { name: 'sol' })).toBeInTheDocument();
  });

  it('forwards id and className, and renders the label', () => {
    const { container } = render(
      <ThemeSwitcher id="demos-theme" className="pick" label="Theme" />
    );
    expect(screen.getByRole('combobox')).toHaveAttribute('id', 'demos-theme');
    expect(container.querySelector('.pick')).toBeInTheDocument();
    expect(screen.getByText('Theme')).toBeInTheDocument();
  });
});
