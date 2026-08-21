import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Pivot } from "./Pivot";

const data = [
  { region: "East", product: "A", amount: 10 },
  { region: "East", product: "B", amount: 20 },
  { region: "West", product: "A", amount: 30 },
  { region: "West", product: "B", amount: 40 },
];

describe("Pivot", () => {
  it("renders grid with totals", () => {
    render(
      <Pivot
        data={data}
        rowFields={[{ property: "region", title: "Region" }]}
        columnFields={[{ property: "product", title: "Product" }]}
        aggregateFields={[{ property: "amount", aggregate: "Sum" }]}
      />,
    );
    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getAllByText("Total").length).toBeGreaterThanOrEqual(2);
    expect(screen.getByRole("grid", { name: "Pivot table" })).toBeInTheDocument();
  });

  it("aggregates Sum correctly", () => {
    render(
      <Pivot
        data={data}
        rowFields={[{ property: "region" }]}
        columnFields={[{ property: "product" }]}
        aggregateFields={[{ property: "amount", aggregate: "Sum" }]}
      />,
    );
    // East A = 10, East B = 20, West A = 30, West B = 40; grand total = 100
    expect(screen.getByTitle("10")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });

  it("removes a row field via chip", () => {
    const fn = vi.fn();
    render(
      <Pivot
        data={data}
        rowFields={[{ property: "region", title: "Region" }]}
        aggregateFields={[{ property: "amount", aggregate: "Sum" }]}
        onFieldsChange={fn}
      />,
    );
    const chip = screen.getByLabelText("Remove row field Region");
    fireEvent.click(chip);
    expect(fn).toHaveBeenCalledWith(expect.objectContaining({ rowFields: [] }));
  });

  it("supports Count and Average", () => {
    const { unmount } = render(<Pivot data={data} rowFields={[{ property: "region" }]} aggregateFields={[{ property: "amount", aggregate: "Average" }]} />);
    // grand average = 25
    expect(screen.getAllByText("25").length).toBeGreaterThan(0);
    unmount();
    render(<Pivot data={data} rowFields={[{ property: "region" }]} aggregateFields={[{ property: "amount", aggregate: "Count" }]} />);
    expect(screen.getAllByText("4").length).toBeGreaterThan(0);
  });
});
