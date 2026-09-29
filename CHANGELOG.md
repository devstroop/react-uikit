# Changelog

All notable changes to `@devstroop/react-uikit` are documented here.
Versioning follows the release flow in `docs/DEVELOPMENT_STRATEGY.md`
(`develop` → `main` release PR, tag `vX.Y.Z`).

## [Unreleased] — toward 2.0.0

### Fixed — accessibility (preview axe crawl)

- `PickList`: the empty-state placeholder inside each listbox is now a
  disabled `role="option"` (`aria-selected="false"`, `aria-disabled`)
  instead of a bare `div`. A static-text child fails axe
  `aria-required-children` on `role="listbox"`; the option form keeps
  the visual unchanged and announces the empty state to AT.
- `Chart`: gauge series children are wrapped in `role="listitem"` —
  the series `<g role="list">` previously owned no list items and
  failed `aria-required-children`.
- `DataGrid`: the pager nav label is prefixed with the grid's
  `ariaLabel` when set (e.g. `People Pagination`), so several grids on
  one page no longer share the default `Pagination` landmark name
  (axe `landmark-unique`). Without `ariaLabel` the label is unchanged.
- `DataList`: same pager landmark prefix as `DataGrid` — the pager nav
  is now named `"{ariaLabel} Pagination"` (e.g. `Data list Pagination`),
  so several lists on one page no longer share the default `Pagination`
  landmark name (axe `landmark-unique` on `#/datalist`).
- `Badge`, `Button`, `Alert`: the filled (`Badge`/`Alert`) and flat
  (`Button`) `shade="lighter"`/`shade="light"` surfaces now dilute the
  shade background toward white before pairing it with the dark
  `on-*-lighter`/`on-*-light` text. The raw mid-tone shade steps
  (`#87a9f4`-class colors) only reached 2.6–3.8:1 against those
  on-colors (axe `color-contrast`, 14 nodes on `#/badge`); the diluted
  steps land at 5.0:1 or better across all seven hues. Dark/darker
  steps, flat 12% tints and tokens are unchanged. The same latent
  pairing on `#/button` is axe-invisible (ripple pseudo-element makes
  the background indeterminate) but is fixed by the same rules.
- `DropZone` (disabled region) and `SignaturePad` (disabled wrapper)
  now set `aria-disabled` — the visual `opacity: 0.55` dimming drops
  their inner caption/label text below 4.5:1 (axe `color-contrast` on
  the new demo routes), and WCAG exempts inactive UI components once
  they are marked disabled. Native disabled controls already carried
  the exemption; these two rendered their text in plain elements.
- `Datepicker`: the calendar popup wrapper now carries the
  `aria-label` when it has `role="dialog"` (axe `aria-dialog-name`
  fires the moment the calendar opens; the label previously sat on an
  inner `role`-less div, so the dialog itself was nameless). The
  default name is `Date picker`, overridden by the `ariaLabel` prop to
  match the trigger field. The inline (non-dialog) mode is unchanged.
- `Upload`: each file row's `role="progressbar"` now has an
  `aria-label` of the form `` `<file name> upload progress` `` (axe
  `aria-progressbar-name` as soon as a row renders). Values and
  markup are otherwise unchanged.
- `Datepicker`: adjacent-month day cells (`--outside`) no longer
  apply `opacity: 0.6` on top of the muted text color — the blend
  landed at 2.87:1 against white (axe `color-contrast`, 5 cells when
  the calendar opens on a month that spills into the previous month).
  The muted token alone is ≥ 4.5:1 in every shipped palette and still
  distinguishes the cells from in-month days; disabled cells are
  unchanged (`aria-disabled` exemption).
- `Autocomplete`: when a filter matches nothing the popup renders
  the empty message _without_ `role="listbox"` (the `aria-controls`
  target stays as a plain `id`-ed container). An empty listbox
  fails axe `aria-required-children` whether it holds only the
  message text or nothing at all; with no options there is no listbox
  to own.

### Fixed — `Body` content fills the space right of the sidebar

