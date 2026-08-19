export type FilterOperator =
  | "Equals"
  | "NotEquals"
  | "LessThan"
  | "LessThanOrEquals"
  | "GreaterThan"
  | "GreaterThanOrEquals"
  | "Contains"
  | "StartsWith"
  | "EndsWith"
  | "DoesNotContain"
  | "In"
  | "NotIn"
  | "IsNull"
  | "IsEmpty"
  | "IsNotNull"
  | "IsNotEmpty"
  | "Custom";

export const FILTER_OPERATORS: readonly FilterOperator[] = [
  "Equals",
  "NotEquals",
  "LessThan",
  "LessThanOrEquals",
  "GreaterThan",
  "GreaterThanOrEquals",
  "Contains",
  "StartsWith",
  "EndsWith",
  "DoesNotContain",
  "In",
  "NotIn",
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty",
  "Custom",
];

export type LogicalFilterOperator = "And" | "Or";
export type SortOrder = "Ascending" | "Descending";
export type FilterCaseSensitivity = "CaseSensitive" | "CaseInsensitive";

export const DEFAULT_OPERATOR_BY_TYPE: Record<FilterPropertyType, FilterOperator> = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals",
};

export type FilterPropertyType = "string" | "number" | "boolean" | "date" | "enum";

export interface FilterDescriptor {
  property: string;
  operator: FilterOperator;
  value?: unknown;
  secondOperator?: FilterOperator;
  secondValue?: unknown;
  logicalOperator?: LogicalFilterOperator;
}

export interface CompositeFilterDescriptor {
  operator: "And" | "Or";
  logicalOperator?: LogicalFilterOperator;
  filters: FilterNode[];
}

export type FilterNode = FilterDescriptor | CompositeFilterDescriptor;

export interface SortDescriptor {
  property: string;
  sortOrder: SortOrder;
}

export interface ApplyFiltersOptions {
  logicalOperator?: LogicalFilterOperator;
  caseSensitivity?: FilterCaseSensitivity;
}

function getByPath(object: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, key) => {
    if (current == null) return undefined;
    return (current as Record<string, unknown>)[key];
  }, object);
}

function toComparable(value: unknown): unknown {
  if (value instanceof Date) return value.getTime();
  if (typeof value === "string" && !Number.isNaN(Date.parse(value)) && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return Date.parse(value);
  }
  return value;
}

function compare(a: unknown, b: unknown): number {
  const ca = toComparable(a);
  const cb = toComparable(b);
  if (typeof ca === "number" && typeof cb === "number") return ca - cb;
  const sa = String(ca ?? "");
  const sb = String(cb ?? "");
  return sa < sb ? -1 : sa > sb ? 1 : 0;
}

function matchesDescriptor(descriptor: FilterDescriptor, item: unknown, caseSensitivity: FilterCaseSensitivity): boolean {
  const actual = getByPath(item, descriptor.property);
  const primary = testValue(actual, descriptor.value, descriptor.operator, caseSensitivity);
  if (descriptor.secondOperator == null || descriptor.secondValue === undefined) return primary;
  const secondary = testValue(actual, descriptor.secondValue, descriptor.secondOperator, caseSensitivity);
  return (descriptor.logicalOperator ?? "And") === "And" ? primary && secondary : primary || secondary;
}

