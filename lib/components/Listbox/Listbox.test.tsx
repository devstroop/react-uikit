import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Listbox } from "./Listbox";

const options = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
];

describe("Listbox", () => {
  it("renders a listbox with options", () => {
    render(<Listbox options={options} aria-label="Colors" />);
    expect(screen.getByRole("listbox", { name: "Colors" })).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("selects on click in single mode", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Listbox options={options} onChange={onChange} aria-label="Colors" />);
    const red = screen.getByRole("option", { name: "Red" });
    await user.click(red);
    expect(red).toHaveAttribute("aria-selected", "true");
    expect(onChange).toHaveBeenCalledWith("red");
  });

  it("keeps a single selection", async () => {
    const user = userEvent.setup();
    render(<Listbox options={options} aria-label="Colors" />);
    const red = screen.getByRole("option", { name: "Red" });
    const blue = screen.getByRole("option", { name: "Blue" });
    await user.click(red);
    await user.click(blue);
    expect(red).toHaveAttribute("aria-selected", "false");
    expect(blue).toHaveAttribute("aria-selected", "true");
  });

  it("toggles independently in multiple mode", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Listbox options={options} multiple onChange={onChange} aria-label="Colors" />);
    const red = screen.getByRole("option", { name: "Red" });
    const green = screen.getByRole("option", { name: "Green" });
    await user.click(red);
    await user.click(green);
    expect(red).toHaveAttribute("aria-selected", "true");
    expect(green).toHaveAttribute("aria-selected", "true");
    expect(onChange).toHaveBeenLastCalledWith(["red", "green"]);
    await user.click(red);
    expect(red).toHaveAttribute("aria-selected", "false");
    expect(onChange).toHaveBeenLastCalledWith(["green"]);
  });

  it("marks multiselectable", () => {
    render(<Listbox options={options} multiple aria-label="Colors" />);
    expect(screen.getByRole("listbox")).toHaveAttribute("aria-multiselectable", "true");
  });

  it("navigates and selects with the keyboard in single mode", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Listbox options={options} onChange={onChange} aria-label="Colors" />);
    const box = screen.getByRole("listbox");
    box.focus();
    await user.keyboard("{ArrowDown}");
    expect(box).toHaveAttribute("aria-activedescendant", screen.getAllByRole("option")[1]!.id);
    expect(onChange).toHaveBeenCalledWith("green");
    await user.keyboard("{Enter}");
    expect(screen.getByRole("option", { name: "Green" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("toggles with Space without moving in multiple mode", async () => {
    const user = userEvent.setup();
    render(<Listbox options={options} multiple aria-label="Colors" />);
    const box = screen.getByRole("listbox");
    box.focus();
    await user.keyboard(" ");
    const red = screen.getByRole("option", { name: "Red" });
    expect(red).toHaveAttribute("aria-selected", "true");
    expect(box).toHaveAttribute("aria-activedescendant", red.id);
  });

  it("skips disabled options on arrow navigation", async () => {
    const user = userEvent.setup();
    render(
      <Listbox
        options={[{ value: "x", label: "X", disabled: true }, ...options]}
        aria-label="Colors"
      />,
    );
    const box = screen.getByRole("listbox");
    box.focus();
    expect(box).toHaveAttribute("aria-activedescendant", screen.getAllByRole("option")[1]!.id);
    await user.keyboard("{ArrowUp}");
    expect(box).toHaveAttribute("aria-activedescendant", screen.getAllByRole("option")[3]!.id);
  });

  it("reflects the controlled value prop", () => {
    const { rerender } = render(<Listbox options={options} value="green" aria-label="Colors" />);
    expect(screen.getByRole("option", { name: "Green" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    rerender(<Listbox options={options} value={["red", "blue"]} multiple aria-label="Colors" />);
    expect(screen.getByRole("option", { name: "Red" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("option", { name: "Blue" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});