- `Body` no longer lays its children out as a flex row. Each child was
  a content-sized flex item, so page content stopped wherever its
  fit-content width landed instead of using the space right of the
  sidebar (measured gaps of 60–590px on 38 of 87 preview routes —
  `#/row` ended 586px early). Children now flow as normal blocks at
  full available width, matching Radzen's `.rz-body` (a plain block);
  `flex: 1`, `padded`/`bare`, scrolling and Layout slot sizing are
  unchanged. A new Playwright spec (`e2e/layout-width.spec.ts`) locks
  the sampled routes to a zero content gap.

### Changed — `Row`/`Stack`/`AutoGrid` `gap` is numeric (breaking)

- `gap` (and `rowGap` on `Row`) drop the `xs|sm|md|lg|xl` token
  vocabulary. A number is pixels (`gap={16}` → 16px); a CSS length
  passes through verbatim (`gap="0.5rem"`), following Radzen's `Gap`
  (unitless values get `px` appended — digits-only strings like
  `"16"` included, so raw `<select>` values are safe to pass through).
  Migration: `xs→4`, `sm→8`, `md→12`, `lg→16`, `xl→20`.
- The tier gap classes (`.gapSm`, `.gapRowXl`, …) are removed from
  `Row.module.css`, `Stack.module.css` and `AutoGrid.module.css`; an
  explicit gap now always renders inline. Default values are unchanged
  in effect: `Stack` 8 (was `'sm'`), `AutoGrid` 12 (was `'md'`),
  `Row` 16 via the `--dx-space-4` stylesheet default.
- A ratchet test (`preview/gap-api.test.ts`) fails if a tier token
  returns to any `gap`/`rowGap` prop.

### Changed — `ThemeToggle` is an icon toggle button (breaking)

- The appearance toggle no longer renders a visible label wrapping a
  `Switch`. It renders the shared `Togglebutton` (Radzen
  `AppearanceToggle` parity): one accessible button whose `aria-pressed`
  carries the mode and whose glyph is the state icon — moon while
  light, sun while dark — so a click always applies the mode the icon
  previews. Keyboard: Tab focuses, Enter/Space toggles (test:
  `toggles with Enter and Space on the button`).
- `label` (default `"Dark mode"`) is now the button's accessible name
  (`aria-label`) instead of visible text; `id` and `className` forward
  to the button. New `size: 'sm' | 'md' | 'lg'` prop also sizes the
  icon. `ThemeToggle.module.css` is removed — the toggle is
  `variant="text"` + `severity="base"` Button chrome with no bespoke
  styles. Persistence, `storageKey`, OS-following and controlled-mode
  purity are unchanged.
- `Icon` gains the `sun` and `moon` concepts: the two legacy glyphs
  plus entries in 13 of the 16 bundled sets (all shape sets; `octicon`
  has no sun/moon glyph and the two brand sets are brands-only) —
  re-ingested via `npm run icons:ingest`.

### Changed — `Togglebutton` rebuilt on `Button` (Radzen toggle axis)

The toggle rendered its own button chrome (bespoke CSS with a bare
`1px` border and an unconditional primary fill when pressed) and
dropped any consumer `onClick` to spread order. It now renders
`Button`, so the whole Button surface applies — `variant`, `severity`,
`shade`, `size`, `fullWidth`, `iconOnly`, `loading`, `visible`,
`dx-ripple` — and adds the Radzen toggle axis: `toggleVariant`,
`toggleSeverity` (default `primary`, like Radzen's
`ToggleButtonStyle`), and `toggleShade` (default `darker`, like
`ToggleShade`) replace the base axis while pressed, and
`toggleContent` swaps the content while pressed (`ToggleIcon`
parity). Pressed renders a 10% state layer (`rz-state-active`
parity); `aria-pressed` and the merged `onChange`/`onClick` handlers
are unchanged. Visual change: the default look now follows Button's
axis (released = `filled`/`primary`, pressed = primary `darker` +
state layer) instead of the bespoke outlined-box-plus-fill.

### Changed — `Splitbutton` halves now render `Button`

