import { useState } from 'react';
import {
  Breadcrumb,
  Checkbox,
  ContextMenuProvider,
  Link,
  Menu,
  MenuItem,
  Pager,
  PanelMenu,
  PanelMenuItem,
  ProfileMenu,
  Selectbar,
  Steps,
  Tabs,
  Text,
  Toc,
  useContextMenu,
  type PanelMenuDisplayStyle,
} from '../../lib/main';
import { DemoPage } from './demo-page';
import { EventLog } from './shared/EventLog';
import { KeyboardTable } from './shared/KeyboardTable';

const MENU_EMPTY_LOG = 'Click a menu item to log events.';

function ContextClickArea({ onLog }: { onLog: (msg: string) => void }) {
  const menu = useContextMenu();
  return (
    <div
      onContextMenu={(e) =>
        menu.open(e, {
          ariaLabel: 'Item actions menu',
          items: [
            { text: 'Cut', value: 'cut' },
            { text: 'Copy', value: 'copy' },
            {
              text: 'More',
              value: 'more',
              children: [
                { text: 'Sub action', value: 'sub' },
                { text: 'Disabled', value: 'off', disabled: true },
              ],
            },
          ],
          onClick: (a) => {
            onLog(`${a.text} clicked`);
            menu.close();
          },
        })
      }
      style={{
        border: '1px dashed var(--dx-border-strong-color)',
        borderRadius: 8,
        padding: 24,
        textAlign: 'center',
      }}
    >
      <Text textStyle="Body1">Right-click me</Text>
    </div>
  );
}

function ContextClickDemo() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <ContextMenuProvider>
      <ContextClickArea onLog={(m) => setEvents((prev) => [...prev, m])} />
      <EventLog events={events} emptyText={MENU_EMPTY_LOG} />
    </ContextMenuProvider>
  );
}

function ContextContentArea({ onLog }: { onLog: (msg: string) => void }) {
  const menu = useContextMenu();
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- right-click surface: the native contextmenu gesture is the only input here; the popup itself is fully keyboard-driven
    <div
      onContextMenu={(e) =>
        menu.open(e, {
          ariaLabel: 'Content mode menu',
          content: (
            <>
              <Text textStyle="Caption" className="dx-text-muted">
                Custom popup content (content mode)
              </Text>
              <Menu
                isContextMenu
                responsive={false}
                ariaLabel="Quick actions"
                onClick={(a) => {
                  onLog(`${a.text} clicked from content menu`);
                  menu.close();
                }}
              >
                <MenuItem text="Refresh" icon="refresh" />
                <MenuItem text="Copy link" icon="copy" />
                <MenuItem text="Pin" icon="star" disabled />
              </Menu>
            </>
          ),
        })
      }
      style={{
        border: '1px dashed var(--dx-border-strong-color)',
        borderRadius: 8,
        padding: 24,
        textAlign: 'center',
      }}
    >
      <Text textStyle="Body1">Right-click me for content mode</Text>
    </div>
  );
}

function ContextContentDemo() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <ContextMenuProvider>
      <ContextContentArea onLog={(m) => setEvents((prev) => [...prev, m])} />
      <EventLog events={events} emptyText={MENU_EMPTY_LOG} />
    </ContextMenuProvider>
  );
}

const CONTEXT_MENU_KEYS = [
  {
    keys: 'ArrowDown / ArrowUp',
    action: 'Move focus between items (wraps, skips disabled)',
  },
  { keys: 'ArrowRight', action: 'Open the submenu of the focused item' },
  { keys: 'ArrowLeft', action: 'Close the open submenu' },
  {
    keys: 'Enter / Space',
    action: 'Activate the focused item (the handler closes the popup)',
  },
  {
    keys: 'Escape',
    action: 'Close the popup and restore focus to the right-click target',
  },
] as const;

