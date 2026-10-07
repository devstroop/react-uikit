import { useState } from 'react';
import {
  Breadcrumb,
  Button,
  CheckBox,
  ContextMenuProvider,
  Link,
  Menu,
  MenuItem,
  Pager,
  PanelMenu,
  PanelMenuItem,
  ProfileMenu,
  Row,
  SelectBar,
  Stack,
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
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- demo surface for right-click; the menu opens from the browser contextmenu event
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
        border: 'var(--dx-border-width) dashed var(--dx-border-strong-color)',
        borderRadius: 8,
        padding: 24,
        textAlign: 'center',
      }}
    >
      <Text textStyle="body1">Right-click me</Text>
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
              <Text textStyle="caption" className="dx-text-muted">
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
                <MenuItem text="Copy link" icon="content_copy" />
                <MenuItem text="Pin" icon="star" disabled />
              </Menu>
            </>
          ),
        })
      }
      style={{
        border: 'var(--dx-border-width) dashed var(--dx-border-strong-color)',
        borderRadius: 8,
        padding: 24,
        textAlign: 'center',
      }}
    >
      <Text textStyle="body1">Right-click me for content mode</Text>
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
                  <MenuItem text="Buttons" path="#/button" icon="add" />
                  <MenuItem text="Menu" path="#/menu" icon="menu" disabled />
                  <MenuItem
                    text="ChildClick"
                    icon="description"
                    onClick={(a) => logChild(a.text)}
                    disabled
                  />
                  <MenuItem text="Dialog" path="#/dialog" icon="content_copy" />
                </MenuItem>
                <MenuItem text="Inputs" icon="settings" disabled>
                  <MenuItem text="CheckBox" path="#/checkbox" />
                  <MenuItem text="TextBox" path="#/textbox" />
                </MenuItem>
                <MenuItem text="Data" icon="description">
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
                <CheckBox
                  id="menu-flyout"
                  checked={flyout}
                  onChange={(e) => setFlyout(e.target.checked)}
                />
                <label htmlFor="menu-flyout">Flyout nested submenus</label>
                <CheckBox
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
                <MenuItem text="Data" icon="description">
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
              <CheckBox
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
                    <PanelMenuItem text="Buttons" path="#/button" icon="add" />
                    <PanelMenuItem text="Menu" path="#/menu" icon="menu" />
                    <PanelMenuItem
                      text="Dialog"
                      path="#/dialog"
                      icon="content_copy"
                    />
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
                  <PanelMenuItem text="Disabled Menu" icon="block" disabled />
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
                <SelectBar
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
                <CheckBox
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
                    <PanelMenuItem text="Buttons" path="#/button" icon="add" />
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
                <PanelMenuItem
                  text="Console"
                  icon="description"
                  path="#/console"
                />
                <PanelMenuItem text="Logs" icon="content_copy" path="#/logs" />
              </PanelMenu>
            </div>
          ),
        },
      ]}
    />
  );
}

function LinkActionDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Link onClick={() => log('Demos action clicked')}>Run demos</Link>
      <EventLog events={events} emptyText="Click the link-styled button." />
    </Stack>
  );
}

function LinkVisibilityDemo() {
  const [visible, setVisible] = useState(true);
  return (
    <Stack orientation="vertical" gap={8}>
      <Row align="center" gap={8}>
        <label>
          <CheckBox
            checked={visible}
            onChange={(e) => setVisible(e.target.checked)}
          />{' '}
          visible
        </label>
        <Text textStyle="caption" className="dx-text-muted">
          {visible ? 'anchor rendered' : 'rendered nothing'}
        </Text>
      </Row>
      <Link href="#/link" visible={visible}>
        Toggle me
      </Link>
    </Stack>
  );
}

function ProfileMenuBasicDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <ProfileMenu
        ariaLabel="Basic profile menu"
        trigger={<span>Profile</span>}
        items={[
          { text: 'Account', path: '/account' },
          { text: 'Settings', path: '/settings' },
          { text: 'Sign out', path: '/logout' },
        ]}
        onClick={({ text, path }) =>
          log(`activate ${text} → ${path ?? '(none)'}`)
        }
      />
      <EventLog
        events={events}
        emptyText="Open the menu and activate an item."
      />
    </Stack>
  );
}

function ProfileMenuStatesDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <ProfileMenu
        ariaLabel="States profile menu"
        items={[
          { text: 'Profile', icon: 'person', path: '/profile' },
          { text: 'Admin', icon: 'settings', disabled: true },
          { text: 'Billing', path: '/billing' },
        ]}
        onClick={({ text }) => log(`activate ${text}`)}
      />
      <EventLog
        events={events}
        emptyText="The Admin item is disabled — activate another to log."
      />
    </Stack>
  );
}

function TabsBasicDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Tabs
        items={[
          {
            key: 'overview',
            label: 'Overview',
            content: <Text>Overview panel</Text>,
          },
          { key: 'usage', label: 'Usage', content: <Text>Usage panel</Text> },
          { key: 'api', label: 'API', content: <Text>API panel</Text> },
        ]}
        onChange={(key) => log(`onChange → ${key}`)}
      />
      <EventLog events={events} emptyText="Switch tabs to log onChange." />
    </Stack>
  );
}

function TabsControlledDemo() {
  const [value, setValue] = useState('first');
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Text textStyle="caption" className="dx-text-muted">
        value: {value}
      </Text>
      <Tabs
        value={value}
        onChange={(key) => {
          setValue(key);
          log(`onChange → ${key}`);
        }}
        items={[
          { key: 'first', label: 'First', content: <Text>First panel</Text> },
          {
            key: 'second',
            label: 'Second',
            content: <Text>Second panel</Text>,
          },
          {
            key: 'third',
            label: 'Third',
            disabled: true,
            content: <Text>Never</Text>,
          },
        ]}
      />
      <EventLog
        events={events}
        emptyText="Selection is controlled — the log proves it."
      />
    </Stack>
  );
}

function StepsBasicDemo() {
  const [index, setIndex] = useState(0);
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Steps
        ariaLabel="Basic steps demo"
        selectedIndex={index}
        onChange={(next) => {
          setIndex(next);
          log(`onChange → step ${next + 1}`);
        }}
        items={[
          { text: 'One' },
          { text: 'Two' },
          { text: 'Three' },
          { text: 'Four' },
        ]}
      />
      <EventLog events={events} emptyText="Click a step to log onChange." />
    </Stack>
  );
}

function StepsLinearDemo() {
  const [index, setIndex] = useState(0);
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Steps
        ariaLabel="Linear steps demo"
        linear
        selectedIndex={index}
        onChange={(next) => {
          setIndex(next);
          log(`advanced to step ${next + 1}`);
        }}
        items={[
          { text: 'One' },
          { text: 'Two' },
          { text: 'Three' },
          { text: 'Four' },
        ]}
      />
      <EventLog
        events={events}
        emptyText="Only the next step unlocks — advance to reach step three."
      />
    </Stack>
  );
}

function TocClickDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Toc
        ariaLabel="Click demo contents"
        items={[
          { text: 'Alpha', selector: '#toc-click-alpha' },
          { text: 'Beta', selector: '#toc-click-beta' },
        ]}
        onClick={({ text, selector }) => log(`click ${text} → ${selector}`)}
      />
      <div id="toc-click-alpha" tabIndex={-1}>
        <Text>Alpha target</Text>
      </div>
      <div id="toc-click-beta" tabIndex={-1}>
        <Text>Beta target</Text>
      </div>
      <EventLog events={events} emptyText="Click a TOC entry to log onClick." />
    </Stack>
  );
}

function PagerBasicDemo() {
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Pager
        ariaLabel="Orders pager"
        count={100}
        pageSize={10}
        page={page}
        onPageChange={({ page: next }) => {
          setPage(next);
          log(`onPageChange → page ${next}`);
        }}
      />
      <EventLog
        events={events}
        emptyText="Use the pager controls to log events."
      />
    </Stack>
  );
}

function PagerPageSizeDemo() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Pager
        ariaLabel="Roster pager"
        count={96}
        page={page}
        pageSize={pageSize}
        pageSizeOptions={[10, 20, 40]}
        onPageChange={({ page: next }) => setPage(next)}
        onPageSizeChange={(next) => {
          setPageSize(next);
          setPage(1);
          log(`onPageSizeChange → ${next}`);
        }}
      />
      <EventLog events={events} emptyText="Change the page size to log it." />
    </Stack>
  );
}

