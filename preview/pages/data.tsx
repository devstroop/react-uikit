import { useMemo, useState } from 'react';
import {
  applyGridState,
  Barcode,
  Button,
  Chart,
  DataFilter,
  DataGrid,
  DataList,
  Gantt,
  PickList,
  Pivot,
  type PivotAggregate,
  type PivotField,
  QRCode,
  Row,
  Scheduler,
  Stack,
  Table,
  Text,
  Timeline,
  Tree,
  VirtualGrid,
} from '../../lib/main';
import type { GridRange } from '../../lib/main';
import { DemoPage } from './demo-page';
import { EventLog } from './shared/EventLog';
import { KeyboardTable } from './shared/KeyboardTable';

type Person = { id: string; name: string; zone: string };

const PEOPLE: Person[] = [
  { id: 'a', name: 'Ada', zone: 'North' },
  { id: 'b', name: 'Grace', zone: 'South' },
];

type Route = { id: string; name: string; zone: string; amount: number };

const ZONES = ['North', 'South', 'East', 'West'];

const ROUTES: Route[] = Array.from({ length: 500 }, (_, i) => ({
  id: `r${i}`,
  name: `Route ${i}`,
  zone: ZONES[i % ZONES.length] as string,
  amount: (i * 7) % 250,
}));

const ROUTE_COLUMNS = [
  { property: 'name', title: 'Name', sortable: true },
  { property: 'zone', title: 'Zone', sortable: true },
  {
    property: 'amount',
    title: 'Amount',
    align: 'right' as const,
    sortable: true,
  },
];

/**
 * Server-mode demo: an in-memory stand-in applies the requested range
 * exactly the way a backend would.
 */
function ServerGridDemo() {
  const [range, setRange] = useState<GridRange | null>(null);
  const [rows, setRows] = useState<Route[]>(() => ROUTES.slice(0, 10));
  const [total, setTotal] = useState(ROUTES.length);

  const handleRange = (next: GridRange) => {
    setRange(next);
    const view = applyGridState(ROUTES, {
      sorts: next.sorts,
      filters: new Map(
        next.filters.map((f) => [
          f.property,
          { operator: f.operator, value: f.value },
        ])
      ),
      pageNumber: next.pageNumber,
      pageSize: next.pageSize,
    });
    setRows(view.items);
    setTotal(view.total);
  };

  return (
    <>
      <DataGrid<Route>
        ariaLabel="Server routes"
        columns={ROUTE_COLUMNS}
        rows={rows}
        rowKey={(r) => r.id}
        serverMode
        totalCount={total}
        onRangeChange={handleRange}
        allowSorting
        allowFiltering
        allowPaging
        pageSize={10}
      />
      <Text textStyle="Caption" className="dx-mt-2">
        {range
          ? `Requested rows ${range.start}–${range.start + range.count - 1} of ${total} · sorts: ${range.sorts.map((s) => `${s.property} ${s.sortOrder}`).join(', ') || 'none'}`
          : 'No range requested yet'}
      </Text>
    </>
  );
}

const SALES = [
  { zone: 'North', amount: 120 },
  { zone: 'South', amount: 90 },
  { zone: 'East', amount: 60 },
];

const VIRTUAL_COLUMNS = [
  { property: 'id', title: 'ID', width: '80px' },
  { property: 'name', title: 'Order' },
  { property: 'zone', title: 'Zone' },
  { property: 'amount', title: 'Amount', width: '110px' },
];

function delaySlice(
  skip: number,
  top: number
): Promise<Record<string, unknown>[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: Math.max(0, top - skip) }, (_, i) => {
          const id = skip + i;
          return {
            id,
            name: `Order ${id}`,
            zone: ZONES[id % ZONES.length],
            amount: (id * 7) % 250,
          };
        })
      );
    }, 140);
  });
}

function VirtualBasicDemo() {
  const loader = useMemo(
    () => (args: { skip: number; top: number }) =>
      delaySlice(args.skip, args.top),
    []
  );
  return (
    <VirtualGrid
      count={10000}
      ariaLabel="Orders"
      columns={VIRTUAL_COLUMNS}
      loadData={loader}
    />
  );
}

function VirtualLayoutDemo() {
  const loader = useMemo(
    () => (args: { skip: number; top: number }) =>
      delaySlice(args.skip, args.top),
    []
  );
  return (
    <>
      <Text textStyle="Body1" className="dx-mb-2">
        rowHeight={'{28}'} height={'{160}'} — compact
      </Text>
      <VirtualGrid
        count={5000}
        rowHeight={28}
        height={160}
        ariaLabel="Compact orders"
        columns={VIRTUAL_COLUMNS}
        loadData={loader}
      />
      <Text textStyle="Body1" className="dx-mb-2 dx-mt-4">
        rowHeight={'{48}'} height={'{300}'} — roomy
      </Text>
      <VirtualGrid
        count={5000}
        rowHeight={48}
        height={300}
        ariaLabel="Roomy orders"
        columns={VIRTUAL_COLUMNS}
        loadData={loader}
      />
    </>
  );
}

function VirtualFetchDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const loader = useMemo(
    () => (args: { skip: number; top: number }) => {
      setEvents((prev) =>
        [...prev, `loadData(skip=${args.skip}, top=${args.top})`].slice(-20)
      );
      return delaySlice(args.skip, args.top);
    },
    []
  );
  return (
    <>
      <VirtualGrid
        count={5000}
        ariaLabel="Load window grid"
        columns={VIRTUAL_COLUMNS}
        loadData={loader}
      />
      <EventLog
        events={events}
        emptyText="Scroll or ArrowDown — each window logs its skip/top."
      />
    </>
  );
}