function ContextMenuDemos() {
  return (
    <DemoPage
      title="ContextMenu"
      description="Cursor-positioned popup from a right-click (Radzen ContextMenuService parity). Items mode renders a nested menu; content mode takes arbitrary popup markup. Focus lands on the first item; Escape or an outside press closes and restores focus to the target — closing is explicit, not automatic."
      sections={[
        {
          id: 'contextmenu-basic',
          title: 'Items mode with events',
          description:
            'Right-click the surface: nested and disabled items come from the items list. The handler runs before the item onClick and must call close() itself.',
          content: <ContextClickDemo />,
        },
        {
          id: 'contextmenu-content',
          title: 'Content mode',
          description:
            'content swaps the default items menu for arbitrary markup — here a caption over a quick-actions menu.',
          content: <ContextContentDemo />,
        },
        {
          id: 'contextmenu-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={CONTEXT_MENU_KEYS} />,
        },
      ]}
    />
  );
}

function MenuDemos() {
  const [events, setEvents] = useState<string[]>([]);
  const [flyout, setFlyout] = useState(false);
  const [clickToOpen, setClickToOpen] = useState(true);
  const logParent = (text: string) =>
    setEvents((prev) => [...prev, `${text} clicked from parent`]);
  const logChild = (text: string) =>
    setEvents((prev) => [...prev, `${text} from child clicked`]);

  return (
    <DemoPage
      title="Menu"
      description="Horizontal menubar with nested submenus. Parent onClick fires before the item onClick; path leaves render anchors that still emit. Submenus are overlay popups — keep them out of overflow-hidden containers."
      sections={[
        {
          id: 'menu-basic',
          title: 'Basic with events',
          cardStyle: { overflow: 'visible' },
          content: (
            <>
              <Menu ariaLabel="Basic menu" onClick={(a) => logParent(a.text)}>
                <MenuItem text="General" icon="home">
                  <MenuItem text="Buttons" path="#/button" icon="plus" />
                  <MenuItem text="Menu" path="#/menu" icon="menu" disabled />
                  <MenuItem
                    text="ChildClick"
                    icon="file"
                    onClick={(a) => logChild(a.text)}
                    disabled
                  />
                  <MenuItem text="Dialog" path="#/dialog" icon="copy" />
                </MenuItem>
                <MenuItem text="Inputs" icon="settings" disabled>
                  <MenuItem text="CheckBox" path="#/checkbox" />
                  <MenuItem text="TextBox" path="#/textbox" />
                </MenuItem>
                <MenuItem text="Data" icon="file">
                  <MenuItem text="DataGrid" path="#/datagrid" />
                  <MenuItem text="DataList" path="#/datalist" />
                </MenuItem>
              </Menu>
              <EventLog events={events} emptyText={MENU_EMPTY_LOG} />
            </>
          ),
        },
        {
          id: 'menu-modes',
          title: 'Open modes',
          description:
            'Flyout cascades nested submenus sideways; click-to-open off opens on hover.',
          cardStyle: { overflow: 'visible' },
          content: (
            <>
              <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                <Checkbox
                  id="menu-flyout"
                  checked={flyout}
                  onChange={(e) => setFlyout(e.target.checked)}
                />
                <label htmlFor="menu-flyout">Flyout nested submenus</label>
                <Checkbox
                  id="menu-click"
                  checked={clickToOpen}
                  onChange={(e) => setClickToOpen(e.target.checked)}
                />
                <label htmlFor="menu-click">Click to open</label>
              </div>
              <Menu
                ariaLabel="Open modes menu"
                flyout={flyout}
                clickToOpen={clickToOpen}
              >
                <MenuItem text="General" icon="home">
                  <MenuItem text="Buttons" path="#/button" />
                  <MenuItem text="Dialog" path="#/dialog" />
                </MenuItem>
                <MenuItem text="Data" icon="file">
                  <MenuItem text="DataGrid" path="#/datagrid" />
                  <MenuItem text="DataList" path="#/datalist" />
                </MenuItem>
              </Menu>
            </>
          ),
        },
        {
          id: 'menu-nesting',
          title: 'Deep nesting',
          cardStyle: { overflow: 'visible' },
          content: (
            <Menu flyout ariaLabel="Deep nesting menu">
              <MenuItem text="More">
                <MenuItem text="Item1" />
                <MenuItem text="Item2" />
                <MenuItem text="More items">
                  <MenuItem text="More sub items">
                    <MenuItem text="Item1" />
                    <MenuItem text="Item2" />
                  </MenuItem>
                </MenuItem>
              </MenuItem>
            </Menu>
          ),
        },
        {
          id: 'menu-context',
          title: 'Context menu',
          description:
            'Vertical popup variant (Radzen IsContextMenu parity). For cursor-positioned right-click popups see the ContextMenu page.',
          content: (
            <Menu isContextMenu ariaLabel="Actions">
              <MenuItem text="Cut" />
              <MenuItem text="Copy" />
              <MenuItem text="Paste" disabled />
            </Menu>
          ),
        },
      ]}
    />
  );
}

