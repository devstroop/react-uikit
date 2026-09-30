# Theming contract

How to re-seed this library (`--dx-primary-color`, …) without silently
inheriting values tuned for the stock ramp. Read this before overriding
any token in a product theme.

## The rule

Some tokens are **live references** (`var(--dx-primary-color)`) and
follow a re-seed automatically. Others are **hand-picked hex tuned for
the stock ramp** — those keep their stock values until a product
overrides them, which renders wrong without warning (silent runtime
failure; types still pass). The defect class is always the same:
a themed consumer sees stock-ramp paint.

`lib/styles/tokens-contrast.test.ts` enforces both halves in every
theme block (light `:root`, explicit dark, OS-dark fallback):

- bare-hex pairs keep ≥ 4.5:1 contrast;
- `link-color` / `link-hover-color` are never bare hex — they must
  reference the ramp (`var()` / `color-mix()`), so derivation can't
  regress to a hardcoded sibling.

## Tokens downstream of the seed (review all of these on re-seed)

- `link-color`, `link-hover-color` — derived from primary via
  `color-mix` in dark blocks (a hardcoded fallback here was the
  original defect: stock-blue links on a re-seeded mint ramp);
- `on-primary-*`, `primary-hover-*`, `primary-{lighter,light,dark,darker}`,
  `text-primary-*`, `border/outline-primary-*`, `focus-color`;
- `on-{secondary,success,warning,danger,info}-*` and their hovers
  (verify contrast against the re-seeded fills, not just presence);
- `inverse-*` surfaces (they flip meaning between light and dark).

## Radius scale (geometry, not color)

One Radzen-style scale, defined identically in all three theme blocks:
`--dx-radius` (4px base), `--dx-radius-0`…`--dx-radius-10` (0.25rem
steps, 0 → 2.5rem), `--dx-radius-full` (pill). When editing, re-generate
the whole scale into every theme block — never one block only.

Four roles derive from it and are the only radius vocabulary components
consume:

- `--dx-radius-input` → `-2` (8px) — entry fields;
- `--dx-radius-button` → `-full` — pill emphasis;
- `--dx-radius-checkbox` → `-1` (4px) — tiny controls;
- `--dx-radius-surface` → `-3` (12px) — cards/dialogs.

To retune geometry for a theme, re-point a role — never hardcode a rung
inside a component. Components that are not role owners derive from the
base instead (`calc(var(--dx-radius) * N)`, the Radzen idiom) or take
the base/full directly. Ad-hoc DOM reaches for the `.dx-radius-*`
utilities.
`lib/styles/tokens.test.ts` enforces scale completeness (×3 blocks) and
that no component consumes a role outside its own.

## Border thickness (geometry)

Widths are theme-independent geometry, defined once in the light
`:root` block (like the interaction constants, not per theme block):

- `--dx-border-width` (1px) — every standard border;
- `--dx-border-width-strong` (2px) — indicator rings (Tabs underline,
  Avatar ring, Colorpicker knobs, Timeline marker, Toc, spinner);
- `--dx-outlined-border-width` (1px) — outlined-variant width;
- `--dx-focus-ring-width` / `--dx-focus-ring-offset` (2px) — focus.

Components write `border: var(--dx-border)` /
`var(--dx-border-strong)` (Radzen `--rz-border-{color}` parity), or
`var(--dx-border-width) solid <color>` when the color or style varies
(dashed, transparent, tone colors, fallbacks). Focus uses the one ring
width via either idiom (outline or box-shadow).

Caveat — composites resolve where they are declared: `--dx-border`
bakes `--dx-border-color` at computed-value time on `:root`. Theme
switches are unaffected (`[data-theme]` / `[data-palette]` are the
same element, so the cascade feeds the composite), but a **subtree**
override of `--dx-border-color` alone does not reach composite
borders — override `--dx-border` / `--dx-border-strong` alongside it,
or set the `border-color` longhand on the closer scope.

`lib/styles/tokens.test.ts` ratchets raw thickness px across lib CSS
and preview style objects; `e2e/focus-ring.spec.ts` asserts the
computed 2px ring / 1px border values.

## Specificity note (verified live)

Explicit theme wins outright by design: `:root[data-theme='dark']`
is (0,2,0) because a bare `[data-theme="dark"]` tied with consumer
`:root` rules and lost whenever the consumer stylesheet loaded later.
To override a dark token, match or beat it —
`:root[data-theme="dark"] { … }` placed after this import — or set the
token on a closer scope. The OS-dark fallback uses `:where()` (0,1,0)
so app rules always win ties there. Plain `:root` overrides keep
working for light mode only.