Both halves previously carried a ~350-line duplicate of Button's
variant/severity/shade CSS that drifted from the source (e.g. a
different light/dark shade rule, a divergent shade resolver). Both
now render `Button`, so classes, shades, focus rings, and hover
behavior are the shared implementation, with only the "glue" (seam
overlap, radius truncation, pair-level shadow handling) left in the
component stylesheet. Added: `loading` (spinner + `aria-busy` on the
action, both halves disable), `visible`, `fullWidth`, `icon` on
`SplitbuttonItem` (Radzen `SplitButtonItem.Icon` parity), ArrowUp
opens the menu, and the root forwards a ref. An open menu now also
closes when the control becomes busy (`loading`/`disabled`), when
`visible` turns false, and when the action button is clicked — it can
no longer stay stranded open with `aria-expanded` stuck true.
**`aria-label` moved**:
it now names the _action_ button (it used to land on the open menu;
Radzen `ButtonAriaLabel` parity) — the new `openAriaLabel` (default
`More actions`, Radzen `OpenAriaLabel` parity) names both the caret
and the menu.

### Changed — `ThemeSwitcher` is now the theme picker (breaking)

It picked light/dark before; it now renders a dropdown of theme names —
`DEFAULT_THEMES` (`default`, `fluent`, `github`, `material`,
`material-3`, `shadcn`, exported) or your own `themes` list — persists
the choice under `dx-palette`, and in uncontrolled mode applies it as
`<html data-palette>` (`attribute` prop overrides the name). Nothing is
applied until an explicit choice exists, and controlled mode never
writes the document or storage, so the parent stays the single writer.
Migrating a dark-mode switch: rename the import to `ThemeToggle` — and
mind that both components are now pure UI in controlled mode (neither
writes its document attribute while `value` is set). The preview
header now uses both components.

### Added — `ThemeToggle` appearance switch

The former `ThemeSwitcher` behavior, renamed: `value`/`defaultValue`
(`light` | `dark` | `system`), persistence under `dx-theme`,
`data-theme` on `<html>`, and `system` still leaves the attribute to
the OS fallback. New `id` prop forwards to the switch input.
Controlled mode no longer touches the document or storage — pure UI.

### Added — `Icon` multi-set library (16 collections, 674 glyphs)

Namespaced names (`<Icon name="mdi:home" />`, `ph:user`,
`simple-icons:github`) select any bundled Iconify collection; bare
names keep the built-in feather-style set unchanged. Sets ship as
bundled SVG bodies (zero runtime dependencies, no fetches,
`npm run icons:ingest` to regenerate): feather, lucide, tabler,
heroicons, ph, ri, carbon, ion, octicon, mdi, fa6-solid, bi, fluent,
material-symbols, simple-icons, fa6-brands. The root `<svg>` adapts
per set — stroke sets inherit `stroke="currentColor"` with the set's
stroke width (heroicons 1.5), fill sets render
`fill="currentColor" stroke="none"` — and per-glyph `viewBox`
overrides cover mixed grids (fa6, fluent). Unknown glyphs render an
empty shell; `iconSets`, `iconSetNames`, `IconSetPrefix`, and
`IconSetDef` are exported for gallery/tooling use. Bundling all sets
costs about 79 KB gzipped on the main bundle — consumers who only use
the built-in glyphs already pay that, since the sets are part of the
static `Icon` import.

### Fixed — `Row` `rowGap` lost with arbitrary `gap`

An arbitrary `gap` (`0.5rem`, `10`, …) was applied as an inline `gap`
shorthand, which also pinned `row-gap` inline and beat a tier `rowGap`
class (`gapRowXl` rendered 8px instead of 20px). Arbitrary gaps now set
`columnGap` + `--dx-col-gap`, so tier `rowGap` classes apply while
Column's gap-compensated grid math keeps exact-sum rows on one line.
Tier gap rules were also re-specified (`.row.gapX*` / `.row.gapRow*`)
so the result no longer depends on rule order inside the stylesheet.
(`align="normal"` now maps to an explicit class; its computed value was
already `normal`, so that part has no visual effect.) Verified against
Radzen's Row/Column demo set across all six breakpoints.

### Added — `ContextMenu` provider + hook (Radzen ContextMenu parity)

`ContextMenuProvider` (app root) + `useContextMenu()` (`open(event,
options)` / `close()` / `isOpen`) mirror `ContextMenuService` without
DI: data mode (`items`, nestable — beating Radzen's flat
`ContextMenuItem` list) or content mode (`content`, e.g. `<Menu>` with
`<hr />` separators — `Menu` passes non-item children through
verbatim). No auto-close — handlers call `menu.close()` like Radzen,
so parents with submenus stay open. Fixed overlay (`z-index: 1001`)
with viewport clamping, focus moved into the menu on open and
restored to the invoker on close; dismiss on outside pointer,
`Escape`, resize, and route change.

