import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Autocomplete } from "./Autocomplete";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

describe("Autocomplete", () => {
  it("renders an input with a closed popup", () => {
    render(<Autocomplete options={options} aria-label="Fruit" />);
    const input = screen.getByRole("combobox", { name: "Fruit" });
    expect(input).toHaveAttribute("aria-expanded", "false");
    expect(input).toHaveAttribute("aria-controls");
    expect(screen.queryByRole("option")).not.toBeInTheDocument();
  });

  it("filters options while typing", async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} aria-label="Fruit" />);
    await user.type(screen.getByRole("combobox", { name: "Fruit" }), "ap");
    expect(screen.getAllByRole("option")).toHaveLength(1);
    expect(screen.getByRole("option", { name: "Apple" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Banana" })).not.toBeInTheDocument();
  });

  it("opens with matching options only", async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} aria-label="Fruit" />);
    await user.type(screen.getByRole("combobox", { name: "Fruit" }), "a");
    const input = screen.getByRole("combobox");
    expect(input).toHaveAttribute("aria-expanded", "true");
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });

  it("selects by click", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<Autocomplete options={options} onSelect={onSelect} aria-label="Fruit" />);
    await user.type(screen.getByRole("combobox", { name: "Fruit" }), "ba");
    await user.click(screen.getByRole("option", { name: "Banana" }));
    expect(onSelect).toHaveBeenCalledWith("banana", expect.objectContaining({ value: "banana" }));
    expect(screen.getByRole("combobox")).toHaveValue("Banana");
  });

  it("navigates and selects with the keyboard", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<Autocomplete options={options} onSelect={onSelect} aria-label="Fruit" />);
    const input = screen.getByRole("combobox", { name: "Fruit" });
    input.focus();
    await user.keyboard("{ArrowDown}");
    expect(input).toHaveAttribute("aria-expanded", "true");
    expect(input).toHaveAttribute(
      "aria-activedescendant",
      screen.getAllByRole("option")[0]!.id,
    );
    await user.keyboard("{ArrowDown}");
    expect(input).toHaveAttribute(
      "aria-activedescendant",
      screen.getAllByRole("option")[1]!.id,
    );
    await user.keyboard("{Enter}");
    expect(onSelect).toHaveBeenCalledWith("banana", expect.objectContaining({ value: "banana" }));
    expect(input).toHaveValue("Banana");
  });

  it("closes on Escape and keeps focus", async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} aria-label="Fruit" />);
    const input = screen.getByRole("combobox", { name: "Fruit" });
    await user.type(input, "c");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("option")).not.toBeInTheDocument();
    expect(input).toHaveFocus();
  });

  it("clears through the clear affordance", async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} aria-label="Fruit" />);
    const input = screen.getByRole("combobox", { name: "Fruit" });
    await user.type(input, "ap");
    await user.click(screen.getByRole("button", { name: "Clear" }));
    expect(input).toHaveValue("");
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("shows an empty message when nothing matches", async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} aria-label="Fruit" />);
    await user.type(screen.getByRole("combobox", { name: "Fruit" }), "zz");
    expect(screen.queryByRole("option")).not.toBeInTheDocument();
    expect(screen.getByText("No matches")).toBeInTheDocument();
  });

  it("sets aria-invalid only when invalid", () => {
    const { rerender } = render(<Autocomplete options={options} aria-label="Fruit" />);
    expect(screen.getByRole("combobox")).not.toHaveAttribute("aria-invalid");
    rerender(<Autocomplete options={options} invalid aria-label="Fruit" />);
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
  });

  it("never opens when disabled", () => {
    render(<Autocomplete options={options} disabled aria-label="Fruit" />);
    const input = screen.getByRole("combobox", { name: "Fruit" });
    expect(input).toBeDisabled();
    fireEvent.change(input, { target: { value: "ap" } });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(screen.queryByRole("option")).not.toBeInTheDocument();
  });

  it("applies size classes", () => {
    const { rerender } = render(<Autocomplete options={options} aria-label="Fruit" />);
    expect(screen.getByRole("combobox").parentElement?.className).toContain("md");
    rerender(<Autocomplete options={options} size="sm" aria-label="Fruit" />);
    expect(screen.getByRole("combobox").parentElement?.className).toContain("sm");
  });
});