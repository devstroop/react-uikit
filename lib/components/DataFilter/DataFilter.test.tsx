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

  it("adds a second condition narrowing the result", () => {
    const viewChanged = vi.fn();
    render(
      <DataFilter
        properties={properties}
        items={people}
        initialRows={[{ property: "age", operator: "GreaterThan", value: 20 }]}
        viewChanged={viewChanged}
      />,
    );
    expect(screen.queryByLabelText("Condition 1 second operator")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("+ Second condition"));
    expect(screen.getByLabelText("Condition 1 second operator")).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Condition 1 second operator"), {
      target: { value: "LessThan" },
    });
    // Both editors share the property label; the second one is the target.
    const ageBoxes = screen.getAllByLabelText("Age");
    fireEvent.change(ageBoxes[1]!, { target: { value: "35" } });
    const last = viewChanged.mock.calls.at(-1)?.[0] as { name: string }[];
    expect(last.map((p) => p.name).sort()).toEqual(["Jane", "John"]);
  });

  it("applies a valueless nullish second condition to the result", () => {
    const viewChanged = vi.fn();
    render(
      <DataFilter
        properties={properties}
        items={people}
        initialRows={[
          {
            property: "age",
            operator: "GreaterThan",
            value: 20,
            secondOperator: "IsNull",
            logicalOperator: "And",
          },
        ]}
        viewChanged={viewChanged}
      />,
    );
    // Every age is present, so `> 20 AND IS NULL` matches nothing.
    const last = viewChanged.mock.calls.at(-1)?.[0] as { name: string }[];
    expect(last).toHaveLength(0);
  });

  it("skips an empty second value under the same rules as the first", () => {
    const viewChanged = vi.fn();
    render(
      <DataFilter
        properties={properties}
        items={people}
        initialRows={[
          {
            property: "age",
            operator: "GreaterThan",
            value: 20,
            secondOperator: "LessThan",
            secondValue: "",
            logicalOperator: "And",
          },
        ]}
        viewChanged={viewChanged}
      />,
    );
    // Empty second value constrains nothing: first clause alone applies.
    const last = viewChanged.mock.calls.at(-1)?.[0] as { name: string }[];
    expect(last.map((p) => p.name).sort()).toEqual(["Bob", "Jane", "John"]);
  });

  it("clears a stale second condition when the first turns nullish", () => {
    render(
      <DataFilter
        properties={properties}
        items={people}
        initialRows={[
          {
            property: "age",
            operator: "GreaterThan",
            value: 20,
            secondOperator: "LessThan",
            secondValue: 35,
          },
        ]}
      />,
    );
    expect(screen.getByLabelText("Condition 1 second operator")).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Condition 1 operator"), {
      target: { value: "IsNull" },
    });
    expect(screen.queryByLabelText("Condition 1 second operator")).not.toBeInTheDocument();
    // Switching back starts clean, not resurrected.
    fireEvent.change(screen.getByLabelText("Condition 1 operator"), {
      target: { value: "GreaterThan" },
    });
    expect(screen.queryByLabelText("Condition 1 second operator")).not.toBeInTheDocument();
  });

  it("hides the second value editor for nullish second operators", () => {
    render(
      <DataFilter
        properties={properties}
        items={people}
        initialRows={[
          {
            property: "age",
            operator: "GreaterThan",
            value: 20,
            secondOperator: "LessThan",
            secondValue: 35,
          },
        ]}
      />,
    );
    expect(screen.getAllByLabelText("Age")).toHaveLength(2);
    fireEvent.change(screen.getByLabelText("Condition 1 second operator"), {
      target: { value: "IsNull" },
    });
    expect(screen.getAllByLabelText("Age")).toHaveLength(1);
  });

  it("removes the second condition", () => {
    render(
      <DataFilter
        properties={properties}
        items={people}
        initialRows={[
          {
            property: "age",
            operator: "GreaterThan",
            value: 20,
            secondOperator: "LessThan",
            secondValue: 35,
          },
        ]}
      />,
    );
    expect(screen.getByLabelText("Condition 1 second operator")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Remove second condition 1"));
    expect(screen.queryByLabelText("Condition 1 second operator")).not.toBeInTheDocument();
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

  it("hides the first value editor for nullish operators", () => {
    render(<DataFilter properties={properties} items={people} />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Condition 1 operator"), {
      target: { value: "IsNull" },
    });
    expect(screen.queryByLabelText("Name")).not.toBeInTheDocument();
  });
});