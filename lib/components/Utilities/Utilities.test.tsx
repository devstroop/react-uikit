import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const HERE = dirname(fileURLToPath(import.meta.url));
const REACT_CSS = readFileSync(join(HERE, "..", "..", "utilities.css"), "utf8");
const REACT_TOKENS = readFileSync(join(HERE, "..", "..", "styles", "tokens.css"), "utf8");
let HTMX_CSS: string | null = null;
try {
  const ROOT = join(HERE, "..", "..", "..", "..", "..");
  HTMX_CSS = readFileSync(
    join(ROOT, "frameworks", "htmx", "lib", "components", "utilities", "utilities.css"),
    "utf8",
  );
} catch {
  // htmx framework not present in this workspace (e.g. WaServer checkout) — skip parity checks
  HTMX_CSS = null;
}

const selectors = (css: string) =>
  new Set(
    [...css.matchAll(/\.dx-[a-z0-9-]+/g)].map((m) => m[0]).sort(),
  );

const SPACING_VARS = [
  "var(--dx-space-0)",
  "var(--dx-space-05)",
  "var(--dx-space-1)",
  "var(--dx-space-2)",
  "var(--dx-space-3)",
  "var(--dx-space-4)",
  "var(--dx-space-5)",
  "var(--dx-space-6)",
  "var(--dx-space-7)",
  "var(--dx-space-8)",
  "var(--dx-space-9)",
  "var(--dx-space-10)",
  "var(--dx-space-11)",
  "var(--dx-space-12)",
];

describe("Utilities parity (#75)", () => {
  it("react ships the identical utility class surface as htmx", () => {
    if (HTMX_CSS === null) return;
    expect(selectors(REACT_CSS)).toEqual(selectors(HTMX_CSS!));
  });

  it("covers the Radzen utility families with breakpoint suffixes", () => {
    const set = selectors(REACT_CSS);
    for (const cls of [
      ".dx-display-flex",
      ".dx-display-md-block",
      ".dx-justify-content-space-between",
      ".dx-justify-content-lg-center",
      ".dx-align-items-center",
      ".dx-align-items-xl-start",
      ".dx-overflow-auto",
      ".dx-overflow-xx-scroll",
      ".dx-w-50",
      ".dx-w-sm-100",
      ".dx-vw-25",
      ".dx-w-fit-content",
      ".dx-w-xs-auto",
      ".dx-min-w-75",
      ".dx-max-w-100",
      ".dx-h-50",
      ".dx-vh-100",
      ".dx-h-auto",
      ".dx-min-h-25",
      ".dx-max-h-xx-50",
    ]) {
      expect(set.has(cls), `missing ${cls}`).toBe(true);
    }
  });

  it("uses Radzen breakpoint values (xs 576 … xx 2560)", () => {
    if (HTMX_CSS === null) return;
    for (const px of [576, 768, 1024, 1280, 1920, 2560]) {
      expect(HTMX_CSS!, `missing ${px}px media query`).toContain(`(min-width: ${px}px)`);
    }
  });

  it("ships the full spacing scale (margin + padding, all sides/axes) (#79)", () => {
    const set = selectors(REACT_CSS);
    for (const cls of [
      ".dx-m-0",
      ".dx-m-05",
      ".dx-m-1",
      ".dx-m-4",
      ".dx-m-12",
      ".dx-m-auto",
      ".dx-mx-2",
      ".dx-mx-auto",
      ".dx-my-6",
      ".dx-mt-3",
      ".dx-mr-8",
      ".dx-mb-12",
      ".dx-ml-05",
      ".dx-ms-4",
      ".dx-me-4",
      ".dx-p-0",
      ".dx-p-05",
      ".dx-p-3",
      ".dx-p-12",
      ".dx-px-1",
      ".dx-py-2",
      ".dx-pt-5",
      ".dx-pr-6",
      ".dx-pb-7",
      ".dx-pl-8",
      ".dx-ps-2",
      ".dx-pe-2",
      ".dx-m-md-4",
      ".dx-mt-lg-6",
      ".dx-p-xl-3",
      ".dx-pb-xx-2",
    ]) {
      expect(set.has(cls), `missing ${cls}`).toBe(true);
    }
  });

  it("resolves spacing from the space tier tokens (#79)", () => {
    for (const [size, px] of [
      ["0", "0px"],
      ["05", "2px"],
      ["1", "4px"],
      ["5", "20px"],
      ["6", "24px"],
      ["12", "48px"],
    ]) {
      const v = `var(--dx-space-${size})`;
      expect(SPACING_VARS, `space.${size} in surface`).toContain(v);
      expect(REACT_CSS, `reference space.${size}`).toContain(v);
      expect(REACT_TOKENS, `definition --dx-space-${size}`).toContain(`--dx-space-${size}: ${px}`);
    }
    expect(REACT_CSS).toContain(".dx-m-auto { margin: auto !important; }");
    expect(REACT_CSS).toContain("@media (min-width: 1024px) {");
  });
});