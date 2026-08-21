import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { VirtualGrid } from "./VirtualGrid";

const makeData = (count: number) => Array.from({ length: count }, (_, i) => ({ id: i + 1, name: `Row ${i + 1}` }));

function loader(data: { id: number; name: string }[]) {
  return vi.fn(async ({ skip, top }: { skip: number; top: number }) => data.slice(skip, top));
}

describe("VirtualGrid", () => {
  const data = makeData(1000);

  it("renders grid with aria-rowcount and header", async () => {
    render(
      <VirtualGrid
        count={data.length}
        loadData={loader(data)}
        columns={[{ property: "id", title: "ID" }, { property: "name", title: "Name" }]}
      />,
    );
    expect(screen.getByRole("grid")).toHaveAttribute("aria-rowcount", "1000");
    expect(screen.getByRole("columnheader", { name: "Name" })).toBeInTheDocument();
    await waitFor(() => expect(screen.getAllByRole("row").length).toBeGreaterThan(1));
  });

  it("loads a window of rows and more on scroll", async () => {
    const load = loader(data);
    render(<VirtualGrid count={data.length} loadData={load} columns={[{ property: "name" }]} height={200} rowHeight={40} />);
    await waitFor(() => expect(load).toHaveBeenCalled());
    const firstSkip = load.mock.calls[0]![0]!.skip;
    const scroller = screen.getByRole("grid");
    fireEvent.scroll(scroller, { target: { scrollTop: 40000 } });
    await waitFor(() => {
      const skips = load.mock.calls.map((c) => (c[0] as { skip: number }).skip);
      expect(skips.some((s) => s > firstSkip)).toBe(true);
    });
  });

  it("keyboard arrows scroll the container", async () => {
    render(<VirtualGrid count={data.length} loadData={loader(data)} columns={[{ property: "name" }]} />);
    const scroller = screen.getByRole("grid");
    const before = scroller.scrollTop;
    fireEvent.keyDown(scroller, { key: "PageDown" });
    expect(scroller.scrollTop).toBeGreaterThan(before);
  });
});
