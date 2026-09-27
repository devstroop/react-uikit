import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { PanelMenu, PanelMenuItem } from './PanelMenu';

function BasicPanel(props?: { onClick?: (args: { text: string }) => void; multiple?: boolean }) {
  return (
    <PanelMenu onClick={props?.onClick} multiple={props?.multiple}>
      <PanelMenuItem text="Dashboard" icon="home" value="dash" />
      <PanelMenuItem text="Settings" icon="settings">
        <PanelMenuItem text="Profile" value="profile" />
        <PanelMenuItem text="Security" value="security" disabled />
        <PanelMenuItem text="More">
          <PanelMenuItem text="Deep" />
        </PanelMenuItem>
      </PanelMenuItem>
      <PanelMenuItem text="DisabledRoot" disabled>
        <PanelMenuItem text="Child" />
      </PanelMenuItem>
    </PanelMenu>
  );
}

beforeEach(() => {
  window.location.hash = '';
});

describe('PanelMenu', () => {
  it('renders nav landmark with ariaLabel', () => {
    render(<BasicPanel />);
    expect(screen.getByRole('navigation', { name: 'Panel menu' })).toBeInTheDocument();
  });

  it('renders top-level triggers with aria-expanded false initially', () => {
    render(<BasicPanel />);
    const settings = screen.getByRole('button', { name: /Settings/ });
    expect(settings).toHaveAttribute('aria-expanded', 'false');
    expect(settings).toHaveAttribute('aria-controls');
  });

  it('expands submenu on click and shows children', async () => {
    const user = userEvent.setup();
    render(<BasicPanel />);
    const settings = screen.getByRole('button', { name: /Settings/ });
    await user.click(settings);
    expect(settings).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('collapses on second click', async () => {
    const user = userEvent.setup();
    render(<BasicPanel />);
    const settings = screen.getByRole('button', { name: /Settings/ });
    await user.click(settings);
    await user.click(settings);
    expect(settings).toHaveAttribute('aria-expanded', 'false');
  });

  it('only one expanded when multiple is false', async () => {
    const user = userEvent.setup();
    render(
      <PanelMenu multiple={false}>
        <PanelMenuItem text="A">
          <PanelMenuItem text="a1" />
        </PanelMenuItem>
        <PanelMenuItem text="B">
          <PanelMenuItem text="b1" />
        </PanelMenuItem>
      </PanelMenu>
    );
    const a = screen.getByRole('button', { name: 'A' });
    const b = screen.getByRole('button', { name: 'B' });
    await user.click(a);
    expect(a).toHaveAttribute('aria-expanded', 'true');
    await user.click(b);
    expect(a).toHaveAttribute('aria-expanded', 'false');
    expect(b).toHaveAttribute('aria-expanded', 'true');
  });

  it('allows multiple expanded by default (multiple true)', async () => {
    const user = userEvent.setup();
    render(
      <PanelMenu>
        <PanelMenuItem text="A">
          <PanelMenuItem text="a1" />
        </PanelMenuItem>
        <PanelMenuItem text="B">
          <PanelMenuItem text="b1" />
        </PanelMenuItem>
      </PanelMenu>
    );
    await user.click(screen.getByRole('button', { name: 'A' }));
    await user.click(screen.getByRole('button', { name: 'B' }));
    expect(screen.getByRole('button', { name: 'A' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: 'B' })).toHaveAttribute('aria-expanded', 'true');
  });

  it('fires parent onClick before the item onClick for leaf items', async () => {
    const user = userEvent.setup();
    const order: string[] = [];
    render(
      <PanelMenu onClick={() => order.push('parent')}>
        <PanelMenuItem text="Settings">
          <PanelMenuItem text="Profile" value="profile" onClick={() => order.push('child')} />
        </PanelMenuItem>
      </PanelMenu>
    );
    await user.click(screen.getByRole('button', { name: /Settings/ }));
    await user.click(screen.getByText('Profile'));
    expect(order).toEqual(['parent', 'child']);
  });

  it('fires onClick with value and path', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<BasicPanel onClick={onClick} />);
    await user.click(screen.getByRole('button', { name: /Settings/ }));
    await user.click(screen.getByText('Profile'));
    expect(onClick).toHaveBeenCalledWith(expect.objectContaining({ text: 'Profile', value: 'profile' }));
  });

  it('does not fire for disabled leaf', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<BasicPanel onClick={onClick} />);
    await user.click(screen.getByRole('button', { name: /Settings/ }));
    await user.click(screen.getByText('Security'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('disabled root is aria-disabled and not expandable', async () => {
    const user = userEvent.setup();
    render(<BasicPanel />);
    const disabled = screen.getByRole('button', { name: /DisabledRoot/ });
    expect(disabled).toHaveAttribute('aria-disabled', 'true');
    expect(disabled).toBeDisabled();
    await user.click(disabled);
    expect(disabled).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders path leaves as anchors with href and target', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <PanelMenu onClick={onClick}>
        <PanelMenuItem text="Buttons" path="#/buttons" icon="home" target="_blank" />
      </PanelMenu>
    );
    const link = screen.getByRole('link', { name: /Buttons/ });
    expect(link).toHaveAttribute('href', '#/buttons');
    expect(link).toHaveAttribute('target', '_blank');
    // Anchor+emit: the click still emits (jsdom does not perform navigation).
    await user.click(link);
    expect(onClick).toHaveBeenCalledWith(expect.objectContaining({ text: 'Buttons', path: '#/buttons' }));
  });

  it('returning false from onClick cancels anchor navigation', () => {
    render(
      <PanelMenu onClick={() => false}>
        <PanelMenuItem text="Buttons" path="#/buttons" />
      </PanelMenu>
    );
    // fireEvent returns false when the event was default-prevented.
    expect(fireEvent.click(screen.getByRole('link', { name: /Buttons/ }))).toBe(false);
  });

  it('syncs Selected from the URL and marks aria-current', () => {
    window.location.hash = '#/buttons';
    render(
      <PanelMenu>
        <PanelMenuItem text="Buttons" path="#/buttons" />
        <PanelMenuItem text="Other" path="#/other" />
      </PanelMenu>
    );
    expect(screen.getByRole('link', { name: /Buttons/ })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: /Other/ })).not.toHaveAttribute('aria-current');
  });

  it('expands ancestors of a URL-selected deep item', () => {
    window.location.hash = '#/deep';
    render(
      <PanelMenu>
        <PanelMenuItem text="Settings">
          <PanelMenuItem text="More">
            <PanelMenuItem text="Deep" path="#/deep" />
          </PanelMenuItem>
        </PanelMenuItem>
      </PanelMenu>
    );
    expect(screen.getByRole('button', { name: /Settings/ })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('link', { name: 'Deep' })).toBeInTheDocument();
  });

  it('supports controlled expanded with onExpandedChange (bind-Expanded parity)', async () => {
    const user = userEvent.setup();
    const onExpandedChange = vi.fn();
    function Controlled() {
      const [expanded, setExpanded] = useState(false);
      return (
        <PanelMenu>
          <PanelMenuItem
            text="Settings"
            expanded={expanded}
            onExpandedChange={(v) => { onExpandedChange(v); setExpanded(v); }}
          >
            <PanelMenuItem text="Profile" />
          </PanelMenuItem>
        </PanelMenu>
      );
    }
    render(<Controlled />);
    await user.click(screen.getByRole('button', { name: /Settings/ }));
    expect(onExpandedChange).toHaveBeenCalledWith(true);
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('supports model-driven lists with per-item expanded state', async () => {
    const user = userEvent.setup();
    const data = [
      { text: 'Menu0', items: ['Sub00', 'Sub01'] },
      { text: 'Menu1', items: ['Sub10'] },
    ];
    function ModelDriven() {
      const [expanded, setExpanded] = useState<boolean[]>([true, false]);
      return (
        <PanelMenu multiple={false}>
          {data.map((m, i) => (
            <PanelMenuItem
              key={m.text}
              text={m.text}
              expanded={expanded[i]}
              onExpandedChange={(v) => setExpanded((prev) => prev.map((e, j) => (j === i ? v : e)))}
            >
              {m.items.map((s) => (
                <PanelMenuItem key={s} text={s} />
              ))}
            </PanelMenuItem>
          ))}
        </PanelMenu>
      );
    }
    render(<ModelDriven />);
    expect(screen.getByText('Sub00')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Menu1' }));
    expect(screen.getByText('Sub10')).toBeInTheDocument();
  });

  it('renderMode server omits collapsed branches; client keeps them hidden', async () => {
    const user = userEvent.setup();
    const { unmount } = render(
      <PanelMenu renderMode="server">
        <PanelMenuItem text="Settings">
          <PanelMenuItem text="Profile" />
        </PanelMenuItem>
      </PanelMenu>
    );
    expect(screen.queryByText('Profile')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Settings/ }));
    expect(screen.getByText('Profile')).toBeInTheDocument();
    unmount();

    render(
      <PanelMenu renderMode="client">
        <PanelMenuItem text="Settings">
          <PanelMenuItem text="Profile" />
        </PanelMenuItem>
      </PanelMenu>
    );
    const profile = screen.getByText('Profile');
    expect(profile.closest('[role="menu"]')).toHaveAttribute('hidden');
  });

  it('showArrow false hides caret', () => {
    render(
      <PanelMenu showArrow={false}>
        <PanelMenuItem text="Settings">
          <PanelMenuItem text="Profile" />
        </PanelMenuItem>
      </PanelMenu>
    );
    expect(screen.getByRole('button', { name: /Settings/ }).querySelector('svg')).not.toBeInTheDocument();
  });

  it('showArrow true shows caret', () => {
    render(<BasicPanel />);
    expect(screen.getByRole('button', { name: /Settings/ }).querySelector('svg')).toBeInTheDocument();
  });

  it('displayStyle icon and stacked apply layout classes', () => {
    const { container, rerender } = render(
      <PanelMenu displayStyle="icon">
        <PanelMenuItem text="Dashboard" icon="home" />
      </PanelMenu>
    );
    expect((container.firstChild as Element).className).toMatch(/iconOnly/);
    rerender(
      <PanelMenu displayStyle="stacked">
        <PanelMenuItem text="Dashboard" icon="home" />
      </PanelMenu>
    );
    expect((container.firstChild as Element).className).toMatch(/stacked/);
  });

  it('sets the level indent var on nested items', async () => {
    const user = userEvent.setup();
    render(<BasicPanel />);
    await user.click(screen.getByRole('button', { name: /Settings/ }));
    const profile = screen.getByText('Profile').closest('[data-dx-panelmenu-item]');
    expect(profile).toHaveAttribute('data-level', '1');
    expect(profile?.getAttribute('style')).toContain('--dx-panelmenu-level');
  });

  it('keyboard Enter toggles expand', async () => {
    const user = userEvent.setup();
    render(<BasicPanel />);
    const settings = screen.getByRole('button', { name: /Settings/ });
    settings.focus();
    await user.keyboard('{Enter}');
    expect(settings).toHaveAttribute('aria-expanded', 'true');
    await user.keyboard('{Enter}');
    expect(settings).toHaveAttribute('aria-expanded', 'false');
  });

  it('keyboard Space activates leaf', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <PanelMenu onClick={onClick}>
        <PanelMenuItem text="Leaf" />
      </PanelMenu>
    );
    screen.getByRole('button', { name: 'Leaf' }).focus();
    await user.keyboard(' ');
    expect(onClick).toHaveBeenCalledWith(expect.objectContaining({ text: 'Leaf' }));
  });

  it('keyboard ArrowDown/Up/Home/End moves focus', async () => {
    const user = userEvent.setup();
    render(
      <PanelMenu>
        <PanelMenuItem text="A" />
        <PanelMenuItem text="B" />
        <PanelMenuItem text="C">
          <PanelMenuItem text="c1" />
        </PanelMenuItem>
      </PanelMenu>
    );
    const a = screen.getByRole('button', { name: 'A' });
    a.focus();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('button', { name: 'B' })).toHaveFocus();
    await user.keyboard('{End}');
    expect(screen.getByRole('button', { name: 'C' })).toHaveFocus();
    await user.keyboard('{Home}');
    expect(a).toHaveFocus();
  });

  it('keyboard ArrowRight expands, ArrowLeft collapses, Escape collapses', async () => {
    const user = userEvent.setup();
    render(<BasicPanel />);
    const settings = screen.getByRole('button', { name: /Settings/ });
    settings.focus();
    await user.keyboard('{ArrowRight}');
    expect(settings).toHaveAttribute('aria-expanded', 'true');
    await user.keyboard('{ArrowLeft}');
    expect(settings).toHaveAttribute('aria-expanded', 'false');
    await user.keyboard('{ArrowRight}');
    settings.focus();
    await user.keyboard('{Escape}');
    expect(settings).toHaveAttribute('aria-expanded', 'false');
  });

  it('Escape collapses expanded panel', async () => {
    const user = userEvent.setup();
    render(<BasicPanel />);
    const settings = screen.getByRole('button', { name: /Settings/ });
    await user.click(settings);
    settings.focus();
    await user.keyboard('{Escape}');
    expect(settings).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders nested children toggle', async () => {
    const user = userEvent.setup();
    render(<BasicPanel />);
    await user.click(screen.getByRole('button', { name: /Settings/ }));
    await user.click(screen.getByRole('button', { name: 'More' }));
    expect(screen.getByText('Deep')).toBeInTheDocument();
  });

  it('renders icon, image and template', () => {
    const { container } = render(
      <PanelMenu>
        <PanelMenuItem text="Dashboard" icon="home" iconColor="#00ff00" />
        <PanelMenuItem text="Pic" image="/pic.png" />
        <PanelMenuItem text="Custom" template={<span data-testid="ptpl">P</span>} />
      </PanelMenu>
    );
    expect(screen.getByTestId('ptpl')).toBeInTheDocument();
    expect(container.querySelector('img[src="/pic.png"]')).toBeInTheDocument();
    const dash = screen.getByRole('button', { name: /Dashboard/ });
    expect(dash.querySelector('svg')).toBeInTheDocument();
    expect(dash.querySelector('[aria-hidden="true"]')).toHaveStyle({ color: '#00ff00' });
  });

  it('forwards rest props (style, mouse handlers) to the nav element', () => {
    const onMouseOver = vi.fn();
    render(
      <PanelMenu data-testid="pm" style={{ width: 300 }} onMouseOver={onMouseOver}>
        <PanelMenuItem text="A" />
      </PanelMenu>
    );
    const nav = screen.getByTestId('pm');
    expect(nav).toHaveStyle({ width: '300px' });
    fireEvent.mouseOver(nav);
    expect(onMouseOver).toHaveBeenCalled();
  });
});
