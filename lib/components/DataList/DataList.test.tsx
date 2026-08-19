import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataList } from "./DataList";

const ITEMS = Array.from({ length: 12 }, (_, i) => ({ id: i + 1, label: `Item ${i + 1}` }));

const renderList = (props: Record<string, unknown> = {}) =>
  render(
    <DataList
      data={ITEMS}
      itemTemplate={(item) => <span data-testid="datalist-item">{item.label}</span>}
      {...props}
    />,
  );

describe("DataList", () => {
  it("renders the first page by default (pageSize 10)", () => {
    renderList();
    expect(screen.getAllByTestId("datalist-item")).toHaveLength(10);
    expect(screen.getByText("Page 1 of 2")).toBeTruthy();
  });

  it("pages through items via the pager", async () => {
    renderList();
    await userEvent.click(screen.getByRole("button", { name: "2" }));
    expect(screen.getAllByTestId("datalist-item")).toHaveLength(2);
    expect(screen.getByText("Item 11")).toBeTruthy();
    expect(screen.getByText("Item 12")).toBeTruthy();
  });

  it("resets to page 1 when page size changes", async () => {
    renderList({ pageSizeOptions: [5, 10] });
    await userEvent.click(screen.getByRole("button", { name: "2" }));
    await userEvent.selectOptions(screen.getByLabelText("Items per page"), "5");
    expect(screen.getByText("Page 1 of 3")).toBeTruthy();
    expect(screen.getAllByTestId("datalist-item")).toHaveLength(5);
  });

  it("renders stacked by default and wraps with wrapItems", () => {
    const { container, rerender } = renderList();
    expect(container.querySelector('[class*="_wrap"]')).toBeTruthy();
    rerender(
      <DataList
        data={ITEMS}
        wrapItems
        itemTemplate={(item) => <span>{item.label}</span>}
      />,
    );
    expect(container.querySelector('[class*="_grid"]')).toBeTruthy();
  });

  it("shows the empty message when data is empty", () => {
    render(<DataList data={[]} emptyMessage="Nothing here" />);
    expect(screen.getByText("Nothing here")).toBeTruthy();
  });

  it("renders a custom empty template", () => {
    render(<DataList data={[]} emptyTemplate={<div data-testid="custom-empty" />} />);
    expect(screen.getByTestId("custom-empty")).toBeTruthy();
  });

  it("renders the loading template while loading", () => {
    render(<DataList data={ITEMS} isLoading loadingTemplate={<div data-testid="loading" />} />);
    expect(screen.getByTestId("loading")).toBeTruthy();
  });

  it("renders raw items without an item template", () => {
    render(<DataList data={["alpha", "beta"]} />);
    expect(screen.getByText("alpha")).toBeTruthy();
    expect(screen.getByText("beta")).toBeTruthy();
  });
});