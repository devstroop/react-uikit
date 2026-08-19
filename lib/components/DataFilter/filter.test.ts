import { describe, expect, it } from "vitest";
import {
  applyFilters,
  matchesFilters,
  sortItems,
  toFilterString,
  toODataFilterString,
  type CompositeFilterDescriptor,
  type FilterDescriptor,
} from "./filter";

interface Person {
  name: string;
  age: number;
  active: boolean;
  joinedAt: string;
  tags?: string[];
  address?: { city: string };
}

const people: Person[] = [
  { name: "John", age: 30, active: true, joinedAt: "2020-01-15", tags: ["a"], address: { city: "NYC" } },
  { name: "jane", age: 25, active: false, joinedAt: "2021-06-01" },
  { name: "Bob", age: 40, active: true, joinedAt: "2019-11-30", address: { city: "LA" } },
  { name: "ALICE", age: 22, active: false, joinedAt: "2022-03-08" },
];

const byName = (name: string): FilterDescriptor => ({ property: "name", operator: "Contains", value: name });

describe("applyFilters", () => {
  it("Contains is case-insensitive by default and honors caseSensitivity", () => {
    expect(applyFilters(people, byName("a")).map((p) => p.name)).toEqual(["jane", "ALICE"]);
    expect(applyFilters(people, byName("a"), { caseSensitivity: "CaseSensitive" }).map((p) => p.name)).toEqual(["jane"]);
  });

  it("numeric operators coerce and compare typed values", () => {
    expect(applyFilters(people, { property: "age", operator: "GreaterThan", value: 30 }).map((p) => p.name)).toEqual(["Bob"]);
    expect(applyFilters(people, { property: "age", operator: "LessThanOrEquals", value: 25 })).toHaveLength(2);
  });

  it("date strings compare by value", () => {
    expect(applyFilters(people, { property: "joinedAt", operator: "GreaterThan", value: "2021-01-01" }).map((p) => p.name)).toEqual(["jane", "ALICE"]);
  });

  it("boolean equals", () => {
    expect(applyFilters(people, { property: "active", operator: "Equals", value: true }).map((p) => p.name)).toEqual(["John", "Bob"]);
  });

  it("In / NotIn match arrays", () => {
    expect(applyFilters(people, { property: "name", operator: "In", value: ["John", "Bob"] })).toHaveLength(2);
    expect(applyFilters(people, { property: "name", operator: "NotIn", value: ["John", "Bob"] })).toHaveLength(2);
  });

  it("IsNull / IsNotNull / IsEmpty / IsNotEmpty", () => {
    expect(applyFilters(people, { property: "address", operator: "IsNull" }).map((p) => p.name)).toEqual(["jane", "ALICE"]);
    expect(applyFilters(people, { property: "address", operator: "IsNotNull" })).toHaveLength(2);
    expect(applyFilters(people, { property: "name", operator: "IsEmpty" })).toHaveLength(0);
    expect(applyFilters(people, { property: "name", operator: "IsNotEmpty" })).toHaveLength(4);
  });

  it("Equals on array-valued properties matches any element", () => {
    expect(applyFilters(people, { property: "tags", operator: "Equals", value: "a" }).map((p) => p.name)).toEqual(["John"]);
  });

  it("dotted paths traverse nested objects", () => {
    expect(applyFilters(people, { property: "address.city", operator: "Equals", value: "LA" }).map((p) => p.name)).toEqual(["Bob"]);
  });

  it("Custom operator uses the provided predicate", () => {
    const custom: FilterDescriptor = {
      property: "age",
      operator: "Custom",
      value: (age: number) => age > 25 && age < 35,
    };
    expect(applyFilters(people, custom).map((p) => p.name)).toEqual(["John"]);
  });
});

