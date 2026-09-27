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
        sections={[
          {
            id: 'togglebutton-basic',
            content: (
              <Row align="center" gap="md" wrap>
                <Togglebutton pressed={pressed} onChange={setPressed}>
                  {pressed ? 'On' : 'Off'}
                </Togglebutton>
                <Togglebutton defaultPressed>Default on</Togglebutton>
              </Row>
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
        sections={[
          {
            id: 'splitbutton-basic',
            content: (
              <Row align="center" gap="md" wrap>
                <Splitbutton
                  label="Save"
                  onClick={() => undefined}
                  items={[{ key: 'as', label: 'Save as' }]}
                />
                <Splitbutton
                  label="Delete"
                  severity="danger"
                  variant="outlined"
                  onClick={() => undefined}
                  items={[{ key: 'force', label: 'Force delete' }]}
                />
              </Row>
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
