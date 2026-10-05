# Planning — 2026-09 Round 4 DataGrid depth (uikit)

**Cycle:** 2026-09 · **Method:** evolution plan (Rounds 1–3 shipped) · **Date:** 2026-09-28

Round 4 of the approved react-uikit vs Radzen plan: the DataGrid depth
features listed in the plan ("row virtualization, `onRangeChange` server
mode, CSV export, footer aggregates, multi-group"). Round 3 (parity quick
hits) is merged to `develop` and green.

---

## Scope delivered

| Feature            | Radzen parity point           | Delivered                                                                                                                                                                                                                                                                                               |
| ------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Row virtualization | `Virtualize` + `ScrollHeight` | `virtualize` + `virtualRowHeight` + `virtualHeight`: only the visible window (plus 5-row overscan) renders; top/bottom spacer rows carry scroll height; `aria-rowcount`/`aria-rowindex` describe the full list; window shifts on scroll (state-driven, no effect)                                       |
| Server mode        | `LoadData` / `Count`          | `serverMode` + `totalCount` + `onRangeChange({start, count, pageNumber, pageSize, sorts, filters, logicalOperator})`: client-side filter/sort/slice skipped; the callback fires on mount, page, page-size, sort, and filter changes via a ref (parent may recreate the handler without re-firing loops) |
| CSV export         | `ExportData` (CSV)            | `showExportButton` + `exportFileName`: RFC 4180 CSV over the visible columns of the full filtered set (CRLF, quote escaping, BOM) — helper `toCsv` exported for headless use                                                                                                                            |
| Footer aggregates  | `Summary`/`SummaryItem`       | `aggregates: GridAggregate[]` (`count/sum/avg/min/max/custom` + `format`/`title`/`compute`): `<tfoot>` per column; computed over the full filtered set (pre-pagination), or over the returned window in server mode — helper `aggregateValue` exported                                                  |
| Multi-group        | multiple group columns        | grouping state is now a property list: nested levels with path-qualified expansion keys, per-level counts/indent, one removable chip per level; default expansion walks all nodes (`collectGroupKeys`) — helpers `groupItems`/`collectGroupKeys` exported                                               |

## Decisions & behavior changes

- **Grid without a pager shows every row.** The internal slice previously
  always ran at `pageSize` (default 10) even with `allowPaging` off — latent
  because fixtures were ≤10 rows. Now the slice only applies when the paging
  UI is on (Radzen parity); virtualization exposed this with 1000-row tests.
- **Aggregates/CSV use pre-pagination rows** (`GridView.filtered`, new), so a
  paged grid still sums the whole filtered set; server mode exports/aggregates
  the window the server returned.
- **Group keys** join levels with `String.fromCharCode(31)` (unit separator) —
  collision-proof against user data containing `/` or spaces.
- Virtualization spacer rows are `aria-hidden`; the scroll container is the
  existing `.data` wrapper (adds `max-height` + `overflow-y` only when on).

## Verification

- DataGrid suites: 74 tests (22 new across `grid.test.ts` + `DataGrid.test.tsx`)
  covering nesting/collapse, aggregates (incl. filtered-set semantics), CSV
  escaping, range reporting (mount/page/sort/filter + no client filtering),
  and virtual window/scroll/aria.
- Demo: DataGrid demos page gains aggregates+grouping+export, 500-row
  virtualized, and server-mode sections (mock server reuses `applyGridState`).

## Next

- **Round 5 — Chart expansion** (split `Chart.tsx`, stacked series, gauges,
  spider/funnel/heatmap), then re-assess the deferred component list.
