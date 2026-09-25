import { useState } from 'react';
import {
  Button,
  FabMenu,
  Row,
  Splitbutton,
  Text,
  Togglebutton,
} from '../../lib/main';
import { DemoSection } from './section';

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
      <Row align="center" gap="md">
        <Button variant="filled">Filled</Button>
        <Button variant="flat">Flat</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </Row>
      <Row align="center" gap="md">
        <Button severity="danger">Danger</Button>
        <Button severity="success">Success</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
      </Row>
      <Row align="center" gap="md">
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button fullWidth>Full width</Button>
      </Row>
      <Text textStyle="Body1" className="dx-text-muted">
        Deprecated variant aliases were removed in 2.0 — see CHANGELOG.
      </Text>
    </DemoSection>
  );
}