const VIRTUALGRID_KEYS = [
  { keys: 'ArrowDown', action: 'Scroll one row down' },
  { keys: 'ArrowUp', action: 'Scroll one row up' },
  { keys: 'PageDown', action: 'Scroll one viewport down' },
  { keys: 'PageUp', action: 'Scroll one viewport up' },
  { keys: 'Tab', action: 'Focus the grid (rows load on demand)' },
] as const;

function VirtualGridDemos() {
  return (
    <DemoPage
      title="VirtualGrid"
      description="Windowed grid over large async datasets (Radzen VirtualGrid parity): only the visible range (plus overscan) is fetched, so 10k rows stay at 60fps."
      sections={[
        {
          id: 'virtualgrid-basic',
          title: 'Basic',
          description:
            '10,000 rows with a 140ms simulated latency — loadData receives only the skip/top window the viewport needs.',
          content: <VirtualBasicDemo />,
        },
        {
          id: 'virtualgrid-layout',
          title: 'Height & row density',
          description:
            'rowHeight and height tune the window; the fetch range follows them automatically.',
          content: <VirtualLayoutDemo />,
        },
        {
          id: 'virtualgrid-fetches',
          title: 'Load windows',
          description:
            'Every visible range change logs its loadData window — proof the grid never fetches the full set.',
          content: <VirtualFetchDemo />,
        },
        {
          id: 'virtualgrid-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={VIRTUALGRID_KEYS} />,
        },
      ]}
    />
  );
}

// ---------------------------------------------------------------------------
// Data-phase demo fixtures
// ---------------------------------------------------------------------------

type Crew = {
  id: string;
  name: string;
  zone: string;
  amount: number;
  active: boolean;
  kind: string;
};

const CREWS: Crew[] = [
  {
    id: 'c1',
    name: 'Ada',
    zone: 'North',
    amount: 120,
    active: true,
    kind: 'Driver',
  },
  {
    id: 'c2',
    name: 'Grace',
    zone: 'South',
    amount: 90,
    active: true,
    kind: 'Loader',
  },
  {
    id: 'c3',
    name: 'Linus',
    zone: 'North',
    amount: 45,
    active: false,
    kind: 'Driver',
  },
  {
    id: 'c4',
    name: 'Margaret',
    zone: 'East',
    amount: 210,
    active: true,
    kind: 'Spotter',
  },
];

const FILTER_PROPERTIES = [
  { name: 'zone', title: 'Zone', type: 'string' as const },
  { name: 'amount', title: 'Amount', type: 'number' as const },
  { name: 'active', title: 'Active', type: 'boolean' as const },
  {
    name: 'kind',
    title: 'Kind',
    type: 'enum' as const,
    values: [
      { value: 'Driver', label: 'Driver' },
      { value: 'Loader', label: 'Loader' },
      { value: 'Spotter', label: 'Spotter' },
    ],
  },
];

const TREE_DATA = [
  {
    id: 'zones',
    text: 'Zones',
    expanded: true,
    children: [
      {
        id: 'north',
        text: 'North',
        expanded: true,
        children: [
          { id: 'n-route-a', text: 'Route A' },
          { id: 'n-route-b', text: 'Route B' },
        ],
      },
      { id: 'south', text: 'South' },
      { id: 'east', text: 'East' },
      { id: 'west', text: 'West', disabled: true },
    ],
  },
];

const TREE_KEYS = [
  {
    keys: 'ArrowDown / ArrowUp',
    action: 'Move focus between visible nodes (wraps around)',
  },
  {
    keys: 'ArrowRight',
    action: 'Expand the focused node, then move to its first child',
  },
  {
    keys: 'ArrowLeft',
    action: 'Collapse the focused node, or move to its parent',
  },
  { keys: 'Home / End', action: 'Jump to the first / last visible node' },
  {
    keys: 'Enter',
    action:
      'Select the focused node (test: keyboard Enter/Space toggles selection)',
  },
  {
    keys: 'Space',
    action: 'Select — or toggle the focused checkbox when checkboxes are on',
  },
  {
    keys: 'a–z / 0–9',
    action: 'Type-ahead: jump to the next node matching the typed prefix',
  },
] as const;

const PICKLIST_KEYS = [
  {
    keys: 'ArrowDown / ArrowUp',
    action: 'Move the active option within a listbox (wraps around)',
  },
  { keys: 'Enter / Space', action: 'Toggle selection of the active option' },
  {
    keys: 'Tab',
    action: 'Move between the two listboxes and the move buttons',
  },
] as const;

const GANTT_KEYS = [
  {
    keys: 'Enter',
    action:
      'Activate the focused task bar — selects it and fires onTaskClick (test: handles keyboard)',
  },
] as const;

function TreeBasicDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <Tree
        data={TREE_DATA}
        ariaLabel="Fleet zones"
        onChange={(args) => log(`change: ${args.item.text}`)}
        onExpand={({ item }) => log(`expand: ${item.text}`)}
        onCollapse={({ item }) => log(`collapse: ${item.text}`)}
      />
      <EventLog
        events={events}
        emptyText="Select or expand a node to log events."
      />
    </Stack>
  );
}

function TreeSelectionDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <Row gap={12} wrap>
        <Stack orientation="vertical" gap={4}>
          <Text textStyle="Body2" className="dx-text-muted">
            single
          </Text>
          <Tree
            data={TREE_DATA}
            ariaLabel="Single selection"
            onChange={(args) => log(`single → ${args.item.text}`)}
          />
        </Stack>
        <Stack orientation="vertical" gap={4}>
          <Text textStyle="Body2" className="dx-text-muted">
            multiple (aria-multiselectable)
          </Text>
          <Tree
            data={TREE_DATA}
            ariaLabel="Multiple selection"
            selectionMode="multiple"
            onChange={(args) =>
              log(
                `multiple → ${args.selectedItems?.map((i) => i.text).join(', ') || '(none)'}`
              )
            }
          />
        </Stack>
      </Row>
      <EventLog
        events={events}
        emptyText="Click nodes in either tree to log selection."
      />
    </Stack>
  );
}

function TreeCheckboxDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <Tree
        data={TREE_DATA}
        ariaLabel="Checkable zones"
        allowCheckBoxes
        onCheckedChange={(keys) =>
          log(`checked: ${keys.join(', ') || '(none)'}`)
        }
      />
      <EventLog
        events={events}
        emptyText="Toggle a checkbox — parents cascade and go indeterminate."
      />
    </Stack>
  );
}

function TreeLazyDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <Tree
        data={[{ id: 'regions', text: 'Regions (loads on expand)' }]}
        ariaLabel="Lazy regions"
        loadChildData={async (item) => {
          log(`loadChildData(${item.text})`);
          return [
            { id: 'coastal', text: 'Coastal' },
            { id: 'inland', text: 'Inland' },
          ];
        }}
        onExpand={({ item }) => log(`expand: ${item.text}`)}
      />
      <EventLog
        events={events}
        emptyText="Expand the root node to trigger the async load."
      />
    </Stack>
  );
}

function PickListDemo() {
  const [source, setSource] = useState([
    { id: 's1', text: 'Alpha' },
    { id: 's2', text: 'Beta' },
    { id: 's3', text: 'Gamma', disabled: true },
    { id: 's4', text: 'Delta' },
  ]);
  const [target, setTarget] = useState([{ id: 't1', text: 'Echo' }]);
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <PickList
        ariaLabel="Route crews"
        source={source}
        target={target}
        onSourceChange={setSource}
        onTargetChange={setTarget}
        onMove={(args) => log(`${args.direction}: moved ${args.moved.length}`)}
      />
      <EventLog
        events={events}
        emptyText="Select options and use the move buttons to log transfers."
      />
    </Stack>
  );
}

const PIVOT_SALES = [
  { zone: 'North', quarter: 'Q1', amount: 120 },
  { zone: 'North', quarter: 'Q2', amount: 90 },
  { zone: 'South', quarter: 'Q1', amount: 60 },
  { zone: 'South', quarter: 'Q2', amount: 75 },
  { zone: 'East', quarter: 'Q1', amount: 40 },
  { zone: 'East', quarter: 'Q2', amount: 55 },
];

function PivotFieldsDemo() {
  const [rowFields, setRowFields] = useState<PivotField[]>([
    { property: 'zone', title: 'Zone' },
  ]);
  const [columnFields, setColumnFields] = useState<PivotField[]>([]);
  const [aggregateFields, setAggregateFields] = useState<PivotAggregate[]>([
    { property: 'amount', title: 'Total', aggregate: 'Sum' },
  ]);
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <Pivot
        ariaLabel="Controlled pivot"
        data={PIVOT_SALES}
        rowFields={rowFields}
        columnFields={columnFields}
        aggregateFields={aggregateFields}
        onFieldsChange={(next) => {
          setRowFields(next.rowFields);
          setColumnFields(next.columnFields);
          setAggregateFields(next.aggregateFields);
          log(
            `fields → rows[${next.rowFields.map((f) => f.property).join(',')}] cols[${next.columnFields.map((f) => f.property).join(',')}]`
          );
        }}
      />
      <EventLog
        events={events}
        emptyText="Remove a field chip above to log onFieldsChange."
      />
    </Stack>
  );
}

const GANTT_TASKS = [
  {
    id: 't1',
    name: 'Load-out',
    start: new Date(2026, 8, 21),
    end: new Date(2026, 8, 23),
    progress: 100,
  },
  {
    id: 't2',
    name: 'Dispatch',
    start: new Date(2026, 8, 23),
    end: new Date(2026, 8, 25),
    progress: 50,
  },
  {
    id: 't3',
    name: 'Return leg',
    start: new Date(2026, 8, 25),
    end: new Date(2026, 8, 27),
    progress: 0,
    dependencies: ['t2'],
  },
];

function GanttTasksDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <Gantt
        tasks={GANTT_TASKS}
        onTaskClick={({ task }) =>
          log(`task click: ${task.name} (${task.progress ?? 0}% complete)`)
        }
      />
      <EventLog
        events={events}
        emptyText="Click or focus a task bar and press Enter to log selection."
      />
    </Stack>
  );
}

function GanttViewDemo() {
  const [view, setView] = useState<'day' | 'week'>('week');
  return (
    <Stack orientation="vertical" gap={12}>
      <Row gap={8} wrap>
        <Button
          size="sm"
          variant={view === 'day' ? 'filled' : 'outlined'}
          onClick={() => setView('day')}
        >
          day
        </Button>
        <Button
          size="sm"
          variant={view === 'week' ? 'filled' : 'outlined'}
          onClick={() => setView('week')}
        >
          week
        </Button>
      </Row>
      <Gantt tasks={GANTT_TASKS.slice(0, 2)} view={view} />
    </Stack>
  );
}

const SCHED_RESOURCES = [
  { id: 'truck-1', name: 'Truck 1' },
  { id: 'truck-2', name: 'Truck 2' },
];

const SCHED_EVENTS = [
  {
    id: 'e1',
    title: 'Yard audit',
    start: new Date(2026, 8, 23, 13),
    end: new Date(2026, 8, 23, 15),
  },
  {
    id: 'e2',
    title: 'Dispatch window',
    start: new Date(2026, 8, 24, 9),
    end: new Date(2026, 8, 24, 11),
  },
  {
    id: 'e3',
    title: 'Depot meeting',
    start: new Date(2026, 8, 25, 10),
    end: new Date(2026, 8, 25, 12),
  },
];

