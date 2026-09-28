import { fireEvent, render, screen, within } from '@testing-library/react';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { Menu, MenuItem } from './Menu';

function BasicMenu(props?: { onClick?: (args: { text: string }) => void }) {
  return (
    <Menu onClick={props?.onClick} ariaLabel="Main menu">
      <MenuItem text="Home" value="home" path="#/home" />
      <MenuItem text="Products" value="products">
        <MenuItem text="A" />
        <MenuItem text="B" disabled />
      </MenuItem>
      <MenuItem text="About" value="about" disabled />
    </Menu>
  );
}

beforeEach(() => {
  window.location.hash = '';
});

describe('Menu', () => {
  it('renders nav landmark with ariaLabel and menubar role', () => {
    render(<BasicMenu />);
    expect(
      screen.getByRole('navigation', { name: 'Main menu' })
    ).toBeInTheDocument();
    expect(screen.getByRole('menubar')).toBeInTheDocument();
  });

  it('defaults ariaLabel to Menu', () => {
    render(
      <Menu>
        <MenuItem text="Home" />
      </Menu>
    );
    expect(
      screen.getByRole('navigation', { name: 'Menu' })
    ).toBeInTheDocument();
  });

  it('renders as a vertical context menu with isContextMenu', () => {
    render(
      <Menu isContextMenu ariaLabel="Ctx">
        <MenuItem text="Cut" />
      </Menu>
    );
    expect(screen.getByRole('menu', { name: 'Ctx' })).toBeInTheDocument();
    expect(screen.queryByRole('menubar')).not.toBeInTheDocument();
  });

  it('renders all top-level items with menuitem role', () => {
    render(<BasicMenu />);
    const menuitems = screen.getAllByRole('menuitem');
    expect(menuitems.map((el) => el.textContent)).toEqual(
      expect.arrayContaining([
        expect.stringContaining('Home'),
        expect.stringContaining('Products'),
        expect.stringContaining('About'),
      ])
    );
  });

  it('marks disabled items with aria-disabled and disables button', () => {
    render(<BasicMenu />);
    const about = screen.getByRole('menuitem', { name: /About/ });
    expect(about).toHaveAttribute('aria-disabled', 'true');
    expect(about).toBeDisabled();
  });

  it('fires parent onClick with MenuItemEventArgs for leaf click', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<BasicMenu onClick={onClick} />);
    await user.click(screen.getByRole('menuitem', { name: /Home/ }));
    expect(onClick).toHaveBeenCalledWith({
      text: 'Home',
      value: 'home',
      path: '#/home',
    });
  });

  it('fires parent onClick before the item onClick', async () => {
    const user = userEvent.setup();
    const order: string[] = [];
    render(
      <Menu onClick={() => order.push('parent')}>
        <MenuItem text="Leaf" onClick={() => order.push('child')} />
      </Menu>
    );
    await user.click(screen.getByRole('menuitem', { name: 'Leaf' }));
    expect(order).toEqual(['parent', 'child']);
  });

  it('does not fire onClick for disabled item', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<BasicMenu onClick={onClick} />);
    await user.click(screen.getByRole('menuitem', { name: /About/ }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('toggles submenu on click and sets aria-expanded', async () => {
    const user = userEvent.setup();
    render(<BasicMenu />);
    const products = screen.getByRole('menuitem', { name: /Products/ });
    expect(products).toHaveAttribute('aria-haspopup', 'menu');
    expect(products).toHaveAttribute('aria-expanded', 'false');
    await user.click(products);
    expect(products).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('menu', { name: 'Products' })).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
    await user.click(products);
    expect(products).toHaveAttribute('aria-expanded', 'false');
    expect(
      screen.queryByRole('menu', { name: 'Products' })
    ).not.toBeInTheDocument();
  });

  it('opens submenu on hover when clickToOpen is false', () => {
    render(
      <Menu clickToOpen={false}>
        <MenuItem text="Products">
          <MenuItem text="A" />
        </MenuItem>
      </Menu>
    );
    const products = screen.getByRole('menuitem', { name: /Products/ });
    fireEvent.mouseEnter(products.closest('div')!);
    expect(products).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('menu', { name: 'Products' })).toBeInTheDocument();
  });

  it('does not open submenu on hover by default (clickToOpen)', () => {
    render(<BasicMenu />);
    const products = screen.getByRole('menuitem', { name: /Products/ });
    fireEvent.mouseEnter(products.closest('div')!);
    expect(products).toHaveAttribute('aria-expanded', 'false');
  });

  it('keeps a hover-opened submenu open when its trigger is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Menu clickToOpen={false}>
        <MenuItem text="Products">
          <MenuItem text="A" />
        </MenuItem>
      </Menu>
    );
    const products = screen.getByRole('menuitem', { name: /Products/ });
    fireEvent.mouseEnter(products.closest('div')!);
    expect(products).toHaveAttribute('aria-expanded', 'true');
    // In hover mode clicking the open trigger is a no-op (hover intent wins).
    await user.click(products);
    expect(products).toHaveAttribute('aria-expanded', 'true');
  });

  it('fires onClick for submenu leaf and skips disabled child', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<BasicMenu onClick={onClick} />);
    await user.click(screen.getByRole('menuitem', { name: /Products/ }));
    const a = await screen.findByRole('menuitem', { name: 'A' });
    const b = screen.getByRole('menuitem', { name: 'B' });
    expect(b).toHaveAttribute('aria-disabled', 'true');
    fireEvent.click(a);
    expect(onClick).toHaveBeenCalledWith(
      expect.objectContaining({ text: 'A' })
    );
    await user.click(screen.getByRole('menuitem', { name: /Products/ }));
    fireEvent.click(await screen.findByRole('menuitem', { name: 'B' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders three-level nesting with flyout cascade class', async () => {
    const user = userEvent.setup();
    render(
      <Menu flyout>
        <MenuItem text="More">
          <MenuItem text="More items">
            <MenuItem text="More sub items">
              <MenuItem text="Item1" />
            </MenuItem>
          </MenuItem>
        </MenuItem>
      </Menu>
    );
    await user.click(screen.getByRole('menuitem', { name: 'More' }));
    const submenu = screen.getByRole('menu', { name: 'More' });
    await user.click(
      within(submenu).getByRole('menuitem', { name: 'More items' })
    );
    const nested = screen.getByRole('menu', { name: 'More items' });
    expect(nested.className).toMatch(/flyout/);
    await user.click(
      within(nested).getByRole('menuitem', { name: 'More sub items' })
    );
    expect(
      screen.getByRole('menu', { name: 'More sub items' })
    ).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Item1' })).toBeInTheDocument();
  });

  it('supports controlled open with onOpenChange', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    function Controlled() {
      const [open, setOpen] = useState(false);
      return (
        <Menu>
          <MenuItem
            text="Products"
            open={open}
            onOpenChange={(v) => {
              onOpenChange(v);
              setOpen(v);
            }}
          >
            <MenuItem text="A" />
          </MenuItem>
        </Menu>
      );
    }
    render(<Controlled />);
    await user.click(screen.getByRole('menuitem', { name: /Products/ }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(screen.getByRole('menu', { name: 'Products' })).toBeInTheDocument();
  });

  it('renders path leaves as anchors with href and target', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Menu onClick={onClick}>
        <MenuItem text="Buttons" path="#/buttons" target="_blank" />
        <MenuItem text="NoPath" />
      </Menu>
    );
    const link = screen.getByRole('menuitem', { name: 'Buttons' });
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '#/buttons');
    expect(link).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('menuitem', { name: 'NoPath' }).tagName).toBe(
      'BUTTON'
    );
    // Anchor+emit: the click still emits (jsdom does not perform navigation).
    await user.click(link);
    expect(onClick).toHaveBeenCalledWith(
      expect.objectContaining({ text: 'Buttons', path: '#/buttons' })
    );
  });

  it('returning false from onClick cancels anchor navigation', () => {
    render(
      <Menu onClick={() => false}>
        <MenuItem text="Buttons" path="#/buttons" />
      </Menu>
    );
    // fireEvent returns false when the event was default-prevented.
    expect(
      fireEvent.click(screen.getByRole('menuitem', { name: 'Buttons' }))
    ).toBe(false);
  });

  it('marks aria-current when the hash matches path', () => {
    window.location.hash = '#/buttons';
    render(
      <Menu>
        <MenuItem text="Buttons" path="#/buttons" />
        <MenuItem text="Other" path="#/other" />
      </Menu>
    );
    expect(screen.getByRole('menuitem', { name: 'Buttons' })).toHaveAttribute(
      'aria-current',
      'page'
    );
    expect(screen.getByRole('menuitem', { name: 'Other' })).not.toHaveAttribute(
      'aria-current'
    );
  });

  it('renders icon, iconColor, image and template', () => {
    const { container } = render(
      <Menu>
        <MenuItem text="Home" icon="home" iconColor="#ff0000" />
        <MenuItem text="Pic" image="/pic.png" />
        <MenuItem text="Custom" template={<span data-testid="tpl">Tpl</span>} />
      </Menu>
    );
    expect(screen.getByTestId('tpl')).toBeInTheDocument();
    expect(container.querySelector('img[src="/pic.png"]')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
    const iconWrap = screen
      .getByRole('menuitem', { name: /Home/ })
      .querySelector('[aria-hidden="true"]');
    expect(iconWrap).toHaveStyle({ color: '#ff0000' });
  });

  it('shows a hamburger toggle when responsive', async () => {
    const user = userEvent.setup();
    render(
      <Menu responsive>
        <MenuItem text="Home" />
      </Menu>
    );
    const toggle = screen.getByRole('button', { name: 'Toggle menu' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
  });

  it('handles ArrowRight/Left keyboard navigation between top items', async () => {
    const user = userEvent.setup();
    render(<BasicMenu />);
    const home = screen.getByRole('menuitem', { name: /Home/ });
    const products = screen.getByRole('menuitem', { name: /Products/ });
    home.focus();
    await user.keyboard('{ArrowRight}');
    expect(products).toHaveFocus();
    await user.keyboard('{ArrowLeft}');
    expect(home).toHaveFocus();
  });

  it('opens submenu with ArrowDown and focuses first child', async () => {
    const user = userEvent.setup();
    render(<BasicMenu />);
    const products = screen.getByRole('menuitem', { name: /Products/ });
    products.focus();
    await user.keyboard('{ArrowDown}');
    expect(products).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('menuitem', { name: 'A' })).toHaveFocus();
  });

  it('closes submenu with Escape, returns focus and fires onClose', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Menu onClose={onClose}>
        <MenuItem text="Products">
          <MenuItem text="A" />
        </MenuItem>
      </Menu>
    );
    const products = screen.getByRole('menuitem', { name: /Products/ });
    await user.click(products);
    await user.keyboard('{Escape}');
    expect(
      screen.queryByRole('menu', { name: 'Products' })
    ).not.toBeInTheDocument();
    expect(products).toHaveFocus();
    expect(onClose).toHaveBeenCalled();
  });

  it('navigates submenu with ArrowDown/Up', async () => {
    const user = userEvent.setup();
    render(
      <Menu>
        <MenuItem text="Parent">
          <MenuItem text="One" />
          <MenuItem text="Two" />
        </MenuItem>
      </Menu>
    );
    await user.click(screen.getByRole('menuitem', { name: /Parent/ }));
    const one = screen.getByRole('menuitem', { name: 'One' });
    const two = screen.getByRole('menuitem', { name: 'Two' });
    one.focus();
    await user.keyboard('{ArrowDown}');
    expect(two).toHaveFocus();
    await user.keyboard('{ArrowUp}');
    expect(one).toHaveFocus();
  });

  it('typeahead focuses matching top-level item', async () => {
    const user = userEvent.setup();
    render(<BasicMenu />);
    screen.getByRole('menuitem', { name: /Home/ }).focus();
    await user.keyboard('p');
    expect(screen.getByRole('menuitem', { name: /Products/ })).toHaveFocus();
  });

  it('closes submenu on outside click', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <BasicMenu />
        <button>outside</button>
      </div>
    );
    await user.click(screen.getByRole('menuitem', { name: /Products/ }));
    expect(screen.getByRole('menu', { name: 'Products' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'outside' }));
    expect(
      screen.queryByRole('menu', { name: 'Products' })
    ).not.toBeInTheDocument();
  });

  it('renders non-item children (separators) verbatim', () => {
    render(
      <Menu>
        <MenuItem text="One" />
        <hr data-testid="sep" />
        <MenuItem text="Two" />
      </Menu>
    );
    expect(screen.getByTestId('sep').tagName).toBe('HR');
    expect(screen.getByRole('menuitem', { name: 'One' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Two' })).toBeInTheDocument();
  });

  it('forwards rest props to the nav element', () => {
    const onMouseOver = vi.fn();
    render(
      <Menu data-testid="m" onMouseOver={onMouseOver}>
        <MenuItem text="Home" />
      </Menu>
    );
    const nav = screen.getByTestId('m');
    expect(nav.tagName).toBe('NAV');
    fireEvent.mouseOver(nav);
    expect(onMouseOver).toHaveBeenCalled();
  });
});
