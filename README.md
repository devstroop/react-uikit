# @devstroop/react-uikit

Generic React UI primitives for Devstroop web apps. Presentational, themeable,
and project-agnostic — no auth, routing, data, or domain coupling. Composable
building blocks that any app styles through design tokens.

## Install

Git-tagged distribution (no npm registry). Releases are tagged `vX.Y.Z` on the
release PR (see `docs/DEVELOPMENT_STRATEGY.md`):

```json
"dependencies": {
  "@devstroop/react-uikit": "github:devstroop/react-uikit#vX.Y.Z"
}
```

Until the first tag is cut, pin a branch or an exact commit:

```json
"dependencies": {
  "@devstroop/react-uikit": "github:devstroop/react-uikit#main"
}
```

```bash
npm install
```

Import the stylesheet once, then use components:

```tsx
import '@devstroop/react-uikit/style.css';
import { Button, Card, FormField, Textbox } from '@devstroop/react-uikit';

export function SignInForm() {
  return (
    <Card header="Sign in">
      <FormField text="Email" helper="We never share it.">
        <Textbox id="email" type="email" />
      </FormField>
      <Button type="submit">Continue</Button>
    </Card>
  );
}
```

## Components

Every component below is exported from `@devstroop/react-uikit`; most are
demoed in the preview app (`npm run dev` → `:5199`). Props are documented as
JSDoc on each export in the published types.

### Layout

`Layout` · `Header` · `Body` · `Footer` · `Sidebar` · `SidebarToggle` ·
`Row` · `Column` · `Stack` · `AutoGrid`

### Typography

`Text` (full RadzenText hierarchy — see [Text](#text-radzentext-parity)) ·
`Icon` (40 stroke icons, `name`/`size`/`strokeWidth`)

### Buttons

`Button` (variant `primary|secondary|ghost|danger|success|info`, size
`xs..xl`, `fullWidth`, `iconOnly`) · `Togglebutton` · `Splitbutton` ·
`FabMenu`

### Forms

`Form` · `FormField` · `Fieldset` · `Textbox` · `Textarea` · `Password` ·
`Mask` · `Numeric` · `Select` · `Dropdown` · `Autocomplete` · `Listbox` ·
`Checkbox` · `Checkboxlist` · `Radiobuttonlist` · `Switch` · `Slider` ·
`Rating` · `Colorpicker` · `Datepicker` · `Timespanpicker` · `SecurityCode` ·
`Upload` · `Selectbar` · `Label` · `DropZone`

`Checkbox` also exposes an `indeterminate` (mixed) prop — the browser-native
partially-checked state, wired for pointer and keyboard.

Validation: `Form` + `useFormField` with validator helpers (`required`,
`email`, `pattern`, `minLength`, `maxLength`, `range`, `compare`,
`requiredTrue`, `custom`, `runValidators`). `Field` and `Input` remain
exported but are **deprecated** — prefer `FormField` and `Textbox`.

### Feedback

`Alert` · `Progress` · `Skeleton` · `EmptyState` · `Toast` (via
`ToastProvider` + `useToast`) · `Dialog` (declarative, or imperative via
`DialogProvider` + `useDialog()` → `confirm()` / `alert()` promises) ·
`Tooltip` (wrapper, or document-wide delegation via `targetSelector`,
optional `durationMs` auto-dismiss)

### Navigation

`Breadcrumb` · `Link` · `Menu` · `PanelMenu` · `ProfileMenu` · `Tabs` ·
`Steps` · `Toc` · `Pager` · context menus via `ContextMenuProvider` +
`useContextMenu()`

### Data

`Table` · `DataGrid` (sorting, filtering, editing, paging, frozen columns,
column picker/reorder/resize, multi-level grouping, footer aggregates,
row virtualization, CSV export, server-side `onRangeChange` ranges) ·
`DataList` · `VirtualGrid` · `Tree` ·
`PickList` · `Pivot` · `Chart` (line, area, bar, column, scatter, bubble,
pie, donut, gauge, radar, funnel, heatmap; stacked series via `stack`) ·
`Gantt` · `Scheduler` · `Timeline` · `DataFilter` · `QRCode` ·
`Barcode`

### Display

`Card` · `Badge` · `Avatar` · `Stat` · `Accordion` · `Carousel` ·
`Splitter`

### Theme

`ThemeSwitcher` (light/dark/system with persistence) · tokens below in
[Theming](#theming)

### Hooks & utilities

`useFormContext` · `useFormField` · `useToast` · `useDialog` ·
`useContextMenu` · `useMediaQuery` · `formatMasked` · `getByPath`

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

| Token                        | Meaning                                                                                                                                              |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--dx-{hue}-color`           | Default (base) step                                                                                                                                  |
| `--dx-{hue}-lighter-color`   | 45% white mix                                                                                                                                        |
| `--dx-{hue}-light-color`     | 30% white mix                                                                                                                                        |
| `--dx-{hue}-dark-color`      | 15% black mix                                                                                                                                        |
| `--dx-{hue}-darker-color`    | 30% black mix                                                                                                                                        |
| `--dx-on-{hue}-{step}-color` | Foreground for that step (`var()` alias, drift-proof: pale steps → darker ink, dark steps → light ink, near-white/-black hues → opposite body token) |

`Button`, `Badge`, `Alert`, `Progress`, and `Splitbutton` consume these through their `shade`
prop (`lighter | light | dark | darker`) on every variant — no `brightness()` filters. Pale
filled steps pair with dark text automatically; lighter/light `text`-variant steps suit dark
surfaces. Hover states fall back to the base-hue hover token. Values are M3 approximations
(AA-unverified); keep the three theme blocks (`:root`, `:root[data-theme="dark"]`, OS fallback)
in sync when overriding.

See `lib/styles/tokens.css` for the full list (color, radius, space, font, shadow, transition/motion, z-index, control heights).

### Preview palettes (`data-palette`)

The **preview app only** (not the published package) ships five brand
palettes — `fluent`, `material-3`, `github`, `material`, `shadcn` — that
re-map the same `--dx-*` tokens onto each brand's look:

```html
<html data-palette="github" data-theme="dark"></html>
```

- Styles live in `preview/styles/` (`fluent` and `material-3` sheets are
  generated from upstream source by `scripts/extract-palettes.mjs`; the rest
  are hand-authored token sheets). They are **not** bundled into `style.css`,
  so consumers get them by copying those files (or the transform script) into
  their own app — `data-palette` is only a scoping convention.
- Load the sheet(s) first, then set `document.documentElement.dataset.palette`;
  remove the attribute to fall back to the default tokens. Dark variants work
  through the usual `data-theme="dark"` blocks (see the preview's
  `PALETTE_LOADERS` for the pattern).

```css
/* after copying preview/styles/github.css into your app */
:root[data-palette='github'] {
  --dx-primary-color: #0969da;
  /* … */
}
```

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
npm run lint          # eslint
npm run typecheck     # tsc --noEmit (includes e2e/)
npm test              # vitest
npm run build         # vite lib build → dist/ (es + cjs + d.ts + style.css)
npm run format        # prettier --write .
npm run dev           # preview app on :5199
npm run test:e2e      # playwright + axe against the preview build
```

## License

MIT