describe("matchesFilters / composite descriptors", () => {
  it("And group requires all children", () => {
    const group: CompositeFilterDescriptor = {
      operator: "And",
      filters: [byName("o"), { property: "age", operator: "GreaterThan", value: 20 }],
    };
    expect(matchesFilters(people[0], group)).toBe(true);
    expect(matchesFilters(people[2], group)).toBe(true);
    expect(matchesFilters(people[3], group)).toBe(false);
  });

  it("Or group requires any child", () => {
    const group: CompositeFilterDescriptor = {
      operator: "Or",
      filters: [byName("z"), { property: "age", operator: "Equals", value: 22 }],
    };
    expect(matchesFilters(people[3], group)).toBe(true);
    expect(matchesFilters(people[0], group)).toBe(false);
  });

  it("nested groups evaluate with correct precedence", () => {
    const tree: CompositeFilterDescriptor = {
      operator: "And",
      filters: [
        byName("o"),
        {
          operator: "Or",
          filters: [
            { property: "age", operator: "Equals", value: 30 },
            { property: "age", operator: "Equals", value: 40 },
          ],
        },
      ],
    };
    expect(matchesFilters(people[0], tree)).toBe(true);
    expect(matchesFilters(people[1], tree)).toBe(false);
    expect(matchesFilters(people[2], tree)).toBe(true);
  });

  it("second operator pair combines with logicalOperator", () => {
    const between: FilterDescriptor = {
      property: "age",
      operator: "GreaterThanOrEquals",
      value: 25,
      secondOperator: "LessThanOrEquals",
      secondValue: 30,
      logicalOperator: "And",
    };
    expect(applyFilters(people, between).map((p) => p.name)).toEqual(["John", "jane"]);
  });

  it("empty group matches everything", () => {
    expect(applyFilters(people, { operator: "And", filters: [] })).toHaveLength(4);
  });
});

describe("toFilterString", () => {
  it("renders string contains in Linq style", () => {
    expect(toFilterString(byName("jo"))).toBe('name.Contains("jo")');
  });

  it("renders composite groups with And/Or keywords", () => {
    const group: CompositeFilterDescriptor = {
      operator: "And",
      filters: [byName("jo"), { property: "age", operator: "GreaterThan", value: 21 }],
    };
    expect(toFilterString(group)).toBe('(name.Contains("jo") And age.GreaterThan(21))');
  });

  it("escapes quotes in values", () => {
    expect(toFilterString({ property: "name", operator: "Equals", value: 'O"Brien' })).toBe('name.Equals("O\\"Brien")');
  });

  it("renders null/empty operators", () => {
    expect(toFilterString({ property: "address", operator: "IsNull" })).toBe("address == null");
    expect(toFilterString({ property: "name", operator: "IsNotEmpty" })).toBe('name != ""');
  });
});

describe("toODataFilterString", () => {
  it("renders contains in OData style with tolower for case-insensitive", () => {
    expect(toODataFilterString(byName("jo"))).toBe("contains(tolower(name), tolower('jo'))");
    expect(toODataFilterString(byName("jo"), { caseSensitivity: "CaseSensitive" })).toBe("contains(name, 'jo')");
  });

  it("renders comparison operators", () => {
    expect(toODataFilterString({ property: "age", operator: "GreaterThan", value: 21 })).toBe("age gt 21");
    expect(toODataFilterString({ property: "active", operator: "Equals", value: true })).toBe("active eq true");
  });

  it("renders composite groups with and/or", () => {
    const group: CompositeFilterDescriptor = {
      operator: "And",
      filters: [byName("jo"), { property: "age", operator: "GreaterThan", value: 21 }],
    };
    expect(toODataFilterString(group)).toBe("(contains(tolower(name), tolower('jo')) and age gt 21)");
  });

  it("renders null/empty operators", () => {
    expect(toODataFilterString({ property: "address", operator: "IsNull" })).toBe("address eq null");
    expect(toODataFilterString({ property: "name", operator: "IsEmpty" })).toBe("name eq ''");
  });

  it("escapes single quotes", () => {
    expect(toODataFilterString({ property: "name", operator: "Equals", value: "O'Brien" }, { caseSensitivity: "CaseSensitive" })).toBe("name eq 'O''Brien'");
  });
});

describe("sortItems", () => {
  it("sorts ascending by default descriptor order", () => {
    expect(sortItems(people, [{ property: "age", sortOrder: "Ascending" }]).map((p) => p.name)).toEqual(["ALICE", "jane", "John", "Bob"]);
  });

  it("multi-descriptor sorts tie-break in order", () => {
    const sorted = sortItems(
      people,
      [
        { property: "active", sortOrder: "Descending" },
        { property: "age", sortOrder: "Ascending" },
      ],
    );
    expect(sorted.map((p) => p.name)).toEqual(["John", "Bob", "ALICE", "jane"]);
  });

  it("does not mutate the input array", () => {
    const copy = [...people];
    sortItems(people, [{ property: "age", sortOrder: "Descending" }]);
    expect(people).toEqual(copy);
  });
});