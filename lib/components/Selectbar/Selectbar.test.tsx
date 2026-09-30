import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, expectTypeOf, it, vi } from 'vitest';
import { Selectbar } from './Selectbar';

const options = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

describe('Selectbar', () => {
  it('renders a group with an accessible name', () => {
    render(<Selectbar options={options} aria-label="Range" />);
    expect(screen.getByRole('group', { name: 'Range' })).toBeInTheDocument();
  });

  it('renders an option per entry', () => {
    render(<Selectbar options={options} aria-label="Range" />);
    expect(screen.getAllByRole('button')).toHaveLength(3);
    expect(screen.getByRole('button', { name: 'Week' })).toBeInTheDocument();
  });

  it('selects the first option by default', () => {
    render(<Selectbar options={options} aria-label="Range" />);
    expect(screen.getByRole('button', { name: 'Day' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    expect(screen.getByRole('button', { name: 'Week' })).toHaveAttribute(
      'aria-pressed',
      'false'
    );
  });

  it('selects on click and clears the others', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Selectbar options={options} onChange={onChange} aria-label="Range" />
    );
    await user.click(screen.getByRole('button', { name: 'Month' }));
    expect(screen.getByRole('button', { name: 'Month' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    expect(screen.getByRole('button', { name: 'Day' })).toHaveAttribute(
      'aria-pressed',
      'false'
    );
    expect(onChange).toHaveBeenCalledWith('month');
  });

  it('reflects the controlled value prop', () => {
    const { rerender } = render(
      <Selectbar options={options} value="week" aria-label="Range" />
    );
    expect(screen.getByRole('button', { name: 'Week' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    rerender(<Selectbar options={options} value="day" aria-label="Range" />);
    expect(screen.getByRole('button', { name: 'Week' })).toHaveAttribute(
      'aria-pressed',
      'false'
    );
    expect(screen.getByRole('button', { name: 'Day' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
  });

  it('disables a disabled option', () => {
    render(
      <Selectbar
        options={[{ value: 'year', label: 'Year', disabled: true }, ...options]}
        aria-label="Range"
      />
    );
    expect(screen.getByRole('button', { name: 'Year' })).toBeDisabled();
  });

  it('toggles several options when multiple is set', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Selectbar
        options={options}
        multiple
        onChange={onChange}
        aria-label="Range"
      />
    );
    expect(screen.getByRole('button', { name: 'Day' })).toHaveAttribute(
      'aria-pressed',
      'false'
    );
    await user.click(screen.getByRole('button', { name: 'Day' }));
    await user.click(screen.getByRole('button', { name: 'Week' }));
    expect(screen.getByRole('button', { name: 'Day' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    expect(screen.getByRole('button', { name: 'Week' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    expect(onChange).toHaveBeenLastCalledWith(['day', 'week']);
    await user.click(screen.getByRole('button', { name: 'Day' }));
    expect(screen.getByRole('button', { name: 'Day' })).toHaveAttribute(
      'aria-pressed',
      'false'
    );
    expect(onChange).toHaveBeenLastCalledWith(['week']);
  });

  it('reflects a controlled array value when multiple is set', () => {
    const { rerender } = render(
      <Selectbar
        options={options}
        multiple
        value={['week']}
        aria-label="Range"
      />
    );
    expect(screen.getByRole('button', { name: 'Week' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    rerender(
      <Selectbar options={options} multiple value={[]} aria-label="Range" />
    );
    expect(screen.getByRole('button', { name: 'Week' })).toHaveAttribute(
      'aria-pressed',
      'false'
    );
  });

  it('stacks vertically with the vertical orientation', () => {
    const { container } = render(
      <Selectbar options={options} orientation="vertical" aria-label="Range" />
    );
    expect(container.firstElementChild?.className).toContain('vertical');
  });

  it('keeps single and multi handler types discriminated', () => {
    render(
      <Selectbar
        options={options}
        onChange={(v) => {
          expectTypeOf(v).toEqualTypeOf<string>();
        }}
        aria-label="Range"
      />
    );
    render(
      <Selectbar
        options={options}
        multiple
        onChange={(v) => {
          expectTypeOf(v).toEqualTypeOf<string[]>();
        }}
        aria-label="Range"
      />
    );
  });

  it('applies size classes', () => {
    const { rerender } = render(
      <Selectbar options={options} aria-label="Range" />
    );
    expect(screen.getByRole('group').className).toContain('md');
    rerender(<Selectbar options={options} size="sm" aria-label="Range" />);
    expect(screen.getByRole('group').className).toContain('sm');
  });

  it('accepts un-narrowed union usage through the loose overload', () => {
    const value: string | string[] = ['day'];
    const onChange = (v: string | string[]) => {
      expectTypeOf(v).toEqualTypeOf<string | string[]>();
    };
    render(
      <Selectbar
        options={options}
        value={value}
        onChange={onChange}
        aria-label="Range"
      />
    );
    expect(screen.getByRole('button', { name: 'Day' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
  });

  it('never flips explicit single mode to multi on an array value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Selectbar
        options={options}
        multiple={false}
        value={['day'] as unknown as string}
        onChange={onChange}
        aria-label="Range"
      />
    );
    // Explicit single mode: nothing selected, and clicking emits a string.
    expect(screen.getByRole('button', { name: 'Day' })).toHaveAttribute(
      'aria-pressed',
      'false'
    );
    await user.click(screen.getByRole('button', { name: 'Day' }));
    expect(onChange).toHaveBeenCalledWith('day');
  });
});
