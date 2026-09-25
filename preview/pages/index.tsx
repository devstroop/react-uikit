import { useState } from 'react';
import {
  Alert,
  Button,
  Dialog,
  Field,
  Input,
  Text,
  Tooltip,
} from '../../lib/main';

/** Index route: keeps the e2e-target sections (Button, Dialog, Tooltip,
 * Field with error) exactly as the axe/keyboard specs expect them. */
export function IndexPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);
  const error = touched && name.trim() === '' ? 'Name is required.' : null;

  return (
    <div style={{ maxWidth: 720 }}>
      <Text textStyle="H1" tagName="H1">
        react-uikit preview
      </Text>

      <section aria-label="Button">
        <Text textStyle="H2" tagName="H2">
          Button
        </Text>
        <Button
          variant="filled"
          severity="primary"
          onClick={() => setDialogOpen(true)}
        >
          Open dialog
        </Button>
      </section>

      <section aria-label="Tooltip">
        <Text textStyle="H2" tagName="H2">
          Tooltip
        </Text>
        <Tooltip content="Preview tooltip">
          <span>Hover for tooltip</span>
        </Tooltip>
      </section>

      <section aria-label="Forms">
        <Text textStyle="H2" tagName="H2">
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
    </div>
  );
}
