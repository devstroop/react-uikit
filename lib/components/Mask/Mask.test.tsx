import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { formatMasked, Mask } from "./Mask";

const PHONE = "(###) ###-####";

describe("formatMasked", () => {
  it("fills digit placeholders and inserts separators as needed", () => {
    expect(formatMasked("", PHONE)).toBe("");
    expect(formatMasked("123", PHONE)).toBe("(123");
    expect(formatMasked("1234567", PHONE)).toBe("(123) 456-7");
    expect(formatMasked("1234567890", PHONE)).toBe("(123) 456-7890");
  });

  it("ignores non-digit characters", () => {
    expect(formatMasked("ab1cd23", PHONE)).toBe("(123");
  });
});

describe("Mask", () => {
  it("renders a native text input with an accessible name", () => {
    render(<Mask mask={PHONE} aria-label="Phone" />);
    const input = screen.getByRole("textbox", { name: "Phone" });
    expect(input).toHaveAttribute("type", "text");
  });

  it("formats digits as they are typed", async () => {
    const user = userEvent.setup();
    render(<Mask mask={PHONE} aria-label="Phone" />);
    const input = screen.getByRole("textbox", { name: "Phone" });
    await user.type(input, "1234567890");
    expect(input).toHaveValue("(123) 456-7890");
  });

  it("strips non-digit characters", async () => {
    const user = userEvent.setup();
    render(<Mask mask={PHONE} aria-label="Phone" />);
    const input = screen.getByRole("textbox", { name: "Phone" });
    await user.type(input, "ab1cd23");
    expect(input).toHaveValue("(123");
  });

  it("drops characters beyond the mask length", async () => {
    const user = userEvent.setup();
    render(<Mask mask={PHONE} aria-label="Phone" />);
    const input = screen.getByRole("textbox", { name: "Phone" });
    await user.type(input, "1234567890123");
    expect(input).toHaveValue("(123) 456-7890");
  });

  it("backspace over a separator removes the separator and the digit before it", () => {
    render(<Mask mask={PHONE} defaultValue="(123) 456-7" aria-label="Phone" />);
    const input = screen.getByRole("textbox", { name: "Phone" }) as HTMLInputElement;
    input.setSelectionRange(10, 10);
    fireEvent.keyDown(input, { key: "Backspace" });
    expect(input).toHaveValue("(123) 456");
  });

  it("reports the masked value through onChange (controlled)", async () => {
    function Controlled() {
      const [value, setValue] = useState("");
      return <Mask mask={PHONE} aria-label="Phone" value={value} onChange={setValue} />;
    }
    const user = userEvent.setup();
    render(<Controlled />);
    const input = screen.getByRole("textbox", { name: "Phone" });
    await user.type(input, "1234567890");
    expect(input).toHaveValue("(123) 456-7890");
  });

  it("applies size/invalid classes and forwards attributes", () => {
    const onChange = vi.fn();
    render(
      <Mask
        mask={PHONE}
        size="lg"
        invalid
        placeholder="(123) 456-7890"
        disabled
        onChange={onChange}
        aria-label="Phone"
      />,
    );
    const input = screen.getByPlaceholderText("(123) 456-7890");
    expect(input.className).toContain("lg");
    expect(input.className).toContain("invalid");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toBeDisabled();
  });
});