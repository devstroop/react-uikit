import { createRef } from 'react';
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
  ] as const)(
    'renders both halves with Button style-%s + %s classes',
    (severity, variant) => {
      render(
        <Splitbutton
          label="Save"
          items={items}
          severity={severity}
          variant={variant}
          shade="darker"
        />
      );
      for (const name of ['Save', 'More actions']) {
        const half = screen.getByRole('button', { name });
        expect(half.className).toContain(`style-${severity}`);
        expect(half.className).toContain(variant);
        expect(half.className).toContain('shade-darker');
        expect(half.className).toContain('dx-ripple');
      }
    }
  );

  it('forwards its ref to the root element', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Splitbutton ref={ref} label="Save" items={items} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('names the action button with aria-label, the caret with openAriaLabel', () => {
    render(
      <Splitbutton
        label="Save"
        items={items}
        aria-label="Save document"
        openAriaLabel="More save options"
      />
    );
    const [action, caret] = screen.getAllByRole('button');
    expect(action).toHaveAccessibleName('Save document');
    expect(caret).toHaveAccessibleName('More save options');
  });

  it('labels the open menu with openAriaLabel', async () => {
    const user = userEvent.setup();
    render(
      <Splitbutton
        label="Save"
        items={items}
        openAriaLabel="More save options"
      />
    );
    await user.click(screen.getByRole('button', { name: 'More save options' }));
    expect(
      screen.getByRole('menu', { name: 'More save options' })
    ).toBeInTheDocument();
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

  it('opens the menu on ArrowUp from the caret', async () => {
    const user = userEvent.setup();
    render(<Splitbutton label="Save" items={items} />);
    screen.getByRole('button', { name: 'More actions' }).focus();
    await user.keyboard('{ArrowUp}');
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toHaveFocus();
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

  it('renders icons on menu items', async () => {
    const user = userEvent.setup();
    render(
      <Splitbutton
        label="Save"
        items={[
          { key: 'copy', label: 'Copy', icon: 'copy' },
          { key: 'download', label: 'Download', icon: 'download' },
        ]}
      />
    );
    await user.click(screen.getByRole('button', { name: 'More actions' }));
    const copy = screen.getByRole('menuitem', { name: 'Copy' });
    expect(copy.textContent).toContain('copy');
    const download = screen.getByRole('menuitem', { name: 'Download' });
    expect(download.textContent).toContain('download');
  });

  it('never opens when disabled', async () => {
    const user = userEvent.setup();
    render(<Splitbutton label="Save" items={items} disabled />);
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'More actions' })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'More actions' }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('marks the action button busy while loading and blocks the menu', async () => {
    const user = userEvent.setup();
    render(<Splitbutton label="Save" items={items} loading />);
    const action = screen.getByRole('button', { name: 'Save' });
    expect(action).toHaveAttribute('aria-busy', 'true');
    expect(action).toBeDisabled();
    expect(screen.getByRole('button', { name: 'More actions' })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'More actions' }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('closes an open menu when loading turns on', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Splitbutton label="Save" items={items} />);
    await user.click(screen.getByRole('button', { name: 'More actions' }));
    expect(screen.getByRole('menu')).toBeInTheDocument();
    rerender(<Splitbutton label="Save" items={items} loading />);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'More actions' })
    ).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes an open menu when visible turns false and does not reopen', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Splitbutton label="Save" items={items} />);
    await user.click(screen.getByRole('button', { name: 'More actions' }));
    rerender(<Splitbutton label="Save" items={items} visible={false} />);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    rerender(<Splitbutton label="Save" items={items} visible />);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'More actions' })
    ).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the menu when the action button is clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Splitbutton label="Save" onClick={onClick} items={items} />);
    await user.click(screen.getByRole('button', { name: 'More actions' }));
    expect(screen.getByRole('menu')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders nothing when visible is false', () => {
    const { container } = render(
      <Splitbutton label="Save" items={items} visible={false} />
    );
    expect(container).toBeEmptyDOMElement();
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

  it('applies size classes to the root and fullWidth to the pair', () => {
    const { rerender } = render(<Splitbutton label="Save" items={items} />);
    expect(
      screen.getByRole('button', { name: 'Save' }).parentElement?.className
    ).toContain('md');
    rerender(<Splitbutton label="Save" items={items} size="sm" fullWidth />);
    const root = screen.getByRole('button', { name: 'Save' }).parentElement;
    expect(root?.className).toContain('sm');
    expect(root?.className).toContain('fullWidth');
  });
});
