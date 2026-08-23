import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Chart } from "./Chart";

const lineSeries = {
  type: "line" as const,
  title: "Sales",
  data: [
    { month: "Jan", value: 10 },
    { month: "Feb", value: 20 },
    { month: "Mar", value: 15 },
  ],
  categoryProperty: "month",
  valueProperty: "value",
};

const barSeries = {
  type: "bar" as const,
  title: "Revenue",
  data: [
    { cat: "A", val: 5 },
    { cat: "B", val: 12 },
  ],
  categoryProperty: "cat",
  valueProperty: "val",
};

describe("Chart", () => {
  it("renders svg + hidden table + legend", () => {
    render(<Chart series={[lineSeries]} ariaLabel="Demo chart" />);
    expect(document.querySelector("svg")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Demo chart" })).toBeInTheDocument();
    expect(screen.getAllByText("Sales").length).toBeGreaterThanOrEqual(1); // legend + title
    expect(screen.getByRole("table", { hidden: true })).toBeInTheDocument();
  });

  it("line series renders a path", () => {
    const { container } = render(<Chart series={[lineSeries]} />);
    expect(container.querySelector("path")).toBeTruthy();
  });

  it("columns count = categories × series", () => {
    const s2 = { ...barSeries, data: barSeries.data, type: "column" as const };
    const { container } = render(<Chart series={[s2]} />);
    // column uses rects grouped by category
    expect(container.querySelectorAll("rect[rx='2']").length).toBe(2);
  });

  it("click fires SeriesClick args", () => {
    const fn = vi.fn();
    render(<Chart series={[barSeries]} onSeriesClick={fn} />);
    const rects = document.querySelectorAll("rect[rx='2']");
    fireEvent.click(rects[0]!);
    expect(fn).toHaveBeenCalledWith(expect.objectContaining({ seriesTitle: "Revenue", category: "A", value: 5 }));
  });

  it("tooltip shows on hover", () => {
    render(<Chart series={[lineSeries]} />);
    const hits = document.querySelectorAll("rect[fill='transparent']");
    fireEvent.mouseEnter(hits[0]!);
    expect(screen.getByText("Sales: 10")).toBeInTheDocument();
    fireEvent.mouseLeave(hits[0]!);
    expect(screen.queryByText("Sales: 10")).not.toBeInTheDocument();
  });


  it("scatter renders points", () => {
    const scatter = { type: "scatter" as const, title: "S", data: [{ x: 1, y: 10 }, { x: 2, y: 20 }], categoryProperty: "x", valueProperty: "y" };
    const { container } = render(<Chart series={[scatter]} />);
    expect(container.querySelectorAll("circle").length).toBeGreaterThanOrEqual(2);
  });

  it("pie renders arcs", () => {
    const pie = { type: "pie" as const, title: "P", data: [{ cat: "A", val: 30 }, { cat: "B", val: 70 }], categoryProperty: "cat", valueProperty: "val" };
    const { container } = render(<Chart series={[pie]} />);
    expect(container.querySelectorAll("path").length).toBeGreaterThanOrEqual(2);
  });

  it("stacked bar sums per category", () => {
    const s1 = { type: "bar" as const, title: "A", stack: "s", data: [{ cat: "X", val: 10 }], categoryProperty: "cat", valueProperty: "val" };
    const s2 = { type: "bar" as const, title: "B", stack: "s", data: [{ cat: "X", val: 20 }], categoryProperty: "cat", valueProperty: "val" };
    const { container } = render(<Chart series={[s1, s2]} />);
    // two bars in same stack should be rendered
    expect(container.querySelectorAll("rect[rx='2']").length).toBeGreaterThanOrEqual(2);
  });

  it("custom color is respected", () => {
    const { container } = render(<Chart series={[{ ...lineSeries, color: "#ff0000" }]} />);
    expect(container.querySelector('path[stroke="#ff0000"]')).toBeTruthy();
  });
});
