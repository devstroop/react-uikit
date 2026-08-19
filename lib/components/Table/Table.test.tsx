import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EmptyState } from "../EmptyState/EmptyState";
import { Icon } from "../Icon/Icon";
import { Table } from "./Table";

describe("Table", () => {
  interface Row {
    id: string;
    name: string;
    status: string;
  }

  const rows: Row[] = [
    { id: "1", name: "Alpha", status: "active" },
    { id: "2", name: "Beta", status: "disabled" },
  ];

  it("renders headers and cell content", () => {
    render(
      <Table<Row>
        columns={[
          { key: "name", header: "Name" },
          { key: "status", header: "Status", align: "end" },
        ]}
        rows={rows}
        rowKey={(row) => row.id}
      />,
    );
    expect(screen.getByRole("columnheader", { name: "Name" })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "Status" })).toBeInTheDocument();
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.getByText("disabled")).toBeInTheDocument();
  });

  it("uses the render function when provided", () => {
    render(
      <Table<Row>
        columns={[{ key: "name", header: "Name", render: (row) => row.name.toUpperCase() }]}
        rows={rows}
        rowKey={(row) => row.id}
      />,
    );
    expect(screen.getByText("ALPHA")).toBeInTheDocument();
  });

  it("shows the empty slot when there are no rows", () => {
    render(
      <Table<Row>
        columns={[{ key: "name", header: "Name" }]}
        rows={[]}
        rowKey={(row) => row.id}
        empty={<EmptyState title="Nothing here" />}
      />,
    );
    expect(screen.getByText("Nothing here")).toBeInTheDocument();
  });

  it("renders a caption and scope=col headers", () => {
    render(
      <Table<Row>
        columns={[{ key: "name", header: "Name" }]}
        rows={rows}
        rowKey={(row) => row.id}
        caption="Team roster"
      />,
    );
    expect(screen.getByText("Team roster")).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "Name" }).getAttribute("scope")).toBe("col");
  });

  it("applies alternating rows by default and disables via prop", () => {
    const { container, rerender } = render(
      <Table<Row>
        columns={[{ key: "name", header: "Name" }]}
        rows={rows}
        rowKey={(row) => row.id}
      />,
    );
    expect(container.querySelector("table")!.className).toMatch(/alternating/);
    rerender(
      <Table<Row>
        columns={[{ key: "name", header: "Name" }]}
        rows={rows}
        rowKey={(row) => row.id}
        allowAlternatingRows={false}
      />,
    );
    expect(container.querySelector("table")!.className).not.toMatch(/alternating/);
  });

  it("switches grid line variants", () => {
    const { container, rerender } = render(
      <Table<Row>
        columns={[{ key: "name", header: "Name" }]}
        rows={rows}
        rowKey={(row) => row.id}
        gridLines="none"
      />,
    );
    expect(container.querySelector("table")!.className).toMatch(/\b_none_/);
    rerender(
      <Table<Row>
        columns={[{ key: "name", header: "Name" }]}
        rows={rows}
        rowKey={(row) => row.id}
        gridLines="vertical"
      />,
    );
    expect(container.querySelector("table")!.className).toMatch(/\b_vertical_/);
    rerender(
      <Table<Row>
        columns={[{ key: "name", header: "Name" }]}
        rows={rows}
        rowKey={(row) => row.id}
        gridLines="horizontal"
      />,
    );
    expect(container.querySelector("table")!.className).toMatch(/\b_horizontal_/);
    rerender(
      <Table<Row>
        columns={[{ key: "name", header: "Name" }]}
        rows={rows}
        rowKey={(row) => row.id}
        gridLines="default"
      />,
    );
    expect(container.querySelector("table")!.className).not.toMatch(/_(none|vertical|horizontal)_/);
  });
});

describe("Icon", () => {
  it("renders an accessible-hidden svg for a known icon", () => {
    render(<Icon name="check" />);
    const svg = document.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  it("accepts a custom size", () => {
    render(<Icon name="search" size={24} />);
    expect(document.querySelector("svg")).toHaveAttribute("width", "24");
  });
});