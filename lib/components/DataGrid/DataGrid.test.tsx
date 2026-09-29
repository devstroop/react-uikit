import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { DataGrid } from './DataGrid';
import type { GridColumn } from './grid';

interface Person {
  id: number;
  name: string;
  age: number;
  role: string;
}

const people: Person[] = [
  { id: 1, name: 'John', age: 30, role: 'admin' },
  { id: 2, name: 'Jane', age: 25, role: 'editor' },
  { id: 3, name: 'Bob', age: 40, role: 'viewer' },
  { id: 4, name: 'Alice', age: 22, role: 'editor' },
  { id: 5, name: 'Charlie', age: 35, role: 'viewer' },
];

const columns: readonly GridColumn<Person>[] = [
  { property: 'name', title: 'Name', sortable: true },
  { property: 'age', title: 'Age', align: 'center', sortable: true },
  { property: 'role', title: 'Role', filterable: true },
];

function renderGrid(
  props: Partial<React.ComponentProps<typeof DataGrid<Person>>> = {}
) {
  return render(
    <DataGrid columns={columns} rows={people} rowKey={(r) => r.id} {...props} />
  );
}

describe('DataGrid', () => {
  it('renders headers and all rows', () => {
    renderGrid();
    expect(
      screen.getByRole('columnheader', { name: /Name/ })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(6);
  });

  it('sorts ascending then descending then clears on click', () => {
    renderGrid({ allowSorting: true });
    const th = screen.getByRole('columnheader', { name: /Name/ });
    fireEvent.click(
      screen.getByRole('button', { name: /Sort Name ascending/ })
    );
    expect(th).toHaveAttribute('aria-sort', 'ascending');
    expect(screen.getAllByRole('row')[1]).toHaveTextContent('Alice');
    fireEvent.click(
      screen.getByRole('button', { name: /Sort Name descending/ })
    );
    expect(th).toHaveAttribute('aria-sort', 'descending');
    expect(screen.getAllByRole('row')[1]).toHaveTextContent('John');
    fireEvent.click(
      screen.getByRole('button', { name: /Sort Name ascending/ })
    );
    expect(th).toHaveAttribute('aria-sort', 'none');
  });

  it('sorts by age numerically', () => {
    renderGrid({ allowSorting: true });
    fireEvent.click(screen.getByRole('button', { name: /Sort Age ascending/ }));
    expect(screen.getAllByRole('row')[1]).toHaveTextContent('Alice');
  });

  it('filters by value with default Contains for strings', () => {
    renderGrid({ allowFiltering: true });
    fireEvent.change(screen.getByLabelText('Role value'), {
      target: { value: 'edit' },
    });
    expect(screen.getAllByRole('row')).toHaveLength(4);
    expect(screen.getAllByRole('row')[2]).toHaveTextContent('Jane');
    expect(screen.getAllByRole('row')[3]).toHaveTextContent('Alice');
  });

  it('filters with a chosen operator', () => {
    renderGrid({ allowFiltering: true });
    fireEvent.change(screen.getByLabelText('Role operator'), {
      target: { value: 'NotEquals' },
    });
    fireEvent.change(screen.getByLabelText('Role value'), {
      target: { value: 'editor' },
    });
    expect(screen.getAllByRole('row')).toHaveLength(5);
    expect(screen.getAllByRole('row')[2]).toHaveTextContent('John');
  });

  it('resets to page 1 when filtering', () => {
    renderGrid({ allowFiltering: true, allowPaging: true, pageSize: 2 });
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    expect(screen.getByRole('button', { name: '3' })).toHaveAttribute(
      'aria-current',
      'page'
    );
    fireEvent.change(screen.getByLabelText('Role value'), {
      target: { value: 'viewer' },
    });
    expect(screen.getByRole('button', { name: '1' })).toHaveAttribute(
      'aria-current',
      'page'
    );
  });

  it('pages through data with the pager', () => {
    renderGrid({ allowPaging: true, pageSize: 2 });
    expect(screen.getAllByRole('row')).toHaveLength(3);
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    expect(screen.getAllByRole('row')).toHaveLength(3);
    expect(screen.getAllByRole('row')[1]).toHaveTextContent('Bob');
    expect(screen.getByText('Page 2 of 3')).toBeInTheDocument();
  });

  it('prefixes the pager nav label with the grid ariaLabel (landmark-unique)', () => {
    renderGrid({ allowPaging: true, pageSize: 2, ariaLabel: 'People' });
    expect(
      screen.getByRole('navigation', { name: 'People Pagination' })
    ).toBeInTheDocument();
    renderGrid({ allowPaging: true, pageSize: 2 });
    expect(
      screen.getByRole('navigation', { name: 'Pagination' })
    ).toBeInTheDocument();
  });

  it('changes page size and clamps to page 1', () => {
    renderGrid({ allowPaging: true, pageSize: 2, pageSizeOptions: [2, 5] });
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.change(screen.getByLabelText('Items per page'), {
      target: { value: '5' },
    });
    expect(screen.getAllByRole('row')).toHaveLength(6);
    expect(screen.getByText('Page 1 of 1')).toBeInTheDocument();
  });

  it('renders the empty message when nothing matches', () => {
    renderGrid({ allowFiltering: true, empty: 'Nothing here' });
    fireEvent.change(screen.getByLabelText('Role value'), {
      target: { value: 'zzz' },
    });
    expect(screen.getByText('Nothing here')).toBeInTheDocument();
  });

  it('shows the loading overlay when loading', () => {
    renderGrid({ isLoading: true });
    expect(screen.getByRole('status')).toHaveTextContent('Loading');
    expect(screen.getByRole('grid')).toHaveAttribute('aria-busy', 'true');
  });

  it('calls onRowClick with the row', () => {
    const onRowClick = vi.fn();
    renderGrid({ onRowClick });
    fireEvent.click(screen.getByText('Bob'));
    expect(onRowClick).toHaveBeenCalledWith(people[2]);
  });

  it('renders template-only columns and custom render', () => {
    renderGrid({
      columns: [
        { property: 'name', title: 'Name' },
        { title: 'Actions', render: (r) => `view ${r.name}` },
      ],
    });
    expect(screen.getByText('view John')).toBeInTheDocument();
  });

  it('selects rows in single mode', () => {
    const onSelectionChange = vi.fn();
    let keys: (string | number)[] = [];
    const first = renderGrid({
      selectionMode: 'Single',
      selectedKeys: keys,
      onSelectionChange,
    });
    fireEvent.click(screen.getByText('Bob'));
    keys = onSelectionChange.mock.calls[0]![0]!;
    expect(keys).toEqual([3]);
    first.unmount();
    renderGrid({
      selectionMode: 'Single',
      selectedKeys: keys,
      onSelectionChange,
    });
    fireEvent.click(screen.getByText('Bob'));
    expect(onSelectionChange).toHaveBeenLastCalledWith([]);
  });

  it('marks selected rows with aria-selected', () => {
    renderGrid({ selectionMode: 'Single', selectedKeys: [1] });
    const row = screen.getByText('John').closest('tr');
    expect(row).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Bob').closest('tr')).toHaveAttribute(
      'aria-selected',
      'false'
    );
  });

  it('toggles multiple selection', () => {
    const onSelectionChange = vi.fn();
    let keys: (string | number)[] = [1];
    const first = renderGrid({
      selectionMode: 'Multiple',
      selectedKeys: keys,
      onSelectionChange,
    });
    fireEvent.click(screen.getByText('Jane'));
    keys = onSelectionChange.mock.calls[0]![0]!;
    expect(keys).toEqual([1, 2]);
    first.unmount();
    renderGrid({
      selectionMode: 'Multiple',
      selectedKeys: keys,
      onSelectionChange,
    });
    fireEvent.click(screen.getByText('John'));
    expect(onSelectionChange).toHaveBeenLastCalledWith([2]);
  });

  it('does not select when clicking an interactive control', () => {
    const onSelectionChange = vi.fn();
    renderGrid({
      selectionMode: 'Single',
      selectedKeys: [],
      onSelectionChange,
      columns: [
        { property: 'name', title: 'Name' },
        { property: 'age', title: 'Age' },
        {
          property: 'role',
          title: 'Role',
          render: () => <button type="button">action</button>,
        },
      ],
    });
    expect(screen.getAllByRole('button', { name: 'action' })[0]).toBeDefined();
    fireEvent.click(
      screen.getAllByRole('button', { name: 'action' })[0] as HTMLElement
    );
    expect(onSelectionChange).not.toHaveBeenCalled();
  });

  it('toggles column visibility from the picker', () => {
    renderGrid({ showColumnPicker: true });
    expect(
      screen.getByRole('columnheader', { name: /Role/ })
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Columns' }));
    fireEvent.click(screen.getByLabelText('Role'));
    expect(
      screen.queryByRole('columnheader', { name: /Role/ })
    ).not.toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Role'));
    expect(
      screen.getByRole('columnheader', { name: /Role/ })
    ).toBeInTheDocument();
  });

  it('hides columns marked visible false', () => {
    renderGrid({
      columns: [
        { property: 'name', title: 'Name' },
        { property: 'age', title: 'Age', visible: false },
      ],
    });
    expect(
      screen.getByRole('columnheader', { name: /Name/ })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('columnheader', { name: /Age/ })
    ).not.toBeInTheDocument();
  });

  it('resizes a column via drag handle', () => {
    renderGrid({ allowColumnResize: true });
    const handle = screen.getByRole('separator', { name: /Resize Name/ });
    fireEvent.mouseDown(handle, { clientX: 100 });
    fireEvent.mouseMove(handle, { clientX: 140 });
    fireEvent.mouseUp(handle);
    const col = document.querySelector('colgroup col');
    expect(col).toHaveStyle('width: 136px');
  });

  it('reorders columns by drag and drop', () => {
    renderGrid({ allowColumnReorder: true });
    const ageHeader = screen.getByRole('columnheader', { name: /Age/ });
    const nameHeader = screen.getByRole('columnheader', { name: /Name/ });
    fireEvent.dragStart(ageHeader);
    fireEvent.dragOver(nameHeader);
    fireEvent.drop(nameHeader);
    const headers = screen.getAllByRole('columnheader');
    expect(headers[0]).toHaveTextContent(/Age/);
    expect(headers[1]).toHaveTextContent(/Name/);
  });

  it('applies sticky offsets to frozen columns', () => {
    renderGrid({
      columns: [
        { property: 'name', title: 'Name', frozen: true, width: '120px' },
        { property: 'age', title: 'Age', frozen: true, width: '80px' },
        { property: 'role', title: 'Role' },
      ],
    });
    const ths = screen.getAllByRole('columnheader');
    expect(ths[0]).toHaveStyle('left: 0px');
    expect(ths[1]).toHaveStyle('left: 120px');
    expect(ths[2]).not.toHaveStyle('left: 0px');
  });

  it('groups by a column dropped on the group panel and hides it', () => {
    renderGrid({ allowGrouping: true });
    const panel = screen.getByText(/Drag a column header here/);
    fireEvent.dragStart(screen.getByRole('columnheader', { name: /Role/ }));
    fireEvent.dragOver(panel);
    fireEvent.drop(panel);
    expect(
      screen.queryByRole('columnheader', { name: /Role/ })
    ).not.toBeInTheDocument();
    expect(screen.getByText(/Role: admin \(1\)/)).toBeInTheDocument();
    expect(screen.getByText(/Role: editor \(2\)/)).toBeInTheDocument();
  });

  it('collapses and expands groups', () => {
    renderGrid({ allowGrouping: true });
    fireEvent.dragStart(screen.getByRole('columnheader', { name: /Role/ }));
    fireEvent.drop(screen.getByText(/Drag a column header here/));
    const toggle = screen.getByRole('button', { name: /Role: admin/ });
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText('John')).not.toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.getByText('John')).toBeInTheDocument();
  });

  it('removes grouping via the chip', () => {
    renderGrid({ allowGrouping: true });
    fireEvent.dragStart(screen.getByRole('columnheader', { name: /Role/ }));
    fireEvent.drop(screen.getByText(/Drag a column header here/));
    fireEvent.click(
      screen.getByRole('button', { name: /Remove group by Role/ })
    );
    expect(
      screen.getByRole('columnheader', { name: /Role/ })
    ).toBeInTheDocument();
    expect(screen.queryByText(/Role: admin/)).not.toBeInTheDocument();
  });

  it('edits a row inline and calls onRowUpdate', () => {
    const onRowUpdate = vi.fn();
    renderGrid({ editMode: 'Single', onRowUpdate });
    fireEvent.click(
      screen.getAllByRole('button', { name: 'Edit' })[1] as HTMLElement
    );
    const input = screen.getByLabelText('Name (edit)');
    fireEvent.change(input, { target: { value: 'Janet' } });
    fireEvent.click(
      screen.getAllByRole('button', { name: 'Save' })[0] as HTMLElement
    );
    expect(onRowUpdate).toHaveBeenCalledWith(people[1], {
      ...people[1],
      name: 'Janet',
    });
    expect(screen.queryByLabelText('Name (edit)')).not.toBeInTheDocument();
  });

  it('creates a row and calls onRowCreate', () => {
    const onRowCreate = vi.fn();
    renderGrid({ editMode: 'Single', allowRowCreate: true, onRowCreate });
    fireEvent.click(screen.getByRole('button', { name: 'Add row' }));
    fireEvent.change(screen.getByLabelText('Name (new)'), {
      target: { value: 'Zed' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(onRowCreate).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'Zed' })
    );
  });

  it('deletes a row via command button', () => {
    const onRowDelete = vi.fn();
    renderGrid({ onRowDelete });
    fireEvent.click(
      screen.getAllByRole('button', { name: 'Delete' })[0] as HTMLElement
    );
    expect(onRowDelete).toHaveBeenCalledWith(people[0]);
  });

  it('cancels an edit without notifying', () => {
    const onRowUpdate = vi.fn();
    renderGrid({ editMode: 'Single', onRowUpdate });
    fireEvent.click(
      screen.getAllByRole('button', { name: 'Edit' })[0] as HTMLElement
    );
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(onRowUpdate).not.toHaveBeenCalled();
    expect(screen.queryByLabelText('Name (edit)')).not.toBeInTheDocument();
  });
});

