# Demo Guide — Radzen-grade component demos

The preview app (`npm run dev` → `http://localhost:5199/#/<slug>`) is our
Radzen dogfooding surface: every component gets a curated, interactive demo
page. This guide is the standard each page is written to and enforced by
tests.

## The checklist

Every routed demo page (except `''` index) must satisfy all of:

1. **`DemoPage` receives a `description`** — one plain-language sentence on
   what the component is for (the page subtitle under the H1).
2. **At least 3 titled sections** (genuinely one-purpose components may
   ship with fewer) — each section has an `id` (anchor/TOC), a `title`,
   and a 1–2 sentence `description` where it adds context.
3. **Section archetypes** — pick from the catalog below; aim to cover the
   applicable archetypes for the component's API surface.
4. **Real interaction** — buttons that click, controlled states that move,
   events that land in an `EventLog`. No dead markup.
5. **Dogfood loop** — while writing a demo, if the component can't express
   something Radzen can: fix the component in `lib/` + tests + CHANGELOG in
   the same phase, or log it as a known gap (do not fudge the demo).

## Section archetypes

| Archetype        | What it shows                                            |
| ---------------- | -------------------------------------------------------- |
| Basic / hero     | Minimal, default usage — the "4-line" example            |
| Matrix           | severity × variant × shade (or equivalent) grids         |
| Sizes            | every supported `size` in canonical order                |
| States           | disabled, loading, invalid, read-only, visible           |
| Bound            | controlled value + `EventLog`/readout proving the events |
| Content/template | children, custom markup, icon slots, item renderers      |
| Composition      | nested/combined with sibling components (forms, layout)  |
| Keyboard         | `KeyboardTable` as the last section of interactive pages |

Reference implementation: `preview/pages/buttons.tsx` (the Button page) —
7 sections covering Basic, Matrix, Sizes, States, Content, Composition,
Keyboard.

## Shared demo building blocks

- `preview/pages/demo-page.tsx` — `DemoPage` frame: H1 + subtitle,
  per-section cards, sticky right TOC (≥2 sections).
- `preview/pages/section.tsx` — `DemoSection` page wrapper (`aria-label`).
- `preview/pages/shared/axes.ts` — `SEVERITIES` / `VARIANTS` / `SHADES`
  grids + `capitalize`; one source for every matrix demo.
- `preview/pages/shared/EventLog.tsx` — Radzen `EventConsole` parity;
  use under every bound demo (`emptyText` for component-specific copy).
- `preview/pages/shared/KeyboardTable.tsx` — Radzen
  `KeyboardNavigationDataGrid` parity; canonical keyboard section.
- `preview/nav.ts` / `preview/routes.ts` — slug registry; a new component
  needs an entry in both.

## Enforcement (ratchet — never grows)

- `e2e/axe.spec.ts` — axe crawls every demo route (default theme) on top
  of the 8-theme `/` matrix; zero violations anywhere.

## Scope boundaries

In scope: demos, shared demo infra, and the lib gaps dogfooding surfaces.
Out of scope for demo pages: per-page Monaco source viewer, SEO/FAQ
JSON-LD, generated API reference tables (API docs stay in README/JSDoc).
