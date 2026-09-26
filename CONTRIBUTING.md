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
7. **Radius is derived, never hardcoded.** Components consume geometry
   roles (`--dx-radius-input/button/checkbox/surface`), never raw
   tiers — a theme retunes geometry by re-pointing a role, and every
   role value stays pixel-identical to the tier it derives from.
   Bare `50%`/`0` is geometric (round/sharp), not a role; the `xs`
   tier survives only for sub-checkbox micro detail. Site CSS owns no
   radius on uikit internals — per-instance `className` is the only
   sanctioned seam (plus the `dx-radius-*` escape utilities).

## Workflow

- Branch from `develop`: `fix/<issue>-<slug>` or `feat/<issue>-<slug>`.
- Title the PR as the final squash message (Conventional Commits:
  `feat(scope): subject`, breaking with `!`).
- Fill the PR template checklist (creates automatically).
- The showcase (`preview/`, `npm run dev`) is the visual review
  surface — add or extend a demo route for user-facing changes and
  link it in the PR.
- `dist/` is built at release time (`chore(dist)`); never hand-edit it.

## Deprecation policy

- Deprecate with `@deprecated` + alias + tests; removal happens in the
  next major only, with a CHANGELOG codemod table.
- Token renames keep reference aliases for one major.