function testValue(
  actual: unknown,
  expected: unknown,
  operator: FilterOperator,
  caseSensitivity: FilterCaseSensitivity,
): boolean {
  const insensitive = caseSensitivity === "CaseInsensitive";
  const normalize = (value: unknown): unknown =>
    insensitive && typeof value === "string" ? value.toLowerCase() : value;
  const a = normalize(actual);
  const e = normalize(expected);

  switch (operator) {
    case "Equals":
      return a === e || (Array.isArray(a) && a.some((entry) => normalize(entry) === e));
    case "NotEquals":
      return a !== e && !(Array.isArray(a) && a.some((entry) => normalize(entry) === e));
    case "LessThan":
      return compare(a, e) < 0;
    case "LessThanOrEquals":
      return compare(a, e) <= 0;
    case "GreaterThan":
      return compare(a, e) > 0;
    case "GreaterThanOrEquals":
      return compare(a, e) >= 0;
    case "Contains":
      return typeof a === "string" && typeof e === "string" && a.includes(e);
    case "StartsWith":
      return typeof a === "string" && typeof e === "string" && a.startsWith(e);
    case "EndsWith":
      return typeof a === "string" && typeof e === "string" && a.endsWith(e);
    case "DoesNotContain":
      return typeof a === "string" && typeof e === "string" && !a.includes(e);
    case "In":
      return Array.isArray(e) && e.some((entry) => normalize(entry) === a);
    case "NotIn":
      return Array.isArray(e) && !e.some((entry) => normalize(entry) === a);
    case "IsNull":
      return actual == null;
    case "IsNotNull":
      return actual != null;
    case "IsEmpty":
      return actual == null || actual === "";
    case "IsNotEmpty":
      return actual != null && actual !== "";
    case "Custom":
      return typeof expected === "function" ? Boolean(expected(actual)) : true;
    default:
      return false;
  }
}

function isComposite(node: FilterNode): node is CompositeFilterDescriptor {
  return "filters" in node;
}

export function matchesFilters(
  item: unknown,
  filters: FilterNode,
  options: ApplyFiltersOptions = {},
): boolean {
  const operator = options.logicalOperator ?? "And";
  const caseSensitivity = options.caseSensitivity ?? "CaseInsensitive";
  if (isComposite(filters)) {
    if (filters.filters.length === 0) return true;
    const join = filters.operator ?? operator;
    return filters.filters[join === "Or" ? "some" : "every"]((node) =>
      matchesFilters(item, node, { logicalOperator: join, caseSensitivity }),
    );
  }
  if (filters.operator === "Custom") return matchesDescriptor(filters, item, caseSensitivity);
  return matchesDescriptor(filters, item, caseSensitivity);
}

export function applyFilters<T>(
  items: readonly T[],
  filters: FilterNode,
  options: ApplyFiltersOptions = {},
): T[] {
  return items.filter((item) => matchesFilters(item, filters, options));
}