describe('DataGrid — multi-level grouping', () => {
  it('nests a second group level with per-level chips', () => {
    renderGrid({ allowGrouping: true });
    const panel = document.querySelector(
      '[data-dx-grid-group-panel]'
    ) as HTMLElement;
    fireEvent.dragStart(screen.getByRole('columnheader', { name: /Role/ }));
    fireEvent.drop(panel);
    fireEvent.dragStart(screen.getByRole('columnheader', { name: /Age/ }));
    fireEvent.drop(panel);
    expect(
      screen.getByRole('button', { name: 'Remove group by Role' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Remove group by Age' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('columnheader', { name: /Role/ })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('columnheader', { name: /Age/ })
    ).not.toBeInTheDocument();
    expect(screen.getByText(/Role: editor \(2\)/)).toBeInTheDocument();
    expect(screen.getByText(/Age: 25 \(1\)/)).toBeInTheDocument();
    expect(screen.getByText(/Age: 40 \(1\)/)).toBeInTheDocument();
  });

  it('removes one level without clearing the other', () => {
    renderGrid({ allowGrouping: true });
    const panel = document.querySelector(
      '[data-dx-grid-group-panel]'
    ) as HTMLElement;
    fireEvent.dragStart(screen.getByRole('columnheader', { name: /Role/ }));
    fireEvent.drop(panel);
    fireEvent.dragStart(screen.getByRole('columnheader', { name: /Age/ }));
    fireEvent.drop(panel);
    fireEvent.click(
      screen.getByRole('button', { name: 'Remove group by Age' })
    );
    expect(
      screen.getByRole('columnheader', { name: /Age/ })
    ).toBeInTheDocument();
    expect(screen.queryByText(/Age: 25/)).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Remove group by Role' })
    ).toBeInTheDocument();
    expect(screen.getByText(/Role: editor \(2\)/)).toBeInTheDocument();
  });
});

describe('DataGrid — footer aggregates', () => {
  it('renders sum and count over the full filtered set', () => {
    renderGrid({
      aggregates: [
        { property: 'age', type: 'sum', title: 'Total age' },
        { property: 'name', type: 'count', title: 'Rows' },
      ],
      allowPaging: true,
      pageSize: 2,
    });
    expect(screen.getByText('Total age: 152')).toBeInTheDocument();
    expect(screen.getByText('Rows: 5')).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(4);
  });

  it('aggregates the filtered rows, not the raw data', () => {
    renderGrid({
      aggregates: [{ property: 'age', type: 'sum', title: 'Total age' }],
      allowFiltering: true,
    });
    fireEvent.change(screen.getByLabelText('Role value'), {
      target: { value: 'editor' },
    });
    expect(screen.getByText('Total age: 47')).toBeInTheDocument();
  });
});

describe('DataGrid — CSV export', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('exports visible columns of the filtered set as CSV', async () => {
    const blobs: Blob[] = [];
    URL.createObjectURL = vi.fn((blob: Blob) => {
      blobs.push(blob);
      return 'blob:grid';
    });
    URL.revokeObjectURL = vi.fn();
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(
      () => undefined
    );

    renderGrid({ showExportButton: true, exportFileName: 'people' });
    fireEvent.click(screen.getByRole('button', { name: 'Export CSV' }));

    expect(URL.createObjectURL).toHaveBeenCalledTimes(1);
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:grid');
    expect(blobs[0]).toBeDefined();
    expect(blobs[0]!.type).toBe('text/csv;charset=utf-8');
    const text = await blobs[0]!.text();
    expect(text).toContain('Name,Age,Role\r\n');
    expect(text).toContain('John,30,admin\r\n');
    expect(text).toContain('Charlie,35,viewer\r\n');
    expect(vi.mocked(HTMLAnchorElement.prototype.click)).toHaveBeenCalledTimes(
      1
    );
  });
});

