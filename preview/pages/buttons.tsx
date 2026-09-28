import { useState } from 'react';
import {
  Button,
  FabMenu,
  Icon,
  Row,
  Splitbutton,
  Stack,
  Text,
  Togglebutton,
  type ButtonShade,
  type ButtonVariant,
  type IconName,
} from '../../lib/main';
import { DemoPage } from './demo-page';

const BUTTON_STYLES = [
  'primary',
  'secondary',
  'base',
  'info',
  'success',
  'warning',
  'danger',
] as const;

const BUTTON_SHADES: Exclude<ButtonShade, 'default' | 'medium'>[] = [
  'lighter',
  'light',
  'dark',
  'darker',
];

const BUTTON_VARIANTS: ButtonVariant[] = ['filled', 'flat', 'outlined', 'text'];

const BUTTON_ICONS: Record<
  (typeof BUTTON_STYLES)[number],
  { icon: IconName; label: string }
> = {
  primary: { icon: 'plus', label: 'Add new' },
  secondary: { icon: 'plus', label: 'Add new' },
  base: { icon: 'refresh', label: 'Refresh' },
  info: { icon: 'info', label: 'Privacy tip' },
  success: { icon: 'check-circle', label: 'Publish' },
  warning: { icon: 'alert', label: 'Warning' },
  danger: { icon: 'ban', label: 'Report' },
};

const SPLIT_ITEMS = [
  { key: 'edit', label: 'Edit', icon: 'edit' as const },
  { key: 'duplicate', label: 'Duplicate', icon: 'copy' as const },
  { key: 'download', label: 'Download', icon: 'download' as const },
];