function SchedulerNavDemo() {
  const [view, setView] = useState<'day' | 'week' | 'month'>('week');
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <Row gap={8} wrap>
        {(['day', 'week', 'month'] as const).map((mode) => (
          <Button
            key={mode}
            size="sm"
            variant={view === mode ? 'filled' : 'outlined'}
            onClick={() => setView(mode)}
          >
            {mode}
          </Button>
        ))}
      </Row>
      <Scheduler
        view={view}
        date={new Date(2026, 8, 25)}
        data={SCHED_EVENTS}
        onDateChange={(date) =>
          log(`onDateChange: ${date.toLocaleDateString()}`)
        }
      />
      <EventLog
        events={events}
        emptyText="Use ‹ › to navigate — every jump logs onDateChange."
      />
    </Stack>
  );
}

function SchedulerEventsDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <Scheduler
        view="week"
        date={new Date(2026, 8, 25)}
        data={SCHED_EVENTS}
        onEventClick={({ event }) => log(`event click: ${event.title}`)}
        onSlotClick={({ date }) => log(`slot click: ${date.toLocaleString()}`)}
      />
      <EventLog
        events={events}
        emptyText="Click an event or an empty slot to log its callback."
      />
    </Stack>
  );
}

function DataListStatesDemo() {
  const [loading, setLoading] = useState(true);
  return (
    <Stack orientation="vertical" gap={12}>
      <Row gap={8} wrap>
        <Button size="sm" onClick={() => setLoading((prev) => !prev)}>
          {loading ? 'Finish loading' : 'Simulate loading'}
        </Button>
      </Row>
      <DataList
        data={[]}
        ariaLabel="Shift roster"
        isLoading={loading}
        loadingTemplate={<Text textStyle="Body1">Loading the roster…</Text>}
        emptyMessage="No crew on shift"
      />
    </Stack>
  );
}

function DataFilterResultDemo() {
  const [events, setEvents] = useState<string[]>([]);
  const [matched, setMatched] = useState<readonly Crew[]>(CREWS);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <DataFilter<Crew>
        properties={FILTER_PROPERTIES}
        items={CREWS}
        viewChanged={(items) => {
          setMatched(items);
          log(`${items.length} of ${CREWS.length} rows match`);
        }}
      />
      <Text textStyle="Body2" className="dx-text-muted">
        Matching: {matched.map((c) => c.name).join(', ') || '(none)'}
      </Text>
      <EventLog
        events={events}
        emptyText="Add or edit a condition above to log viewChanged."
      />
    </Stack>
  );
}

function QRCodeErrorDemo() {
  const [value, setValue] = useState('https://1km.app/zone/north');
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  const tooLong = value.length > 4000;
  return (
    <Stack orientation="vertical" gap={12}>
      <Row gap={8} wrap>
        <Button
          size="sm"
          variant={tooLong ? 'outlined' : 'filled'}
          onClick={() => setValue('https://1km.app/zone/north')}
        >
          Short value
        </Button>
        <Button
          size="sm"
          variant={tooLong ? 'filled' : 'outlined'}
          onClick={() => setValue('x'.repeat(4000))}
        >
          Over-capacity value
        </Button>
      </Row>
      <QRCode value={value} onError={(message) => log(message)} />
      <EventLog
        events={events}
        emptyText="Switch to the over-capacity value to log onError."
      />
    </Stack>
  );
}

