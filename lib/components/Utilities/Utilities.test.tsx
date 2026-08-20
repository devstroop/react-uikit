import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, "..", "..", "..", "..", "..");
const REACT_CSS = readFileSync(join(HERE, "..", "..", "utilities.css"), "utf8");
const HTMX_CSS = readFileSync(
  join(ROOT, "frameworks", "htmx", "lib", "components", "utilities", "utilities.css"),
  "utf8",
);

const selectors = (css: string) =>
  new Set(
    [...css.matchAll(/\.dt-[a-z0-9-]+/g)].map((m) => m[0]).sort(),
  );

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
});