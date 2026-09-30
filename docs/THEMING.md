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

## Icon font override

`<Icon/>` renders ligature text in `var(--dx-icon-font-family)`
(default the bundled Material Symbols Outlined). Projects swap the
family without touching the component — per scope via a class, or
globally on `:root`:

```css
.font-awesome {
  --dx-icon-font-family: 'Font Awesome 6 Free';
}
:root {
  --dx-icon-font-family: 'Material Symbols Outlined';
}
```

With a foreign family, pass codepoints as literals
(`icon="\uf015"`); weight rides the variable axis via `style`
(`fontWeight: 100–700`) where the family supports it. Ink inherits
(`currentColor`); the `color` prop overrides it per element.

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

## Specificity note (verified live)

Explicit theme wins outright by design: `:root[data-theme='dark']`
is (0,2,0) because a bare `[data-theme="dark"]` tied with consumer
`:root` rules and lost whenever the consumer stylesheet loaded later.
To override a dark token, match or beat it —
`:root[data-theme="dark"] { … }` placed after this import — or set the
token on a closer scope. The OS-dark fallback uses `:where()` (0,1,0)
so app rules always win ties there. Plain `:root` overrides keep
working for light mode only.
