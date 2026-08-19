import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DataFilter, type DataFilterProperty } from "./DataFilter";

const properties: readonly DataFilterProperty[] = [
  { name: "name", title: "Name", type: "string" },
  { name: "age", title: "Age", type: "number" },
  { name: "active", title: "Active", type: "boolean" },
];

const people = [
  { name: "John", age: 30, active: true },
  { name: "Jane", age: 25, active: false },
  { name: "Bob", age: 40, active: true },
];

describe("DataFilter", () => {
  it("renders one row per initialRows with property/operator/value editors", () => {
    render(<DataFilter properties={properties} items={people} />);
    expect(screen.getByLabelText("Condition 1 property")).toBeInTheDocument();
    expect(screen.getByLabelText("Condition 1 operator")).toHaveValue("Contains");
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });

  it("default operator follows property type", () => {
    render(
      <DataFilter
        properties={properties}
        items={people}
        initialRows={[{ property: "age", operator: "Equals", value: 25 }]}
      />,
    );
    expect(screen.getByLabelText("Condition 1 operator")).toHaveValue("Equals");
  });

  it("switching property resets operator to the type default", () => {
    render(<DataFilter properties={properties} items={people} />);
    fireEvent.change(screen.getByLabelText("Condition 1 property"), { target: { value: "age" } });
    expect(screen.getByLabelText("Condition 1 operator")).toHaveValue("Equals");
  });

  it("adds and removes rows", () => {
    render(<DataFilter properties={properties} items={people} />);
    fireEvent.click(screen.getByText("Add filter"));
    expect(screen.getByLabelText("Condition 2 property")).toBeInTheDocument();
    expect(screen.getByText("And")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Remove condition 2"));
    expect(screen.queryByLabelText("Condition 2 property")).not.toBeInTheDocument();
  });

  it("cannot remove the last remaining row", () => {
    render(<DataFilter properties={properties} items={people} />);
    fireEvent.click(screen.getByLabelText("Remove condition 1"));
    expect(screen.getByLabelText("Condition 1 property")).toBeInTheDocument();
  });

  it("viewChanged fires with the filtered result on change", () => {
    const viewChanged = vi.fn();
    render(<DataFilter properties={properties} items={people} viewChanged={viewChanged} />);
    fireEvent.change(screen.getByLabelText("Condition 1 property"), { target: { value: "age" } });
    fireEvent.change(screen.getByLabelText("Condition 1 operator"), { target: { value: "GreaterThan" } });
    fireEvent.change(screen.getByLabelText("Age"), { target: { value: "30" } });
    expect(viewChanged).toHaveBeenLastCalledWith([
      { name: "Bob", age: 40, active: true },
    ]);
  });

  it("boolean properties render a true/false select", () => {
    render(
      <DataFilter
        properties={properties}
        items={people}
        initialRows={[{ property: "active", operator: "Equals", value: true }]}
      />,
    );
    expect(screen.getByLabelText("Active")).toHaveValue("true");
  });

  it("summary reports the applied count", () => {
    render(<DataFilter properties={properties} items={people} />);
    expect(screen.getByText("3 of 3")).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "o" } });
    expect(screen.getByText("2 of 3")).toBeInTheDocument();
  });
});