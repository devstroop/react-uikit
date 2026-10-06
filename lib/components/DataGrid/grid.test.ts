import { describe, expect, it } from 'vitest';
import {
  aggregateValue,
  applyGridState,
  collectGroupKeys,
  columnValue,
  cycleSort,
  defaultOperatorForType,
  formatValue,
  groupItems,
  paginate,
  toCsv,
} from './grid';
import type { GridColumn, GridFilterState } from './grid';

const people = [
  { id: 1, name: 'John', age: 30, active: true },
  { id: 2, name: 'Jane', age: 25, active: false },
  { id: 3, name: 'Bob', age: 40, active: true },
  { id: 4, name: 'Alice', age: 22, active: true },
  { id: 5, name: 'Charlie', age: 35, active: false },
];

const filters = (
  entries: [string, GridFilterState][]
): ReadonlyMap<string, GridFilterState> => new Map(entries);

describe('columnValue', () => {
  it('resolves dotted paths', () => {
    expect(columnValue({ address: { city: 'Berlin' } }, 'address.city')).toBe(
      'Berlin'
    );
  });

  it('returns undefined for missing paths', () => {
    expect(columnValue({ name: 'x' }, 'nope.deep')).toBeUndefined();
    expect(columnValue({ name: 'x' }, undefined)).toBeUndefined();
  });
});

describe('formatValue', () => {
  it('formats numbers with N{n}', () => {
    expect(formatValue(3.14159, 'N2')).toBe('3.14');
    expect(formatValue(2, 'N0')).toBe('2');
  });

  it('formats dates with d', () => {
    expect(formatValue(new Date('2024-05-01T12:00:00Z'), 'd')).toMatch(
      /^\d{1,2}\/\d{1,2}\/2024$/
    );
  });

  it('passes through without format', () => {
    expect(formatValue('abc')).toBe('abc');
    expect(formatValue(null)).toBe('');
  });
});

describe('cycleSort', () => {
  it('cycles Ascending -> Descending -> none', () => {
    let sorts = cycleSort([], 'name');
    expect(sorts).toEqual([{ property: 'name', sortOrder: 'Ascending' }]);
    sorts = cycleSort(sorts, 'name');
    expect(sorts).toEqual([{ property: 'name', sortOrder: 'Descending' }]);
    sorts = cycleSort(sorts, 'name');
    expect(sorts).toEqual([]);
  });

  it('keeps other columns in multi mode', () => {
    const sorts = cycleSort(
      [{ property: 'name', sortOrder: 'Ascending' }],
      'age',
      { multi: true }
    );
    expect(sorts).toEqual([
      { property: 'name', sortOrder: 'Ascending' },
      { property: 'age', sortOrder: 'Ascending' },
    ]);
  });

  it('drops other columns in single mode', () => {
    const sorts = cycleSort(
      [{ property: 'name', sortOrder: 'Descending' }],
      'age'
    );
    expect(sorts).toEqual([{ property: 'age', sortOrder: 'Ascending' }]);
  });
});

describe('paginate', () => {
  it('slices by page size', () => {
    const result = paginate(people, 2, 2);
    expect(result.items.map((p) => p.name)).toEqual(['Bob', 'Alice']);
    expect(result.pageCount).toBe(3);
    expect(result.total).toBe(5);
  });

  it('clamps out-of-range pages', () => {
    expect(paginate(people, 99, 10).pageNumber).toBe(1);
    expect(paginate(people, 3, 2).items).toHaveLength(1);
  });

  it('keeps at least one page for empty data', () => {
    const result = paginate([], 1, 10);
    expect(result.pageCount).toBe(1);
    expect(result.items).toEqual([]);
  });
});

