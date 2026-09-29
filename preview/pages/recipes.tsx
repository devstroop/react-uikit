import { useState } from 'react';
import {
  Button,
  Card,
  Column,
  EmptyState,
  Field,
  Footer,
  Header,
  Icon,
  Input,
  Layout,
  Password,
  Row,
  Stack,
  Text,
} from '../../lib/main';
import { DemoPage } from './demo-page';
import { EventLog } from './shared/EventLog';

function LoginPanel() {
  return (
    <Stack>
      <Text textStyle="H2" tagName="H2">
        Welcome back
      </Text>
      <Text textStyle="Body1" className="dx-text-muted">
        Sign in to continue to your zones.
      </Text>
    </Stack>
  );
}

function LoginForm({ onSubmit }: { onSubmit?: () => void } = {}) {
  const [user, setUser] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
    >
      <Stack gap={16}>
        <Field label="Username">
          {({ inputId }) => (
            <Input
              id={inputId}
              value={user}
              onChange={(e) => setUser(e.target.value)}
              autoComplete="username"
            />
          )}
        </Field>
        <Field label="Password">
          {({ inputId }) => (
            <Password id={inputId} autoComplete="current-password" />
          )}
        </Field>
        <Button type="submit" fullWidth>
          Sign in
        </Button>
      </Stack>
    </form>
  );
}

function LoginRecipe({ onSubmit }: { onSubmit?: () => void } = {}) {
  return (
    <Row align="center" gap={12}>
      <Column size={12} sizeMd={6}>
        <LoginPanel />
      </Column>
      <Column size={12} sizeMd={6}>
        <LoginForm onSubmit={onSubmit} />
      </Column>
    </Row>
  );
}

function LoginFormSection() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={12}>
      <LoginForm
        onSubmit={() =>
          setEvents((prev) => [
            ...prev,
            'submit: preventDefault — wire your auth handler',
          ])
        }
      />
      <EventLog events={events} emptyText="Sign in to log the submit hook." />
    </Stack>
  );
}

function goHome() {
  window.location.hash = '#/';
}

function NotFoundRecipe({ onHome = goHome }: { onHome?: () => void } = {}) {
  return (
    <Layout bare>
      <EmptyState
        title="Page not found"
        description="The link moved or never existed."
        action={
          <Button variant="outlined" onClick={onHome}>
            Go home
          </Button>
        }
      />
    </Layout>
  );
}

function NotFoundChromeDemo() {
  return (
    <Row gap={12} align="start">
      <Column size={12} sizeMd={6}>
        <Card header="Layout bare">
          <Layout bare>
            <EmptyState
              title="Page not found"
              description="The link moved or never existed."
            />
          </Layout>
        </Card>
      </Column>
      <Column size={12} sizeMd={6}>
        <Card header="Layout + Header + Footer">
          <Layout>
            <Header>
              <Text textStyle="Subtitle1" tagName="H3">
                Acme
              </Text>
            </Header>
            <EmptyState
              title="Page not found"
              description="The link moved or never existed."
            />
            <Footer>
              <Text textStyle="Caption" className="dx-text-muted">
                © Acme
              </Text>
            </Footer>
          </Layout>
        </Card>
      </Column>
    </Row>
  );
}

function NotFoundVariationsDemo() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={16}>
      <Layout bare>
        <EmptyState
          icon={<Icon name="alert" size="xl" />}
          title="Can’t reach the server"
          description="Check your connection and try again."
          action={
            <Button
              variant="outlined"
              onClick={() => setEvents((prev) => [...prev, 'action: retry'])}
            >
              Retry
            </Button>
          }
        />
      </Layout>
      <Layout bare>
        <EmptyState
          title="Session expired"
          description="Sign in again to continue."
          action={
            <Button
              variant="outlined"
              onClick={() => setEvents((prev) => [...prev, 'action: sign in'])}
            >
              Sign in
            </Button>
          }
        />
      </Layout>
      <EventLog
        events={events}
        emptyText="Retry or sign in to log the action."
      />
    </Stack>
  );
}

export function RecipeDemos({ slug }: { slug: string }) {
  if (slug === 'recipe-login') {
    return (
      <DemoPage
        title="Login split card"
        description="Pattern, not a component: branded panel + form column. Wrap in your own auth shell; the submit handler is yours."
        sections={[
          {
            id: 'recipe-login-pattern',
            title: 'The pattern',
            description:
              'Panel and form in a Row — 6/6 columns from md up, stacked on small screens.',
            content: <LoginRecipe />,
          },
          {
            id: 'recipe-login-form',
            title: 'The form column',
            description:
              'Field wires the label to the input id; submit only preventDefault in the demo — swap in your auth handler.',
            content: <LoginFormSection />,
          },
          {
            id: 'recipe-login-panel',
            title: 'The panel column',
            description:
              'Heading plus muted helper copy — brand voice lives in your shell; the recipe only arranges it.',
            content: <LoginPanel />,
          },
        ]}
      />
    );
  }
  return (
    <DemoPage
      title="Bare 404"
      description="Layout bare renders children with no wrapper — the deliberate no-chrome pattern for error pages."
      sections={[
        {
          id: 'recipe-404-pattern',
          title: 'The pattern',
          description:
            'Nothing between the route and the error copy; Go home really navigates to the index route.',
          content: <NotFoundRecipe />,
        },
        {
          id: 'recipe-404-chrome',
          title: 'Bare vs chrome',
          description:
            'The same content with and without the shell — bare skips the regions the default Layout assembles (test: renders children without a wrapper when bare).',
          content: <NotFoundChromeDemo />,
        },
        {
          id: 'recipe-404-variations',
          title: 'Variations',
          description:
            'The shell is content-agnostic — swap the copy for any failure; the action slot stays interactive (test: keeps action content interactive).',
          content: <NotFoundVariationsDemo />,
        },
      ]}
    />
  );
}
