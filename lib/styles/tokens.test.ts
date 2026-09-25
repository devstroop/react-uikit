import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "tokens.css"), "utf8");

const HUES = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "danger",
  "light",
  "base",
  "dark",
] as const;
const STEPS = ["lighter", "light", "dark", "darker"] as const;
const HEX = /^#[0-9a-f]{6}$/;
const HEX_IN_CSS = "#[0-9a-f]{6}";

describe("shade ramp tokens", () => {
  it.each(HUES)("defines all four --dx-{hue}-{step}-color fill steps", (hue) => {
    for (const step of STEPS) {
      expect(css).toContain(`--dx-${hue}-${step}-color:`);
    }
  });

  it("defines each fill step in all three theme blocks (light, dark, OS fallback)", () => {
    for (const hue of HUES) {
      for (const step of STEPS) {
        const matches = css.match(new RegExp(`--dx-${hue}-${step}-color:\\s*${HEX_IN_CSS};`, "g"));
        expect(matches, `${hue}-${step}`).toHaveLength(3);
      }
    }
  });

  it("uses valid lowercase hex for every ramp value", () => {
    for (const hue of HUES) {
      for (const step of STEPS) {
        const values = [...css.matchAll(new RegExp(`--dx-${hue}-${step}-color:\\s*([^;]+);`, "g"))].map(
          (m) => (m[1] ?? "").trim(),
        );
        expect(values.length).toBeGreaterThan(0);
        for (const value of values) {
          expect(value, `${hue}-${step}`).toMatch(HEX);
        }
      }
    }
  });

  it("completes the border/outline families with lighter+dark steps", () => {
    for (const hue of ["primary", "secondary", "info", "success", "warning", "danger"] as const) {
      for (const role of ["border", "outline"] as const) {
        for (const step of ["lighter", "dark"] as const) {
          const matches = css.match(new RegExp(`--dx-${role}-${hue}-${step}-color:\\s*${HEX_IN_CSS};`, "g"));
          expect(matches, `${role}-${hue}-${step}`).toHaveLength(3);
        }
      }
    }
  });

  it("defines on-* foreground aliases for every step in all three theme blocks", () => {
    for (const hue of HUES) {
      for (const step of STEPS) {
        const matches = css.match(new RegExp(`--dx-on-${hue}-${step}-color:\\s*var\\([^;]+\\);`, "g"));
        expect(matches, `on-${hue}-${step}`).toHaveLength(3);
      }
    }
  });

  it("points every on-* alias at an existing token", () => {
    const defined = new Set(
      [...css.matchAll(/--dx-[a-z0-9-]+(?=:)/g)].map((m) => m[0]),
    );
    for (const m of css.matchAll(/--dx-on-[a-z]+-(?:lighter|light|dark|darker)-color:\s*var\((--dx-[a-z-]+-color)\)/g)) {
      const target = m[1] ?? "";
      expect(defined.has(target), target).toBe(true);
    }
  });
});

describe("foundation tokens", () => {
  it("defines geometry and interaction constants", () => {
    for (const [token, value] of [
      ["--dx-border-width", "1px"],
      ["--dx-outline-width", "2px"],
      ["--dx-focus-ring-width", "3px"],
      ["--dx-focus-ring-offset", "2px"],
      ["--dx-disabled-opacity", "0.55"],
    ]) {
      expect(css, token).toContain(`${token}: ${value};`);
    }
  });

  it("defines the leading scale with exact in-use values", () => {
    for (const [token, value] of [
      ["--dx-leading-none", "1"],
      ["--dx-leading-tight", "1.25"],
      ["--dx-leading-snug", "1.3"],
      ["--dx-leading-normal", "1.35"],
      ["--dx-leading-relaxed", "1.4"],
      ["--dx-leading-text", "1.429"],
      ["--dx-leading-body", "1.5"],
      ["--dx-leading-loose", "1.6"],
    ]) {
      expect(css, token).toContain(`${token}: ${value};`);
    }
  });

  it("defines letterspacing extras and link aliases", () => {
    expect(css).toContain("--dx-letterspacing-button: 0.25px;");
    expect(css).toContain("--dx-letterspacing-wide: 0.04em;");
    expect(css).toContain("--dx-link-color: var(--dx-primary-color);");
    expect(css).toContain("--dx-link-hover-color: var(--dx-primary-hover-color);");
  });

  it("self-hosts the Source Sans 3 variable fonts with swap", () => {
    expect(css).toContain('font-family: "Source Sans 3";');
    expect(css).toContain('url("./fonts/SourceSans3VF-Upright.ttf.woff2")');
    expect(css).toContain('url("./fonts/SourceSans3VF-Italic.ttf.woff2")');
    expect(css).toContain("font-display: swap;");
    expect(css).toContain("font-weight: 100 900;");
  });
});
