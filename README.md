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

Components consume design tokens exclusively — no hardcoded values. Tokens are generated from `uikit/specs/tokens.schema.json` via `scripts/generate-css.mjs:1` (`--dt-*`):

- `themes/<name>/tokens.json` → `themes/<name>/tokens.css` (generated, do not edit). Only `default` is vendored into `lib/styles/tokens.css` (`uikit.yml:13`); other themes are imported directly from `uikit/themes/<name>/tokens.css`.
- Pick a theme by importing its tokens once, then the framework:

```ts
import "@devstroop/react-uikit/style.css";
import "uikit/themes/default/tokens.css"; // or fluent/github/material/material-3/shadcn
```

Override any subset on your `:root` (or a scoped container):

```css
:root {
  --dt-color-primary: #7c3aed;
  --dt-color-primary-hover: #6d28d9;
  --dt-radius-md: 6px;
}
```

Dark parity via `[data-theme="dark"]` on `<html>` (only tokens with a `dark` value are re-emitted there). See `lib/styles/tokens.css` for the full vendored list and `uikit/specs/tokens.md` for the contract.

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
