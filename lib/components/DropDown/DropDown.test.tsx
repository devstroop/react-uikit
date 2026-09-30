import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { DropDown } from './DropDown';

const options = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
];

describe('DropDown', () => {
  it('renders a closed trigger', () => {
    render(<DropDown options={options} aria-label="Color" />);
    const trigger = screen.getByRole('combobox', { name: 'Color' });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });

  it('opens on trigger click', async () => {
    const user = userEvent.setup();
    render(<DropDown options={options} aria-label="Color" />);
    const trigger = screen.getByRole('combobox', { name: 'Color' });
    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger).toHaveAttribute(
      'aria-controls',
      screen.getByRole('listbox').id
    );
    expect(screen.getAllByRole('option')).toHaveLength(3);
  });

  it('selects by click and closes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <DropDown options={options} onChange={onChange} aria-label="Color" />
    );
    await user.click(screen.getByRole('combobox', { name: 'Color' }));
    await user.click(screen.getByRole('option', { name: 'Green' }));
    expect(onChange).toHaveBeenCalledWith('green');
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });

  it('navigates and selects with the keyboard', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <DropDown options={options} onChange={onChange} aria-label="Color" />
    );
    const trigger = screen.getByRole('combobox', { name: 'Color' });
    trigger.focus();
    await user.keyboard('{ArrowDown}');
    const listbox = screen.getByRole('listbox');
    expect(listbox).toHaveAttribute(
      'aria-activedescendant',
      screen.getAllByRole('option')[0]!.id
    );
    await user.keyboard('{ArrowDown}');
    expect(listbox).toHaveAttribute(
      'aria-activedescendant',
      screen.getAllByRole('option')[1]!.id
    );
    await user.keyboard('{ArrowUp}');
    expect(listbox).toHaveAttribute(
      'aria-activedescendant',
      screen.getAllByRole('option')[0]!.id
    );
    await user.keyboard('{Enter}');
    expect(onChange).toHaveBeenCalledWith('red');
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });

  it('closes on Escape and restores focus', async () => {
    const user = userEvent.setup();
    render(<DropDown options={options} aria-label="Color" />);
    const trigger = screen.getByRole('combobox', { name: 'Color' });
    await user.click(trigger);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it('shows the placeholder when nothing is selected', () => {
    render(
      <DropDown
        options={options}
        placeholder="Pick a color"
        aria-label="Color"
      />
    );
    expect(screen.getByRole('combobox', { name: 'Color' })).toHaveTextContent(
      'Pick a color'
    );
  });

  it('reflects the selected option label', () => {
    render(<DropDown options={options} value="green" aria-label="Color" />);
    expect(screen.getByRole('combobox', { name: 'Color' })).toHaveTextContent(
      'Green'
    );
  });

  it('sets aria-invalid only when invalid', () => {
    const { rerender } = render(
      <DropDown options={options} aria-label="Color" />
    );
    expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-invalid');
    rerender(<DropDown options={options} invalid aria-label="Color" />);
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'aria-invalid',
      'true'
    );
    expect(screen.getByRole('combobox').className).toContain('invalid');
  });

  it('never opens when disabled', async () => {
    const user = userEvent.setup();
    render(<DropDown options={options} disabled aria-label="Color" />);
    const trigger = screen.getByRole('combobox', { name: 'Color' });
    expect(trigger).toBeDisabled();
    await user.click(trigger);
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });

  it('skips disabled options and never selects them', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <DropDown
        options={[{ value: 'grey', label: 'Grey', disabled: true }, ...options]}
        onChange={onChange}
        aria-label="Color"
      />
    );
    const trigger = screen.getByRole('combobox', { name: 'Color' });
    await user.click(trigger);
    await user.click(screen.getByRole('option', { name: 'Grey' }));
    expect(onChange).not.toHaveBeenCalled();
    trigger.focus();
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('listbox')).toHaveAttribute(
      'aria-activedescendant',
      screen.getAllByRole('option')[3]!.id
    );
  });

  it('applies size classes', () => {
    const { rerender } = render(
      <DropDown options={options} aria-label="Color" />
    );
    expect(screen.getByRole('combobox').className).toContain('md');
    rerender(<DropDown options={options} size="sm" aria-label="Color" />);
    expect(screen.getByRole('combobox').className).toContain('sm');
  });
});
