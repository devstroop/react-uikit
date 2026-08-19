import { describe, expect, it } from "vitest";
import {
  applyGridState,
  columnValue,
  cycleSort,
  defaultOperatorForType,
  formatValue,
  paginate,
} from "./grid";
import type { GridFilterState } from "./grid";

const people = [
  { id: 1, name: "John", age: 30, active: true },
  { id: 2, name: "Jane", age: 25, active: false },
  { id: 3, name: "Bob", age: 40, active: true },
  { id: 4, name: "Alice", age: 22, active: true },
  { id: 5, name: "Charlie", age: 35, active: false },
];

const filters = (entries: [string, GridFilterState][]): ReadonlyMap<string, GridFilterState> =>
  new Map(entries);

describe("columnValue", () => {
  it("resolves dotted paths", () => {
    expect(columnValue({ address: { city: "Berlin" } }, "address.city")).toBe("Berlin");
  });

  it("returns undefined for missing paths", () => {
    expect(columnValue({ name: "x" }, "nope.deep")).toBeUndefined();
    expect(columnValue({ name: "x" }, undefined)).toBeUndefined();
  });
});

describe("formatValue", () => {
  it("formats numbers with N{n}", () => {
    expect(formatValue(3.14159, "N2")).toBe("3.14");
    expect(formatValue(2, "N0")).toBe("2");
  });

  it("formats dates with d", () => {
    expect(formatValue(new Date("2024-05-01T12:00:00Z"), "d")).toMatch(/5\/1\/2024|01\/05\/2024/);
  });

  it("passes through without format", () => {
    expect(formatValue("abc")).toBe("abc");
    expect(formatValue(null)).toBe("");
  });
});

describe("cycleSort", () => {
  it("cycles Ascending -> Descending -> none", () => {
    let sorts = cycleSort([], "name");
    expect(sorts).toEqual([{ property: "name", sortOrder: "Ascending" }]);
    sorts = cycleSort(sorts, "name");
    expect(sorts).toEqual([{ property: "name", sortOrder: "Descending" }]);
    sorts = cycleSort(sorts, "name");
    expect(sorts).toEqual([]);
  });

  it("keeps other columns in multi mode", () => {
    const sorts = cycleSort([{ property: "name", sortOrder: "Ascending" }], "age", { multi: true });
    expect(sorts).toEqual([
      { property: "name", sortOrder: "Ascending" },
      { property: "age", sortOrder: "Ascending" },
    ]);
  });

  it("drops other columns in single mode", () => {
    const sorts = cycleSort([{ property: "name", sortOrder: "Descending" }], "age");
    expect(sorts).toEqual([{ property: "age", sortOrder: "Ascending" }]);
  });
});

describe("paginate", () => {
  it("slices by page size", () => {
    const result = paginate(people, 2, 2);
    expect(result.items.map((p) => p.name)).toEqual(["Bob", "Alice"]);
    expect(result.pageCount).toBe(3);
    expect(result.total).toBe(5);
  });

  it("clamps out-of-range pages", () => {
    expect(paginate(people, 99, 10).pageNumber).toBe(1);
    expect(paginate(people, 3, 2).items).toHaveLength(1);
  });

  it("keeps at least one page for empty data", () => {
    const result = paginate([], 1, 10);
    expect(result.pageCount).toBe(1);
    expect(result.items).toEqual([]);
  });
});

describe("applyGridState", () => {
  it("filters then sorts then pages", () => {
    const f = filters([["age", { value: "30", operator: "GreaterThan" }]]);
    const view = applyGridState(people, {
      sorts: [{ property: "age", sortOrder: "Descending" }],
      filters: f,
      pageNumber: 1,
      pageSize: 1,
    }, { types: { age: "number" } });
    expect(view.items.map((p) => p.name)).toEqual(["Bob"]);
    expect(view.pageCount).toBe(2);
  });

  it("ignores empty filter values and coerces typed values", () => {
    const f = filters([["name", { value: "" }], ["age", { value: "30", operator: "Equals" }]]);
    const view = applyGridState(people, { sorts: [], filters: f, pageNumber: 1, pageSize: 10 }, { types: { age: "number" } });
    expect(view.items.map((p) => p.name)).toEqual(["John"]);
  });

  it("applies string Contains with case insensitivity by default", () => {
    const f = filters([["name", { value: "JO" }]]);
    const view = applyGridState(people, { sorts: [], filters: f, pageNumber: 1, pageSize: 10 });
    expect(view.items.map((p) => p.name)).toEqual(["John"]);
  });

  it("clamps the page when filters shrink the data", () => {
    const f = filters([["age", { value: "30", operator: "GreaterThan" }]]);
    const view = applyGridState(people, { sorts: [], filters: f, pageNumber: 3, pageSize: 1 }, { types: { age: "number" } });
    expect(view.pageNumber).toBe(2);
  });

  it("defaults to Contains for missing operator (radzen FilterDescriptor parity)", () => {
    const f = filters([["name", { value: "cha" }]]);
    const view = applyGridState(people, { sorts: [], filters: f, pageNumber: 1, pageSize: 10 });
    expect(view.items.map((p) => p.name)).toEqual(["Charlie"]);
  });
});

describe("defaultOperatorForType", () => {
  it("uses Contains for strings, Equals for numbers and dates", () => {
    expect(defaultOperatorForType("string")).toBe("Contains");
    expect(defaultOperatorForType("number")).toBe("Equals");
    expect(defaultOperatorForType("date")).toBe("Equals");
  });
});