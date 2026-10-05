import { Table, Text } from '../../../lib/main';

export interface KeyboardBinding {
  /** Key combination, e.g. "Enter" or "ArrowDown". */
  keys: string;
  /** What the combination does in this component. */
  action: string;
}

/**
 * Shared keyboard-navigation table (Radzen demo `KeyboardNavigationDataGrid`
 * parity): the canonical last section of every interactive demo page, so
 * key bindings stay discoverable and consistent across components.
 */
export function KeyboardTable({
  bindings,
}: {
  bindings: readonly KeyboardBinding[];
}) {
  return (
    <>
      <Text textStyle="body1" className="dx-mb-4">
        The component can be operated with the following keys:
      </Text>
      <Table
        caption="Keyboard navigation"
        columns={[
          { key: 'keys', header: 'Key' },
          { key: 'action', header: 'Action' },
        ]}
        rows={bindings}
        rowKey={(row) => row.keys}
      />
    </>
  );
}
