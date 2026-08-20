import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Numeric } from "./Numeric";

describe("Numeric", () => {
  it("renders a text input with increment/decrement buttons", () => {
    render(<Numeric aria-label="Quantity" defaultValue={3} />);
    expect(screen.getByRole("textbox", { name: "Quantity" })).toHaveAttribute(
      "inputmode",
      "decimal",
    );
    expect(screen.getByRole("button", { name: "Increment" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Decrement" })).toBeInTheDocument();
  });

  it("increments on the up button and clamps at max", async () => {
    const user = userEvent.setup();
    render(<Numeric aria-label="Quantity" defaultValue={3} min={0} max={5} />);
    const input = screen.getByRole("textbox", { name: "Quantity" });
    const up = screen.getByRole("button", { name: "Increment" });
    await user.click(up);
    expect(input).toHaveValue("4");
    await user.click(up);
    expect(input).toHaveValue("5");
    await user.click(up);
    expect(input).toHaveValue("5");
  });

  it("decrements on the down button and clamps at min", async () => {
    const user = userEvent.setup();
    render(<Numeric aria-label="Quantity" defaultValue={1} min={0} max={5} />);
    const input = screen.getByRole("textbox", { name: "Quantity" });
    const down = screen.getByRole("button", { name: "Decrement" });
    await user.click(down);
    expect(input).toHaveValue("0");
    await user.click(down);
    expect(input).toHaveValue("0");
  });

  it("steps by the configured step, snapping from min", async () => {
    const user = userEvent.setup();
    render(<Numeric aria-label="Quantity" defaultValue={0} min={0} step={5} />);
    const input = screen.getByRole("textbox", { name: "Quantity" });
    const up = screen.getByRole("button", { name: "Increment" });
    await user.click(up);
    expect(input).toHaveValue("5");
    await user.click(up);
    expect(input).toHaveValue("10");
  });

  it("supports ArrowUp/ArrowDown with default prevented", () => {
    render(<Numeric aria-label="Quantity" defaultValue={3} />);
    const input = screen.getByRole("textbox", { name: "Quantity" });
    const upEvent = fireEvent.keyDown(input, { key: "ArrowUp" });
    expect(upEvent).toBe(false);
    expect(input).toHaveValue("4");
    const downEvent = fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(downEvent).toBe(false);
    expect(input).toHaveValue("3");
  });

  it("strips non-numeric characters while typing", async () => {
    const user = userEvent.setup();
    render(<Numeric aria-label="Quantity" />);
    const input = screen.getByRole("textbox", { name: "Quantity" });
    await user.type(input, "a1b2c");
    expect(input).toHaveValue("12");
  });

  it("clamps and snaps the value on blur", () => {
    render(<Numeric aria-label="Quantity" defaultValue={99} min={0} max={5} />);
    const input = screen.getByRole("textbox", { name: "Quantity" });
    fireEvent.blur(input);
    expect(input).toHaveValue("5");
  });

  it("snaps to the nearest step on blur", () => {
    render(<Numeric aria-label="Quantity" defaultValue={2.6} min={0} step={1} />);
    const input = screen.getByRole("textbox", { name: "Quantity" });
    fireEvent.blur(input);
    expect(input).toHaveValue("3");
  });

  it("reports numeric values through onChange (controlled)", async () => {
    function Controlled() {
      const [value, setValue] = useState<number | null>(0);
      return (
        <Numeric aria-label="Quantity" value={value} min={0} max={10} onChange={setValue} />
      );
    }
    const user = userEvent.setup();
    render(<Controlled />);
    const input = screen.getByRole("textbox", { name: "Quantity" });
    await user.click(screen.getByRole("button", { name: "Increment" }));
    expect(input).toHaveValue("1");
    await user.type(input, "5");
    expect(input).toHaveValue("15");
  });

  it("blocks interaction when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Numeric aria-label="Quantity" defaultValue={3} disabled onChange={onChange} />);
    const input = screen.getByRole("textbox", { name: "Quantity" });
    expect(input).toBeDisabled();
    expect(screen.getByRole("button", { name: "Increment" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Decrement" })).toBeDisabled();
    await user.type(input, "9");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("applies size/invalid classes and forwards attributes", () => {
    render(
      <Numeric
        aria-label="Quantity"
        size="lg"
        invalid
        placeholder="0"
        incrementLabel="Add one"
        decrementLabel="Take one"
      />,
    );
    const input = screen.getByPlaceholderText("0");
    expect(input.className).toContain("lg");
    expect(input.className).toContain("invalid");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("button", { name: "Add one" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Take one" })).toBeInTheDocument();
  });
});