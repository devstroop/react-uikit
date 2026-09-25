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
