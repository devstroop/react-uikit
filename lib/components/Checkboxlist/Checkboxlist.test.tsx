import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Checkboxlist } from "./Checkboxlist";

const options = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
];

describe("Checkboxlist", () => {
  it("renders a fieldset with a legend", () => {
    render(<Checkboxlist options={options} legend="Colors" />);
    expect(screen.getByRole("group", { name: "Colors" })).toBeInTheDocument();
    expect(screen.getByRole("group")).toContainElement(screen.getByText("Red"));
  });

  it("renders an option per entry", () => {
    render(<Checkboxlist options={options} />);
    expect(screen.getAllByRole("checkbox")).toHaveLength(3);
    expect(screen.getByRole("checkbox", { name: "Red" })).toBeInTheDocument();
  });

  it("reports a toggle through onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkboxlist options={options} onChange={onChange} />);
    await user.click(screen.getByRole("checkbox", { name: "Green" }));
    expect(onChange).toHaveBeenCalledWith(["green"]);
  });

  it("allows multiple independent selections", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkboxlist options={options} onChange={onChange} />);
    await user.click(screen.getByRole("checkbox", { name: "Red" }));
    await user.click(screen.getByRole("checkbox", { name: "Blue" }));
    expect(onChange).toHaveBeenLastCalledWith(["red", "blue"]);
  });

  it("reflects the controlled value prop", () => {
    const { rerender } = render(<Checkboxlist options={options} value={["red"]} />);
    expect(screen.getByRole("checkbox", { name: "Red" })).toBeChecked();
    rerender(<Checkboxlist options={options} value={["blue"]} />);
    expect(screen.getByRole("checkbox", { name: "Red" })).not.toBeChecked();
    expect(screen.getByRole("checkbox", { name: "Blue" })).toBeChecked();
  });

  it("disables a disabled option", () => {
    render(
      <Checkboxlist
        options={[{ value: "x", label: "Locked", disabled: true }, ...options]}
      />,
    );
    expect(screen.getByRole("checkbox", { name: "Locked" })).toBeDisabled();
    expect(screen.getByRole("checkbox", { name: "Red" })).not.toBeDisabled();
  });

  it("propagates the name attribute", () => {
    render(<Checkboxlist options={options} name="colors" />);
    screen.getAllByRole("checkbox").forEach((checkbox) => {
      expect(checkbox).toHaveAttribute("name", "colors");
    });
  });
});