describe('applyGridState', () => {
  it('filters then sorts then pages', () => {
    const f = filters([['age', { value: '30', operator: 'GreaterThan' }]]);
    const view = applyGridState(
      people,
      {
        sorts: [{ property: 'age', sortOrder: 'Descending' }],
        filters: f,
        pageNumber: 1,
        pageSize: 1,
      },
      { types: { age: 'number' } }
    );
    expect(view.items.map((p) => p.name)).toEqual(['Bob']);
    expect(view.pageCount).toBe(2);
  });

  it('ignores empty filter values and coerces typed values', () => {
    const f = filters([
      ['name', { value: '' }],
      ['age', { value: '30', operator: 'Equals' }],
    ]);
    const view = applyGridState(
      people,
      { sorts: [], filters: f, pageNumber: 1, pageSize: 10 },
      { types: { age: 'number' } }
    );
    expect(view.items.map((p) => p.name)).toEqual(['John']);
  });

  it('applies string Contains with case insensitivity by default', () => {
    const f = filters([['name', { value: 'JO' }]]);
    const view = applyGridState(people, {
      sorts: [],
      filters: f,
      pageNumber: 1,
      pageSize: 10,
    });
    expect(view.items.map((p) => p.name)).toEqual(['John']);
  });

  it('clamps the page when filters shrink the data', () => {
    const f = filters([['age', { value: '30', operator: 'GreaterThan' }]]);
    const view = applyGridState(
      people,
      { sorts: [], filters: f, pageNumber: 3, pageSize: 1 },
      { types: { age: 'number' } }
    );
    expect(view.pageNumber).toBe(2);
  });

  it('defaults to Contains for missing operator (radzen FilterDescriptor parity)', () => {
    const f = filters([['name', { value: 'cha' }]]);
    const view = applyGridState(people, {
      sorts: [],
      filters: f,
      pageNumber: 1,
      pageSize: 10,
    });
    expect(view.items.map((p) => p.name)).toEqual(['Charlie']);
  });
});

describe('defaultOperatorForType', () => {
  it('uses Contains for strings, Equals for numbers and dates', () => {
    expect(defaultOperatorForType('string')).toBe('Contains');
    expect(defaultOperatorForType('number')).toBe('Equals');
    expect(defaultOperatorForType('date')).toBe('Equals');
  });
});

describe('groupItems', () => {
  const groupColumns: GridColumn<(typeof people)[number]>[] = [
    { property: 'name', title: 'Name' },
    { property: 'age', title: 'Age' },
    { property: 'active', title: 'Active' },
  ];
  const getValue = (row: (typeof people)[number], property: string) =>
    columnValue(row, property);

  it('returns flat rows when no group properties are given', () => {
    const items = groupItems(people, [], groupColumns, new Set(), getValue);
    expect(items).toHaveLength(5);
    expect(items.every((item) => item.type === 'row')).toBe(true);
  });

  it('groups by a single property with counts and titles', () => {
    const expanded = collectGroupKeys(people, ['active'], getValue);
    const items = groupItems(
      people,
      ['active'],
      groupColumns,
      expanded,
      getValue
    );
    const groups = items
      .filter((item) => item.type === 'group')
      .map((item) => item.group!);
    expect(groups.map((g) => g.display)).toEqual(['true', 'false']);
    expect(groups.map((g) => g.count)).toEqual([3, 2]);
    expect(groups[0]?.title).toBe('Active');
    expect(groups[0]?.level).toBe(0);
    expect(items).toHaveLength(2 + 5);
  });

  it('nests a second level with path-qualified unique keys', () => {
    const expanded = collectGroupKeys(people, ['active', 'name'], getValue);
    const items = groupItems(
      people,
      ['active', 'name'],
      groupColumns,
      expanded,
      getValue
    );
    const groups = items
      .filter((item) => item.type === 'group')
      .map((item) => item.group!);
    expect(groups.filter((g) => g.level === 1)).toHaveLength(5);
    expect(groups.some((g) => g.level === 1 && g.title === 'Name')).toBe(true);
    const keys = groups.map((g) => g.key);
    expect(new Set(keys).size).toBe(keys.length);
    expect(items.filter((item) => item.type === 'row')).toHaveLength(5);
  });

  it('hides children of collapsed nodes', () => {
    const items = groupItems(
      people,
      ['active'],
      groupColumns,
      new Set<string>(),
      getValue
    );
    expect(items).toHaveLength(2);
    expect(items.every((item) => item.type === 'group')).toBe(true);
  });

  it('collectGroupKeys walks every nested node', () => {
    const activeKeys = collectGroupKeys(people, ['active'], getValue);
    expect(activeKeys.size).toBe(2);
    const nestedKeys = collectGroupKeys(people, ['active', 'name'], getValue);
    expect(nestedKeys.size).toBe(2 + 5);
  });
});

