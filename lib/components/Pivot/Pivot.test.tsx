import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Pivot } from './Pivot';

const data = [
  { region: 'East', product: 'A', amount: 10 },
  { region: 'East', product: 'B', amount: 20 },
  { region: 'West', product: 'A', amount: 30 },
  { region: 'West', product: 'B', amount: 40 },
];

describe('Pivot', () => {
  it('renders grid with totals', () => {
    render(
      <Pivot
        data={data}
        rowFields={[{ property: 'region', title: 'Region' }]}
        columnFields={[{ property: 'product', title: 'Product' }]}
        aggregateFields={[{ property: 'amount', aggregate: 'Sum' }]}
      />
    );
    expect(screen.getByRole('grid')).toBeInTheDocument();
    expect(screen.getAllByText('Total').length).toBeGreaterThanOrEqual(2);
    expect(
      screen.getByRole('grid', { name: 'Pivot table' })
    ).toBeInTheDocument();
  });

  it('aggregates Sum correctly', () => {
    render(
      <Pivot
        data={data}
        rowFields={[{ property: 'region' }]}
        columnFields={[{ property: 'product' }]}
        aggregateFields={[{ property: 'amount', aggregate: 'Sum' }]}
      />
    );
    // East A = 10, East B = 20, West A = 30, West B = 40; grand total = 100
    expect(screen.getByTitle('10')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('removes a row field via chip', () => {
    const fn = vi.fn();
    render(
      <Pivot
        data={data}
        rowFields={[{ property: 'region', title: 'Region' }]}
        aggregateFields={[{ property: 'amount', aggregate: 'Sum' }]}
        onFieldsChange={fn}
      />
    );
    const chip = screen.getByLabelText('Remove row field Region');
    fireEvent.click(chip);
    expect(fn).toHaveBeenCalledWith(expect.objectContaining({ rowFields: [] }));
  });

  it('supports Count and Average', () => {
    const { unmount } = render(
      <Pivot
        data={data}
        rowFields={[{ property: 'region' }]}
        aggregateFields={[{ property: 'amount', aggregate: 'Average' }]}
      />
    );
    // grand average = 25
    expect(screen.getAllByText('25').length).toBeGreaterThan(0);
    unmount();
    render(
      <Pivot
        data={data}
        rowFields={[{ property: 'region' }]}
        aggregateFields={[{ property: 'amount', aggregate: 'Count' }]}
      />
    );
    expect(screen.getAllByText('4').length).toBeGreaterThan(0);
  });
  it('renders every aggregate in cells and totals', () => {
    render(
      <Pivot
        data={data}
        rowFields={[{ property: 'region' }]}
        aggregateFields={[
          { property: 'amount', aggregate: 'Sum' },
          { property: 'amount', aggregate: 'Count' },
        ]}
      />
    );
    // East = 10+20, West = 30+40, grand = 100; count = rows per slice
    expect(screen.getAllByText('30 (Sum), 2 (Count)').length).toBeGreaterThan(
      0
    );
    expect(screen.getAllByText('70 (Sum), 2 (Count)').length).toBeGreaterThan(
      0
    );
    expect(screen.getAllByText('100 (Sum), 4 (Count)').length).toBeGreaterThan(
      0
    );
  });

  it('supports First and Last aggregates', () => {
    render(
      <Pivot
        data={data}
        rowFields={[{ property: 'region' }]}
        aggregateFields={[
          { property: 'amount', aggregate: 'First' },
          { property: 'amount', aggregate: 'Last' },
        ]}
      />
    );
    expect(screen.getAllByText('10 (First), 20 (Last)').length).toBeGreaterThan(
      0
    );
    expect(screen.getAllByText('10 (First), 40 (Last)').length).toBeGreaterThan(
      0
    );
  });

  it('keeps multi-field keys distinct for values that collide on plain join', () => {
    render(
      <Pivot
        data={[
          { a: 'x', b: 'yz', amount: 1 },
          { a: 'xy', b: 'z', amount: 2 },
        ]}
        rowFields={[{ property: 'a' }, { property: 'b' }]}
        aggregateFields={[{ property: 'amount', aggregate: 'Sum' }]}
      />
    );
    // header + 2 data rows + total = 4; a plain join merges both into one
    expect(screen.getAllByRole('row')).toHaveLength(4);
    expect(screen.getAllByText('1').length).toBeGreaterThan(0);
    expect(screen.getAllByText('2').length).toBeGreaterThan(0);
  });

  it('escapes the key separator inside multi-field values', () => {
    render(
      <Pivot
        data={[
          { a: 'x', b: 'y\u0001z', amount: 5 },
          { a: 'x\u0001y', b: 'z', amount: 6 },
        ]}
        rowFields={[{ property: 'a' }, { property: 'b' }]}
        aggregateFields={[{ property: 'amount', aggregate: 'Sum' }]}
      />
    );
    // unescaped, both rows join to the same x-US-y-US-z key
    expect(screen.getAllByRole('row')).toHaveLength(4);
  });
});
