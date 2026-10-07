import { useState } from 'react';
import {
  Button,
  FabMenu,
  Icon,
  Row,
  Select,
  SplitButton,
  Stack,
  Text,
  ToggleButton,
  type ButtonVariant,
  type IconName,
} from '../../lib/main';
import { DemoPage } from './demo-page';
import { EventLog } from './shared/EventLog';
import { KeyboardTable } from './shared/KeyboardTable';
import {
  SEVERITIES as BUTTON_STYLES,
  SHADES as BUTTON_SHADES,
  VARIANTS as BUTTON_VARIANTS,
  capitalize,
} from './shared/axes';

const BUTTON_ICONS: Record<
  (typeof BUTTON_STYLES)[number],
  { icon: IconName; label: string }
> = {
  primary: { icon: 'add', label: 'Add new' },
  secondary: { icon: 'add', label: 'Add new' },
  base: { icon: 'refresh', label: 'Refresh' },
  info: { icon: 'info', label: 'Privacy tip' },
  success: { icon: 'check_circle', label: 'Publish' },
  warning: { icon: 'warning', label: 'Warning' },
  danger: { icon: 'block', label: 'Report' },
};

const SPLIT_ITEMS = [
  { key: 'edit', label: 'Edit', icon: 'edit' as const },
  { key: 'duplicate', label: 'Duplicate', icon: 'content_copy' as const },
  { key: 'download', label: 'Download', icon: 'download' as const },
];

const VARIANT_BLURB: Record<ButtonVariant, string> = {
  filled: 'These are the default buttons.',
  flat: 'Use variant="flat" for the flat button variant.',
  outlined: 'Use variant="outlined" for the outlined button variant.',
  text: 'Use variant="text" for the text button variant.',
};

function VariantBody({ variant }: { variant: ButtonVariant }) {
  return (
    <>
      <Row align="center" gap={12} wrap>
        {BUTTON_STYLES.map((style) => (
          <Button
            key={style}
            variant={variant}
            severity={style}
            onClick={() => undefined}
          >
            {capitalize(style)}
          </Button>
        ))}
      </Row>
      <Text textStyle="subtitle1" tagName="h3" className="dx-mt-4">
        {capitalize(variant)} Shades
      </Text>
      <Stack orientation="vertical" gap={12} className="dx-mt-2">
        {BUTTON_SHADES.map((shade) => (
          <Row key={shade} align="center" gap={12} wrap>
            {BUTTON_STYLES.map((style) => (
              <Button
                key={style}
                variant={variant}
                severity={style}
                shade={shade}
                onClick={() => undefined}
              >
                {capitalize(style)}
              </Button>
            ))}
          </Row>
        ))}
      </Stack>
      <Text textStyle="subtitle1" tagName="h3" className="dx-mt-4">
        {capitalize(variant)} Light and Dark
      </Text>
      <Text textStyle="body1" className="dx-text-muted dx-mb-2">
        Light and Dark button styles don&apos;t have Shades
      </Text>
      <Row align="center" gap={12} wrap>
        <Button variant={variant} severity="light" onClick={() => undefined}>
          Light
        </Button>
        <Button variant={variant} severity="dark" onClick={() => undefined}>
          Dark
        </Button>
      </Row>
    </>
  );
}

const FAB_POSITIONS = [
  'bottom-right',
  'bottom-left',
  'top-right',
  'top-left',
] as const;

const FAB_ITEMS = [
  { text: 'New draft', value: 'draft', icon: 'add' },
  { text: 'Refresh', value: 'refresh', icon: 'refresh' },
  { text: 'Publish', value: 'publish', icon: 'check_circle' },
  { text: 'Delete', value: 'delete', icon: 'delete', disabled: true },
];

const FAB_TRIGGER_ICONS = [
  { value: 'add', label: "default ('add')" },
  { value: 'settings', label: "custom ('settings')" },
];

/** Single page-level FAB: exactly one trigger is mounted, and the
 * position/icon selects retarget it (one corner at a time). */
