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

### Removed — abbreviated background/foreground tokens (breaking)

`--dx-bg-color` → `--dx-background-color`,
`--dx-{tone}-fg-color` → `--dx-{tone}-foreground-color` (primary,
secondary, success, danger, warning, info, light, base, dark, neutral,
soft). Values are unchanged, only renamed.

Compat: the old names survive as reference aliases (remove in 3.0),
so unmigrated stylesheets keep resolving. Migrate at leisure; dropping
the aliases is the only later break.

### Changed

- Outlined borders render at `--dx-outlined-border-width: 2px`
  (was 1px) on Badge, Button, Alert, Card, and Splitbutton.
- Badge density tightened one step per size tier
  (xs `0 4px` … xl `3px 12px`, icon gap `4px` → `2px`).
- Selectbar options are borderless text buttons inside the single
  outer bar border (was double-bordered); selected stays primary fill.