const VARIANT_BLURB: Record<ButtonVariant, string> = {
  filled: 'These are the default buttons.',
  flat: 'Use variant="flat" for the flat button variant.',
  outlined: 'Use variant="outlined" for the outlined button variant.',
  text: 'Use variant="text" for the text button variant.',
};

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function VariantBody({ variant }: { variant: ButtonVariant }) {
  return (
    <>
      <Row align="center" gap="md" wrap>
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
      <Text textStyle="Subtitle1" tagName="H3" className="dx-mt-4">
        {capitalize(variant)} Shades
      </Text>
      <Stack orientation="vertical" gap="md" className="dx-mt-2">
        {BUTTON_SHADES.map((shade) => (
          <Row key={shade} align="center" gap="md" wrap>
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
      <Text textStyle="Subtitle1" tagName="H3" className="dx-mt-4">
        {capitalize(variant)} Light and Dark
      </Text>
      <Text textStyle="Body1" className="dx-text-muted dx-mb-2">
        Light and Dark button styles don&apos;t have Shades
      </Text>
      <Row align="center" gap="md" wrap>
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

export function ButtonDemos({ slug }: { slug: string }) {
  const [pressed, setPressed] = useState(false);
  if (slug === 'togglebutton') {
    return (
      <DemoPage
        title="Togglebutton"
        description="A Button that keeps its pressed state — aria-pressed plus the Radzen toggle axis (toggleVariant, toggleSeverity, toggleShade) applied while pressed."
        sections={[
          {
            id: 'togglebutton-basic',
            title: 'Basic',
            description:
              'Controlled with pressed/onChange, or uncontrolled with defaultPressed.',
            content: (
              <Row align="center" gap="md" wrap>
                <Togglebutton pressed={pressed} onChange={setPressed}>
                  {pressed ? 'On' : 'Off'}
                </Togglebutton>
                <Togglebutton defaultPressed>Default on</Togglebutton>
                <Togglebutton disabled>Disabled</Togglebutton>
              </Row>
            ),
          },
          {
            id: 'togglebutton-variants',
            title: 'Variants',
            description:
              'Every Button variant works; the pressed state adds a darker shade and the state layer (Radzen ToggleShade=Darker default).',
            content: (
              <Row align="center" gap="md" wrap>
                {BUTTON_VARIANTS.map((variant) => (
                  <Row key={variant} align="center" gap="sm">
                    <Togglebutton variant={variant}>
                      {capitalize(variant)}
                    </Togglebutton>
                    <Togglebutton variant={variant} defaultPressed>
                      {capitalize(variant)}
                    </Togglebutton>
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
              <Row align="center" gap="md" wrap>
                <Row align="center" gap="sm">
                  <Togglebutton
                    variant="text"
                    severity="base"
                    toggleVariant="flat"
                    toggleSeverity="primary"
                    toggleShade="lighter"
                  >
                    Text → Flat
                  </Togglebutton>
                  <Togglebutton
                    defaultPressed
                    variant="text"
                    severity="base"
                    toggleVariant="flat"
                    toggleSeverity="primary"
                    toggleShade="lighter"
                  >
                    Text → Flat
                  </Togglebutton>
                </Row>
                <Row align="center" gap="sm">
                  <Togglebutton variant="outlined" severity="success">
                    Pinned hue
                  </Togglebutton>
                  <Togglebutton
                    defaultPressed
                    variant="outlined"
                    severity="success"
                    toggleSeverity="success"
                    toggleShade="darker"
                  >
                    Pinned hue
                  </Togglebutton>
                </Row>
                <Row align="center" gap="sm">
                  <Togglebutton variant="filled" severity="warning">
                    Filled → lighter
                  </Togglebutton>
                  <Togglebutton
                    defaultPressed
                    variant="filled"
                    severity="warning"
                    toggleSeverity="warning"
                    toggleShade="light"
                  >
                    Filled → lighter
                  </Togglebutton>
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
              <Row align="center" gap="md" wrap>
                <Row align="center" gap="sm">
                  <Togglebutton
                    iconOnly
                    toggleContent={
                      <Icon name="check" size={20} aria-hidden="true" />
                    }
                    aria-label="Published"
                  >
                    <Icon name="eye" size={20} aria-hidden="true" />
                  </Togglebutton>
                  <Togglebutton
                    iconOnly
                    defaultPressed
                    toggleContent={
                      <Icon name="check" size={20} aria-hidden="true" />
                    }
                    aria-label="Published"
                  >
                    <Icon name="eye" size={20} aria-hidden="true" />
                  </Togglebutton>
                </Row>
                <Togglebutton defaultPressed toggleContent="On">
                  Off
                </Togglebutton>
              </Row>
            ),
          },
          {
            id: 'togglebutton-states',
            title: 'Sizes and states',
            content: (
              <>
                <Row align="center" gap="md" wrap>
                  <Togglebutton size="sm">Small</Togglebutton>
                  <Togglebutton size="md">Medium</Togglebutton>
                  <Togglebutton size="lg">Large</Togglebutton>
                  <Togglebutton loading>Saving</Togglebutton>
                </Row>
                <div className="dx-mt-4">
                  <Togglebutton
                    fullWidth
                    pressed={pressed}
                    onChange={setPressed}
                  >
                    {pressed ? 'On (full width)' : 'Off (full width)'}
                  </Togglebutton>
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
        title="Splitbutton"
        description="A primary action plus a caret that opens a menu — both halves render Button, so the variant, severity and shade axes behave exactly like Button."
        sections={[
          {
            id: 'splitbutton-basic',
            title: 'Basic',
            description:
              'aria-label names the action button; openAriaLabel names the caret and menu (Radzen ButtonAriaLabel/OpenAriaLabel parity).',
            content: (
              <Row align="center" gap="md" wrap>
                <Splitbutton
                  label="Save"
                  onClick={() => undefined}
                  items={[
                    { key: 'as', label: 'Save as' },
                    { key: 'template', label: 'Save as template' },
                  ]}
                />
                <Splitbutton
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
                <Row align="center" gap="md" wrap>
                  {BUTTON_VARIANTS.map((variant) => (
                    <Splitbutton
                      key={variant}
                      variant={variant}
                      label={capitalize(variant)}
                      items={[
                        { key: variant, label: `${capitalize(variant)} extra` },
                      ]}
                    />
                  ))}
                </Row>
                <Row align="center" gap="md" wrap className="dx-mt-4">
                  {BUTTON_STYLES.map((style) => (
                    <Splitbutton
                      key={style}
                      severity={style}
                      label={capitalize(style)}
                      items={[
                        { key: style, label: `${capitalize(style)} extra` },
                      ]}
                    />
                  ))}
                </Row>
                <Row align="center" gap="md" wrap className="dx-mt-4">
                  {BUTTON_SHADES.map((shade) => (
                    <Splitbutton
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
              <Splitbutton
                label="Export"
                items={[
                  { key: 'pdf', label: 'Export as PDF', icon: 'file' },
                  { key: 'csv', label: 'Export as CSV', icon: 'download' },
                  { key: 'preview', label: 'Preview', icon: 'eye' },
                  {
                    key: 'share',
                    label: 'Share',
                    icon: 'link',
                    disabled: true,
                  },
                  {
                    key: 'archive',
                    label: 'Archive',
                    icon: 'trash',
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
                <Row align="center" gap="md" wrap>
                  <Splitbutton size="sm" label="Small" items={SPLIT_ITEMS} />
                  <Splitbutton size="md" label="Medium" items={SPLIT_ITEMS} />
                  <Splitbutton size="lg" label="Large" items={SPLIT_ITEMS} />
                </Row>
                <Row align="center" gap="md" wrap className="dx-mt-4">
                  <Splitbutton label="Saving" loading items={SPLIT_ITEMS} />
                  <Splitbutton label="Disabled" disabled items={SPLIT_ITEMS} />
                </Row>
                <div className="dx-mt-4">
                  <Splitbutton
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
    return (
      <DemoPage
        title="FabMenu"
        sections={[
          {
            id: 'fabmenu-basic',
            content: (
              <FabMenu
                items={[
                  { text: 'Edit', value: 'edit' },
                  { text: 'Delete', value: 'delete' },
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
              <Text textStyle="Subtitle1" tagName="H3">
                Icon only
              </Text>
              <Row align="center" gap="md" wrap className="dx-mt-2">
                {BUTTON_STYLES.map((style) => (
                  <Button
                    key={style}
                    iconOnly
                    severity={style}
                    aria-label={BUTTON_ICONS[style].label}
                    onClick={() => undefined}
                  >
                    <Icon name={BUTTON_ICONS[style].icon} size={20} />
                  </Button>
                ))}
              </Row>
              <Text textStyle="Subtitle1" tagName="H3" className="dx-mt-4">
                Icon and text
              </Text>
              <Row align="center" gap="md" wrap className="dx-mt-2">
                {BUTTON_STYLES.map((style) => (
                  <Button
                    key={style}
                    severity={style}
                    onClick={() => undefined}
                  >
                    <Icon
                      name={BUTTON_ICONS[style].icon}
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
            <Row align="center" gap="md" wrap>
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
              <Row align="center" gap="md" wrap>
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
