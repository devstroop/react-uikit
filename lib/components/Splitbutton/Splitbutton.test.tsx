import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Splitbutton } from './Splitbutton';

const items = [
  { key: 'edit', label: 'Edit' },
  { key: 'duplicate', label: 'Duplicate' },
  { key: 'delete', label: 'Delete', danger: true },
];

describe('Splitbutton', () => {
  it('renders a primary button and a caret', () => {
    render(<Splitbutton label="Save" items={items} />);
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    const caret = screen.getByRole('button', { name: 'More actions' });
    expect(caret).toHaveAttribute('aria-haspopup', 'menu');
    expect(caret).toHaveAttribute('aria-expanded', 'false');
  });

  it.each([
    ['primary', 'filled'],
    ['danger', 'outlined'],
    ['success', 'flat'],
    ['info', 'text'],
  ] as const)('applies style-%s + %s classes', (severity, variant) => {
    render(
      <Splitbutton
        label="Save"
        items={items}
        severity={severity}
        variant={variant}
      />
    );
    const root = screen.getByRole('button', { name: 'Save' }).parentElement;
    expect(root?.className).toContain(`style-${severity}`);
    expect(root?.className).toContain(variant);
  });

  it('moves focus into the menu on open (items carry real focus)', async () => {
    const user = userEvent.setup();
    render(<Splitbutton label="Save" items={items} />);
    await user.click(screen.getByRole('button', { name: 'More actions' }));
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toHaveFocus();
  });

  it('opens the menu on caret click', async () => {
    const user = userEvent.setup();
    render(<Splitbutton label="Save" items={items} />);
    await user.click(screen.getByRole('button', { name: 'More actions' }));
    expect(
      screen.getByRole('button', { name: 'More actions' })
    ).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getAllByRole('menuitem')).toHaveLength(3);
  });

  it('fires the primary action and never opens the menu', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Splitbutton label="Save" onClick={onClick} items={items} />);
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('activates a menu item and closes', async () => {
    const user = userEvent.setup();
    const onEdit = vi.fn();
    const menuItems = [
      { key: 'edit', label: 'Edit', onClick: onEdit },
      { key: 'duplicate', label: 'Duplicate' },
      { key: 'delete', label: 'Delete', danger: true },
    ];
    render(<Splitbutton label="Save" items={menuItems} />);
    await user.click(screen.getByRole('button', { name: 'More actions' }));
    await user.click(screen.getByRole('menuitem', { name: 'Edit' }));
    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('navigates the menu with the keyboard', async () => {
    const user = userEvent.setup();
    const onEdit = vi.fn();
    const menuItems = [
      { key: 'edit', label: 'Edit', onClick: onEdit },
      { key: 'duplicate', label: 'Duplicate' },
      { key: 'delete', label: 'Delete', danger: true },
    ];
    render(<Splitbutton label="Save" items={menuItems} />);
    const caret = screen.getByRole('button', { name: 'More actions' });
    caret.focus();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('menuitem', { name: 'Duplicate' })).toHaveFocus();
    await user.keyboard('{ArrowUp}');
    await user.keyboard('{Enter}');
    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('closes on Escape and restores focus', async () => {
    const user = userEvent.setup();
    render(<Splitbutton label="Save" items={items} />);
    const caret = screen.getByRole('button', { name: 'More actions' });
    await user.click(caret);
    expect(screen.getByRole('menu')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(caret).toHaveFocus();
  });

  it('skips disabled items', async () => {
    const user = userEvent.setup();
    const menuItems = [
      { key: 'print', label: 'Print', disabled: true },
      { key: 'edit', label: 'Edit' },
      { key: 'duplicate', label: 'Duplicate' },
    ];
    render(<Splitbutton label="Save" items={menuItems} />);
    const caret = screen.getByRole('button', { name: 'More actions' });
    caret.focus();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toHaveFocus();
    expect(screen.getByRole('menuitem', { name: 'Print' })).toBeDisabled();
  });

  it('never opens when disabled', async () => {
    const user = userEvent.setup();
    render(<Splitbutton label="Save" items={items} disabled />);
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'More actions' })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'More actions' }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('marks danger items', async () => {
    const user = userEvent.setup();
    render(<Splitbutton label="Save" items={items} />);
    await user.click(screen.getByRole('button', { name: 'More actions' }));
    expect(
      screen.getByRole('menuitem', { name: 'Delete' }).className
    ).toContain('danger');
    expect(
      screen.getByRole('menuitem', { name: 'Edit' }).className
    ).not.toContain('danger');
  });

  it('applies size classes', () => {
    const { rerender } = render(<Splitbutton label="Save" items={items} />);
    expect(
      screen.getByRole('button', { name: 'Save' }).parentElement?.className
    ).toContain('md');
    rerender(<Splitbutton label="Save" items={items} size="sm" />);
    expect(
      screen.getByRole('button', { name: 'Save' }).parentElement?.className
    ).toContain('sm');
  });
});
