import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Radiobuttonlist } from "./Radiobuttonlist";

const options = [
  { value: "sm", label: "Small" },
  { value: "md", label: "Medium" },
  { value: "lg", label: "Large" },
];

describe("Radiobuttonlist", () => {
  it("renders a fieldset with a legend", () => {
    render(<Radiobuttonlist options={options} legend="Size" name="size" />);
    expect(screen.getByRole("group", { name: "Size" })).toBeInTheDocument();
  });

  it("renders an option per entry", () => {
    render(<Radiobuttonlist options={options} name="size" />);
    expect(screen.getAllByRole("radio")).toHaveLength(3);
    expect(screen.getByRole("radio", { name: "Medium" })).toBeInTheDocument();
  });

  it("shares the name across radios", () => {
    render(<Radiobuttonlist options={options} name="size" />);
    screen.getAllByRole("radio").forEach((radio) => {
      expect(radio).toHaveAttribute("name", "size");
    });
  });

  it("reports a selection through onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Radiobuttonlist options={options} name="size" onChange={onChange} />);
    await user.click(screen.getByRole("radio", { name: "Large" }));
    expect(onChange).toHaveBeenCalledWith("lg");
  });

  it("keeps single selection", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Radiobuttonlist options={options} name="size" onChange={onChange} />);
    await user.click(screen.getByRole("radio", { name: "Small" }));
    await user.click(screen.getByRole("radio", { name: "Large" }));
    expect(onChange).toHaveBeenLastCalledWith("lg");
    expect(screen.getByRole("radio", { name: "Small" })).not.toBeChecked();
    expect(screen.getByRole("radio", { name: "Large" })).toBeChecked();
  });

  it("reflects the controlled value prop", () => {
    const { rerender } = render(<Radiobuttonlist options={options} name="size" value="md" />);
    expect(screen.getByRole("radio", { name: "Medium" })).toBeChecked();
    rerender(<Radiobuttonlist options={options} name="size" value="sm" />);
    expect(screen.getByRole("radio", { name: "Small" })).toBeChecked();
  });

  it("disables a disabled option", () => {
    render(
      <Radiobuttonlist
        options={[{ value: "xl", label: "Extra large", disabled: true }, ...options]}
        name="size"
      />,
    );
    expect(screen.getByRole("radio", { name: "Extra large" })).toBeDisabled();
    expect(screen.getByRole("radio", { name: "Small" })).not.toBeDisabled();
  });
});