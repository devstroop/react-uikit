import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "utilities.css"), "utf8");

const TONES: Record<string, string> = {
  default: "--dx-color-text",
  muted: "--dx-color-text-muted",
  primary: "--dx-color-text-primary",
  success: "--dx-color-text-success",
  warning: "--dx-color-text-warning",
  danger: "--dx-color-text-danger",
  info: "--dx-color-text-info",
};

describe("text color utilities", () => {
  it.each(Object.keys(TONES))("defines .dx-text-%s against its text role", (tone) => {
    const matches = css.match(new RegExp(`\\.dx-text-${tone} \\{ color: var\\(${TONES[tone]}\\)`, "g"));
    expect(matches, tone).toHaveLength(1);
  });

  it("keeps text utilities forceful so they beat component colors", () => {
    for (const tone of Object.keys(TONES)) {
      expect(css).toContain(`.dx-text-${tone} { color: var(${TONES[tone]}) !important; }`);
    }
  });
});
