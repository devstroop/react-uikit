import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DataGrid } from "./DataGrid";
import type { GridColumn } from "./grid";

interface Person {
  id: number;
  name: string;
  age: number;
  role: string;
}

const people: Person[] = [
  { id: 1, name: "John", age: 30, role: "admin" },
  { id: 2, name: "Jane", age: 25, role: "editor" },
  { id: 3, name: "Bob", age: 40, role: "viewer" },
  { id: 4, name: "Alice", age: 22, role: "editor" },
  { id: 5, name: "Charlie", age: 35, role: "viewer" },
];

const columns: readonly GridColumn<Person>[] = [
  { property: "name", title: "Name", sortable: true },
  { property: "age", title: "Age", align: "center", sortable: true },
  { property: "role", title: "Role", filterable: true },
];

function renderGrid(props: Partial<React.ComponentProps<typeof DataGrid<Person>>> = {}) {
  return render(
    <DataGrid
      columns={columns}
      rows={people}
      rowKey={(r) => String(r.id)}
      {...props}
    />,
  );
}

describe("DataGrid", () => {
  it("renders headers and all rows", () => {
    renderGrid();
    expect(screen.getByRole("columnheader", { name: /Name/ })).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(6);
  });

  it("sorts ascending then descending then clears on click", () => {
    renderGrid({ allowSorting: true });
    const th = screen.getByRole("columnheader", { name: /Name/ });
    fireEvent.click(screen.getByRole("button", { name: /Sort Name ascending/ }));
    expect(th).toHaveAttribute("aria-sort", "ascending");
    expect(screen.getAllByRole("row")[1]).toHaveTextContent("Alice");
    fireEvent.click(screen.getByRole("button", { name: /Sort Name descending/ }));
    expect(th).toHaveAttribute("aria-sort", "descending");
    expect(screen.getAllByRole("row")[1]).toHaveTextContent("John");
    fireEvent.click(screen.getByRole("button", { name: /Sort Name ascending/ }));
    expect(th).toHaveAttribute("aria-sort", "none");
  });

  it("sorts by age numerically", () => {
    renderGrid({ allowSorting: true });
    fireEvent.click(screen.getByRole("button", { name: /Sort Age ascending/ }));
    expect(screen.getAllByRole("row")[1]).toHaveTextContent("Alice");
  });

  it("filters by value with default Contains for strings", () => {
    renderGrid({ allowFiltering: true });
    fireEvent.change(screen.getByLabelText("Role value"), { target: { value: "edit" } });
    expect(screen.getAllByRole("row")).toHaveLength(4);
    expect(screen.getAllByRole("row")[2]).toHaveTextContent("Jane");
    expect(screen.getAllByRole("row")[3]).toHaveTextContent("Alice");
  });

  it("filters with a chosen operator", () => {
    renderGrid({ allowFiltering: true });
    fireEvent.change(screen.getByLabelText("Role operator"), { target: { value: "NotEquals" } });
    fireEvent.change(screen.getByLabelText("Role value"), { target: { value: "editor" } });
    expect(screen.getAllByRole("row")).toHaveLength(5);
    expect(screen.getAllByRole("row")[2]).toHaveTextContent("John");
  });

  it("resets to page 1 when filtering", () => {
    renderGrid({ allowFiltering: true, allowPaging: true, pageSize: 2 });
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    expect(screen.getByRole("button", { name: "3" })).toHaveAttribute("aria-current", "page");
    fireEvent.change(screen.getByLabelText("Role value"), { target: { value: "viewer" } });
    expect(screen.getByRole("button", { name: "1" })).toHaveAttribute("aria-current", "page");
  });

  it("pages through data with the pager", () => {
    renderGrid({ allowPaging: true, pageSize: 2 });
    expect(screen.getAllByRole("row")).toHaveLength(3);
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    expect(screen.getAllByRole("row")).toHaveLength(3);
    expect(screen.getAllByRole("row")[1]).toHaveTextContent("Bob");
    expect(screen.getByText("Page 2 of 3")).toBeInTheDocument();
  });

  it("changes page size and clamps to page 1", () => {
    renderGrid({ allowPaging: true, pageSize: 2, pageSizeOptions: [2, 5] });
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.change(screen.getByLabelText("Items per page"), { target: { value: "5" } });
    expect(screen.getAllByRole("row")).toHaveLength(6);
    expect(screen.getByText("Page 1 of 1")).toBeInTheDocument();
  });

  it("renders the empty message when nothing matches", () => {
    renderGrid({ allowFiltering: true, empty: "Nothing here" });
    fireEvent.change(screen.getByLabelText("Role value"), { target: { value: "zzz" } });
    expect(screen.getByText("Nothing here")).toBeInTheDocument();
  });

  it("shows the loading overlay when loading", () => {
    renderGrid({ isLoading: true });
    expect(screen.getByRole("status")).toHaveTextContent("Loading");
    expect(screen.getByRole("grid")).toHaveAttribute("aria-busy", "true");
  });

  it("calls onRowClick with the row", () => {
    const onRowClick = vi.fn();
    renderGrid({ onRowClick });
    fireEvent.click(screen.getByText("Bob"));
    expect(onRowClick).toHaveBeenCalledWith(people[2]);
  });

  it("renders template-only columns and custom render", () => {
    renderGrid({
      columns: [
        { property: "name", title: "Name" },
        { title: "Actions", render: (r) => `view ${r.name}` },
      ],
    });
    expect(screen.getByText("view John")).toBeInTheDocument();
  });
});