import { useState } from 'react';
import {
  applyGridState,
  Barcode,
  Chart,
  DataFilter,
  DataGrid,
  DataList,
  Gantt,
  PickList,
  Pivot,
  QRCode,
  Scheduler,
  Table,
  Text,
  Timeline,
  Tree,
} from '../../lib/main';
import type { GridRange } from '../../lib/main';
import { DemoPage } from './demo-page';

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
          description="Free-form list with an item template."
          sections={[
            {
              id: 'datalist-basic',
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
          ]}
        />
      );
    case 'tree':
      return (
        <DemoPage
          title="Tree"
          description="Expandable hierarchy with controlled expansion."
          sections={[
            {
              id: 'tree-basic',
              content: (
                <Tree
                  data={[
                    {
                      id: 'root',
                      text: 'Zones',
                      expanded: true,
                      children: [
                        { id: 'n', text: 'North' },
                        { id: 's', text: 'South' },
                      ],
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      );
    case 'picklist':
      return (
        <DemoPage
          title="PickList"
          description="Move items between source and target."
          sections={[
            {
              id: 'picklist-basic',
              content: (
                <PickList
                  source={[
                    { id: 'a', text: 'Alpha' },
                    { id: 'b', text: 'Beta' },
                  ]}
                />
              ),
            },
          ]}
        />
      );
    case 'pivot':
      return (
        <DemoPage
          title="Pivot"
          description="Row grouping with aggregate fields."
          sections={[
            {
              id: 'pivot-basic',
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
          description="Task bars with progress over a time scale."
          sections={[
            {
              id: 'gantt-basic',
              content: (
                <Gantt
                  tasks={[
                    {
                      id: 't1',
                      name: 'Launch',
                      start: new Date(2026, 8, 1),
                      end: new Date(2026, 8, 10),
                      progress: 50,
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      );
    case 'scheduler':
      return (
        <DemoPage
          title="Scheduler"
          description="Week view with timed appointments."
          sections={[
            {
              id: 'scheduler-basic',
              content: (
                <Scheduler
                  view="week"
                  date={new Date(2026, 8, 25)}
                  data={[
                    {
                      id: 'e1',
                      title: 'Dispatch window',
                      start: new Date(2026, 8, 25, 9),
                      end: new Date(2026, 8, 25, 11),
                    },
                  ]}
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
          description="Labeled events in chronological order."
          sections={[
            {
              id: 'timeline-basic',
              content: (
                <Timeline
                  items={[
                    { label: '08:00', content: <Text>Yard opens</Text> },
                    { label: '09:30', content: <Text>First dispatch</Text> },
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
          description="Property-based filtering over a collection."
          sections={[
            {
              id: 'datafilter-basic',
              content: (
                <DataFilter<Person>
                  properties={[{ name: 'zone', title: 'Zone', type: 'string' }]}
                  items={PEOPLE}
                />
              ),
            },
          ]}
        />
      );
    case 'qrcode':
      return (
        <DemoPage
          title="QRCode"
          sections={[
            {
              id: 'qrcode-basic',
              content: <QRCode value="https://1km.app/zone/north" />,
            },
          ]}
        />
      );
    case 'barcode':
      return (
        <DemoPage
          title="Barcode"
          sections={[
            {
              id: 'barcode-basic',
              content: <Barcode value="1KM-2026-0001" />,
            },
          ]}
        />
      );
    default:
      return (
        <DemoPage
          title="Table"
          description="Plain table with keyed rows."
          sections={[
            {
              id: 'table-basic',
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
          ]}
        />
      );
  }
}
