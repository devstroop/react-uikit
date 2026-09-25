import { useState } from 'react';
import {
  Button,
  Card,
  Column,
  EmptyState,
  Field,
  Input,
  Layout,
  Password,
  Row,
  Text,
} from '../../lib/main';
import { DemoSection } from './section';

function LoginRecipe() {
  const [user, setUser] = useState('');
  return (
    <Row align="center" gap="md">
      <Column size={12} sizeMd={6}>
        <Card variant="filled">
          <Text textStyle="H2" tagName="H2">
            Welcome back
          </Text>
          <Text textStyle="Body1" className="dx-text-muted">
            Sign in to continue to your zones.
          </Text>
        </Card>
      </Column>
      <Column size={12} sizeMd={6}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
        </form>
      </Column>
    </Row>
  );
}

function NotFoundRecipe() {
  return (
    <Layout bare>
      <EmptyState
        title="Page not found"
        description="The link moved or never existed."
        action={<Button variant="outlined">Go home</Button>}
      />
    </Layout>
  );
}

export function RecipeDemos({ slug }: { slug: string }) {
  if (slug === 'recipe-login') {
    return (
      <DemoSection title="Login split card">
        <LoginRecipe />
        <Text textStyle="Body1" className="dx-text-muted">
          Pattern, not a component: branded panel + form column. Wrap in your
          own auth shell; the submit handler is yours.
        </Text>
      </DemoSection>
    );
  }
  return (
    <DemoSection title="Bare 404">
      <NotFoundRecipe />
      <Text textStyle="Body1" className="dx-text-muted">
        Layout bare renders children with no wrapper — the deliberate no-chrome
        pattern for error pages.
      </Text>
    </DemoSection>
  );
}