function PanelMenuDemos() {
  const [events, setEvents] = useState<string[]>([]);
  const [multiple, setMultiple] = useState(true);
  const [displayStyle, setDisplayStyle] =
    useState<PanelMenuDisplayStyle>('iconAndText');
  const [showArrow, setShowArrow] = useState(true);
  const logParent = (text: string) =>
    setEvents((prev) => [...prev, `${text} clicked from parent`]);
  const logChild = (text: string) =>
    setEvents((prev) => [...prev, `${text} from child clicked`]);

  return (
    <DemoPage
      title="PanelMenu"
      description="Vertical accordion navigation. Parent onClick fires before the item onClick; path leaves render anchors that still emit."
      sections={[
        {
          id: 'panelmenu-basic',
          title: 'Basic with multiple toggle',
          content: (
            <>
              <Checkbox
                id="panelmenu-multiple"
                checked={multiple}
                onChange={(e) => setMultiple(e.target.checked)}
              />
              <label htmlFor="panelmenu-multiple">Allow multiple expand</label>
              <div style={{ width: 300, marginTop: 8 }}>
                <PanelMenu
                  ariaLabel="Panel menu"
                  onClick={(a) => logParent(a.text)}
                  multiple={multiple}
                >
                  <PanelMenuItem text="General" icon="home">
                    <PanelMenuItem text="Buttons" path="#/button" icon="plus" />
                    <PanelMenuItem text="Menu" path="#/menu" icon="menu" />
                    <PanelMenuItem text="Dialog" path="#/dialog" icon="copy" />
                  </PanelMenuItem>
                  <PanelMenuItem text="Inputs" icon="settings">
                    <PanelMenuItem text="CheckBox" path="#/checkbox" />
                    <PanelMenuItem text="TextBox" path="#/textbox" />
                  </PanelMenuItem>
                  <PanelMenuItem text="More">
                    <PanelMenuItem
                      text="Item1"
                      onClick={(a) => logChild(a.text)}
                    />
                    <PanelMenuItem
                      text="Item2"
                      onClick={(a) => logChild(a.text)}
                    />
                    <PanelMenuItem text="More items">
                      <PanelMenuItem text="More sub items">
                        <PanelMenuItem
                          text="Item3"
                          onClick={(a) => logChild(a.text)}
                        />
                        <PanelMenuItem
                          text="Item4"
                          onClick={(a) => logChild(a.text)}
                        />
                      </PanelMenuItem>
                    </PanelMenuItem>
                  </PanelMenuItem>
                  <PanelMenuItem text="Disabled Menu" icon="ban" disabled />
                </PanelMenu>
              </div>
              <EventLog events={events} emptyText={MENU_EMPTY_LOG} />
            </>
          ),
        },
        {
          id: 'panelmenu-display',
          title: 'Display styles',
          description:
            'Icon, icon-and-text, and stacked rail with optional arrow.',
          content: (
            <>
              <div
                style={{
                  display: 'flex',
                  gap: 16,
                  marginBottom: 12,
                  alignItems: 'center',
                }}
              >
                <Selectbar
                  aria-label="Display style"
                  options={[
                    { value: 'icon', label: 'Icon' },
                    { value: 'iconAndText', label: 'Icon and text' },
                    { value: 'stacked', label: 'Stacked' },
                  ]}
                  value={displayStyle}
                  onChange={(v) => {
                    if (typeof v === 'string')
                      setDisplayStyle(v as PanelMenuDisplayStyle);
                  }}
                />
                <Checkbox
                  id="panelmenu-arrow"
                  checked={showArrow}
                  onChange={(e) => setShowArrow(e.target.checked)}
                />
                <label htmlFor="panelmenu-arrow">Show arrow</label>
              </div>
              <div style={{ width: 300 }}>
                <PanelMenu
                  ariaLabel="Panel menu display styles"
                  displayStyle={displayStyle}
                  showArrow={showArrow}
                  multiple={false}
                >
                  <PanelMenuItem text="General" icon="home">
                    <PanelMenuItem text="Buttons" path="#/button" icon="plus" />
                    <PanelMenuItem text="Menu" path="#/menu" icon="menu" />
                  </PanelMenuItem>
                  <PanelMenuItem text="Inputs" icon="settings">
                    <PanelMenuItem text="CheckBox" path="#/checkbox" />
                    <PanelMenuItem text="TextBox" path="#/textbox" />
                  </PanelMenuItem>
                </PanelMenu>
              </div>
            </>
          ),
        },
        {
          id: 'panelmenu-stacked',
          title: 'Stacked rail',
          content: (
            <div style={{ width: '10rem' }}>
              <PanelMenu
                ariaLabel="Stacked panel menu"
                displayStyle="stacked"
                multiple={false}
              >
                <PanelMenuItem
                  text="Resources"
                  icon="folder"
                  path="#/resources"
                />
                <PanelMenuItem text="Console" icon="file" path="#/console" />
                <PanelMenuItem text="Logs" icon="copy" path="#/logs" />
              </PanelMenu>
            </div>
          ),
        },
      ]}
    />
  );
}

