import { useState } from 'react';
import {
  Alert,
  Badge,
  Button,
  Card,
  Dialog,
  Field,
  Input,
  Link,
  Stack,
  Text,
  Tooltip,
} from '../../lib/main';
import { DEMO_GROUPS } from '../nav';

const COMPONENT_COUNT = DEMO_GROUPS.reduce((n, g) => n + g.routes.length, 0);

/** Grouped card catalog — every demo route reachable from the front door. */
function ComponentCatalog() {
  return (
    <section aria-label="Browse components" className="dx-mb-8">
      <Text textStyle="h2" tagName="h2">
        Browse the kit
      </Text>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 16,
        }}
      >
        {DEMO_GROUPS.map((group) => (
          <Card
            key={group.title}
            header={
              <Stack orientation="horizontal" gap={8} align="center">
                <Text textStyle="h5" tagName="h3">
                  {group.title}
                </Text>
                <Badge size="sm" severity="secondary">
                  {group.routes.length}
                </Badge>
              </Stack>
            }
          >
            <Stack orientation="vertical" gap={8}>
              {group.routes.map((r) => (
                <Link key={r.slug} href={`#/${r.slug}`}>
                  {r.title}
                </Link>
              ))}
            </Stack>
          </Card>
        ))}
      </div>
    </section>
  );
}

/** Index route: catalog first, then the curated live sections the
 * axe/keyboard specs target (Button, Tooltip, Field with error). */
export function IndexPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);
  const error = touched && name.trim() === '' ? 'Name is required.' : null;

  return (
    <>
      <Text textStyle="h1" tagName="h1" className="dx-mb-4">
        react-uikit preview
      </Text>
      <Text textStyle="subtitle1" tagName="p" className="dx-text-muted dx-pb-8">
        All {COMPONENT_COUNT} components, live and interactive — browse the
        catalog or try the examples below.
      </Text>

      <ComponentCatalog />

      <section aria-label="See it in action" className="dx-mb-8">
        <Text textStyle="h2" tagName="h2">
          See it in action
        </Text>
        <Button
          variant="filled"
          severity="primary"
          onClick={() => setDialogOpen(true)}
        >
          Open dialog
        </Button>
      </section>

      <section aria-label="Tooltip" className="dx-mb-8">
        <Text textStyle="h2" tagName="h2">
          Tooltip
        </Text>
        <Tooltip content="Preview tooltip">
          <span>Hover for tooltip</span>
        </Tooltip>
      </section>

      <section aria-label="Forms" className="dx-mb-8">
        <Text textStyle="h2" tagName="h2">
          Field
        </Text>
        <Field label="Name" error={error ?? undefined}>
          {({ inputId }) => (
            <Input
              id={inputId}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setTouched(true);
              }}
              onBlur={() => setTouched(true)}
            />
          )}
        </Field>
      </section>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Preview dialog"
        description="Verifies focus, Esc, and axe cleanliness."
        footer={
          <Button variant="text" onClick={() => setDialogOpen(false)}>
            Close
          </Button>
        }
      >
        <Alert severity="info" title="Axe runs against this dialog too" />
      </Dialog>
    </>
  );
}