export function DataDemos({ slug }: { slug: string }) {
  switch (slug) {
    case 'datagrid':
      return (
        <DemoPage
          title="DataGrid"
          description="Sortable, pageable grid with typed columns."
          sections={[
            {
              id: 'datagrid-basic',
              content: (
                <DataGrid<Person>
                  ariaLabel="People"
                  columns={[
                    { property: 'name', title: 'Name', sortable: true },
                    { property: 'zone', title: 'Zone' },
                  ]}
                  rows={PEOPLE}
                  rowKey={(r) => r.id}
                  allowSorting
                  allowPaging
                  pageSize={10}
                />
              ),
            },
            {
              id: 'datagrid-features',
              title: 'Aggregates, grouping & CSV',
              description:
                'Footer sums run over the full filtered set; Export CSV downloads the visible columns.',
              content: (
                <DataGrid<Route>
                  ariaLabel="Routes"
                  columns={ROUTE_COLUMNS}
                  rows={ROUTES}
                  rowKey={(r) => r.id}
                  allowSorting
                  allowGrouping
                  allowPaging
                  pageSize={10}
                  showExportButton
                  aggregates={[
                    { property: 'amount', type: 'sum', title: 'Total' },
                    {
                      property: 'amount',
                      type: 'avg',
                      title: 'Avg',
                      format: 'N1',
                    },
                    { property: 'name', type: 'count', title: 'Rows' },
                  ]}
                />
              ),
            },
            {
              id: 'datagrid-virtual',
              title: 'Row virtualization',
              description:
                '500 rows; only the visible window (plus overscan) stays in the DOM.',
              content: (
                <DataGrid<Route>
                  columns={ROUTE_COLUMNS}
                  rows={ROUTES}
                  rowKey={(r) => r.id}
                  allowSorting
                  virtualize
                  virtualHeight={360}
                  virtualRowHeight={40}
                />
              ),
            },
            {
              id: 'datagrid-server',
              title: 'Server mode (onRangeChange)',
              description:
                'The grid reports start/count/sorts/filters; the mock server answers with the window.',
              content: <ServerGridDemo />,
            },
          ]}
        />
      );
    case 'datalist':
      return (
        <DemoPage
          title="DataList"
          description="Templated list with built-in pagination — an aria-live polite pager summary keeps assistive tech up to date while you page."
          sections={[
            {
              id: 'datalist-basic',
              title: 'Basic',
              description:
                'itemTemplate renders each row; the wrapper carries the ariaLabel (default "Data list").',
              content: (
                <DataList<Person>
                  data={PEOPLE}
                  itemTemplate={(p) => (
                    <Text>
                      {p.name} — {p.zone}
                    </Text>
                  )}
                />
              ),
            },
            {
              id: 'datalist-paging',
              title: 'Pagination & page size',
              description:
                'pageSize 5 over 23 rows — the pager exposes First/Previous/pages/Next/Last buttons with aria-current="page", an aria-live="polite" "Page x of y" summary and an "Items per page" select (tests: pages through items via the pager, resets to page 1 when page size changes).',
              content: (
                <DataList<Route>
                  data={ROUTES.slice(0, 23)}
                  pageSize={5}
                  ariaLabel="Route pages"
                  itemTemplate={(r) => (
                    <Text>
                      {r.name} — {r.zone} ({r.amount})
                    </Text>
                  )}
                />
              ),
            },
            {
              id: 'datalist-states',
              title: 'Empty & loading',
              description:
                'emptyMessage/emptyTemplate render for empty data, and isLoading swaps in loadingTemplate (tests: shows the empty message when data is empty, renders the loading template while loading). The toggle is manual so the state stays deterministic.',
              content: <DataListStatesDemo />,
            },
          ]}
        />
      );
    case 'tree':
      return (
        <DemoPage
          title="Tree"
          description="Expandable hierarchy with single or multiple selection, cascading checkboxes, lazy loading and a full roving-tabindex keyboard model."
          sections={[
            {
              id: 'tree-basic',
              title: 'Expansion & events',
              description:
                'role="tree" with treeitem nodes carrying aria-expanded/selected/level/setsize/posinset (test: renders treeitems with correct a11y attributes); caret buttons toggle expansion and every change lands in the log (tests: expand/collapse via caret button with aria-label and aria-expanded).',
              content: <TreeBasicDemo />,
            },
            {
              id: 'tree-selection',
              title: 'Selection modes',
              description:
                'single vs multiple — multiple adds aria-multiselectable to the tree (test: sets aria-multiselectable for multiple selectionMode) and onChange reports the whole selectedItems set; disabled nodes refuse selection (test: disabled nodes have aria-disabled and not selectable).',
              content: <TreeSelectionDemo />,
            },
            {
              id: 'tree-checkboxes',
              title: 'Checkboxes',
              description:
                'allowCheckBoxes adds per-node checkboxes that cascade to descendants and mark partial parents indeterminate (tests: checks a parent and cascades to descendants, marks partially checked parents indeterminate); onCheckedChange receives the key set.',
              content: <TreeCheckboxDemo />,
            },
            {
              id: 'tree-lazy',
              title: 'Lazy loading',
              description:
                'A childless node is expandable; loadChildData resolves its children while the loading row reports aria-busy (test: lazy loadChildData expands async with loading indicator and aria-busy).',
              content: <TreeLazyDemo />,
            },
            {
              id: 'tree-keyboard',
              title: 'Keyboard',
              content: <KeyboardTable bindings={TREE_KEYS} />,
            },
          ]}
        />
      );
    case 'picklist':
      return (
        <DemoPage
          title="PickList"
          description="Transfer items between two multi-select listboxes — six labelled move buttons, keyboard operation and a live transfer log."
          sections={[
            {
              id: 'picklist-basic',
              title: 'Transfers & events',
              description:
                'Both sides render role="listbox" aria-multiselectable with option children; the move buttons carry descriptive aria-labels and turn aria-disabled with no selection (tests: renders source and target listboxes with aria-labels and options, buttons have aria-labels and aria-disabled when no selection); every transfer reports its direction through onMove (test: move selected to target moves items and fires callbacks).',
              content: <PickListDemo />,
            },
            {
              id: 'picklist-disabled',
              title: 'Disabled items',
              description:
                'disabled options render aria-disabled, never select, and stay put when everything else moves — "Move all" skips them (tests: disabled items have aria-disabled and not selectable, disabled items not moved on move selected).',
              content: (
                <PickList
                  ariaLabel="Disabled item demo"
                  source={[
                    { id: 'd1', text: 'Kept (disabled)', disabled: true },
                    { id: 'd2', text: 'Movable' },
                  ]}
                  target={[{ id: 'd3', text: 'Already transferred' }]}
                />
              ),
            },
            {
              id: 'picklist-keyboard',
              title: 'Keyboard',
              content: <KeyboardTable bindings={PICKLIST_KEYS} />,
            },
          ]}
        />
      );
    case 'pivot':
      return (
        <DemoPage
          title="Pivot"
          description="Row and column grouping over flat records with aggregate cells and automatic totals."
          sections={[
            {
              id: 'pivot-basic',
              title: 'Row groups & totals',
              description:
                'A role="grid" table with scope-col/row headers, a Total column and a Total row (test: renders grid with totals); cells carry the formatted value in title (test: aggregates Sum correctly). Cells render the first aggregate — Sum here — with Average/Count/Min/Max also supported (test: supports Count and Average).',
              content: (
                <Pivot
                  data={SALES.map((s) => ({
                    zone: s.zone,
                    amount: s.amount,
                  }))}
                  rowFields={[{ property: 'zone', title: 'Zone' }]}
                  aggregateFields={[
                    { property: 'amount', title: 'Total', aggregate: 'Sum' },
                  ]}
                />
              ),
            },
            {
              id: 'pivot-columns',
              title: 'Column fields',
              description:
                'columnFields spread a second dimension across the header — zones down the side, quarters across the top, totals on both axes.',
              content: (
                <Pivot
                  ariaLabel="Zone by quarter"
                  data={PIVOT_SALES}
                  rowFields={[{ property: 'zone', title: 'Zone' }]}
                  columnFields={[{ property: 'quarter', title: 'Quarter' }]}
                  aggregateFields={[
                    { property: 'amount', title: 'Total', aggregate: 'Sum' },
                  ]}
                />
              ),
            },
            {
              id: 'pivot-chips',
              title: 'Field chips',
              description:
                'Each field renders a removable chip; removal fires onFieldsChange and the parent must feed the returned arrays back — this demo is fully controlled (test: removes a row field via chip).',
              content: <PivotFieldsDemo />,
            },
          ]}
        />
      );
    case 'chart':
      return (
        <DemoPage
          title="Chart"
          description="Category series with typed data points."
          sections={[
            {
              id: 'chart-basic',
              title: 'Column',
              content: (
                <Chart
                  width={560}
                  height={240}
                  series={[
                    {
                      type: 'column',
                      data: SALES,
                      categoryProperty: 'zone',
                      valueProperty: 'amount',
                      title: 'Sales',
                    },
                  ]}
                />
              ),
            },
            {
              id: 'chart-stacked',
              title: 'Stacked columns',
              description: 'Shared stack name accumulates per category.',
              content: (
                <Chart
                  width={560}
                  height={240}
                  series={[
                    {
                      type: 'column',
                      stack: 'q',
                      title: 'Closed',
                      data: [
                        { zone: 'North', v: 70 },
                        { zone: 'South', v: 50 },
                        { zone: 'East', v: 40 },
                      ],
                      categoryProperty: 'zone',
                      valueProperty: 'v',
                    },
                    {
                      type: 'column',
                      stack: 'q',
                      title: 'Open',
                      data: [
                        { zone: 'North', v: 30 },
                        { zone: 'South', v: 40 },
                        { zone: 'East', v: 25 },
                      ],
                      categoryProperty: 'zone',
                      valueProperty: 'v',
                    },
                  ]}
                />
              ),
            },
            {
              id: 'chart-gauge',
              title: 'Gauge',
              description: 'Single metric against the value axis range.',
              content: (
                <Chart
                  width={320}
                  height={240}
                  valueAxis={{ max: 100 }}
                  series={[
                    {
                      type: 'gauge',
                      title: 'Capacity',
                      data: [{ q: 'Q1', v: 65 }],
                      categoryProperty: 'q',
                      valueProperty: 'v',
                    },
                  ]}
                />
              ),
            },
            {
              id: 'chart-radar',
              title: 'Radar (spider)',
              content: (
                <Chart
                  width={420}
                  height={300}
                  series={[
                    {
                      type: 'radar',
                      title: 'Engine A',
                      data: [
                        { s: 'Speed', v: 8 },
                        { s: 'Power', v: 6 },
                        { s: 'Control', v: 9 },
                        { s: 'Range', v: 5 },
                      ],
                      categoryProperty: 's',
                      valueProperty: 'v',
                    },
                    {
                      type: 'radar',
                      title: 'Engine B',
                      data: [
                        { s: 'Speed', v: 5 },
                        { s: 'Power', v: 9 },
                        { s: 'Control', v: 6 },
                        { s: 'Range', v: 8 },
                      ],
                      categoryProperty: 's',
                      valueProperty: 'v',
                    },
                  ]}
                />
              ),
            },
            {
              id: 'chart-funnel',
              title: 'Funnel',
              content: (
                <Chart
                  width={560}
                  height={260}
                  series={[
                    {
                      type: 'funnel',
                      title: 'Pipeline',
                      data: [
                        { stage: 'Visits', v: 1200 },
                        { stage: 'Signups', v: 480 },
                        { stage: 'Trials', v: 210 },
                        { stage: 'Paid', v: 95 },
                      ],
                      categoryProperty: 'stage',
                      valueProperty: 'v',
                    },
                  ]}
                />
              ),
            },
            {
              id: 'chart-heatmap',
              title: 'Heatmap',
              description: 'rowProperty drives the second (y) dimension.',
              content: (
                <Chart
                  width={560}
                  height={240}
                  series={[
                    {
                      type: 'heatmap',
                      title: 'Requests',
                      rowProperty: 'region',
                      data: [
                        { region: 'EU', day: 'Mon', v: 12 },
                        { region: 'EU', day: 'Tue', v: 30 },
                        { region: 'EU', day: 'Wed', v: 24 },
                        { region: 'US', day: 'Mon', v: 28 },
                        { region: 'US', day: 'Tue', v: 9 },
                        { region: 'US', day: 'Wed', v: 17 },
                      ],
                      categoryProperty: 'day',
                      valueProperty: 'v',
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      );
    case 'gantt':
      return (
        <DemoPage
          title="Gantt"
          description="Task rows on a time scale — each bar is a focusable button whose accessible name carries the date range and progress."
          sections={[
            {
              id: 'gantt-basic',
              title: 'Tasks & progress',
              description:
                'role="grid" with aria-rowcount; every bar renders role="button" with aria-label "name start - end, N% complete", aria-pressed for the selected task and Enter/Space activation (tests: renders grid and tasks, calls onTaskClick, handles keyboard). The log captures onTaskClick — the only callback that fires.',
              content: <GanttTasksDemo />,
            },
            {
              id: 'gantt-views',
              title: 'Day & week views',
              description:
                'view switches the timeline header granularity (day vs week) — the header column reads "Timeline (day)" / "Timeline (week)".',
              content: <GanttViewDemo />,
            },
            {
              id: 'gantt-keyboard',
              title: 'Keyboard',
              content: <KeyboardTable bindings={GANTT_KEYS} />,
            },
          ]}
        />
      );
    case 'scheduler':
      return (
        <DemoPage
          title="Scheduler"
          description="Day, week and month appointment views with date navigation, clickable events and slots, and resource lanes."
          sections={[
            {
              id: 'scheduler-navigation',
              title: 'Views & navigation',
              description:
                'view picks day/week/month; the ‹ › header buttons jump ±7 days and fire onDateChange every time (test: navigates dates) — controlled here through the date prop.',
              content: <SchedulerNavDemo />,
            },
            {
              id: 'scheduler-events',
              title: 'Events & slots',
              description:
                'Appointments render native buttons — "title hh:mm - hh:mm" accessible names, Enter/Space activation — firing onEventClick; clicking a day column or hour slot fires onSlotClick (tests: calls onEventClick, calls onSlotClick).',
              content: <SchedulerEventsDemo />,
            },
            {
              id: 'scheduler-resources',
              title: 'Resources',
              description:
                'resources render a labelled lane per resource above the grid, using the same labelled presentation-row pattern as the day columns.',
              content: (
                <Scheduler
                  view="week"
                  date={new Date(2026, 8, 25)}
                  data={SCHED_EVENTS}
                  resources={SCHED_RESOURCES}
                />
              ),
            },
          ]}
        />
      );
    case 'timeline':
      return (
        <DemoPage
          title="Timeline"
          description="Chronological list with decorative markers — a semantic ordered list AT reads in order."
          sections={[
            {
              id: 'timeline-basic',
              title: 'Basic',
              description:
                'An ordered list with aria-label (default "Timeline"); each item pairs a label with optional rich content and the marker dots render aria-hidden (tests: renders list with labels, renders markers as decorative).',
              content: (
                <Timeline
                  items={[
                    { label: '08:00', content: <Text>Yard opens</Text> },
                    { label: '09:30', content: <Text>First dispatch</Text> },
                    { label: '11:00', content: <Text>Second wave</Text> },
                  ]}
                />
              ),
            },
            {
              id: 'timeline-reverse',
              title: 'Reverse',
              description:
                'reverse flips the rendered DOM order for newest-first displays (test: reverse flips order in DOM).',
              content: (
                <Timeline
                  reverse
                  ariaLabel="Reversed timeline"
                  items={[
                    { label: '08:00', content: <Text>Yard opens</Text> },
                    { label: '09:30', content: <Text>First dispatch</Text> },
                    { label: '11:00', content: <Text>Second wave</Text> },
                  ]}
                />
              ),
            },
            {
              id: 'timeline-content',
              title: 'Rich content',
              description:
                'content accepts arbitrary nodes — headings-free markup keeps the list semantics while the content stays interactive-capable.',
              content: (
                <Timeline
                  ariaLabel="Shift log"
                  items={[
                    {
                      label: 'Shift start',
                      content: (
                        <Text textStyle="Body2" className="dx-text-muted">
                          2 drivers, 1 loader checked in — trucks fuelled.
                        </Text>
                      ),
                    },
                    {
                      label: 'Incident',
                      content: (
                        <Text textStyle="Body2">
                          Route B delayed 20 minutes; rescheduled dispatch.
                        </Text>
                      ),
                    },
                    {
                      label: 'Shift end',
                      content: (
                        <Text textStyle="Body2" className="dx-text-muted">
                          All vehicles returned; yard sealed.
                        </Text>
                      ),
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      );
    case 'datafilter':
      return (
        <DemoPage
          title="DataFilter"
          description="Composable property filters — typed operators per field, second conditions, and a live “N of M” result summary."
          sections={[
            {
              id: 'datafilter-basic',
              title: 'Conditions',
              description:
                'Rows add/remove inside a role="group" (tests: adds and removes rows, cannot remove the last remaining row); each row is property + operator + value editors with an aria-live polite "X of Y" summary when items are bound (test: summary reports the applied count).',
              content: (
                <DataFilter<Crew>
                  properties={[{ name: 'zone', title: 'Zone', type: 'string' }]}
                  items={CREWS}
                />
              ),
            },
            {
              id: 'datafilter-types',
              title: 'Property types',
              description:
                'string, number, boolean and enum fields each get their default operator and editor — string defaults to Contains, everything else to Equals (tests: default operator follows property type, boolean properties render a true/false select).',
              content: (
                <DataFilter<Crew>
                  properties={FILTER_PROPERTIES}
                  items={CREWS}
                />
              ),
            },
            {
              id: 'datafilter-result',
              title: 'Filtered result',
              description:
                'viewChanged pushes the filtered array out on every change — the log and the matching names below show exactly what the filter admits (test: viewChanged fires with the filtered result on change).',
              content: <DataFilterResultDemo />,
            },
          ]}
        />
      );
    case 'qrcode':
      return (
        <DemoPage
          title="QRCode"
          description="Spec-compliant QR symbols as labelled SVG or canvas — sizes, error-correction levels and honest failure reporting."
          sections={[
            {
              id: 'qrcode-basic',
              title: 'Basic',
              description:
                'Renders role="img" with a default aria-label of "QR code for {value}" and the payload in data-value (test: renders svg with role img and default label); labels are overridable via ariaLabel.',
              content: <QRCode value="https://1km.app/zone/north" />,
            },
            {
              id: 'qrcode-sizes',
              title: 'Sizes & error correction',
              description:
                'size sets width/height in px (default 128); errorCorrection trades density for resilience — low/medium/quartile/high, medium by default (tests: supports custom label and size, grows the symbol for longer payloads, leaves the quiet zone empty).',
              content: (
                <Row gap={12} align="start" wrap>
                  <Stack orientation="vertical" gap={4} align="center">
                    <QRCode value="https://1km.app/zone/north" size={96} />
                    <Text textStyle="Caption" className="dx-text-muted">
                      96px
                    </Text>
                  </Stack>
                  <Stack orientation="vertical" gap={4} align="center">
                    <QRCode
                      value="https://1km.app/zone/north"
                      size={160}
                      errorCorrection="high"
                    />
                    <Text textStyle="Caption" className="dx-text-muted">
                      160px · high
                    </Text>
                  </Stack>
                  <Stack orientation="vertical" gap={4} align="center">
                    <QRCode
                      value="https://1km.app/zone/north"
                      size={160}
                      errorCorrection="low"
                    />
                    <Text textStyle="Caption" className="dx-text-muted">
                      160px · low
                    </Text>
                  </Stack>
                </Row>
              ),
            },
            {
              id: 'qrcode-render',
              title: 'SVG & canvas',
              description:
                'svg (default) stays crisp at any zoom; canvas repaints itself when the theme changes so bars always match the surface (test: renders a labelled canvas when render is canvas). Both carry role="img" and data-value.',
              content: (
                <Row gap={12} align="start" wrap>
                  <Stack orientation="vertical" gap={4} align="center">
                    <QRCode value="https://1km.app/zone/south" size={144} />
                    <Text textStyle="Caption" className="dx-text-muted">
                      render="svg"
                    </Text>
                  </Stack>
                  <Stack orientation="vertical" gap={4} align="center">
                    <QRCode
                      value="https://1km.app/zone/south"
                      size={144}
                      render="canvas"
                    />
                    <Text textStyle="Caption" className="dx-text-muted">
                      render="canvas"
                    </Text>
                  </Stack>
                </Row>
              ),
            },
            {
              id: 'qrcode-errors',
              title: 'Failure reporting',
              description:
                'A payload beyond version-40 capacity renders an accessible placeholder div (still role="img" with the label) and fires onError once per failure episode (test: renders an accessible placeholder and reports once when the payload exceeds capacity).',
              content: <QRCodeErrorDemo />,
            },
          ]}
        />
      );
    case 'barcode':
      return (
        <DemoPage
          title="Barcode"
          description="Code 128 barcodes as labelled SVG — fixed height, fluid width and an optional human-readable value."
          sections={[
            {
              id: 'barcode-basic',
              title: 'Basic',
              description:
                'Renders role="img" with a default aria-label of "Barcode {value}" and the payload in data-value (test: renders svg with role img and default label); encoding is deterministic per value (test).',
              content: <Barcode value="1KM-2026-0001" />,
            },
            {
              id: 'barcode-sizing',
              title: 'Sizing',
              description:
                'height sets the bar height in px (default 60); width fills the container — the viewBox scales with preserveAspectRatio="none".',
              content: (
                <Stack orientation="vertical" gap={12}>
                  <Barcode value="1KM-2026-0001" height={40} />
                  <Barcode value="1KM-2026-0001" height={80} />
                </Stack>
              ),
            },
            {
              id: 'barcode-value',
              title: 'Human-readable value',
              description:
                'showValue prints the payload under the bars (test: shows value when showValue); printable ASCII 32–126 encodes faithfully in Code 128 — anything else collapses to a placeholder pattern.',
              content: (
                <Stack orientation="vertical" gap={12}>
                  <Barcode value="1KM-2026-0001" showValue />
                  <Barcode value="1KM-2026-0001" />
                </Stack>
              ),
            },
          ]}
        />
      );
    case 'virtualgrid':
      return <VirtualGridDemos />;
    default:
      return (
        <DemoPage
          title="Table"
          description="Plain semantic table — keyed rows, scope=col headers, render slots and switchable grid lines."
          sections={[
            {
              id: 'table-basic',
              title: 'Basic',
              description:
                'Native thead/tbody with th scope="col" headers (test: renders a caption and scope=col headers); rowKey keeps rows stable across renders (test: renders headers and cell content).',
              content: (
                <Table<Person>
                  columns={[
                    { key: 'name', header: 'Name' },
                    { key: 'zone', header: 'Zone' },
                  ]}
                  rows={PEOPLE}
                  rowKey={(r) => r.id}
                />
              ),
            },
            {
              id: 'table-cells',
              title: 'Cell rendering & alignment',
              description:
                'Column.render customizes cell content and align sets text-align per column (test: uses the render function when provided).',
              content: (
                <Table<Route>
                  columns={[
                    { key: 'name', header: 'Route' },
                    { key: 'zone', header: 'Zone', align: 'center' },
                    {
                      key: 'amount',
                      header: 'Amount',
                      align: 'end',
                      render: (r) => `${r.amount.toLocaleString()} kg`,
                    },
                  ]}
                  rows={ROUTES.slice(0, 5)}
                  rowKey={(r) => r.id}
                />
              ),
            },
            {
              id: 'table-gridlines',
              title: 'Grid lines & caption',
              description:
                'gridLines switches the rule pattern (default/both/none/horizontal/vertical — test: switches grid line variants) and caption renders a real <caption> (test: renders a caption and scope=col headers); alternating rows are on by default (test).',
              content: (
                <Stack orientation="vertical" gap={12}>
                  <Table<Route>
                    caption="Routes — gridLines both"
                    gridLines="both"
                    columns={[
                      { key: 'name', header: 'Name' },
                      { key: 'zone', header: 'Zone' },
                    ]}
                    rows={ROUTES.slice(0, 4)}
                    rowKey={(r) => r.id}
                  />
                  <Table<Route>
                    caption="Routes — gridLines none, no alternating rows"
                    gridLines="none"
                    allowAlternatingRows={false}
                    columns={[
                      { key: 'name', header: 'Name' },
                      { key: 'zone', header: 'Zone' },
                    ]}
                    rows={ROUTES.slice(0, 4)}
                    rowKey={(r) => r.id}
                  />
                </Stack>
              ),
            },
            {
              id: 'table-empty',
              title: 'Empty state',
              description:
                'The empty slot renders below an empty table (test: shows the empty slot when there are no rows); visible={false} removes the table entirely (test: renders nothing when visible is false).',
              content: (
                <Table<Route>
                  columns={[
                    { key: 'name', header: 'Name' },
                    { key: 'zone', header: 'Zone' },
                  ]}
                  rows={[]}
                  rowKey={(r) => r.id}
                  empty={
                    <Text textStyle="Body2">
                      No routes match the current view.
                    </Text>
                  }
                />
              ),
            },
          ]}
        />
      );
  }
}