function FabMenuDemo() {
  const [position, setPosition] =
    useState<(typeof FAB_POSITIONS)[number]>('bottom-right');
  const [icon, setIcon] = useState<IconName>('add');
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);

  return (
    <DemoPage
      title="FabMenu"
      description="Floating action button that expands into a corner menu — aria-expanded on the trigger, menu items in DOM order and Escape to dismiss."
      sections={[
        {
          id: 'fabmenu-basic',
          title: 'Basic',
          description:
            'Exactly one FAB is mounted for the page; the controls below retarget it. The trigger reports aria-haspopup="menu" and aria-expanded; opening rotates the icon 45° and renders role="menu" items with value payloads (tests: aria-haspopup/aria-expanded false, toggles menu on click, fires onClick with value, closes on outside click).',
          content: (
            <Stack orientation="vertical" gap={8}>
              <FabMenu
                position={position}
                icon={icon}
                items={FAB_ITEMS}
                onClick={({ text, value }) =>
                  log(`activate ${text} (value: ${value ?? '-'})`)
                }
              />
              <Text textStyle="body2" className="dx-text-muted">
                The floating trigger follows the position chosen below — one
                corner at a time, never stacked with a second FAB.
              </Text>
              <EventLog
                events={events}
                emptyText="Open the FAB and activate an item to log onClick."
              />
            </Stack>
          ),
        },
        {
          id: 'fabmenu-positions',
          title: 'Positions',
          description:
            'position pins the FAB to one of the four viewport corners — fixed positioning, so it floats above card clipping (test: applies position class for each position). The menu expands away from the anchored edge (down for top corners, up for bottom), aligned to that side, and the trigger never shifts while opening.',
          content: (
            <Row align="center" gap={8} wrap>
              <Text textStyle="caption">position</Text>
              <Select
                aria-label="FAB position"
                value={position}
                onChange={(e) => {
                  const next = e.target.value as (typeof FAB_POSITIONS)[number];
                  setPosition(next);
                  log(`position: ${next}`);
                }}
                options={FAB_POSITIONS.map((v) => ({ value: v, label: v }))}
              />
              <Text textStyle="caption" className="dx-text-muted">
                {position}
              </Text>
            </Row>
          ),
        },
        {
          id: 'fabmenu-states',
          title: 'Icons & disabled items',
          description:
            'Custom trigger icon and per-item disabled state: the disabled Delete item keeps role="menuitem" but exposes aria-disabled and never fires onClick (tests: renders custom main icon, marks disabled item, does not fire for disabled item). Each item also carries a title tooltip.',
          content: (
            <Row align="center" gap={8} wrap>
              <Text textStyle="caption">trigger icon</Text>
              <Select
                aria-label="FAB trigger icon"
                value={icon}
                onChange={(e) => {
                  const next = e.target.value as IconName;
                  setIcon(next);
                  log(`trigger icon: ${next}`);
                }}
                options={FAB_TRIGGER_ICONS}
              />
              <Text textStyle="caption" className="dx-text-muted">
                {icon}
              </Text>
            </Row>
          ),
        },
        {
          id: 'fabmenu-keyboard',
          title: 'Keyboard',
          content: (
            <KeyboardTable
              bindings={[
                {
                  keys: 'Enter / Space / ArrowDown',
                  action:
                    'Open the menu from the trigger (test: main button Enter opens menu)',
                },
                {
                  keys: 'Tab',
                  action: 'Move from the trigger into the menu items, then out',
                },
                {
                  keys: 'Enter / Space',
                  action: 'Activate the focused item (native button)',
                },
                {
                  keys: 'Escape',
                  action:
                    'Close the menu and refocus the trigger (test: closes on Escape and returns focus to main)',
                },
              ]}
            />
          ),
        },
      ]}
    />
  );
}

