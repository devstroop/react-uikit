import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Colorpicker, DEFAULT_PALETTE } from "./Colorpicker";

describe("Colorpicker", () => {
  it("renders a trigger with dialog semantics and no popup by default", () => {
    render(<Colorpicker />);
    const trigger = screen.getByRole("button", { name: "Pick a color" });
    expect(trigger).toHaveAttribute("aria-haspopup", "dialog");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveAttribute("aria-controls");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens the popup with saturation, hue, alpha sliders and rgba inputs", async () => {
    const user = userEvent.setup();
    render(<Colorpicker value="#2563eb" />);
    await user.click(screen.getByRole("button", { name: "Pick a color" }));
    expect(screen.getByRole("dialog", { name: "Choose color" })).toBeInTheDocument();
    expect(screen.getByRole("slider", { name: "Color" })).toBeInTheDocument();
    expect(screen.getByRole("slider", { name: "Hue" })).toBeInTheDocument();
    expect(screen.getByRole("slider", { name: "Alpha" })).toHaveAttribute(
      "aria-valuenow",
      "100",
    );
    expect(screen.getByLabelText("Hex")).toHaveValue("#2563eb");
  });

  it("renders the default 22-swatch palette", async () => {
    const user = userEvent.setup();
    render(<Colorpicker />);
    await user.click(screen.getByRole("button", { name: "Pick a color" }));
    const swatches = screen.getAllByRole("button", { name: /^#/ });
    expect(swatches).toHaveLength(DEFAULT_PALETTE.length);
  });

  it("picking a swatch commits an rgb value and closes without showButton", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Colorpicker value="#000000" onChange={onChange} />);
    await user.click(screen.getByRole("button", { name: "Pick a color" }));
    await user.click(screen.getByRole("button", { name: "#ff2800" }));
    expect(onChange).toHaveBeenCalledWith("rgb(255, 40, 0)");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("with showButton, picks are staged and OK commits", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Colorpicker value="#000000" showButton onChange={onChange} />);
    await user.click(screen.getByRole("button", { name: "Pick a color" }));
    await user.click(screen.getByRole("button", { name: "#0433ff" }));
    expect(onChange).not.toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "OK" }));
    expect(onChange).toHaveBeenCalledWith("rgb(4, 51, 255)");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("normalizes a short hex input to rgb on output", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Colorpicker value="#fff" showButton onChange={onChange} />);
    await user.click(screen.getByRole("button", { name: "Pick a color" }));
    expect(screen.getByLabelText("Hex")).toHaveValue("#ffffff");
  });

  it("escape closes the popup", async () => {
    const user = userEvent.setup();
    render(<Colorpicker />);
    await user.click(screen.getByRole("button", { name: "Pick a color" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("disabled trigger does not open the popup", async () => {
    const user = userEvent.setup();
    render(<Colorpicker disabled />);
    const trigger = screen.getByRole("button", { name: "Pick a color" });
    expect(trigger).toHaveAttribute("aria-disabled", "true");
    await user.click(trigger);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("filters popup sections with showSaturation/showRgba/showPalette", async () => {
    const user = userEvent.setup();
    render(<Colorpicker showSaturation={false} showRgba={false} showPalette={false} />);
    await user.click(screen.getByRole("button", { name: "Pick a color" }));
    expect(screen.queryByRole("slider", { name: "Color" })).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Hex")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /^#/ })).not.toBeInTheDocument();
  });
});