function PagerVisibilityDemo() {
  const [big, setBig] = useState(false);
  return (
    <Stack orientation="vertical" gap={8}>
      <Row align="center" gap={8}>
        <Button size="sm" onClick={() => setBig((v) => !v)}>
          {big ? 'Shrink to one page' : 'Grow to five pages'}
        </Button>
        <Text textStyle="caption" className="dx-text-muted">
          count: {big ? 100 : 8}
        </Text>
      </Row>
      <Pager
        ariaLabel="Visibility demo pager"
        count={big ? 100 : 8}
        pageSize={20}
        onPageChange={() => undefined}
      />
      {!big && (
        <Text textStyle="body2" className="dx-text-muted">
          count 8 / pageSize 20 → pageCount 1 → the pager is not in the DOM.
        </Text>
      )}
    </Stack>
  );
}

function BreadcrumbClickDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={8}>
      <Breadcrumb
        ariaLabel="Tracked breadcrumb"
        items={[
          { text: 'Home', path: '/' },
          { text: 'Inline button crumb' },
          { text: 'Docs', path: '/docs' },
          { text: 'Now' },
        ]}
        onClick={({ text }) => log(`navigate → ${text}`)}
      />
      <EventLog
        events={events}
        emptyText="Click a crumb — clicks are preventDefault-ed and logged."
      />
    </Stack>
  );
}

