import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { CheckBox } from './CheckBox';

describe('CheckBox', () => {
  it('renders a native checkbox input', () => {
    render(<CheckBox aria-label="Accept terms" />);
    const checkbox = screen.getByRole('checkbox', { name: 'Accept terms' });
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

  it('is unchecked by default and toggles on click', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<CheckBox aria-label="Subscribe" onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  });

  it('reflects a controlled checked prop', () => {
    render(<CheckBox aria-label="Agree" checked readOnly />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('is disabled and cannot be toggled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<CheckBox aria-label="Locked" disabled onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    await user.click(checkbox);
    expect(onChange).not.toHaveBeenCalled();
    expect(checkbox).not.toBeChecked();
  });

  it('forwards native input props', () => {
    render(<CheckBox id="terms" name="terms" value="yes" aria-label="Terms" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('id', 'terms');
    expect(checkbox).toHaveAttribute('name', 'terms');
    expect(checkbox).toHaveAttribute('value', 'yes');
  });

  it('forwards a ref to the input', () => {
    const ref = createRef<HTMLInputElement>();
    render(<CheckBox ref={ref} aria-label="Ref" />);
    expect(ref.current).toBe(screen.getByRole('checkbox'));
  });

  it('applies the indeterminate DOM property on mount', () => {
    render(<CheckBox aria-label="Mixed" indeterminate readOnly />);
    expect(screen.getByRole('checkbox')).toBePartiallyChecked();
  });

  it('clears indeterminate when the prop flips to false', async () => {
    const { rerender } = render(
      <CheckBox aria-label="Mixed" indeterminate readOnly />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBePartiallyChecked();
    rerender(<CheckBox aria-label="Mixed" indeterminate={false} readOnly />);
    expect(checkbox).not.toBePartiallyChecked();
  });

  it('stays unchecked without the prop by default', () => {
    render(<CheckBox aria-label="Plain" readOnly />);
    expect(screen.getByRole('checkbox')).not.toBePartiallyChecked();
  });
});
