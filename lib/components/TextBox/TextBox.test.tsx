import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { TextBox } from './TextBox';

describe('TextBox', () => {
  it('renders a native text input with an accessible name', () => {
    render(<TextBox aria-label="Full name" />);
    expect(
      screen.getByRole('textbox', { name: 'Full name' })
    ).toBeInTheDocument();
  });

  it('defaults to type=text and size=md; applies size classes', () => {
    const { rerender } = render(<TextBox />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'text');
    expect(input.className).toContain('md');
    rerender(<TextBox size="lg" />);
    expect(screen.getByRole('textbox').className).toContain('lg');
  });

  it('exposes size via data-size for container sizing', () => {
    const { rerender } = render(<TextBox />);
    expect(screen.getByRole('textbox')).toHaveAttribute('data-size', 'md');
    rerender(<TextBox size="xl" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('data-size', 'xl');
  });

  it('sets aria-invalid only when invalid', () => {
    const { rerender } = render(<TextBox />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
    rerender(<TextBox invalid />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies the invalid class when invalid', () => {
    render(<TextBox invalid />);
    expect(screen.getByRole('textbox').className).toContain('invalid');
  });

  it('forwards input attributes', () => {
    render(<TextBox placeholder="Search" type="email" disabled />);
    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('type', 'email');
  });

  it('merges a custom className', () => {
    render(<TextBox className="custom-class" />);
    expect(screen.getByRole('textbox')).toHaveClass('custom-class');
  });

  it('forwards typing to onChange and blocks input when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { rerender } = render(
      <TextBox aria-label="Search" onChange={onChange} />
    );
    await user.type(screen.getByRole('textbox', { name: 'Search' }), 'abc');
    expect(onChange).toHaveBeenCalledTimes(3);
    rerender(<TextBox aria-label="Search" onChange={onChange} disabled />);
    await user.type(screen.getByRole('textbox', { name: 'Search' }), 'def');
    expect(onChange).toHaveBeenCalledTimes(3);
  });

  it('renders nothing when visible is false', () => {
    render(<TextBox aria-label="Search" visible={false} />);
    expect(
      screen.queryByRole('textbox', { name: 'Search' })
    ).not.toBeInTheDocument();
  });
});