function escapeString(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function literal(value: unknown): string {
  if (typeof value === "string") return `"${escapeString(value)}"`;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (value instanceof Date) return `"${value.toISOString()}"`;
  if (Array.isArray(value)) return `[${value.map(literal).join(", ")}]`;
  return `"${String(value)}"`;
}

function describeDescriptor(descriptor: FilterDescriptor): string {
  const expression = (op: FilterOperator, value: unknown): string => {
    switch (op) {
      case "Equals":
        return `${descriptor.property}.Equals(${literal(value)})`;
      case "NotEquals":
        return `!${descriptor.property}.Equals(${literal(value)})`;
      case "LessThan":
        return `${descriptor.property}.LessThan(${literal(value)})`;
      case "LessThanOrEquals":
        return `${descriptor.property}.LessThanOrEquals(${literal(value)})`;
      case "GreaterThan":
        return `${descriptor.property}.GreaterThan(${literal(value)})`;
      case "GreaterThanOrEquals":
        return `${descriptor.property}.GreaterThanOrEquals(${literal(value)})`;
      case "Contains":
        return `${descriptor.property}.Contains(${literal(value)})`;
      case "StartsWith":
        return `${descriptor.property}.StartsWith(${literal(value)})`;
      case "EndsWith":
        return `${descriptor.property}.EndsWith(${literal(value)})`;
      case "DoesNotContain":
        return `!${descriptor.property}.Contains(${literal(value)})`;
      case "In":
        return `${descriptor.property}.In(${literal(value)})`;
      case "NotIn":
        return `!${descriptor.property}.In(${literal(value)})`;
      case "IsNull":
        return `${descriptor.property} == null`;
      case "IsNotNull":
        return `${descriptor.property} != null`;
      case "IsEmpty":
        return `${descriptor.property} == ""`;
      case "IsNotEmpty":
        return `${descriptor.property} != ""`;
      case "Custom":
        return `${descriptor.property}.Custom()`;
      default:
        return "";
    }
  };
  if (descriptor.secondOperator == null || descriptor.secondValue === undefined) {
    return expression(descriptor.operator, descriptor.value);
  }
  const join = descriptor.logicalOperator ?? "And";
  return `(${expression(descriptor.operator, descriptor.value)} ${join} ${expression(
    descriptor.secondOperator,
    descriptor.secondValue,
  )})`;
}

export function toFilterString(filters: FilterNode): string {
  if (isComposite(filters)) {
    if (filters.filters.length === 0) return "";
    return `(${filters.filters
      .map(toFilterString)
      .filter(Boolean)
      .join(` ${filters.operator} `)})`;
  }
  return describeDescriptor(filters);
}

function odataEscape(value: string): string {
  return value.replace(/'/g, "''");
}

const ODATA_OPERATORS: Partial<Record<FilterOperator, string>> = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge",
};

function odataDescriptor(
  descriptor: FilterDescriptor,
  caseSensitivity: FilterCaseSensitivity,
): string {
  const property = descriptor.property;
  const insensitive = caseSensitivity === "CaseInsensitive";
  const lower = (name: string): string => (insensitive ? `tolower(${name})` : name);
  const odataValue = (value: unknown): string => {
    if (typeof value === "string") return `'${odataEscape(value)}'`;
    if (value instanceof Date) return `'${value.toISOString()}'`;
    return String(value ?? "");
  };

  const expression = (op: FilterOperator, value: unknown): string => {
    const stringly = typeof value === "string";
    const propertyRef = stringly && insensitive ? lower(property) : property;
    switch (op) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${propertyRef} ${ODATA_OPERATORS[op]} ${stringly && insensitive ? lower(odataValue(value)) : odataValue(value)}`;
      case "Contains":
        return `contains(${lower(property)}, ${lower(odataValue(value))})`;
      case "StartsWith":
        return `startswith(${lower(property)}, ${lower(odataValue(value))})`;
      case "EndsWith":
        return `endswith(${lower(property)}, ${lower(odataValue(value))})`;
      case "DoesNotContain":
        return `not(contains(${lower(property)}, ${lower(odataValue(value))}))`;
      case "In":
        return Array.isArray(value)
          ? `${propertyRef} in (${value.map((entry) => odataValue(entry)).join(", ")})`
          : `${propertyRef} in (${odataValue(value)})`;
      case "NotIn":
        return Array.isArray(value)
          ? `not(${propertyRef} in (${value.map((entry) => odataValue(entry)).join(", ")}))`
          : `not(${propertyRef} in (${odataValue(value)}))`;
      case "IsNull":
        return `${property} eq null`;
      case "IsNotNull":
        return `${property} ne null`;
      case "IsEmpty":
        return `${property} eq ''`;
      case "IsNotEmpty":
        return `${property} ne ''`;
      case "Custom":
        return `${property} custom`;
      default:
        return "";
    }
  };

  if (descriptor.secondOperator == null || descriptor.secondValue === undefined) {
    return expression(descriptor.operator, descriptor.value);
  }
  const join = (descriptor.logicalOperator ?? "And") === "And" ? "and" : "or";
  return `(${expression(descriptor.operator, descriptor.value)} ${join} ${expression(
    descriptor.secondOperator,
    descriptor.secondValue,
  )})`;
}

export function toODataFilterString(
  filters: FilterNode,
  options: ApplyFiltersOptions = {},
): string {
  const caseSensitivity = options.caseSensitivity ?? "CaseInsensitive";
  if (isComposite(filters)) {
    if (filters.filters.length === 0) return "";
    const join = filters.operator === "Or" ? "or" : "and";
    return `(${filters.filters
      .map((node) => toODataFilterString(node, { caseSensitivity }))
      .filter(Boolean)
      .join(` ${join} `)})`;
  }
  return odataDescriptor(filters, caseSensitivity);
}

export function sortItems<T>(items: readonly T[], sortDescriptors: readonly SortDescriptor[]): T[] {
  if (sortDescriptors.length === 0) return [...items];
  return [...items].sort((a, b) => {
    for (const descriptor of sortDescriptors) {
      const direction = descriptor.sortOrder === "Ascending" ? 1 : -1;
      const result = compare(getByPath(a, descriptor.property), getByPath(b, descriptor.property));
      if (result !== 0) return result * direction;
    }
    return 0;
  });
}