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
import { DemoSection } from './section';

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
        <DemoSection title="DataGrid">
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
        </DemoSection>
      );
    case 'datalist':
      return (
        <DemoSection title="DataList">
          <DataList<Person>
            data={PEOPLE}
            itemTemplate={(p) => (
              <Text>
                {p.name} — {p.zone}
              </Text>
            )}
          />
        </DemoSection>
      );
    case 'tree':
      return (
        <DemoSection title="Tree">
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
        </DemoSection>
      );
    case 'picklist':
      return (
        <DemoSection title="PickList">
          <PickList
            source={[
              { id: 'a', text: 'Alpha' },
              { id: 'b', text: 'Beta' },
            ]}
          />
        </DemoSection>
      );
    case 'pivot':
      return (
        <DemoSection title="Pivot">
          <Pivot
            data={SALES.map((s) => ({ zone: s.zone, amount: s.amount }))}
            rowFields={[{ property: 'zone', title: 'Zone' }]}
            aggregateFields={[
              { property: 'amount', title: 'Total', aggregate: 'Sum' },
            ]}
          />
        </DemoSection>
      );
    case 'chart':
      return (
        <DemoSection title="Chart">
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
        </DemoSection>
      );
    case 'gantt':
      return (
        <DemoSection title="Gantt">
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
        </DemoSection>
      );
    case 'scheduler':
      return (
        <DemoSection title="Scheduler">
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
        </DemoSection>
      );
    case 'timeline':
      return (
        <DemoSection title="Timeline">
          <Timeline
            items={[
              { label: '08:00', content: <Text>Yard opens</Text> },
              { label: '09:30', content: <Text>First dispatch</Text> },
            ]}
          />
        </DemoSection>
      );
    case 'datafilter':
      return (
        <DemoSection title="DataFilter">
          <DataFilter<Person>
            properties={[{ name: 'zone', title: 'Zone', type: 'string' }]}
            items={PEOPLE}
          />
        </DemoSection>
      );
    case 'qrcode':
      return (
        <DemoSection title="QRCode">
          <QRCode value="https://1km.app/zone/north" />
        </DemoSection>
      );
    case 'barcode':
      return (
        <DemoSection title="Barcode">
          <Barcode value="1KM-2026-0001" />
        </DemoSection>
      );
    default:
      return (
        <DemoSection title="Table">
          <Table<Person>
            columns={[
              { key: 'name', header: 'Name' },
              { key: 'zone', header: 'Zone' },
            ]}
            rows={PEOPLE}
            rowKey={(r) => r.id}
          />
        </DemoSection>
      );
  }
}
