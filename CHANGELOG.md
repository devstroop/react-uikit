# Changelog

All notable changes to `@devstroop/react-uikit` are documented here.
Versioning follows the release flow in `docs/DEVELOPMENT_STRATEGY.md`
(`develop` → `master` release PR, tag `vX.Y.Z`).

## [Unreleased] — toward 2.0.0

### Removed — deprecated prop aliases (breaking)

The `@deprecated` aliases carried since 0.x are removed. Every removal
is a pure rename with identical runtime behavior — codemod-safe.

| Component     | Removed               | Use instead                                                                                 |
| ------------- | --------------------- | ------------------------------------------------------------------------------------------- |
| Button        | `variant="primary"`   | `variant="filled"` (default severity is primary)                                            |
| Button        | `variant="secondary"` | `variant="outlined" severity="secondary"`                                                   |
| Button        | `variant="ghost"`     | `variant="text" severity="secondary"`                                                       |
| Button        | `variant="danger"`    | `variant="filled" severity="danger"`                                                        |
| Button        | `variant="success"`   | `variant="filled" severity="success"`                                                       |
| Button        | `variant="info"`      | `variant="filled" severity="info"`                                                          |
| Pager         | `pageNumber`          | `page`                                                                                      |
| Pager         | `showSummary`         | `showPagingSummary`                                                                         |
| Pager         | `summaryTemplate`     | `pagingSummaryTemplate` (same args plus additional `pageCount`; old callbacks keep working) |
| PanelMenu     | `Multiple`            | `multiple`                                                                                  |
| PanelMenu     | `ShowArrow`           | `showArrow`                                                                                 |
| PanelMenu     | `DisplayStyle`        | `displayStyle`                                                                              |
| PanelMenu     | `Click`               | `onClick`                                                                                   |
| ProfileMenu   | `Template`            | `trigger`                                                                                   |
| ProfileMenu   | `Click`               | `onClick`                                                                                   |
| FabMenu       | `Position`            | `position`                                                                                  |
| FabMenu       | `Click`               | `onClick`                                                                                   |
| Menu          | `Click`               | `onClick`                                                                                   |
| Breadcrumb    | `Click`               | `onClick`                                                                                   |
| ThemeSwitcher | `defaultTheme`        | `defaultValue`                                                                              |

Notes:

- Unknown `variant` strings on Button now fall back to `filled` (unchanged).
- The `tone-*` classes Button still emits are untouched (never deprecated).
- The removed Button variant _CSS_ classes (`.primary/.secondary/.ghost/
.danger/.success/.info`) are deleted: custom selectors targeting them
  stop matching (visual output is unchanged via `style-*`/`tone-*`).
- TypeScript callers get compile errors on removed props. Plain-JS
  callers fail silently (e.g. `pageNumber` renders page 1, `Click`
  handlers never fire) — codemod with the table above.
- Downstream: `1km/admin`'s dev-only `UikitSmoke` page asserts the old
  `ghost` mapping — update it to the canonical `text` + `secondary`
  form when bumping past this release.
- The `--dx-input-padding-*` component hooks retire with `Input`;
  override `--dx-textbox-padding-*` instead (same values).

### Removed — abbreviated background/foreground tokens (breaking)

`--dx-bg-color` → `--dx-background-color`,
`--dx-{tone}-fg-color` → `--dx-{tone}-foreground-color` (primary,
secondary, success, danger, warning, info, light, base, dark, neutral,
soft). Values are unchanged, only renamed.

Compat: the old names survive as reference aliases (remove in 3.0),
so unmigrated stylesheets keep resolving. Migrate at leisure; dropping
the aliases is the only later break.

### Added

- `AutoGrid` — responsive auto-fit grid without breakpoints:
  `repeat(auto-fit, minmax(min(100%, min), 1fr))` with `min` (px number
  or CSS length, default `240`) via `--dx-autogrid-min` and tier/numeric
  `gap` (default `md`). For card tiles, stat grids, and form splits
  that wrap by width instead of snapping at tiers.

- `FormField` — Radzen `FormFieldComponent` parity: `text`, `start`/`end`
  adornments, `helper`, `component` (explicit id), `allowFloatingLabel`
  (default true, CSS-only `:placeholder-shown`), `invalid` (wires
  `aria-invalid` on DOM children), `required` marker. Label points at the
  control only when the id is known to exist; `helper` is attached via
  `aria-describedby` (existing values preserved); blank-placeholder float
  trigger applies to `textarea` and text-like `input` types only
  (checkboxes, radios, dates, selects and friends are untouched) and
  never overrides explicit placeholders. Fragments are never cloned,
  so multi-control children carry no label association; custom
  components receive helper/invalid wiring only if they forward props.
- `Fieldset` — Radzen `FieldsetComponent` parity: `text`, `icon` +
  `iconColor`, `allowCollapse`, `summary`, `headerTemplate` rendered
  beside (never inside) the toggle, controlled `collapsed` +
  `defaultCollapsed` with `onCollapse`/`onExpand`, custom
  `collapseTitle`/`expandTitle` (default `Collapse`/`Expand`) and
  `collapseAriaLabel`/`expandAriaLabel` (default `Collapse`/`Expand`,
  naming the icon-only toggle — with visible text the text itself is
  the accessible name per WCAG 2.5.3).
  Collapse works only with `allowCollapse`; without it the section is
  always expanded. Content stays mounted under the native `hidden`
  attribute so `aria-controls` never dangles. Function children are not
  supported — pass nodes (no released version ever offered them).

### Changed

- `Text` owns its box: `.typography` sets `margin: 0`, so UA `h1–h6`/`p`
  margins never leak. Spacing around text is the parent's job (`Stack`
  gap, `dx-mt-*`). Deletes a class of margin-reset overrides in
  consumers; any layout that relied on UA text margins needs an
  explicit gap.

- Outlined borders render at `--dx-outlined-border-width: 1px`
  on Badge, Button, Alert, Card, and Splitbutton; outlines at
  `--dx-outline-width: 1px`, focus rings at
  `--dx-focus-ring-width: 2px` with `--dx-focus-ring-offset: 2px`.
- Badge density tightened one step per size tier
  (xs `0 4px` … xl `3px 12px`, icon gap `4px` → `2px`).
- Selectbar options are borderless text buttons inside the single
  outer bar border (was double-bordered); selected stays primary fill.
- Button renders an anchor when `href` is set (disabled via
  `aria-disabled` + click suppression); `ref` widens to `HTMLElement`.
  Every button now carries press feedback (`dx-ripple`).
- Icon-only buttons never shrink below the 40px touch target.
- `Stat label` accepts `ReactNode` (was `string`).
- Dialog gains `closeOnOverlayClick` (default true), `closeOnEsc`
  (default true, always preventDefault), `resizable`, and an async
  `canClose` veto for gesture closes.
