import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { describe, expect, it } from "vitest";

const HERE = dirname(fileURLToPath(import.meta.url));
const css = (name: string) =>
  readFileSync(join(HERE, "components", name, `${name}.module.css`), "utf8");

const SCOPE = [
  "Button",
  "Card",
  "Text",
  "Input",
  "Dialog",
  "Table",
  "Alert",
  "Pager",
] as const;

describe("component namespaces (Radzen parity pilot)", () => {
  it("exposes Button/Input/Dialog/Alert geometry hooks with exact defaults", () => {
    expect(css("Button")).toContain("--dx-button-padding-md: 0 16px;");
    expect(css("Button")).toContain("padding: var(--dx-button-padding-md);");
    expect(css("Input")).toContain("--dx-input-padding-md: 8px 12px;");
    expect(css("Input")).toContain("padding: var(--dx-input-padding-md);");
    expect(css("Dialog")).toContain("--dx-dialog-width-md: 520px;");
    expect(css("Dialog")).toContain("max-width: var(--dx-dialog-width-md);");
    expect(css("Dialog")).toContain("--dx-dialog-close-size: 28px;");
    expect(css("Alert")).toContain("--dx-alert-dismiss-size-md: 22px;");
    expect(css("Alert")).toContain(
      "--alert-dismiss-size: var(--dx-alert-dismiss-size-md);",
    );
  });

  it("keeps no bare border/opacity/focus-ring literals in the pilot scope", () => {
    for (const name of SCOPE) {
      const content = css(name);
      expect(content, `${name} bare 1px border`).not.toMatch(
        /border(-[a-z]+)?: 1px solid/,
      );
      expect(content, `${name} bare disabled opacity`).not.toContain(
        "opacity: 0.55;",
      );
      expect(content, `${name} bare focus spread`).not.toContain("0 0 0 3px");
      expect(content, `${name} bare outline width`).not.toMatch(
        /outline: 2px solid/,
      );
    }
  });

  it("drives type metrics off the leading/letterspacing tokens", () => {
    expect(css("Text")).not.toMatch(/line-height: 1(\.\d+)?;/);
    expect(css("Text")).toContain("var(--dx-leading-body)");
    expect(css("Text")).toContain("var(--dx-letterspacing-button)");
    expect(css("Table")).toContain("var(--dx-letterspacing-wide)");
    expect(css("Dialog")).toContain("var(--dx-leading-loose)");
  });
});
