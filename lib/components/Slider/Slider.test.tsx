import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders a single handle with slider role and value semantics", () => {
    render(<Slider value={40} label="Volume" />);
    const handle = screen.getByRole("slider", { name: "Volume" });
    expect(handle).toHaveAttribute("aria-valuemin", "0");
    expect(handle).toHaveAttribute("aria-valuemax", "100");
    expect(handle).toHaveAttribute("aria-valuenow", "40");
    expect(handle).toHaveAttribute("aria-orientation", "horizontal");
  });

  it("clamps out-of-range values", () => {
    render(<Slider value={150} min={0} max={100} label="Volume" />);
    expect(screen.getByRole("slider", { name: "Volume" })).toHaveAttribute(
      "aria-valuenow",
      "100",
    );
  });

  it("renders two handles in range mode", () => {
    render(<Slider range valueMin={20} valueMax={80} minLabel="Min" maxLabel="Max" />);
    expect(screen.getByRole("slider", { name: "Min" })).toHaveAttribute(
      "aria-valuenow",
      "20",
    );
    expect(screen.getByRole("slider", { name: "Max" })).toHaveAttribute(
      "aria-valuenow",
      "80",
    );
  });

  it("moves by step on arrow keys", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Slider value={40} label="Volume" onChange={onChange} />);
    const handle = screen.getByRole("slider", { name: "Volume" });
    handle.focus();
    await user.keyboard("{ArrowRight}");
    expect(onChange).toHaveBeenLastCalledWith(41);
    await user.keyboard("{ArrowLeft}");
    expect(onChange).toHaveBeenLastCalledWith(40);
  });

  it("jumps to min/max on Home/End", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Slider value={40} min={10} max={50} label="Volume" onChange={onChange} />);
    const handle = screen.getByRole("slider", { name: "Volume" });
    handle.focus();
    await user.keyboard("{Home}");
    expect(onChange).toHaveBeenLastCalledWith(10);
    await user.keyboard("{End}");
    expect(onChange).toHaveBeenLastCalledWith(50);
  });

  it("range mode clamps min handle to max handle", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Slider
        range
        valueMin={20}
        valueMax={80}
        minLabel="Min"
        maxLabel="Max"
        onChange={onChange}
      />,
    );
    const minHandle = screen.getByRole("slider", { name: "Min" });
    minHandle.focus();
    await user.keyboard("{End}");
    expect(onChange).toHaveBeenLastCalledWith({ min: 80, max: 80 });
  });

  it("vertical orientation exposes aria-orientation", () => {
    render(<Slider value={70} orientation="vertical" label="Volume" />);
    expect(screen.getByRole("slider", { name: "Volume" })).toHaveAttribute(
      "aria-orientation",
      "vertical",
    );
  });

  it("disabled handle is not focusable and reports aria-disabled", () => {
    render(<Slider value={35} disabled label="Disabled" />);
    const handle = screen.getByRole("slider", { name: "Disabled" });
    expect(handle).toHaveAttribute("aria-disabled", "true");
    expect(handle).toHaveAttribute("tabindex", "-1");
  });

  it("fires onInput continuously while dragging via pointer events", () => {
    const onInput = vi.fn();
    render(<Slider value={50} label="Volume" onInput={onInput} />);
    const handle = screen.getByRole("slider", { name: "Volume" });
    fireEvent.pointerDown(handle, { pointerId: 1, clientX: 50, clientY: 0 });
    expect(onInput).toHaveBeenCalled();
  });
});