export function ButtonDemos({ slug }: { slug: string }) {
  const [pressed, setPressed] = useState(false);
  if (slug === 'togglebutton') {
    return (
      <DemoPage
        title="ToggleButton"
        description="A Button that keeps its pressed state — aria-pressed plus the Radzen toggle axis (toggleVariant, toggleSeverity, toggleShade) applied while pressed."
        sections={[
          {
            id: 'togglebutton-basic',
            title: 'Basic',
            description:
              'Controlled with pressed/onChange, or uncontrolled with defaultPressed.',
            content: (
              <Row align="center" gap={12} wrap>
                <ToggleButton pressed={pressed} onChange={setPressed}>
                  {pressed ? 'On' : 'Off'}
                </ToggleButton>
                <ToggleButton defaultPressed>Default on</ToggleButton>
                <ToggleButton disabled>Disabled</ToggleButton>
              </Row>
            ),
          },
          {
            id: 'togglebutton-variants',
            title: 'Variants',
            description:
              'Every Button variant works; the pressed state adds a darker shade and the state layer (Radzen ToggleShade=Darker default).',
            content: (
              <Row align="center" gap={12} wrap>
                {BUTTON_VARIANTS.map((variant) => (
                  <Row key={variant} align="center" gap={8}>
                    <ToggleButton variant={variant}>
                      {capitalize(variant)}
                    </ToggleButton>
                    <ToggleButton variant={variant} defaultPressed>
                      {capitalize(variant)}
                    </ToggleButton>
                  </Row>
                ))}
              </Row>
            ),
          },
          {
            id: 'togglebutton-toggle-axis',
            title: 'Toggle axis',
            description:
              'toggleVariant, toggleSeverity and toggleShade replace the base axis while pressed (Radzen ToggleVariant/ToggleButtonStyle/ToggleShade parity).',
            content: (
              <Row align="center" gap={12} wrap>
                <Row align="center" gap={8}>
                  <ToggleButton
                    variant="text"
                    severity="base"
                    toggleVariant="flat"
                    toggleSeverity="primary"
                    toggleShade="lighter"
                  >
                    Text → Flat
                  </ToggleButton>
                  <ToggleButton
                    defaultPressed
                    variant="text"
                    severity="base"
                    toggleVariant="flat"
                    toggleSeverity="primary"
                    toggleShade="lighter"
                  >
                    Text → Flat
                  </ToggleButton>
                </Row>
                <Row align="center" gap={8}>
                  <ToggleButton variant="outlined" severity="success">
                    Pinned hue
                  </ToggleButton>
                  <ToggleButton
                    defaultPressed
                    variant="outlined"
                    severity="success"
                    toggleSeverity="success"
                    toggleShade="darker"
                  >
                    Pinned hue
                  </ToggleButton>
                </Row>
                <Row align="center" gap={8}>
                  <ToggleButton variant="filled" severity="warning">
                    Filled → lighter
                  </ToggleButton>
                  <ToggleButton
                    defaultPressed
                    variant="filled"
                    severity="warning"
                    toggleSeverity="warning"
                    toggleShade="light"
                  >
                    Filled → lighter
                  </ToggleButton>
                </Row>
              </Row>
            ),
          },
          {
            id: 'togglebutton-toggle-content',
            title: 'Toggle content',
            description:
              'toggleContent replaces children while pressed — the Radzen ToggleIcon pattern for swapping glyph or text.',
            content: (
              <Row align="center" gap={12} wrap>
                <Row align="center" gap={8}>
                  <ToggleButton
                    iconOnly
                    toggleContent={
                      <Icon icon="check" size={20} aria-hidden="true" />
                    }
                    aria-label="Published"
                  >
                    <Icon icon="visibility" size={20} aria-hidden="true" />
                  </ToggleButton>
                  <ToggleButton
                    iconOnly
                    defaultPressed
                    toggleContent={
                      <Icon icon="check" size={20} aria-hidden="true" />
                    }
                    aria-label="Published"
                  >
                    <Icon icon="visibility" size={20} aria-hidden="true" />
                  </ToggleButton>
                </Row>
                <ToggleButton defaultPressed toggleContent="On">
                  Off
                </ToggleButton>
              </Row>
            ),
          },
          {
            id: 'togglebutton-states',
            title: 'Sizes and states',
            content: (
              <>
                <Row align="center" gap={12} wrap>
                  <ToggleButton size="sm">Small</ToggleButton>
                  <ToggleButton size="md">Medium</ToggleButton>
                  <ToggleButton size="lg">Large</ToggleButton>
                  <ToggleButton loading>Saving</ToggleButton>
                </Row>
                <div className="dx-mt-4">
                  <ToggleButton
                    fullWidth
                    pressed={pressed}
                    onChange={setPressed}
                  >
                    {pressed ? 'On (full width)' : 'Off (full width)'}
                  </ToggleButton>
                </div>
              </>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'splitbutton') {
    return (
      <DemoPage
        title="SplitButton"
        description="A primary action plus a caret that opens a menu — both halves render Button, so the variant, severity and shade axes behave exactly like Button."
        sections={[
          {
            id: 'splitbutton-basic',
            title: 'Basic',
            description:
              'aria-label names the action button; openAriaLabel names the caret and menu (Radzen ButtonAriaLabel/OpenAriaLabel parity).',
            content: (
              <Row align="center" gap={12} wrap>
                <SplitButton
                  label="Save"
                  onClick={() => undefined}
                  items={[
                    { key: 'as', label: 'Save as' },
                    { key: 'template', label: 'Save as template' },
                  ]}
                />
                <SplitButton
                  label="Delete"
                  severity="danger"
                  variant="outlined"
                  aria-label="Delete record"
                  openAriaLabel="More delete options"
                  onClick={() => undefined}
                  items={[{ key: 'force', label: 'Force delete' }]}
                />
              </Row>
            ),
          },
          {
            id: 'splitbutton-variants',
            title: 'Variants and severities',
            content: (
              <>
                <Row align="center" gap={12} wrap>
                  {BUTTON_VARIANTS.map((variant) => (
                    <SplitButton
                      key={variant}
                      variant={variant}
                      label={capitalize(variant)}
                      items={[
                        { key: variant, label: `${capitalize(variant)} extra` },
                      ]}
                    />
                  ))}
                </Row>
                <Row align="center" gap={12} wrap className="dx-mt-4">
                  {BUTTON_STYLES.map((style) => (
                    <SplitButton
                      key={style}
                      severity={style}
                      label={capitalize(style)}
                      items={[
                        { key: style, label: `${capitalize(style)} extra` },
                      ]}
                    />
                  ))}
                </Row>
                <Row align="center" gap={12} wrap className="dx-mt-4">
                  {BUTTON_SHADES.map((shade) => (
                    <SplitButton
                      key={shade}
                      shade={shade}
                      label={capitalize(shade)}
                      items={[
                        { key: shade, label: `${capitalize(shade)} extra` },
                      ]}
                    />
                  ))}
                </Row>
              </>
            ),
          },
          {
            id: 'splitbutton-items',
            title: 'Menu items',
            description:
              'Items carry an icon (Radzen SplitButtonItem.Icon parity), plus danger and disabled states.',
            content: (
              <SplitButton
                label="Export"
                items={[
                  { key: 'pdf', label: 'Export as PDF', icon: 'description' },
                  { key: 'csv', label: 'Export as CSV', icon: 'download' },
                  { key: 'demos', label: 'Demos', icon: 'visibility' },
                  {
                    key: 'share',
                    label: 'Share',
                    icon: 'link',
                    disabled: true,
                  },
                  {
                    key: 'archive',
                    label: 'Archive',
                    icon: 'delete',
                    danger: true,
                  },
                ]}
              />
            ),
          },
          {
            id: 'splitbutton-states',
            title: 'Sizes and states',
            content: (
              <>
                <Row align="center" gap={12} wrap>
                  <SplitButton size="sm" label="Small" items={SPLIT_ITEMS} />
                  <SplitButton size="md" label="Medium" items={SPLIT_ITEMS} />
                  <SplitButton size="lg" label="Large" items={SPLIT_ITEMS} />
                </Row>
                <Row align="center" gap={12} wrap className="dx-mt-4">
                  <SplitButton label="Saving" loading items={SPLIT_ITEMS} />
                  <SplitButton label="Disabled" disabled items={SPLIT_ITEMS} />
                </Row>
                <div className="dx-mt-4">
                  <SplitButton
                    label="Full width"
                    fullWidth
                    items={SPLIT_ITEMS}
                  />
                </div>
              </>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'fabmenu') {
    return <FabMenuDemo />;
  }
  return (
    <DemoPage
      title="Button"
      description="The Button comes in filled, flat, outlined, and text variants, with sizes, icons, shades, loading and disabled states, and click handling."
      sections={[
        ...BUTTON_VARIANTS.map((variant) => ({
          id: `${variant}-buttons`,
          title: `${capitalize(variant)} Buttons`,
          description: VARIANT_BLURB[variant],
          content: <VariantBody variant={variant} />,
        })),
        {
          id: 'content-in-buttons',
          title: 'Content in Buttons',
          description: 'Text, icons and images can be added to a button.',
          content: (
            <>
              <Text textStyle="subtitle1" tagName="h3">
                Icon only
              </Text>
              <Row align="center" gap={12} wrap className="dx-mt-2">
                {BUTTON_STYLES.map((style) => (
                  <Button
                    key={style}
                    iconOnly
                    severity={style}
                    aria-label={BUTTON_ICONS[style].label}
                    onClick={() => undefined}
                  >
                    <Icon icon={BUTTON_ICONS[style].icon} size={20} />
                  </Button>
                ))}
              </Row>
              <Text textStyle="subtitle1" tagName="h3" className="dx-mt-4">
                Icon and text
              </Text>
              <Row align="center" gap={12} wrap className="dx-mt-2">
                {BUTTON_STYLES.map((style) => (
                  <Button
                    key={style}
                    severity={style}
                    onClick={() => undefined}
                  >
                    <Icon
                      icon={BUTTON_ICONS[style].icon}
                      size={20}
                      aria-hidden="true"
                    />
                    {BUTTON_ICONS[style].label}
                  </Button>
                ))}
              </Row>
            </>
          ),
        },
        {
          id: 'button-sizes',
          title: 'Button Sizes',
          description:
            'Use the size property to set button size. Available sizes are Small, Medium (default), and Large.',
          content: (
            <Row align="center" gap={12} wrap>
              <Button size="sm" onClick={() => undefined}>
                Small
              </Button>
              <Button onClick={() => undefined}>Medium</Button>
              <Button size="lg" onClick={() => undefined}>
                Large
              </Button>
            </Row>
          ),
        },
        {
          id: 'button-states',
          title: 'Button States',
          description:
            'Loading shows a spinner, disabled blocks interaction, and full width stretches to its container.',
          content: (
            <>
              <Row align="center" gap={12} wrap>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
              </Row>
              <div className="dx-mt-4">
                <Button fullWidth onClick={() => undefined}>
                  Full width
                </Button>
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
