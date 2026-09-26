import {
  Accordion,
  Avatar,
  Badge,
  Card,
  Carousel,
  Row,
  Splitter,
  Stat,
  Text,
} from '../../lib/main';
import { DemoSection } from './section';

export function DisplayDemos({ slug }: { slug: string }) {
  if (slug === 'badge') {
    return (
      <DemoSection title="Badge">
        <Row align="center" gap="md">
          <Badge>Default</Badge>
          <Badge severity="primary">Primary</Badge>
          <Badge severity="success" variant="outlined">
            Outlined
          </Badge>
          <Badge severity="danger" variant="text">
            Text
          </Badge>
        </Row>
      </DemoSection>
    );
  }
  if (slug === 'avatar') {
    return (
      <DemoSection title="Avatar">
        <Row align="center" gap="md">
          <Avatar name="Ada Lovelace" />
          <Avatar name="Grace Hopper" status="online" />
          <Avatar
            name="Katherine Johnson"
            email="katherine.johnson@nasa.gov"
            status="away"
          />
        </Row>
        <Text textStyle="Body1" className="dx-text-muted">
          Email resolves a Gravatar (retro default); a broken photo falls back
          to initials.
        </Text>
      </DemoSection>
    );
  }
  if (slug === 'stat') {
    return (
      <DemoSection title="Stat">
        <Row align="center" gap="md">
          <Stat label="Active" value="128" />
          <Stat label="Churn" value="3.2%" delta="-0.4%" deltaTone="success" />
        </Row>
      </DemoSection>
    );
  }
  if (slug === 'accordion') {
    return (
      <DemoSection title="Accordion">
        <Accordion
          items={[
            { key: 'a', title: 'First', content: <Text>First body</Text> },
            { key: 'b', title: 'Second', content: <Text>Second body</Text> },
          ]}
        />
      </DemoSection>
    );
  }
  if (slug === 'carousel') {
    return (
      <DemoSection title="Carousel">
        <Carousel
          items={[
            <Text key="a">Slide one</Text>,
            <Text key="b">Slide two</Text>,
          ]}
        />
      </DemoSection>
    );
  }
  if (slug === 'splitter') {
    return (
      <DemoSection title="Splitter">
        <Splitter
          panes={[
            { size: '30%', children: <Text>Left pane</Text> },
            { children: <Text>Right pane</Text> },
          ]}
        />
      </DemoSection>
    );
  }
  return (
    <DemoSection title="Card">
      <Row align="center" gap="md">
        <Card variant="elevated" header={<Text>Elevated</Text>}>
          <Text textStyle="Body1">Card body.</Text>
        </Card>
        <Card variant="outlined" header={<Text>Outlined</Text>}>
          <Text textStyle="Body1">Card body.</Text>
        </Card>
        <Card
          variant="filled"
          footer={
            <Text textStyle="Caption" className="dx-text-muted">
              Footer
            </Text>
          }
        >
          <Text textStyle="Body1">With footer.</Text>
        </Card>
      </Row>
    </DemoSection>
  );
}
