import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, "..", "..", "..", "..", "..");
const REACT_CSS = readFileSync(join(HERE, "..", "..", "utilities.css"), "utf8");
const REACT_TOKENS = readFileSync(join(HERE, "..", "..", "styles", "tokens.css"), "utf8");
const HTMX_CSS = readFileSync(
  join(ROOT, "frameworks", "htmx", "lib", "components", "utilities", "utilities.css"),
  "utf8",
);

const selectors = (css: string) =>
  new Set(
    [...css.matchAll(/\.dt-[a-z0-9-]+/g)].map((m) => m[0]).sort(),
  );

const SPACING_VARS = [
  "var(--dt-space-0)",
  "var(--dt-space-05)",
  "var(--dt-space-1)",
  "var(--dt-space-2)",
  "var(--dt-space-3)",
  "var(--dt-space-4)",
  "var(--dt-space-5)",
  "var(--dt-space-6)",
  "var(--dt-space-7)",
  "var(--dt-space-8)",
  "var(--dt-space-9)",
  "var(--dt-space-10)",
  "var(--dt-space-11)",
  "var(--dt-space-12)",
];

describe("Utilities parity (#75)", () => {
  it("react ships the identical utility class surface as htmx", () => {
    expect(selectors(REACT_CSS)).toEqual(selectors(HTMX_CSS));
  });

  it("covers the Radzen utility families with breakpoint suffixes", () => {
    const set = selectors(REACT_CSS);
    for (const cls of [
      ".dt-display-flex",
      ".dt-display-md-block",
      ".dt-justify-content-space-between",
      ".dt-justify-content-lg-center",
      ".dt-align-items-center",
      ".dt-align-items-xl-start",
      ".dt-overflow-auto",
      ".dt-overflow-xx-scroll",
      ".dt-w-50",
      ".dt-w-sm-100",
      ".dt-vw-25",
      ".dt-w-fit-content",
      ".dt-w-xs-auto",
      ".dt-min-w-75",
      ".dt-max-w-100",
      ".dt-h-50",
      ".dt-vh-100",
      ".dt-h-auto",
      ".dt-min-h-25",
      ".dt-max-h-xx-50",
    ]) {
      expect(set.has(cls), `missing ${cls}`).toBe(true);
    }
  });

  it("uses Radzen breakpoint values (xs 576 … xx 2560)", () => {
    for (const px of [576, 768, 1024, 1280, 1920, 2560]) {
      expect(HTMX_CSS, `missing ${px}px media query`).toContain(`(min-width: ${px}px)`);
    }
  });

  it("ships the full spacing scale (margin + padding, all sides/axes) (#79)", () => {
    const set = selectors(REACT_CSS);
    for (const cls of [
      ".dt-m-0",
      ".dt-m-05",
      ".dt-m-1",
      ".dt-m-4",
      ".dt-m-12",
      ".dt-m-auto",
      ".dt-mx-2",
      ".dt-mx-auto",
      ".dt-my-6",
      ".dt-mt-3",
      ".dt-mr-8",
      ".dt-mb-12",
      ".dt-ml-05",
      ".dt-ms-4",
      ".dt-me-4",
      ".dt-p-0",
      ".dt-p-05",
      ".dt-p-3",
      ".dt-p-12",
      ".dt-px-1",
      ".dt-py-2",
      ".dt-pt-5",
      ".dt-pr-6",
      ".dt-pb-7",
      ".dt-pl-8",
      ".dt-ps-2",
      ".dt-pe-2",
      ".dt-m-md-4",
      ".dt-mt-lg-6",
      ".dt-p-xl-3",
      ".dt-pb-xx-2",
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
      const v = `var(--dt-space-${size})`;
      expect(SPACING_VARS, `space.${size} in surface`).toContain(v);
      expect(REACT_CSS, `reference space.${size}`).toContain(v);
      expect(REACT_TOKENS, `definition --dt-space-${size}`).toContain(`--dt-space-${size}: ${px}`);
    }
    expect(REACT_CSS).toContain(".dt-m-auto { margin: auto !important; }");
    expect(REACT_CSS).toContain("@media (min-width: 1024px) {");
  });
});