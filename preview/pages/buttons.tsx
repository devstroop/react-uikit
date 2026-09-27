import { useState } from 'react';
import {
  Button,
  FabMenu,
  Row,
  Splitbutton,
  Stack,
  Text,
  Togglebutton,
  type ButtonShade,
  type ButtonStyle,
  type ButtonVariant,
} from '../../lib/main';
import { DemoSection } from './section';

const BUTTON_STYLES: ButtonStyle[] = [
  'primary',
  'secondary',
  'base',
  'info',
  'success',
  'warning',
  'danger',
];

const BUTTON_SHADES: Exclude<ButtonShade, 'default'>[] = [
  'lighter',
  'light',
  'dark',
  'darker',
];

const BUTTON_VARIANTS: ButtonVariant[] = ['filled', 'flat', 'outlined', 'text'];

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
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
      {BUTTON_VARIANTS.map((variant) => (
        <div key={variant}>
          <Row align="center" gap="md">
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
          <Stack orientation="vertical" gap="md">
            {BUTTON_SHADES.map((shade) => (
              <Row key={shade} align="center" gap="md">
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
          <Text textStyle="Body1" className="dx-text-muted">
            Light and Dark button styles don&apos;t have Shades
          </Text>
          <Row align="center" gap="md">
            <Button
              variant={variant}
              severity="light"
              onClick={() => undefined}
            >
              Light
            </Button>
            <Button variant={variant} severity="dark" onClick={() => undefined}>
              Dark
            </Button>
          </Row>
        </div>
      ))}
      <Text textStyle="Subtitle1" tagName="H3" className="dx-mt-4">
        Sizes and states
      </Text>
      <Row align="center" gap="md">
        <Button size="sm" onClick={() => undefined}>
          Small
        </Button>
        <Button size="lg" onClick={() => undefined}>
          Large
        </Button>
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button fullWidth>Full width</Button>
      </Row>
    </DemoSection>
  );
}