### Changed — `Menu` / `PanelMenu` are compound components (breaking)

Radzen parity: `items={[...]}` is removed. Nest `<MenuItem>` /
`<PanelMenuItem>` as JSX children instead — this is what unlocks
per-item `onClick`, arbitrary-depth nesting, `@bind-Expanded`-style
controlled state, and model-driven lists (`data.map(...)`):

```tsx
// Before
<Menu items={[{ text: 'Products', children: [{ text: 'A' }] }]} onClick={h} />
// After
<Menu onClick={parentH}>
  <MenuItem text="Products">
    <MenuItem text="A" />
  </MenuItem>
</Menu>
```

Also breaking in the same pass:

- `Menu` loses `orientation` (the menubar is horizontal; `isContextMenu`
  covers the vertical popup) and gains `clickToOpen` (default `true`),
  `flyout` (default `false`), `responsive` (default `true`, hamburger
  under 768px), `isContextMenu`, and `onClose`.
- Item `icon` is now `IconName` (was an arbitrary string); use `template`
  for fully custom rows. New item props: `iconColor`, `image`,
  `target`, `match`, per-item `onClick` (fires after the parent
  `onClick`), controlled `open` / `onOpenChange` (Menu).
- `PanelMenu` `multiple` default flips `false` → `true` (Radzen default);
  pass `multiple={false}` for single-expand. New: `displayStyle="stacked"`
  rail, `renderMode` (`client` default / `server`), per-item `expanded` /
  `onExpandedChange` and `selected` / `onSelectedChange` (unbound
  `Selected` syncs from the URL like Radzen, expanding ancestors).
- `path` is anchor+emit: leaves with `path` render `<a href>` and still
  fire click events (parent `onClick` first, then the item `onClick`).
  Hash paths (`path="#/button"`) just work. Client-side routers return
  `false` from either handler to cancel navigation:

```tsx
<MenuItem text="Buttons" path="/buttons" />
<Menu onClick={(args) => {
  router.navigate(args.path); // your router
  return false; // cancel the anchor default
}}>
```

- Event args are unchanged (`{ text, value?, path? }`), so parent
  `onClick` handlers survive the migration untouched.

### Changed — `flat` variant is now solid (breaking visually)

Button and Splitbutton `variant="flat"` previously rendered a soft
14% severity tint with `text-*` foreground. It now renders the solid
severity fill with `on-*` foreground — Radzen parity, where flat
differs from filled by shadow only (filled carries resting elevation,
flat is unelevated). Hover lays a darkening wash over the base in
both. If you relied on the tinted low-emphasis look, switch to
`variant="text"` (transparent) or pin the previous mix in your own
CSS. Flat shades are likewise absolute now (`shade-*` background +
`on-*` ink, identical to filled minus shadow); outlined shades set
both border and text color.

### Removed — legacy `tone-*` classes (breaking for custom CSS)

Button no longer emits the backwards-compat `tone-*` classes
(`tone-primary`, `tone-danger`, …) alongside `style-*`. Target
`style-*` instead — same values, single system. No app in this
workspace referenced them.

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
`--dx-{tone}-fg-color` → `--dx-on-{tone}-color` (primary,
secondary, success, danger, warning, info, light, base, dark, neutral,
soft). Values are unchanged, only renamed.

Compat: the old names survive as reference aliases (remove in 3.0),
so unmigrated stylesheets keep resolving. Migrate at leisure; dropping
the aliases is the only later break.

### Added

- `Shade` gains an explicit `medium` step, completing the range
  lighter, light, medium, dark, darker with `default` pinned to it:
  both map to no class and render the base look (explicit in
  `shadeClass`, locked by test; no `shade-medium` CSS rules exist).
  All emitters (Button, Badge, Alert, Splitbutton, Progress) now share
  the `shadeClass` helper instead of duplicating the gate.

