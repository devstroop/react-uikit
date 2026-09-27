import { useState } from 'react';
import {
  Button,
  Card,
  Column,
  FabMenu,
  Icon,
  Row,
  Splitbutton,
  Stack,
  Text,
  Toc,
  Togglebutton,
  type ButtonShade,
  type ButtonVariant,
  type IconName,
} from '../../lib/main';
import { DemoSection } from './section';

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

const BUTTON_TOC = [
  { text: 'Filled Buttons', selector: '#filled-buttons' },
  { text: 'Flat Buttons', selector: '#flat-buttons' },
  { text: 'Outlined Buttons', selector: '#outlined-buttons' },
  { text: 'Text Buttons', selector: '#text-buttons' },
  { text: 'Content in Buttons', selector: '#content-in-buttons' },
  { text: 'Button Sizes', selector: '#button-sizes' },
  { text: 'Button States', selector: '#button-states' },
];

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function VariantCard({ variant }: { variant: ButtonVariant }) {
  return (
    <Card id={`${variant}-buttons`}>
      <Text textStyle="H5" tagName="H2">
        {capitalize(variant)} Buttons
      </Text>
      <Text textStyle="Body1" className="dx-text-muted dx-mb-4">
        {VARIANT_BLURB[variant]}
      </Text>
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
    </Card>
  );
}

export function ButtonDemos({ slug }: { slug: string }) {
  const [pressed, setPressed] = useState(false);
  if (slug === 'togglebutton') {
    return (
      <DemoSection title="Togglebutton">
        <Togglebutton pressed={pressed} onChange={setPressed}>
          {pressed ? 'On' : 'Off'}
        </Togglebutton>
        <Togglebutton defaultPressed>Default on</Togglebutton>
      </DemoSection>
    );
  }
  if (slug === 'splitbutton') {
    return (
      <DemoSection title="Splitbutton">
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
      </DemoSection>
    );
  }
  if (slug === 'fabmenu') {
    return (
      <DemoSection title="FabMenu">
        <FabMenu
          items={[
            { text: 'Edit', value: 'edit' },
            { text: 'Delete', value: 'delete' },
          ]}
        />
      </DemoSection>
    );
  }
  return (
    <DemoSection title="Button">
      <Text textStyle="Subtitle1" className="dx-text-muted dx-pb-4">
        The Button comes in filled, flat, outlined, and text variants, with
        sizes, icons, shades, loading and disabled states, and click handling.
      </Text>
      <Row gap="lg" align="start">
        <Column size={12} sizeMd={9}>
          <Stack orientation="vertical" gap="lg">
            {BUTTON_VARIANTS.map((variant) => (
              <VariantCard key={variant} variant={variant} />
            ))}
            <Card id="content-in-buttons">
              <Text textStyle="H5" tagName="H2">
                Content in Buttons
              </Text>
              <Text textStyle="Body1" className="dx-text-muted dx-mb-4">
                Text, icons and images can be added to a button.
              </Text>
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
            </Card>
            <Card id="button-sizes">
              <Text textStyle="H5" tagName="H2">
                Button Sizes
              </Text>
              <Text textStyle="Body1" className="dx-text-muted dx-mb-4">
                Use the size property to set button size. Available sizes are
                Small, Medium (default), and Large.
              </Text>
              <Row align="center" gap="md" wrap>
                <Button size="sm" onClick={() => undefined}>
                  Small
                </Button>
                <Button onClick={() => undefined}>Medium</Button>
                <Button size="lg" onClick={() => undefined}>
                  Large
                </Button>
              </Row>
            </Card>
            <Card id="button-states">
              <Text textStyle="H5" tagName="H2">
                Button States
              </Text>
              <Text textStyle="Body1" className="dx-text-muted dx-mb-4">
                Loading shows a spinner, disabled blocks interaction, and full
                width stretches to its container.
              </Text>
              <Row align="center" gap="md" wrap>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
              </Row>
              <div className="dx-mt-4">
                <Button fullWidth onClick={() => undefined}>
                  Full width
                </Button>
              </div>
            </Card>
          </Stack>
        </Column>
        <Column
          size={12}
          sizeMd={3}
          className="dx-display-none dx-display-md-block"
        >
          <div style={{ position: 'sticky', top: 0 }}>
            <Text textStyle="H6" tagName="P" className="dx-mb-4">
              On this page
            </Text>
            <Toc items={BUTTON_TOC} />
          </div>
        </Column>
      </Row>
    </DemoSection>
  );
}
