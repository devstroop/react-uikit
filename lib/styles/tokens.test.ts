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
