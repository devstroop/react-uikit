import {
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
import { DemoPage } from './demo-page';

type Person = { id: string; name: string; zone: string };

const PEOPLE: Person[] = [
  { id: 'a', name: 'Ada', zone: 'North' },
  { id: 'b', name: 'Grace', zone: 'South' },
];

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
