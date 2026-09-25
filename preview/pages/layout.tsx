import {
  Body,
  Column,
  Footer,
  Header,
  Layout,
  Row,
  Sidebar,
  SidebarToggle,
  Stack,
  Text,
} from '../../lib/main';
import { DemoSection } from './section';

export function LayoutDemos({ slug }: { slug: string }) {
  if (slug === 'row') {
    return (
      <DemoSection title="Row">
        <Row align="center" gap="md">
          <span>start</span>
          <span>middle</span>
          <span>end</span>
        </Row>
        <Row justify="space-between" align="center" gap="md">
          <Column size={6}>size 6</Column>
          <Column size={6}>size 6</Column>
        </Row>
        <Row justify="space-between" align="center" gap="md">
          <Column size={12} sizeMd={4}>
            12 → md 4
          </Column>
          <Column size={12} sizeMd={4} offsetMd={2}>
            offset md 2
          </Column>
        </Row>
      </DemoSection>
    );
  }
  if (slug === 'column') {
    return (
      <DemoSection title="Column">
        <Row align="center" gap="md">
          <Column size={4}>4</Column>
          <Column size={4}>4</Column>
          <Column size={4}>4</Column>
        </Row>
        <Row align="center" gap="md">
          <Column size={6} offset={3}>
            size 6, offset 3
          </Column>
        </Row>
        <Row align="center" gap="md">
          <Column order={2}>second</Column>
          <Column order={1}>first</Column>
        </Row>
      </DemoSection>
    );
  }
  if (slug === 'stack') {
    return (
      <DemoSection title="Stack">
        <Stack orientation="horizontal" gap="md">
          <span>row a</span>
          <span>row b</span>
        </Stack>
        <Stack orientation="vertical" gap="sm">
          <span>col a</span>
          <span>col b</span>
        </Stack>
      </DemoSection>
    );
  }
  if (slug === 'header') {
    return (
      <DemoSection title="Header">
        <Header>
          <Text>Default header</Text>
        </Header>
        <Header sticky>
          <Text>Sticky header (pins on scroll)</Text>
        </Header>
      </DemoSection>
    );
  }
  if (slug === 'body') {
    return (
      <DemoSection title="Body">
        <Body>
          <Text>Padded body (default)</Text>
        </Body>
        <Body padded={false} as="div">
          <Text>Edge-to-edge body</Text>
        </Body>
      </DemoSection>
    );
  }
  if (slug === 'footer') {
    return (
      <DemoSection title="Footer">
        <Footer>
          <Text>Default footer</Text>
        </Footer>
        <Footer sticky>
          <Text>Sticky footer</Text>
        </Footer>
      </DemoSection>
    );
  }
  if (slug === 'sidebar') {
    return (
      <DemoSection title="Sidebar">
        <Row gap="md">
          <Sidebar>
            <Text>Left sidebar</Text>
          </Sidebar>
          <Sidebar position="right">
            <Text>Right sidebar</Text>
          </Sidebar>
        </Row>
        <Row gap="md">
          <Sidebar position="start">
            <Text>Logical start</Text>
          </Sidebar>
          <Sidebar expanded={false}>
            <Text>Collapsed</Text>
          </Sidebar>
        </Row>
      </DemoSection>
    );
  }
  if (slug === 'sidebartoggle') {
    return (
      <DemoSection title="SidebarToggle">
        <SidebarToggle />
        <SidebarToggle label="Collapse navigation" />
      </DemoSection>
    );
  }
  return (
    <DemoSection title="Layout">
      <Layout>
        <Header>
          <Text>Header</Text>
        </Header>
        <Sidebar>
          <Text>Sidebar</Text>
        </Sidebar>
        <Body>
          <Text>Body</Text>
        </Body>
        <Footer>
          <Text>Footer</Text>
        </Footer>
      </Layout>
      <Text textStyle="Body1" className="dx-text-muted">
        Regions route by type in any order; bare renders children without a
        wrapper.
      </Text>
      <Layout bare>
        <Text>Bare content (no wrapper)</Text>
      </Layout>
    </DemoSection>
  );
}