describe('DataGrid — server mode (onRangeChange)', () => {
  it('reports the requested range on mount, page, sort, and filter', () => {
    const onRangeChange = vi.fn();
    renderGrid({
      serverMode: true,
      totalCount: 1000,
      allowPaging: true,
      pageSize: 10,
      allowSorting: true,
      allowFiltering: true,
      onRangeChange,
    });
    expect(onRangeChange).toHaveBeenCalledWith(
      expect.objectContaining({
        start: 0,
        count: 10,
        pageNumber: 1,
        pageSize: 10,
        sorts: [],
        filters: [],
        logicalOperator: 'And',
      })
    );

    fireEvent.click(screen.getByRole('button', { name: '2' }));
    expect(onRangeChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ start: 10, pageNumber: 2 })
    );

    fireEvent.click(
      screen.getByRole('button', { name: /Sort Name ascending/ })
    );
    expect(onRangeChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        sorts: [{ property: 'name', sortOrder: 'Ascending' }],
      })
    );

    fireEvent.change(screen.getByLabelText('Role value'), {
      target: { value: 'edit' },
    });
    expect(onRangeChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        filters: [{ property: 'role', operator: 'Contains', value: 'edit' }],
      })
    );
  });

  it('renders rows as returned and skips client-side filtering', () => {
    renderGrid({
      serverMode: true,
      allowFiltering: true,
      allowPaging: true,
      pageSize: 2,
      totalCount: 50,
    });
    // header + filter row + 5 server-returned rows
    expect(screen.getAllByRole('row')).toHaveLength(7);
    fireEvent.change(screen.getByLabelText('Role value'), {
      target: { value: 'zzz' },
    });
    expect(screen.getAllByRole('row')).toHaveLength(7);
    expect(screen.getByText('Page 1 of 25')).toBeInTheDocument();
  });
});

