# @devstroop/react-uikit

Generic React UI primitives for Devstroop web apps. Presentational, themeable,
and project-agnostic — no auth, routing, data, or domain coupling. Composable
building blocks that any app styles through design tokens.

## Install

Git-tagged distribution (no npm registry). Pin an exact release tag:

```json
"dependencies": {
  "@devstroop/react-uikit": "github:devstroop/react-uikit#v0.1.0"
}
```

```bash
npm install
```

Import the stylesheet once, then use components:

```tsx
import "@devstroop/react-uikit/style.css";
import { Button, Card, Field, Input } from "@devstroop/react-uikit";

export function SignInForm() {
  return (
    <Card header="Sign in">
      <Field label="Email" htmlFor="email" required>
        <Input id="email" type="email" />
      </Field>
      <Button type="submit">Continue</Button>
    </Card>
  );
}
```

## Components

| Component | Purpose |
|---|---|
| `Button` | variant (`primary`/`secondary`/`ghost`/`danger`/`success`/`info`), size (`xs`/`sm`/`md`/`lg`/`xl`), `fullWidth`, `iconOnly` (requires `aria-label`) |
| `Card` | `elevated`/`outlined`/`interactive` with `header`/`footer` slots |
| `Badge` | tone (`neutral`/`primary`/`success`/`warning`/`danger`) × variant (`soft`/`solid`/`outline`) |
| `Icon` | 40 stroke icons — `name`, `size`, `strokeWidth` |
| `Stat` | label + value + optional `delta`/`hint`; composes inside `Card` |
| `Table` | generic controlled — `columns` + `rows` + `rowKey` + `empty` slot |
| `EmptyState` | icon + title + description + action |
| `Field` | label + control + `hint`/`error` wiring |
| `Label` / `Input` / `Select` / `Checkbox` / `Switch` | form primitives |

All interactive components: `forwardRef`, `className` passthrough, full DOM
attribute support. A11y baseline: semantic elements, `aria-invalid` on invalid
controls, `role="switch"` for `Switch`, keyboard focus-visible rings.

## Theming

Components consume design tokens exclusively — no hardcoded values. Tokens are hand-maintained in `lib/styles/tokens.css` (`--dx-*`), bundled into the published `style.css` (imported once via `lib/main.ts`):

- Light defaults on `:root`; dark values under `[data-theme="dark"]` on `<html>`. Hosts without an explicit `data-theme` get an OS-dark fallback via `@media (prefers-color-scheme: dark)` (specificity-capped with `:where()` so app `:root` rules win ties).
- Toggle at runtime with the `ThemeSwitcher` component, or set `document.documentElement.dataset.theme` to `"light"` / `"dark"` yourself.

Override any subset on your `:root` (or a scoped container) — later rules win:

```css
:root {
  --dx-primary-color: #7c3aed;
  --dx-primary-hover-color: #6d28d9;
  --dx-radius-md: 6px;
}
```

### Shade ramps

Every chromatic hue (`primary`, `secondary`, `info`, `success`, `warning`, `danger`) plus the
achromatic hues (`light`, `base`, `dark`) ships a 5-step Radzen-Shade scale, each in light and
dark themes:

| Token | Meaning |
|---|---|
| `--dx-{hue}-color` | Default (base) step |
| `--dx-{hue}-lighter-color` | 45% white mix |
| `--dx-{hue}-light-color` | 30% white mix |
| `--dx-{hue}-dark-color` | 15% black mix |
| `--dx-{hue}-darker-color` | 30% black mix |
| `--dx-on-{hue}-{step}-color` | Foreground for that step (`var()` alias, drift-proof: pale steps → darker ink, dark steps → light ink, near-white/-black hues → opposite body token) |

`Button`, `Badge`, `Alert`, `Progress`, and `Splitbutton` consume these through their `shade`
prop (`lighter | light | dark | darker`) on every variant — no `brightness()` filters. Pale
filled steps pair with dark text automatically; lighter/light `text`-variant steps suit dark
surfaces. Hover states fall back to the base-hue hover token. Values are M3 approximations
(AA-unverified); keep the three theme blocks (`:root`, `:root[data-theme="dark"]`, OS fallback)
in sync when overriding.

See `lib/styles/tokens.css` for the full list (color, radius, space, font, shadow, transition/motion, z-index, control heights).

### Text (RadzenText parity)

`Text` covers the full Radzen text hierarchy — `DisplayH1..H6`, `H1..H6`,
`Subtitle1/2`, `Body1/2`, `Button`, `Caption`, `Overline` via `textStyle` —
with automatic semantic elements (`tagName="Auto"` default; override with
`Div | Span | P | H1..H6 | A | Button | Pre | Strong`) and `textAlign`
(`Left | Right | Center | Justify | Start | End | JustifyAll`). The `Text`
prop takes precedence over children. Pair any style with
a `dx-text-*` color utility (`default | muted | primary | success |
warning | danger | info`) instead of ad-hoc muted/brand text
classes in products. Anchor-link headings are intentionally unsupported
(no consumer need).

## Development

See `docs/DEVELOPMENT_STRATEGY.md` for branch/PR/release protocol.

```bash
npm install
npm run lint      # eslint
npm run typecheck # tsc --noEmit
npm test          # vitest
npm run build     # vite lib build → dist/ (es + cjs + d.ts + style.css)
```

## License

MIT
