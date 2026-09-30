import { useState } from 'react';
import { Stack, Text, ThemeSwitcher, ThemeToggle } from '../../lib/main';
import { DemoPage } from './demo-page';
import { EventLog } from './shared/EventLog';
import { KeyboardTable, type KeyboardBinding } from './shared/KeyboardTable';

function UncontrolledThemeSwitcherDemo() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" align="start" gap={8}>
      <ThemeSwitcher
        storageKey={null}
        attribute="data-demo-theme"
        onChange={(theme) =>
          setEvents((prev) => [...prev, `onChange: ${theme}`])
        }
      />
      <EventLog events={events} emptyText="Pick a theme to log onChange." />
    </Stack>
  );
}

const CUSTOM_THEMES = ['material-3', 'github', 'shadcn'];

function CustomThemesDemo() {
  return (
    <Stack orientation="vertical" align="start" gap={12}>
      <Stack orientation="horizontal" align="center" gap={12}>
        <ThemeSwitcher storageKey={null} attribute="data-demo-theme" />
        <Text textStyle="Caption" className="dx-text-muted">
          default six
        </Text>
      </Stack>
      <Stack orientation="horizontal" align="center" gap={12}>
        <ThemeSwitcher
          storageKey={null}
          attribute="data-demo-theme"
          themes={CUSTOM_THEMES}
          label="Accent theme"
        />
        <Text textStyle="Caption" className="dx-text-muted">
          custom list + label
        </Text>
      </Stack>
    </Stack>
  );
}

function ControlledThemeDemo() {
  const [theme, setTheme] = useState('material-3');
  return (
    <Stack orientation="vertical" align="start" gap={8}>
      <ThemeSwitcher value={theme} onChange={setTheme} />
      <Text textStyle="Caption" className="dx-text-muted">
        value: {theme} — controlled mode never writes data-palette
      </Text>
    </Stack>
  );
}

function ControlledToggleDemo() {
  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');
  return (
    <Stack orientation="vertical" align="start" gap={8}>
      <ThemeToggle
        value={appearance}
        onChange={setAppearance}
        label="Appearance"
      />
      <Text textStyle="Caption" className="dx-text-muted">
        value: {appearance} — controlled mode never writes data-theme
      </Text>
    </Stack>
  );
}

function ThemeToggleEventsDemo() {
  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" align="start" gap={8}>
      <ThemeToggle
        value={appearance}
        onChange={(theme) => {
          setAppearance(theme);
          setEvents((prev) => [...prev, `onChange: ${theme}`]);
        }}
        label="Appearance"
      />
      <EventLog events={events} emptyText="Click the toggle to log onChange." />
    </Stack>
  );
}

const THEME_TOGGLE_KEYS: KeyboardBinding[] = [
  { keys: 'Tab', action: 'Focus the appearance toggle' },
  {
    keys: 'Enter / Space',
    action:
      'Switch appearance (test: toggles with Enter and Space on the button)',
  },
];

export function ThemeDemos({ slug }: { slug: string }) {
  if (slug === 'themeswitcher') {
    return (
      <DemoPage
        title="ThemeSwitcher"
        description="Dropdown that picks the active theme. Uncontrolled instances apply it to <html data-palette> and persist; controlled instances are pure UI."
        sections={[
          {
            id: 'themeswitcher-uncontrolled',
            title: 'Uncontrolled',
            description:
              'Persistence off for the showcase; choosing a theme writes it to <html data-demo-theme> — the attribute prop overrides the default data-palette so the preview chrome stays the single owner of the real palettes.',
            content: <UncontrolledThemeSwitcherDemo />,
          },
          {
            id: 'themeswitcher-controlled',
            title: 'Controlled',
            content: <ControlledThemeDemo />,
          },
          {
            id: 'themeswitcher-custom',
            title: 'Custom themes',
            description:
              'The themes prop swaps the options list — the default six when omitted (test: offers the default six themes when themes is omitted) or your own names (test: accepts a custom themes list) — and label replaces the default “Theme” text (test: forwards id and className, and renders the label).',
            content: <CustomThemesDemo />,
          },
        ]}
      />
    );
  }
  if (slug === 'themetoggle') {
    return (
      <DemoPage
        title="ThemeToggle"
        description="Light/dark/system appearance as an icon-only toggle button — moon while light, sun while dark. Uncontrolled instances write <html data-theme> and persist under dx-theme; controlled instances are pure UI."
        sections={[
          {
            id: 'themetoggle-uncontrolled',
            title: 'Uncontrolled',
            description:
              'A Togglebutton wearing the state icon: aria-pressed carries the mode and the glyph previews what a click applies — moon in light mode switches to dark, sun in dark mode switches to light. Persistence off for the showcase; clicking flips the page appearance immediately.',
            content: <ThemeToggle storageKey={null} />,
          },
          {
            id: 'themetoggle-controlled',
            title: 'Controlled',
            content: <ControlledToggleDemo />,
          },
          {
            id: 'themetoggle-events',
            title: 'Events',
            description:
              'Every flip lands onChange with the new explicit theme (test: calls onChange with the new explicit theme) — controlled mode never touches the document (test: supports a controlled value without touching the document).',
            content: <ThemeToggleEventsDemo />,
          },
          {
            id: 'themetoggle-keyboard',
            title: 'Keyboard',
            content: <KeyboardTable bindings={THEME_TOGGLE_KEYS} />,
          },
        ]}
      />
    );
  }
  return null;
}