describe('DataGrid — row virtualization', () => {
  const many = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `N${i}`,
    age: i,
    role: 'x',
  }));

  it('renders only the visible window with spacer rows', () => {
    renderGrid({
      rows: many,
      virtualize: true,
      virtualRowHeight: 40,
      virtualHeight: 400,
    });
    expect(screen.getByRole('grid')).toHaveAttribute('aria-rowcount', '1001');
    expect(screen.getByText('N0')).toBeInTheDocument();
    expect(screen.queryByText('N20')).not.toBeInTheDocument();
    // header + 20 virtual rows; spacer rows are aria-hidden
    expect(screen.getAllByRole('row')).toHaveLength(21);
    const scroller = screen.getByRole('grid').parentElement as HTMLElement;
    expect(scroller).toHaveStyle('max-height: 400px');
    const bottomSpacer = scroller.querySelector('td[style*="height"]');
    expect(bottomSpacer).toHaveStyle('height: 39200px');
  });

  it('shifts the window on scroll with aria-rowindex', () => {
    const { container } = renderGrid({
      rows: many,
      virtualize: true,
      virtualRowHeight: 40,
      virtualHeight: 400,
    });
    const scroller = screen.getByRole('grid').parentElement as HTMLElement;
    Object.defineProperty(scroller, 'scrollTop', {
      value: 4000,
      configurable: true,
      writable: true,
    });
    Object.defineProperty(scroller, 'clientHeight', {
      value: 400,
      configurable: true,
      writable: true,
    });
    fireEvent.scroll(scroller);
    expect(screen.queryByText('N0')).not.toBeInTheDocument();
    expect(screen.getByText('N95')).toBeInTheDocument();
    expect(screen.getByText('N114')).toBeInTheDocument();
    expect(screen.queryByText('N115')).not.toBeInTheDocument();
    const firstVisible = screen.getByText('N95').closest('tr');
    expect(firstVisible).toHaveAttribute('aria-rowindex', '97');
    expect(container.querySelectorAll('td[style*="height"]')).toHaveLength(2);
  });

  it('renders every row when virtualization is off', () => {
    renderGrid({ rows: many.slice(0, 150) });
    expect(screen.getByText('N149')).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(151);
    expect(screen.getByText('N0').closest('tr')).not.toHaveAttribute(
      'aria-rowindex'
    );
  });
});