export function NavigationDemos({ slug }: { slug: string }) {
  if (slug === 'link') {
    return (
      <DemoPage
        title="Link"
        sections={[
          {
            id: 'link-variants',
            content: (
              <>
                <Text>
                  Read the <Link href="#/link">documentation</Link> first.
                </Text>
                <Text>
                  <Link
                    href="https://example.com"
                    target="_blank"
                    icon="external-link"
                  >
                    External with icon
                  </Link>
                </Text>
                <Text>
                  <Link
                    onClick={() => undefined}
                    aria-expanded={false}
                    aria-label="Disclosure action without navigation"
                  >
                    Action styled as link
                  </Link>
                </Text>
              </>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'menu') {
    return <MenuDemos />;
  }
  if (slug === 'contextmenu') {
    return <ContextMenuDemos />;
  }
  if (slug === 'panelmenu') {
    return <PanelMenuDemos />;
  }
  if (slug === 'profilemenu') {
    return (
      <DemoPage
        title="ProfileMenu"
        sections={[
          {
            id: 'profilemenu-basic',
            content: (
              <ProfileMenu
                trigger={<span>Profile</span>}
                items={[{ text: 'Settings', path: '/settings' }]}
              />
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'tabs') {
    return (
      <DemoPage
        title="Tabs"
        sections={[
          {
            id: 'tabs-basic',
            content: (
              <Tabs
                items={[
                  { key: 'a', label: 'First', content: <Text>First tab</Text> },
                  {
                    key: 'b',
                    label: 'Second',
                    content: <Text>Second tab</Text>,
                  },
                ]}
              />
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'steps') {
    return (
      <DemoPage
        title="Steps"
        sections={[
          {
            id: 'steps-basic',
            content: (
              <Steps
                items={[{ text: 'One' }, { text: 'Two' }, { text: 'Three' }]}
                defaultIndex={1}
              />
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'toc') {
    return (
      <DemoPage
        title="Toc"
        description="Auto table of contents with scroll-spy and smooth scroll."
        sections={[
          {
            id: 'toc-basic',
            content: <Toc items={[{ text: 'Top', selector: '#top' }]} />,
          },
        ]}
      />
    );
  }
  if (slug === 'pager') {
    return (
      <DemoPage
        title="Pager"
        sections={[
          {
            id: 'pager-basic',
            content: <Pager count={100} pageSize={10} defaultPage={2} />,
          },
        ]}
      />
    );
  }
  return (
    <DemoPage
      title="Breadcrumb"
      sections={[
        {
          id: 'breadcrumb-basic',
          content: (
            <Breadcrumb
              items={[
                { text: 'Home', path: '/' },
                { text: 'Library', path: '/lib' },
                { text: 'Current' },
              ]}
            />
          ),
        },
      ]}
    />
  );
}
