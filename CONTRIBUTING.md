# Contributing to react-uikit

## Ground rules

1. **Discuss large changes first.** Open an issue before building anything
   bigger than a bugfix — new components, new props, visual changes.
2. **Never break the suite.** `npm run lint`, `npm run typecheck`,
   `npm run test`, and `npm run build` must all pass. CI enforces this
   on every PR (`ci.yml`) plus Playwright (`e2e.yml`, PRs only).
3. **Add regression tests.** Every fix ships with a failing-first test;
   every feature ships with behavior tests following the colocated
   `*.test.tsx` pattern. CSS contracts that can't be unit-tested go in
   `lib/namespaces.test.ts` (file-content assertions).
4. **No unrelated changes.** One PR, one concern. No lockfile churn, no
   secret material, no drive-by reformats (prettier owns formatting —
   run `npm run format` before pushing).
5. **Radzen parity is a compass, not a cage.** Match Radzen APIs where
   they fit (`variant`/`severity`/`shade`, prop names); diverge
   deliberately and document the divergence in code comments.
6. **Short module class names are safe because the build hashes them.**
   Never concatenate raw `*.module.css` files globally (that would leak
   the short names unhashed); never add a lone bare-element selector
   or an unlisted `:global()` hook — `namespaces.test.ts` enforces the
   scoping half (no top-level bare elements, `:global` allowlist).
7. **Radius is derived, never a bare rung or stray px.** One scale:
   `--dx-radius` (4px base) + `--dx-radius-0..10` + `--dx-radius-full`.
   Role owners consume the geometry roles (`--dx-radius-input`,
   `--dx-radius-button`, `--dx-radius-checkbox`, `--dx-radius-surface`);
   every other component derives from the base
   (`calc(var(--dx-radius) * N)`, the Radzen idiom) or takes
   `var(--dx-radius)` / `var(--dx-radius-full)` directly — never a raw
   rung. Sole px exception: the 2px micro-step timer buttons in
   Datepicker/Timespanpicker, which no rung expresses. A theme retunes
   geometry by re-pointing a role. Bare `50%`/`0` is geometric
   (round/sharp), not a role. Site CSS owns no radius on uikit
   internals — per-instance `className` is the only sanctioned seam
   (plus the `dx-radius-*` escape utilities).
8. **Border thickness is tokenized, never raw px.** Borders compose
   from `var(--dx-border)` / `var(--dx-border-strong)` (width+style+
   color, Radzen `--rz-border-{color}` parity); a custom color or
   style keeps `var(--dx-border-width)` (or `--dx-border-width-strong`
   for indicator rings — Tabs underline, Avatar, Colorpicker knobs,
   Timeline, Toc, spinner) plus its color. Focus renders at
   `var(--dx-focus-ring-width)` (2px) with `var(--dx-focus-ring-offset)`
   — outline or box-shadow idiom per component, but one width. The
   old `--dx-outline-width` is removed; never bring it back. Allowed
   literals: negative `outline-offset` (inset focus variants) and the
   transparent scrollbar gutter ring. `lib/styles/tokens.test.ts`
   ratchets this across lib CSS and demos style objects;
   `e2e/focus-ring.spec.ts` locks the computed 1px/2px values.
9. **`ThemeToggle` ships; theme pickers do not.** The package owns the
   dark/light responsibility: `ThemeToggle` (light/dark/system with
   persistence, applies `data-theme`) backed by `ThemeService`.
   Rendering a _theme_ at runtime — selecting fluent / material-3 /
   zen / ... by name, wiring `PALETTE_LOADERS`, managing `data-palette`
   — is a project-level concern and lives in the consuming app (the
   demos ship theirs in `demos/components/ThemeSwitcher`). Never add a
   theme picker component to `lib/` or export one from the package.

## Workflow

- Branch from `develop`: `fix/<issue>-<slug>` or `feat/<issue>-<slug>`.
- Title the PR as the final squash message (Conventional Commits:
  `feat(scope): subject`, breaking with `!`).
- Fill the PR template checklist (creates automatically).
- The showcase (`demos/`, `npm run dev`) is the visual review
  surface — add or extend a demo route for user-facing changes and
  link it in the PR.
- `dist/` is built at release time (`chore(dist)`); never hand-edit it.

## Deprecation policy

- Deprecate with `@deprecated` + alias + tests; removal happens in the
  next major only, with a CHANGELOG codemod table.
- Token renames keep reference aliases for one major.
