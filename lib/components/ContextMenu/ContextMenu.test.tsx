import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import {
  ContextMenuProvider,
  useContextMenu,
  type ContextMenuOpenOptions,
} from './ContextMenu';
import { Menu, MenuItem } from '../Menu/Menu';

function Trigger({ options }: { options?: ContextMenuOpenOptions }) {
  const menu = useContextMenu();
  return (
    <button
      onContextMenu={(e) =>
        menu.open(e, options ?? { items: [{ text: 'Cut' }, { text: 'Copy' }] })
      }
    >
      Right click me
    </button>
  );
}

function Harness({ options }: { options?: ContextMenuOpenOptions }) {
  return (
    <ContextMenuProvider>
      <Trigger options={options} />
    </ContextMenuProvider>
  );
}

function rightClick(target: Element, x = 100, y = 120) {
  // cancelable: jsdom MouseEvent init defaults cancelable:false, which would
  // swallow the preventDefault under test (real browsers cancel contextmenu).
  return fireEvent.contextMenu(target, {
    clientX: x,
    clientY: y,
    button: 2,
    cancelable: true,
  });
}

describe('ContextMenu', () => {
  it('throws outside a provider', () => {
    function Rogue() {
      useContextMenu();
      return null;
    }
    expect(() => render(<Rogue />)).toThrow('ContextMenuProvider');
  });

  it('opens at the cursor on right-click and prevents the native menu', () => {
    render(<Harness />);
    const trigger = screen.getByRole('button', { name: 'Right click me' });
    const notPrevented = rightClick(trigger, 100, 120);
    expect(notPrevented).toBe(false);
    const popup = screen.getByRole('menu', { name: 'Context menu' });
    expect(popup).toBeInTheDocument();
    expect(document.querySelector('[data-dx-contextmenu-popup]')).toHaveStyle({
      left: '100px',
      top: '120px',
    });
  });

  it('renders data items with nesting and disabled state', () => {
    render(
      <Harness
        options={{
          items: [
            {
              text: 'File',
              children: [{ text: 'New' }, { text: 'Open', disabled: true }],
            },
            { text: 'Edit' },
          ],
        }}
      />
    );
    rightClick(screen.getByRole('button', { name: 'Right click me' }));
    expect(screen.getByRole('menuitem', { name: 'File' })).toHaveAttribute(
      'aria-haspopup',
      'menu'
    );
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toBeInTheDocument();
  });

  it('fires onClick with args and stays open for explicit close (Radzen parity)', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    function Controlled() {
      const menu = useContextMenu();
      return (
        <button
          onContextMenu={(e) =>
            menu.open(e, {
              items: [{ text: 'Save', value: 'save' }],
              onClick: (a: { text: string }) => {
                onClick(a);
                menu.close();
              },
            })
          }
        >
          Right click me
        </button>
      );
    }
    render(
      <ContextMenuProvider>
        <Controlled />
      </ContextMenuProvider>
    );
    rightClick(screen.getByRole('button', { name: 'Right click me' }));
    await user.click(screen.getByRole('menuitem', { name: 'Save' }));
    expect(onClick).toHaveBeenCalledWith(
      expect.objectContaining({ text: 'Save', value: 'save' })
    );
    expect(
      screen.queryByRole('menu', { name: 'Context menu' })
    ).not.toBeInTheDocument();
  });

  it('renders custom content mode', () => {
    function Custom() {
      const menu = useContextMenu();
      return (
        <button
          onContextMenu={(e) =>
            menu.open(e, {
              content: (
                <Menu isContextMenu responsive={false} ariaLabel="Custom">
                  <MenuItem text="Item1" />
                  <hr />
                  <MenuItem text="Item2" />
                </Menu>
              ),
            })
          }
        >
          Right click me
        </button>
      );
    }
    render(
      <ContextMenuProvider>
        <Custom />
      </ContextMenuProvider>
    );
    rightClick(screen.getByRole('button', { name: 'Right click me' }));
    expect(screen.getByRole('menuitem', { name: 'Item1' })).toBeInTheDocument();
    expect(document.querySelector('hr')).toBeInTheDocument();
  });

  it('dismisses on Escape and restores focus to the invoker', async () => {
    const user = userEvent.setup();
    render(<Harness />);
    const trigger = screen.getByRole('button', { name: 'Right click me' });
    trigger.focus();
    rightClick(trigger);
    expect(
      screen.getByRole('menu', { name: 'Context menu' })
    ).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(
      screen.queryByRole('menu', { name: 'Context menu' })
    ).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it('dismisses on outside pointerdown', () => {
    render(<Harness />);
    rightClick(screen.getByRole('button', { name: 'Right click me' }));
    expect(
      screen.getByRole('menu', { name: 'Context menu' })
    ).toBeInTheDocument();
    fireEvent.pointerDown(document.body);
    expect(
      screen.queryByRole('menu', { name: 'Context menu' })
    ).not.toBeInTheDocument();
  });

  it('clamps to the viewport near the edge', () => {
    render(<Harness />);
    rightClick(
      screen.getByRole('button', { name: 'Right click me' }),
      5000,
      5000
    );
    const frame = document.querySelector(
      '[data-dx-contextmenu-popup]'
    ) as HTMLElement;
    expect(Number.parseFloat(frame.style.left)).toBeLessThanOrEqual(
      window.innerWidth
    );
    expect(Number.parseFloat(frame.style.top)).toBeLessThanOrEqual(
      window.innerHeight
    );
  });

  it('moves focus into the menu on open', () => {
    render(<Harness />);
    rightClick(screen.getByRole('button', { name: 'Right click me' }));
    expect(screen.getByRole('menuitem', { name: 'Cut' })).toHaveFocus();
  });
});