describe('aggregateValue', () => {
  const getValue = (row: (typeof people)[number], property: string) =>
    columnValue(row, property);

  it('sums, averages, and finds min/max with numeric coercion', () => {
    expect(
      aggregateValue(people, { property: 'age', type: 'sum' }, getValue)
    ).toBe(152);
    expect(
      aggregateValue(people, { property: 'age', type: 'avg' }, getValue)
    ).toBe(152 / 5);
    expect(
      aggregateValue(people, { property: 'age', type: 'min' }, getValue)
    ).toBe(22);
    expect(
      aggregateValue(people, { property: 'age', type: 'max' }, getValue)
    ).toBe(40);
  });

  it('counts rows and returns undefined for non-numeric sums', () => {
    expect(
      aggregateValue(people, { property: 'name', type: 'count' }, getValue)
    ).toBe(5);
    expect(
      aggregateValue(people, { property: 'name', type: 'sum' }, getValue)
    ).toBeUndefined();
    expect(
      aggregateValue([], { property: 'age', type: 'sum' }, getValue)
    ).toBeUndefined();
  });

  it('runs a custom compute over the rows', () => {
    expect(
      aggregateValue(
        people,
        {
          property: 'age',
          type: 'custom',
          compute: (rows) => rows.filter((r) => r.active).length,
        },
        getValue
      )
    ).toBe(3);
  });
});

describe('toCsv', () => {
  const columns: GridColumn<(typeof people)[number]>[] = [
    { property: 'name', title: 'Name' },
    { property: 'age', title: 'Age' },
  ];

  it('writes a header row and formatted cells with CRLF endings', () => {
    const csv = toCsv(people.slice(0, 2), columns);
    expect(csv).toBe('Name,Age\r\nJohn,30\r\nJane,25\r\n');
  });

  it('quotes commas, quotes, and newlines', () => {
    const rows = [
      { name: "O'Brien, Jr", age: 1 },
      { name: 'say "hi"', age: 2 },
      { name: 'line\nbreak', age: 3 },
    ];
    const csv = toCsv(rows, [
      { property: 'name', title: 'Name' },
      { property: 'age', title: 'Age' },
    ]);
    expect(csv).toContain('"O\'Brien, Jr"');
    expect(csv).toContain('"say ""hi"""');
    expect(csv).toContain('"line\nbreak"');
  });

  it('falls back to property names for untitled columns', () => {
    const csv = toCsv(
      [{ name: 'x', age: 1 }],
      [{ property: 'name' }, { property: 'age' }]
    );
    expect(csv.startsWith('name,age\r\n')).toBe(true);
  });
});

describe('applyGridState filtered view', () => {
  it('exposes filtered+sorted rows before pagination', () => {
    const f = filters([['age', { value: '30', operator: 'GreaterThan' }]]);
    const view = applyGridState(
      people,
      {
        sorts: [{ property: 'age', sortOrder: 'Ascending' }],
        filters: f,
        pageNumber: 1,
        pageSize: 2,
      },
      { types: { age: 'number' } }
    );
    expect(view.items).toHaveLength(2);
    expect(view.filtered.map((p) => p.age)).toEqual([35, 40]);
  });
});
