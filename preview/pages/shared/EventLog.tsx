import { Text } from '../../../lib/main';

/**
 * Shared demo event console (Radzen demo `EventConsole` parity): a live
 * append-only log under interactive demos so every bound example shows
 * its real event stream instead of dead markup.
 */
export function EventLog({
  events,
  emptyText = 'Click a component to log events.',
}: {
  events: readonly string[];
  /** Copy shown before the first event lands. */
  emptyText?: string;
}) {
  return (
    <div
      aria-label="Event log"
      // A scrollable region must be reachable by keyboard (axe
      // scrollable-region-focusable) — once events overflow maxHeight
      // the container scrolls; empty logs don't scroll, so no tab stop.
      tabIndex={events.length > 0 ? 0 : undefined}
      style={{ maxHeight: 160, overflowY: 'auto', marginTop: 8 }}
    >
      {events.length === 0 ? (
        <Text textStyle="Body2" className="dx-text-muted">
          {emptyText}
        </Text>
      ) : (
        events.map((e, i) => (
          <Text key={`${i}-${e}`} textStyle="Body2">
            {e}
          </Text>
        ))
      )}
    </div>
  );
}