export function NavigationDemos({ slug }: { slug: string }) {
  if (slug === 'link') {
    return (
      <DemoPage
        title="Link"
        description="Anchors with link styling — with href they navigate, without href they become a styled button; icons, targets and visibility are props."
        sections={[
          {
            id: 'link-anchor',
            title: 'Anchors',
            description:
              'With an href the component renders a real <a>; icon and aria attributes spread onto it (tests: renders an anchor when href is set, forwards icon and aria attributes). The external link opens a new tab.',
            content: (
              <Stack orientation="vertical" gap={8}>
                <Text>
                  Read the <Link href="#/link">documentation</Link> first.
                </Text>
                <Link
                  href="https://example.com"
                  target="_blank"
                  icon="open_in_new"
                >
                  External with icon
                </Link>
              </Stack>
            ),
          },
          {
            id: 'link-button',
            title: 'Button without href',
            description:
              'No href renders a type="button" with link styling — the right shape for actions that should look like links (test: renders a button with link styling without href); click it to log the action.',
            content: <LinkActionDemo />,
          },
          {
            id: 'link-visibility',
            title: 'Visibility',
            description:
              'visible={false} renders nothing at all — no wrapper, no empty anchor (test: renders nothing when visible is false). Toggle it from the control.',
            content: <LinkVisibilityDemo />,
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
        description="Avatar trigger with a menu popover: arrow-key navigation, aria-activedescendant highlighting and item callbacks — no header slot required."
        sections={[
          {
            id: 'profilemenu-basic',
            title: 'Basic',
            description:
              'The trigger carries aria-haspopup and aria-expanded; items are role="menuitem" inside role="menu", and activating one fires onClick with its path (tests: renders trigger with aria-haspopup and aria-expanded false initially, toggles menu on trigger click, fires onClick when item activated via click). The card lets popups overflow so the menu is visible.',
            cardStyle: { overflow: 'visible' },
            content: <ProfileMenuBasicDemo />,
          },
          {
            id: 'profilemenu-states',
            title: 'Icons & disabled items',
            description:
              'Items can carry an icon and a disabled flag — disabled items keep role="menuitem" but expose aria-disabled and are skipped by clicks and keys (tests: marks disabled item with aria-disabled, does not fire for disabled item, renders icon when provided, skips disabled in keyboard navigation).',
            cardStyle: { overflow: 'visible' },
            content: <ProfileMenuStatesDemo />,
          },
          {
            id: 'profilemenu-keyboard',
            title: 'Keyboard',
            content: (
              <KeyboardTable
                bindings={[
                  {
                    keys: 'Enter / Space / ArrowDown',
                    action:
                      'Open the menu from the trigger with the first item active (test: opens with ArrowDown on trigger)',
                  },
                  {
                    keys: 'ArrowDown / ArrowUp',
                    action:
                      'Move the active item, wrapping and skipping disabled (test: ArrowDown/Up moves active index)',
                  },
                  {
                    keys: 'Home / End',
                    action:
                      'Jump to the first / last enabled item (test: Home/End moves to first/last)',
                  },
                  {
                    keys: 'Enter / Space',
                    action:
                      'Activate the active item, close and refocus the trigger (tests: Enter activates focused item, Space activates focused item)',
                  },
                  {
                    keys: 'Escape',
                    action:
                      'Close the menu and return focus to the trigger (test: closes on Escape and returns focus to trigger)',
                  },
                  {
                    keys: 'Tab',
                    action: 'Close the menu (test: Tab closes menu)',
                  },
                ]}
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
        description="Roving-tabindex tablist with underline and pills variants, four positions and selection-follows-focus keyboard navigation."
        sections={[
          {
            id: 'tabs-basic',
            title: 'Basic',
            description:
              'Only the active panel is rendered — content unmounts on switch, matching Radzen Server render mode; every selection fires onChange with the new key (tests: renders the tablist and active panel, switches tabs on click and notifies onChange).',
            content: <TabsBasicDemo />,
          },
          {
            id: 'tabs-variants',
            title: 'Variants & positions',
            description:
              'variant switches underline/pills; position places the tablist left/right for vertical layouts, where Up/Down join the arrow keys (tests: applies the position class to root and tablist, uses Up/Down arrows for the left position).',
            content: (
              <Stack orientation="vertical" gap={16}>
                <Tabs
                  variant="pills"
                  items={[
                    {
                      key: 'p1',
                      label: 'Pill one',
                      content: <Text>Pill one content</Text>,
                    },
                    {
                      key: 'p2',
                      label: 'Pill two',
                      content: <Text>Pill two content</Text>,
                    },
                  ]}
                />
                <Tabs
                  position="left"
                  items={[
                    {
                      key: 'l1',
                      label: 'Left one',
                      content: <Text>Left one content</Text>,
                    },
                    {
                      key: 'l2',
                      label: 'Left two',
                      content: <Text>Left two content</Text>,
                    },
                  ]}
                />
              </Stack>
            ),
          },
          {
            id: 'tabs-controlled',
            title: 'Controlled & disabled',
            description:
              'value + onChange give the parent the selection; a disabled tab is skipped by clicks and keyboard navigation alike (test: ignores disabled tabs in keyboard navigation). Arrow past it — focus jumps the disabled button.',
            content: <TabsControlledDemo />,
          },
          {
            id: 'tabs-keyboard',
            title: 'Keyboard',
            content: (
              <KeyboardTable
                bindings={[
                  {
                    keys: 'ArrowRight / ArrowLeft',
                    action:
                      'Move and select the next / previous enabled tab (test: supports arrow-key navigation with roving tabindex)',
                  },
                  {
                    keys: 'ArrowDown / ArrowUp',
                    action:
                      'Same movement when position is left or right (test: uses Up/Down arrows for the left position)',
                  },
                  {
                    keys: 'Home / End',
                    action: 'Select the first / last enabled tab',
                  },
                  {
                    keys: 'Tab',
                    action:
                      'Leave the tablist — roving tabindex keeps one stop per tablist',
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
        description="Indicator-only step navigation with aria-current, completed checks, a linear mode and arrow-key focus movement."
        sections={[
          {
            id: 'steps-basic',
            title: 'Basic',
            description:
              'Uncontrolled with defaultIndex — click an enabled step and internal state follows (tests: uncontrolled defaultIndex changes internal state on click, fires onChange when clicking enabled step).',
            content: <StepsBasicDemo />,
          },
          {
            id: 'steps-linear',
            title: 'Linear mode',
            description:
              'linear only unlocks the step after the current one, so later steps stay disabled until you advance (tests: linear prevents skipping ahead beyond next step, does not fire onChange for disabled linear step).',
            content: <StepsLinearDemo />,
          },
          {
            id: 'steps-states',
            title: 'Icons & states',
            description:
              'Completed steps show a check, the active step carries aria-current="step", and items can be disabled outright or decorated with an icon (tests: marks active step with aria-current=step and shows check for completed, disables items with disabled prop, renders icon when provided and number fallback).',
            content: (
              <Steps
                ariaLabel="Icon steps demo"
                defaultIndex={1}
                items={[
                  { text: 'Cart', icon: 'home' },
                  { text: 'Shipping' },
                  { text: 'Payment', disabled: true },
                  { text: 'Review' },
                ]}
                onChange={() => undefined}
              />
            ),
          },
          {
            id: 'steps-keyboard',
            title: 'Keyboard',
            content: (
              <KeyboardTable
                bindings={[
                  {
                    keys: 'ArrowRight / ArrowDown',
                    action:
                      'Move focus to the next enabled step, wrapping (test: handles keyboard ArrowRight/Left navigation)',
                  },
                  {
                    keys: 'ArrowLeft / ArrowUp',
                    action:
                      'Move focus to the previous enabled step, wrapping (test: handles keyboard ArrowRight/Left navigation)',
                  },
                  {
                    keys: 'Home / End',
                    action: 'Move focus to the first / last enabled step',
                  },
                  {
                    keys: 'Enter / Space',
                    action:
                      'Activate the focused step and fire onChange (test: Enter/Space activation via click handler)',
                  },
                ]}
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
        description="Scroll-spy table of contents: IntersectionObserver plus a scroll fallback tracks the visible section, and clicks scroll-and-focus the target."
        sections={[
          {
            id: 'toc-vertical',
            title: 'Vertical scroll-spy',
            description:
              'The first item starts active with aria-current="location"; scrolling this page keeps the highlight in sync (tests: marks first item as active initially with aria-current location, updates active on scroll via scroll handler). The label is unique so it does not collide with this page’s own TOC.',
            content: (
              <Stack orientation="vertical" gap={8}>
                <Toc
                  ariaLabel="Vertical demo contents"
                  items={[
                    { text: 'Section one', selector: '#toc-target-one' },
                    { text: 'Section two', selector: '#toc-target-two' },
                    { text: 'Section three', selector: '#toc-target-three' },
                  ]}
                />
                <div id="toc-target-one" tabIndex={-1}>
                  <Text textStyle="subtitle1" tagName="h3">
                    Section one
                  </Text>
                  <Text>Scroll target one.</Text>
                </div>
                <div id="toc-target-two" tabIndex={-1}>
                  <Text textStyle="subtitle1" tagName="h3">
                    Section two
                  </Text>
                  <Text>Scroll target two.</Text>
                </div>
                <div id="toc-target-three" tabIndex={-1}>
                  <Text textStyle="subtitle1" tagName="h3">
                    Section three
                  </Text>
                  <Text>Scroll target three.</Text>
                </div>
              </Stack>
            ),
          },
          {
            id: 'toc-horizontal',
            title: 'Horizontal orientation',
            description:
              'orientation="horizontal" lays the list out inline — typically styled sticky at the top of a docs page (test: applies orientation classes).',
            content: (
              <Toc
                ariaLabel="Horizontal demo contents"
                orientation="horizontal"
                items={[
                  { text: 'One', selector: '#toc-target-one' },
                  { text: 'Two', selector: '#toc-target-two' },
                  { text: 'Three', selector: '#toc-target-three' },
                ]}
              />
            ),
          },
          {
            id: 'toc-click',
            title: 'Click handling',
            description:
              'A click prevents the default jump, updates active, fires onClick, smooth-scrolls and moves focus to the target (test: clicking item updates active and calls onClick, scrolls and focuses target).',
            content: <TocClickDemo />,
          },
          {
            id: 'toc-keyboard',
            title: 'Keyboard',
            content: (
              <KeyboardTable
                bindings={[
                  {
                    keys: 'Tab',
                    action: 'Move between the TOC links (native anchor focus)',
                  },
                  {
                    keys: 'Enter',
                    action:
                      'Activate the link — scroll, focus target, log onClick (test: clicking item updates active and calls onClick)',
                  },
                ]}
              />
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'pager') {
    return (
      <DemoPage
        title="Pager"
        description="Standalone pagination controls: numbered buttons with aria-current, first/prev/next/last, a live summary and a page-size selector — page and pageSize are owned by you."
        sections={[
          {
            id: 'pager-basic',
            title: 'Basic',
            description:
              'page is controlled — onPageChange hands back { page } and the summary tracks it live (tests: renders summary and page buttons with aria-current, fires onPageChange with PageEventArgs). The nav label is unique so several pagers can share a page.',
            content: <PagerBasicDemo />,
          },
          {
            id: 'pager-pagesize',
            title: 'Page size',
            description:
              'pageSizeOptions enables the selector; feed onPageSizeChange back into the pageSize prop or the select snaps back (test: fires onPageSizeChange).',
            content: <PagerPageSizeDemo />,
          },
          {
            id: 'pager-summary',
            title: 'Summary formats',
            description:
              'pagingSummaryFormat takes {0} page {1} pages {2} items placeholders; pagingSummaryTemplate replaces it entirely with a function (tests: formats pagingSummaryFormat, renders custom summary template).',
            content: (
              <Stack orientation="vertical" gap={12}>
                <Pager
                  ariaLabel="Format demo pager"
                  count={230}
                  pageSize={20}
                  defaultPage={3}
                  pagingSummaryFormat="{0} / {1} pages — {2} rows"
                />
                <Pager
                  ariaLabel="Template demo pager"
                  count={230}
                  pageSize={20}
                  defaultPage={3}
                  pagingSummaryTemplate={(info) =>
                    `Showing page ${info.pageNumber} of ${info.pageCount} (${info.count} items)`
                  }
                />
              </Stack>
            ),
          },
          {
            id: 'pager-visibility',
            title: 'Single-page visibility',
            description:
              'With pageCount <= 1 the pager renders nothing unless alwaysVisible — grow the count and it appears (test: hides when single page unless alwaysVisible).',
            content: <PagerVisibilityDemo />,
          },
          {
            id: 'pager-keyboard',
            title: 'Keyboard',
            content: (
              <KeyboardTable
                bindings={[
                  {
                    keys: 'ArrowRight / ArrowDown',
                    action:
                      'Move focus between numbered page buttons when one is focused',
                  },
                  {
                    keys: 'ArrowLeft / ArrowUp',
                    action: 'Move focus back between numbered page buttons',
                  },
                  {
                    keys: 'Home / End',
                    action: 'Focus the first / last numbered page button',
                  },
                  {
                    keys: 'Enter / Space',
                    action: 'Activate the focused page button (native button)',
                  },
                ]}
              />
            ),
          },
        ]}
      />
    );
  }
  return (
    <DemoPage
      title="Breadcrumb"
      description="Ordered trail of links with aria-hidden separators, a page-current crumb and non-navigating callbacks — clicks never leave the app on their own."
      sections={[
        {
          id: 'breadcrumb-basic',
          title: 'Links & separators',
          description:
            'Items with a path render as anchors; the last crumb keeps aria-current="page" even when it has a path, and "/" separators are aria-hidden between items (tests: renders links for items with path, last item with path still has aria-current, renders separators aria-hidden between items).',
          content: (
            <Breadcrumb
              ariaLabel="Docs breadcrumb"
              items={[
                { text: 'Home', path: '/' },
                { text: 'Library', path: '/lib' },
                { text: 'Components', path: '/components' },
                { text: 'Breadcrumb' },
              ]}
            />
          ),
        },
        {
          id: 'breadcrumb-click',
          title: 'Click handling',
          description:
            'Every click is preventDefault-ed and handed to onClick — navigation is your job. A crumb without a path (that is not last) renders as a button instead of a link (tests: fires onClick when link clicked, handles click on item without path via button).',
          content: <BreadcrumbClickDemo />,
        },
        {
          id: 'breadcrumb-states',
          title: 'Current & disabled',
          description:
            'The last crumb without a path is a focusable span with aria-current="page"; disabled crumbs are aria-disabled, out of tab order and never fire onClick (tests: current page without path is span with aria-current, disabled item has aria-disabled and not focusable, does not fire onClick for disabled item).',
          content: (
            <Breadcrumb
              ariaLabel="State demo breadcrumb"
              items={[
                { text: 'Home', path: '/' },
                { text: 'Archive', disabled: true },
                { text: '2026', path: '/2026' },
                { text: 'Today' },
              ]}
            />
          ),
        },
        {
          id: 'breadcrumb-keyboard',
          title: 'Keyboard',
          content: (
            <KeyboardTable
              bindings={[
                {
                  keys: 'Tab',
                  action:
                    'Move through the crumbs — disabled spans are skipped (test: disabled item … not focusable)',
                },
                {
                  keys: 'Enter',
                  action:
                    'Activate the focused crumb link or button, firing onClick (test: fires onClick when link clicked)',
                },
              ]}
            />
          ),
        },
      ]}
    />
  );
}