- Scrollbar system (Radzen parity): slim floating-thumb bars replace
  OS defaults globally, unless the page opts out with
  `dx-default-scrollbars` on `<body>`; `.dx-scrollbars` forces the
  treatment on a subtree. 12px, not Radzen's 16px, with Firefox
  thin/colored bars (Radzen is webkit-only). Tokens
  `--dx-scrollbar-color` (secondary tone, both themes adapt) and
  `--dx-scrollbar-size`.

- `Sidebar` accepts `sticky` for independent scrolling (Radzen fixed
  sidebar parity, without leaving flow): pins to the viewport top,
  capped at viewport height, so long nav scrolls inside while the
  body scrolls the page. Pairs with a sticky `Header` (paints above
  via `z-sticky`). No-op with `overlay`.

- Radius role tokens (Radzen derivation parity): `--dx-radius-input`
  (base), `--dx-radius-button` (pill, brand), `--dx-radius-checkbox`
  (half step), `--dx-radius-surface` (step up). Every component
  consumes roles, never raw tiers — pixel-identical output; themes
  retune by re-pointing a role. Documented in CONTRIBUTING (rule 7).

- `Avatar` accepts `email` for Gravatar resolution (RadzenGravatar
  parity, folded into `Avatar` instead of a separate component):
  precedence is explicit `src`, then Gravatar, then palette initials.
  Tier `size` maps to exact `s=` pixels (20/28/36/44/52);
  `gravatarDefault` (default `retro`) and `gravatarRating` (default
  `g`) tune the request. Emails are normalized (trim + lowercase —
  Radzen hashes them raw) and hashed locally with a vendored MD5
  (browsers exclude MD5 from `crypto.subtle`; no new dependency).
  Passing `email` discloses its hash to gravatar.com — usage is the
  opt-in. Broken photos (explicit or Gravatar) fall back to the
  initials tile via `onError`.

- `Link` — RadzenLink parity minus router coupling: `href` renders a
  real anchor (`target`, `rel`, `icon`, children passthrough); without
  `href` it renders `<button type="button">` with identical link
  styling for actions that must read as links (disclosures) while
  keeping button semantics. Hover underlines via `--dx-link-color` /
  `--dx-link-hover-color`. No active-route matching — the library
  ships no router; SPA interception stays app-side.

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
  Id backfill targets labelable elements only (`input` except hidden,
  `select`, `textarea`, `button`, …) — wrapper spans/divs are never
  cloned for ids, so labels can't duplicate or dangle; wrappers pair
  with the `component` prop and an explicit control id instead.
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

- Button treatment (Radzen material parity): `filled` carries resting
  elevation (`--dx-shadow-1`) with an interactive ramp (hover
  `--dx-shadow-3`, press `--dx-shadow-6`); focus keeps the outline
  ring over resting elevation. `flat`/`outlined`/`text` share one
  hover wash (6% black overlay, no per-hue rules). Showcase rebuilt
  as the Variant × Style × Shade matrix.
- Dialog backdrop is a neutral-gray veil (Radzen dialog-mask parity),
  replacing the blue-black cast.

- Dialog headers are borderless (Radzen parity: title border defaults
  to none). The `footer` slot and its top border are retained as API;
  in-content trailing actions are the recommended pattern.

- `Text` owns its box: `.typography` sets `margin: 0`, so UA `h1–h6`/`p`
  margins never leak. Spacing around text is the parent's job (`Stack`
  gap, `dx-mt-*`). Deletes a class of margin-reset overrides in
  consumers; any layout that relied on UA text margins needs an
  explicit gap.
- `FormField` owns focus indication: direct `input`/`textarea`/`select`
  children never paint their own `:focus-visible` outline or shadow,
  so focus shows the single box ring instead of two nested rings.
  End adornments (buttons) keep their own focus rings.
- `FormField` owns floating box height (Radzen filled-field parity):
  `--dx-field-height-xs/sm/md/lg/xl` (`34/42/50/58/66px`, raw control
  height + label zone) with asymmetric `--dx-field-padding-*`.
  Inner `Textbox`/`Textarea`/`Select`/`Numeric`/`Password`/`Mask`
  expose their size via `data-size` and surrender fixed heights inside
  floating fields (the box grows instead of squeezing the text zone).
  Non-floating fields keep raw control heights.

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
