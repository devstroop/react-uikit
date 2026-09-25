import { useState } from "react";
import { createRoot } from "react-dom/client";
import "../lib/styles/tokens.css";
import "../lib/utilities.css";
import {
  Alert,
  Button,
  Dialog,
  Field,
  Input,
  Text,
  Tooltip,
} from "../lib/main";

/**
 * Minimal e2e target (NOT shipped): exercises the chrome the axe spec
 * expects — theme <select>, dark-mode checkbox, Button, Dialog,
 * Tooltip, and a Field with an error. The full per-component showcase
 * (B1.4) expands this entry.
 */
const THEMES = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn",
] as const;

function Preview() {
  const [theme, setTheme] = useState<string>("default");
  const [dark, setDark] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);
  const error = touched && name.trim() === "" ? "Name is required." : null;

  return (
    <main
      data-preview-theme={theme}
      data-theme={dark ? "dark" : undefined}
      style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}
    >
      <Text textStyle="H1" tagName="H1">
        react-uikit preview
      </Text>

      <section aria-label="Chrome controls">
        <div className="chrome-controls">
          <label htmlFor="preview-theme">Theme</label>
          <select
            id="preview-theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            {THEMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <label htmlFor="preview-dark">
            <input
              id="preview-dark"
              type="checkbox"
              checked={dark}
              onChange={(e) => setDark(e.target.checked)}
            />
            Dark mode
          </label>
        </div>
      </section>

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
    </main>
  );
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<Preview />);
}
