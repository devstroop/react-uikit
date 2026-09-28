import { useState } from 'react';
import { Stack, Text, ThemeSwitcher, ThemeToggle } from '../../lib/main';
import { DemoPage } from './demo-page';

function ControlledThemeDemo() {
  const [theme, setTheme] = useState('material-3');
  return (
    <Stack orientation="vertical" align="start" gap="sm">
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
    <Stack orientation="vertical" align="start" gap="sm">
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
            content: (
              <ThemeSwitcher storageKey={null} attribute="data-demo-theme" />
            ),
          },
          {
            id: 'themeswitcher-controlled',
            title: 'Controlled',
            content: <ControlledThemeDemo />,
          },
        ]}
      />
    );
  }
  if (slug === 'themetoggle') {
    return (
      <DemoPage
        title="ThemeToggle"
        description="Light/dark/system appearance switch. Uncontrolled instances write <html data-theme> and persist under dx-theme; controlled instances are pure UI."
        sections={[
          {
            id: 'themetoggle-uncontrolled',
            title: 'Uncontrolled',
            description:
              'Persistence off for the showcase; flips the page appearance immediately.',
            content: <ThemeToggle storageKey={null} />,
          },
          {
            id: 'themetoggle-controlled',
            title: 'Controlled',
            content: <ControlledToggleDemo />,
          },
        ]}
      />
    );
  }
  return null;
}
