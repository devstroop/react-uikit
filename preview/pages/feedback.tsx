import { useState } from 'react';
import {
  Alert,
  Button,
  Checkbox,
  Dialog,
  DialogProvider,
  EmptyState,
  Icon,
  Progress,
  Row,
  Skeleton,
  Slider,
  Stack,
  Text,
  ToastProvider,
  Tooltip,
  useDialog,
  useToast,
} from '../../lib/main';
import { DemoPage } from './demo-page';
import { EventLog } from './shared/EventLog';
import { KeyboardTable, type KeyboardBinding } from './shared/KeyboardTable';

// ---------------------------------------------------------------------------
// Alert
// ---------------------------------------------------------------------------

const ALERT_SEVERITIES = [
  'info',
  'success',
  'warning',
  'danger',
  'primary',
  'secondary',
] as const;
const ALERT_VARIANTS = ['filled', 'flat', 'outlined', 'text'] as const;
const ALERT_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

const ALERT_KEYS: KeyboardBinding[] = [
  { keys: 'Tab', action: 'Move focus to the Dismiss button' },
  {
    keys: 'Enter / Space',
    action:
      'Dismiss — uncontrolled unmounts the banner, controlled fires onVisibleChange(false) instead (tests)',
  },
];

function AlertDismissDemo() {
  const [visible, setVisible] = useState(true);
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <Stack orientation="vertical" gap={8}>
        <Text textStyle="Body2" className="dx-text-muted">
          Uncontrolled — dismissal latches and the alert unmounts.
        </Text>
        <Alert
          severity="warning"
          title="Uncontrolled alert"
          onDismiss={() => log('uncontrolled: onDismiss')}
        >
          Press the × to remove it for good.
        </Alert>
      </Stack>
      <Stack orientation="vertical" gap={8}>
        <Text textStyle="Body2" className="dx-text-muted">
          Controlled visible — stays mounted and notifies instead, so it can be
          shown again.
        </Text>
        <Alert
          severity="info"
          title="Controlled alert"
          visible={visible}
          onVisibleChange={(next) =>
            log(`controlled: onVisibleChange(${next})`)
          }
          onDismiss={() => log('controlled: onDismiss')}
        >
          Toggle it back with the buttons below.
        </Alert>
        <Row gap={8} wrap>
          <Button size="sm" onClick={() => setVisible(true)}>
            Show
          </Button>
          <Button
            size="sm"
            variant="outlined"
            onClick={() => setVisible(false)}
          >
            Hide
          </Button>
        </Row>
      </Stack>
      <EventLog
        events={events}
        emptyText="Dismiss or toggle an alert to log its callbacks."
      />
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Progress
// ---------------------------------------------------------------------------

const PROGRESS_TIERS = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
const PROGRESS_TONES = ['primary', 'success', 'warning', 'danger'] as const;

function ProgressValueDemo() {
  const [upload, setUpload] = useState(40);
  return (
    <Stack orientation="vertical" gap={12}>
      <Slider
        label="Upload progress"
        value={upload}
        onChange={(next) => setUpload(next as number)}
      />
      <Progress value={upload} aria-label="Upload progress" />
      <Text textStyle="Body2" className="dx-text-muted">
        value={upload} — aria-valuenow follows the slider (test: renders a
        progressbar with aria values; values clamp to max).
      </Text>
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Skeleton
// ---------------------------------------------------------------------------

function SkeletonLoadDemo() {
  const [loading, setLoading] = useState(true);
  return (
    <Stack orientation="vertical" gap={12}>
      <div aria-busy={loading} style={{ minHeight: 96 }}>
        {loading ? (
          <Stack orientation="vertical" gap={8}>
            <Row align="center" gap={12}>
              <Skeleton variant="circle" width={40} height={40} />
              <Skeleton width="45%" />
            </Row>
            <Skeleton variant="rect" width="100%" height={64} />
          </Stack>
        ) : (
          <Text textStyle="Body1">
            3 messages — release notes, digest, tips.
          </Text>
        )}
      </div>
      <Text textStyle="Body2" role="status" className="dx-text-muted">
        {loading ? 'Loading messages…' : '3 messages ready'}
      </Text>
      <Row gap={8} wrap>
        <Button size="sm" onClick={() => setLoading((prev) => !prev)}>
          {loading ? 'Finish loading' : 'Simulate reload'}
        </Button>
      </Row>
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// EmptyState
// ---------------------------------------------------------------------------

const EMPTYSTATE_KEYS: KeyboardBinding[] = [
  { keys: 'Tab', action: 'Focus the action button inside the empty state' },
  {
    keys: 'Enter / Space',
    action: 'Activate the action (test: keeps action content interactive)',
  },
];

function EmptyStateActionDemo() {
  const [events, setEvents] = useState<string[]>([]);
  return (
    <Stack orientation="vertical" gap={12}>
      <EmptyState
        icon={<Icon icon="mail" size="xl" />}
        title="Your inbox is empty"
        description="New messages will show up here."
        action={
          <Button
            onClick={() => setEvents((prev) => ['action clicked', ...prev])}
          >
            Refresh
          </Button>
        }
      />
      <EventLog
        events={events}
        emptyText="Use the action button to log a click."
      />
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Toast — one provider for the page; demos override position where needed
// ---------------------------------------------------------------------------

const TOAST_SEVERITIES = ['info', 'success', 'warning', 'danger'] as const;
const TOAST_POSITIONS = [
  ['top-left', 'Top left'],
  ['top-right', 'Top right'],
  ['bottom-left', 'Bottom left'],
  ['bottom-right', 'Bottom right'],
] as const;

const TOAST_KEYS: KeyboardBinding[] = [
  {
    keys: 'Tab',
    action:
      'Move focus into the toast — dismiss × and action buttons (dismissal itself is timer/mouse driven; Esc is not bound)',
  },
  {
    keys: 'Enter / Space',
    action: 'Activate the focused toast button; × and actions dismiss it',
  },
];

function ToastSeveritiesDemo() {
  const { toast } = useToast();
  return (
    <Row gap={8} wrap>
      {TOAST_SEVERITIES.map((severity) => (
        <Button
          key={severity}
          size="sm"
          onClick={() =>
            toast({
              severity,
              title: severity,
              description:
                severity === 'danger'
                  ? 'danger renders role=alert.'
                  : 'renders role=status.',
            })
          }
        >
          {severity}
        </Button>
      ))}
    </Row>
  );
}

function ToastPositionsDemo() {
  const { toast } = useToast();
  return (
    <Row gap={8} wrap>
      {TOAST_POSITIONS.map(([position, label]) => (
        <Button
          key={position}
          size="sm"
          variant="outlined"
          onClick={() =>
            toast({
              position,
              title: label,
              description: 'Per-toast position opens its own viewport.',
              durationMs: 2500,
            })
          }
        >
          {label}
        </Button>
      ))}
    </Row>
  );
}

function ToastDurationDemo() {
  const { toast } = useToast();
  return (
    <Row gap={8} wrap>
      <Button
        size="sm"
        onClick={() =>
          toast({
            title: '4 seconds',
            description: 'Default duration with a countdown bar.',
            showProgress: true,
          })
        }
      >
        4s + progress
      </Button>
      <Button
        size="sm"
        onClick={() =>
          toast({
            title: '2 seconds',
            description: 'durationMs 2000, auto-closes on timer expiry.',
            durationMs: 2000,
            showProgress: true,
          })
        }
      >
        2s
      </Button>
      <Button
        size="sm"
        onClick={() =>
          toast({
            title: 'Persistent',
            description:
              'durationMs 0 — never auto-closes; dismiss with ×. Hovering the viewport pauses every timer.',
            durationMs: 0,
          })
        }
      >
        Persistent
      </Button>
    </Row>
  );
}

function ToastActionsDemo() {
  const { toast } = useToast();
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <Row gap={8} wrap>
        <Button
          size="sm"
          onClick={() =>
            toast({
              title: 'Unsaved draft',
              description: 'action and cancel both dismiss on click.',
              durationMs: 0,
              action: {
                label: 'Publish',
                onClick: () => log('action: publish clicked'),
              },
              cancel: {
                label: 'Discard',
                onClick: () => log('action: discard clicked'),
              },
              onDismiss: () => log('dismissed via ×'),
            })
          }
        >
          Action & cancel
        </Button>
        <Button
          size="sm"
          onClick={() =>
            toast({
              title: 'Click anywhere on it',
              description: 'closeOnClick dismisses the whole body.',
              closeOnClick: true,
              onDismiss: () => log('dismissed via body click'),
            })
          }
        >
          Close on click
        </Button>
        <Button
          size="sm"
          onClick={() =>
            toast({
              title: 'Timer events',
              description: 'Auto-closes after 4s and reports both paths.',
              onAutoClose: () => log('auto-closed after durationMs'),
              onDismiss: () => log('dismissed via × before the timer'),
            })
          }
        >
          Timer events
        </Button>
      </Row>
      <EventLog
        events={events}
        emptyText="Fire a toast to log action, dismiss and auto-close events."
      />
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Dialog
// ---------------------------------------------------------------------------

function DialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Demo dialog"
        description="Content-sized, edge-to-edge scroll."
        footer={
          <Button variant="text" onClick={() => setOpen(false)}>
            Close
          </Button>
        }
      >
        <Text textStyle="Body1">Dialog body content.</Text>
      </Dialog>
    </>
  );
}

function DialogSizesDemo() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [width, setWidth] = useState<number | undefined>(undefined);
  const openWith = (next: { size?: 'sm' | 'md' | 'lg'; width?: number }) => {
    setSize(next.size ?? 'md');
    setWidth(next.width);
    setOpen(true);
  };
  return (
    <Stack orientation="vertical" gap={12}>
      <Row gap={8} wrap>
        {(['sm', 'md', 'lg'] as const).map((tier) => (
          <Button
            key={tier}
            size="sm"
            variant="outlined"
            onClick={() => openWith({ size: tier })}
          >
            size {tier}
          </Button>
        ))}
        <Button
          size="sm"
          variant="outlined"
          onClick={() => openWith({ width: 720 })}
        >
          width 720
        </Button>
      </Row>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        size={size}
        width={width}
        title={width ? 'Dialog width 720px' : `Dialog size ${size}`}
        description={
          width
            ? 'width overrides the size tier and turns off max-width.'
            : 'sm = 360px, md = 520px, lg = 720px max-width tokens.'
        }
        footer={
          <Button variant="text" onClick={() => setOpen(false)}>
            Close
          </Button>
        }
      >
        <Text textStyle="Body1">
          Focus enters on the Close button and returns here on close.
        </Text>
      </Dialog>
    </Stack>
  );
}

function DialogGuardsDemo() {
  const [open, setOpen] = useState(false);
  const [dirty, setDirty] = useState(true);
  const [closeOnEsc, setCloseOnEsc] = useState(true);
  const [closeOnOverlay, setCloseOnOverlay] = useState(true);
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <Row gap={12} wrap>
        <label htmlFor="dialog-guard-dirty">
          <Checkbox
            id="dialog-guard-dirty"
            checked={dirty}
            onChange={(e) => setDirty(e.target.checked)}
          />{' '}
          Unsaved changes
        </label>
        <label htmlFor="dialog-guard-esc">
          <Checkbox
            id="dialog-guard-esc"
            checked={closeOnEsc}
            onChange={(e) => setCloseOnEsc(e.target.checked)}
          />{' '}
          closeOnEsc
        </label>
        <label htmlFor="dialog-guard-overlay">
          <Checkbox
            id="dialog-guard-overlay"
            checked={closeOnOverlay}
            onChange={(e) => setCloseOnOverlay(e.target.checked)}
          />{' '}
          closeOnOverlayClick
        </label>
      </Row>
      <Row gap={8} wrap>
        <Button onClick={() => setOpen(true)}>Open guarded dialog</Button>
      </Row>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          log('onClose fired (gesture passed the guards)');
        }}
        canClose={() => !dirty}
        closeOnEsc={closeOnEsc}
        closeOnOverlayClick={closeOnOverlay}
        title="Guarded dialog"
        description={
          dirty
            ? 'Unsaved changes — the ×, Esc and backdrop gestures are vetoed by canClose.'
            : 'Clean — every close path is allowed.'
        }
        footer={
          <Button
            variant="text"
            onClick={() => {
              setOpen(false);
              log('closed from the parent (canClose never runs there)');
            }}
          >
            Close from parent
          </Button>
        }
      >
        <Text textStyle="Body1">
          Toggle “Unsaved changes”, then try ×, Esc or the backdrop — onClose
          only fires when a gesture is allowed through.
        </Text>
      </Dialog>
      <EventLog
        events={events}
        emptyText="Close the dialog through a gesture or the parent button to log onClose."
      />
    </Stack>
  );
}

function ImperativeDialogDemo() {
  // Provider in the parent: useDialog() must run INSIDE DialogProvider —
  // calling it in the component that renders the provider throws and
  // (uncaught) takes the whole preview app down.
  return (
    <DialogProvider>
      <ImperativeDialogDemoInner />
    </DialogProvider>
  );
}

function ImperativeDialogDemoInner() {
  const { confirm, alert } = useDialog();
  const [events, setEvents] = useState<string[]>([]);
  const log = (message: string) => setEvents((prev) => [message, ...prev]);
  return (
    <Stack orientation="vertical" gap={12}>
      <Stack orientation="horizontal" gap={12} wrap>
        <Button
          severity="danger"
          variant="outlined"
          onClick={async () => {
            const confirmed = await confirm({
              title: 'Delete zone?',
              message: 'This removes the zone and its 3 tasks.',
              confirmText: 'Delete',
              tone: 'danger',
            });
            log(`confirm → ${confirmed}`);
          }}
        >
          Request confirm
        </Button>
        <Button
          onClick={async () => {
            await alert({ message: 'Everything is saved.' });
            log('alert → resolved');
          }}
        >
          Request alert
        </Button>
      </Stack>
      <EventLog
        events={events}
        emptyText="Request confirm or alert to log the resolved promise."
      />
    </Stack>
  );
}

const DIALOG_KEYS: KeyboardBinding[] = [
  {
    keys: 'Esc',
    action:
      'Close — onClose fires exactly once, vetoed by canClose or closeOnEsc=false (tests)',
  },
  {
    keys: 'Tab',
    action:
      'Cycle focus forward inside the modal (native showModal trap; focus starts on Close)',
  },
  { keys: 'Shift+Tab', action: 'Cycle focus backwards inside the modal' },
  { keys: 'Enter / Space', action: 'Activate the focused Close/footer button' },
];

// ---------------------------------------------------------------------------
// Tooltip
// ---------------------------------------------------------------------------

const TOOLTIP_CARD = { overflow: 'visible' as const };

const TOOLTIP_KEYS: KeyboardBinding[] = [
  {
    keys: 'Tab',
    action:
      'Show on keyboard focus of the trigger and wire aria-describedby (tests: shows on keyboard focus)',
  },
  {
    keys: 'Shift+Tab',
    action: 'Hide when focus leaves the trigger',
  },
  {
    keys: 'Esc',
    action:
      'Dismiss the open tooltip — wrapper and targetSelector modes (tests: closes on Escape / in target mode)',
  },
];

function TargetTooltipDemo() {
  return (
    <Stack orientation="horizontal" gap={12} wrap>
      <Tooltip
        targetSelector="[data-preview-tip]"
        content="Delegated hint — one tooltip, many targets"
        delayMs={0}
      />
      <Button data-preview-tip>First target</Button>
      <Button data-preview-tip>Second target</Button>
    </Stack>
  );
}

// One provider for the whole page; per-toast position overrides open
// their own viewports on top of it.
function ToastPage() {
  return (
    <DemoPage
      title="Toast"
      description="Transient notifications via the toast provider — live-region announcements, timer control and callbacks."
      sections={[
        {
          id: 'toast-severities',
          title: 'Severities',
          description:
            'The viewport is aria-live="polite"; each toast renders role="status" except danger, which renders role="alert" (tests assert the status path and the alert fallback in Toast.tsx).',
          content: <ToastSeveritiesDemo />,
        },
        {
          id: 'toast-positions',
          title: 'Positions',
          description:
            'Four viewport anchors — top-left, top-right, bottom-left, bottom-right. A per-toast position override opens a second viewport for that anchor (test: opens a second viewport for a per-toast position override).',
          content: <ToastPositionsDemo />,
        },
        {
          id: 'toast-duration',
          title: 'Duration & progress',
          description:
            'durationMs defaults to the provider’s 4000; showProgress draws a countdown bar matching it (test: renders the progress bar with the matching duration); durationMs 0 keeps the toast until dismissed (test), and hover pauses every timer (test).',
          content: <ToastDurationDemo />,
        },
        {
          id: 'toast-actions',
          title: 'Actions & events',
          description:
            'action/cancel buttons, closeOnClick and the dismiss × all report through onDismiss and onAutoClose (tests: fires onDismiss on manual dismiss and onAutoClose on expiry).',
          content: <ToastActionsDemo />,
        },
        {
          id: 'toast-keyboard',
          title: 'Keyboard',
          description:
            'Dismissal itself is timer/mouse driven — there is no Esc binding, and only the buttons inside a toast take keys.',
          content: <KeyboardTable bindings={TOAST_KEYS} />,
        },
      ]}
    />
  );
}

export function FeedbackDemos({ slug }: { slug: string }) {
  if (slug === 'progress') {
    return (
      <DemoPage
        title="Progress"
        description="Determinate bars and indeterminate spinners — role=progressbar with aria-valuemin/max/now, and no aria-valuenow when indeterminate."
        sections={[
          {
            id: 'progress-determinate',
            title: 'Determinate',
            description:
              'A slider bound to value; aria-valuenow tracks it live (tests: renders a progressbar with aria values, clamps value to the max).',
            content: <ProgressValueDemo />,
          },
          {
            id: 'progress-indeterminate',
            title: 'Indeterminate',
            description:
              'Indeterminate mode drops aria-valuenow entirely (tests: renders indeterminate without aria-valuenow) — linear bar and circular svg side by side.',
            content: (
              <Stack orientation="vertical" gap={12}>
                <Progress indeterminate aria-label="Loading" />
                <Row align="center" gap={12} wrap>
                  <Progress
                    indeterminate
                    variant="circular"
                    aria-label="Syncing"
                  />
                  <Text textStyle="Body2" className="dx-text-muted">
                    circular indeterminate keeps the same aria contract (test:
                    rotates circular indeterminate without aria-valuenow)
                  </Text>
                </Row>
              </Stack>
            ),
          },
          {
            id: 'progress-sizes',
            title: 'Sizes',
            description:
              'size tiers xs–xl map to linear thickness classes and circular diameter classes (tests: maps size tiers to linear/circular classes).',
            content: (
              <Stack orientation="vertical" gap={12}>
                <Stack orientation="vertical" gap={8}>
                  {PROGRESS_TIERS.map((tier) => (
                    <Stack key={tier} orientation="vertical" gap={4}>
                      <Text textStyle="Body2" className="dx-text-muted">
                        linear {tier}
                      </Text>
                      <Progress
                        value={65}
                        size={tier}
                        aria-label={`Linear ${tier}`}
                      />
                    </Stack>
                  ))}
                </Stack>
                <Row align="center" gap={12} wrap>
                  {PROGRESS_TIERS.map((tier) => (
                    <Progress
                      key={tier}
                      variant="circular"
                      value={65}
                      size={tier}
                      aria-label={`Circular ${tier}`}
                    />
                  ))}
                </Row>
              </Stack>
            ),
          },
          {
            id: 'progress-severities',
            title: 'Severities',
            description:
              'Four tones — primary, success, warning, danger — same aria contract for every tone (test: applies the tone class).',
            content: (
              <Stack orientation="vertical" gap={8}>
                {PROGRESS_TONES.map((tone) => (
                  <Stack key={tone} orientation="vertical" gap={4}>
                    <Text textStyle="Body2" className="dx-text-muted">
                      {tone}
                    </Text>
                    <Progress value={65} severity={tone} aria-label={tone} />
                  </Stack>
                ))}
              </Stack>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'skeleton') {
    return (
      <DemoPage
        title="Skeleton"
        description="Placeholder shapes while content loads — every skeleton is aria-hidden, so the surrounding region owns the busy state."
        sections={[
          {
            id: 'skeleton-variants',
            title: 'Variants',
            description:
              'text (default, height 1em), circle and rect — a single aria-hidden span each (test: renders with text variant by default and is aria-hidden).',
            content: (
              <Stack orientation="vertical" gap={12}>
                <Stack orientation="vertical" gap={4}>
                  <Text textStyle="Body2" className="dx-text-muted">
                    text
                  </Text>
                  <Skeleton width="60%" />
                  <Skeleton width="40%" />
                </Stack>
                <Stack orientation="vertical" gap={4}>
                  <Text textStyle="Body2" className="dx-text-muted">
                    circle + text row
                  </Text>
                  <Row align="center" gap={12}>
                    <Skeleton variant="circle" width={40} height={40} />
                    <Skeleton width="45%" />
                  </Row>
                </Stack>
                <Stack orientation="vertical" gap={4}>
                  <Text textStyle="Body2" className="dx-text-muted">
                    rect
                  </Text>
                  <Skeleton variant="rect" width="100%" height={72} />
                </Stack>
              </Stack>
            ),
          },
          {
            id: 'skeleton-sizes',
            title: 'Sizes',
            description:
              'width/height take pixel numbers (rendered as px) or CSS strings passed straight through (test: applies variant, width, and height).',
            content: (
              <Stack orientation="vertical" gap={8}>
                <Skeleton width="90%" />
                <Skeleton width="70%" />
                <Skeleton width="45%" />
                <Row align="center" gap={12}>
                  <Skeleton variant="circle" width={72} height={72} />
                  <Skeleton variant="circle" width={40} height={40} />
                  <Skeleton variant="circle" width={24} height={24} />
                </Row>
                <Skeleton variant="rect" width={240} height={120} />
              </Stack>
            ),
          },
          {
            id: 'skeleton-composition',
            title: 'Card composition',
            description:
              'Stack variants into list, avatar or image placeholders — nothing interactive, nothing announced (skeletons stay decorative).',
            content: (
              <Stack orientation="vertical" gap={8}>
                <Row align="center" gap={12}>
                  <Skeleton variant="circle" width={48} height={48} />
                  <Stack orientation="vertical" gap={4}>
                    <Skeleton width={160} />
                    <Skeleton width={96} />
                  </Stack>
                </Row>
                <Skeleton variant="rect" width="100%" height={140} />
                <Skeleton width="80%" />
                <Skeleton width="60%" />
              </Stack>
            ),
          },
          {
            id: 'skeleton-loading',
            title: 'Loading pattern',
            description:
              'The skeleton replaces content inside a region marked aria-busy (DataGrid sets aria-busy the same way), while a role="status" line announces the state — skeleton markup itself stays aria-hidden.',
            content: <SkeletonLoadDemo />,
          },
        ]}
      />
    );
  }
  if (slug === 'emptystate') {
    return (
      <DemoPage
        title="EmptyState"
        description="Friendly placeholder for empty collections — a required title plus optional icon, description and action slots in fixed order."
        sections={[
          {
            id: 'emptystate-basic',
            title: 'Basic',
            description:
              'title is required; description is optional. The title renders as a plain div, not a heading, so it never disturbs the page heading order.',
            content: (
              <Stack orientation="vertical" gap={12}>
                <EmptyState title="Nothing here" />
                <EmptyState
                  title="No results"
                  description="Try a different filter."
                />
              </Stack>
            ),
          },
          {
            id: 'emptystate-slots',
            title: 'Slots in order',
            description:
              'Slots render in a fixed order — icon, title, description, action (test: renders slots in fixed order) — and any node fits the icon slot.',
            content: (
              <Stack orientation="vertical" gap={12}>
                <EmptyState
                  icon={<Icon icon="search" size="xl" />}
                  title="No files match “quarterly”"
                  description="Remove a filter or search for something else."
                  action={<Button variant="outlined">Clear filters</Button>}
                />
                <EmptyState
                  icon={<Icon icon="folder" size="xl" />}
                  title="This folder is empty"
                  description="Upload a file to get started."
                />
              </Stack>
            ),
          },
          {
            id: 'emptystate-action',
            title: 'Action & events',
            description:
              'The action slot keeps its content fully interactive (test: keeps action content interactive) — a normal Button lands its clicks in the event log.',
            content: <EmptyStateActionDemo />,
          },
          {
            id: 'emptystate-keyboard',
            title: 'Keyboard',
            content: <KeyboardTable bindings={EMPTYSTATE_KEYS} />,
          },
        ]}
      />
    );
  }
  if (slug === 'toast') {
    return (
      <ToastProvider position="bottom-right">
        <ToastPage />
      </ToastProvider>
    );
  }
  if (slug === 'dialog') {
    return (
      <DemoPage
        title="Dialog"
        description="Native modal via showModal() — aria-modal, focus trap, focus restore to the opener, and edge-to-edge internal scroll."
        sections={[
          {
            id: 'dialog-basic',
            title: 'Basic',
            description:
              'Fully controlled open state; title feeds aria-labelledby, description feeds aria-describedby, and the close button is labelled “Close dialog” (test: defaults the dialog title so the dialog keeps an accessible name).',
            content: <DialogDemo />,
          },
          {
            id: 'dialog-sizes',
            title: 'Sizes & width',
            description:
              'size tiers sm=360px, md=520px, lg=720px max-width; width overrides the tier outright (test: applies explicit width and height geometry).',
            content: <DialogSizesDemo />,
          },
          {
            id: 'dialog-guards',
            title: 'Close guards',
            description:
              'canClose vetoes the ×, Esc and backdrop gestures — sync or async (tests: honors a sync/async canClose veto) — while closeOnEsc/closeOnOverlayClick remove those paths entirely (tests). Closing from the parent ignores canClose by design.',
            content: <DialogGuardsDemo />,
          },
          {
            id: 'dialog-imperative',
            title: 'Imperative confirm & alert',
            description:
              'DialogProvider + useDialog(): promises resolve on confirm, cancel or Escape (test: confirm resolves false on Escape); concurrent calls queue behind the open dialog (test).',
            content: <ImperativeDialogDemo />,
          },
          {
            id: 'dialog-keyboard',
            title: 'Keyboard',
            content: <KeyboardTable bindings={DIALOG_KEYS} />,
          },
        ]}
      />
    );
  }
  if (slug === 'tooltip') {
    return (
      <DemoPage
        title="Tooltip"
        description="Hover and keyboard-focus hint with delay, duration, placement and document-wide target delegation."
        sections={[
          {
            id: 'tooltip-basic',
            title: 'Basic',
            description:
              'Wrapper mode shows on hover and on keyboard focus, wires role="tooltip" plus aria-describedby while open, and preserves any consumer-supplied describedby (tests: shows on hover with role=tooltip, wires aria-describedby, preserves a consumer-supplied aria-describedby).',
            cardStyle: TOOLTIP_CARD,
            content: (
              <Stack orientation="horizontal" gap={12} wrap>
                <Tooltip content="Helpful hint">
                  <Button>Hover or focus me</Button>
                </Tooltip>
                <Tooltip
                  content="Sticky — no durationMs, stays until blur"
                  delayMs={0}
                >
                  <Button>Sticky tip</Button>
                </Tooltip>
              </Stack>
            ),
          },
          {
            id: 'tooltip-placements',
            title: 'Placements',
            description:
              'Four fixed sides — top (default), right, bottom, left. delayMs 0 here so the demo reacts instantly.',
            cardStyle: TOOLTIP_CARD,
            content: (
              <Row gap={8} wrap>
                <Tooltip content="top" delayMs={0}>
                  <Button size="sm" variant="outlined">
                    top
                  </Button>
                </Tooltip>
                <Tooltip content="right" placement="right" delayMs={0}>
                  <Button size="sm" variant="outlined">
                    right
                  </Button>
                </Tooltip>
                <Tooltip content="bottom" placement="bottom" delayMs={0}>
                  <Button size="sm" variant="outlined">
                    bottom
                  </Button>
                </Tooltip>
                <Tooltip content="left" placement="left" delayMs={0}>
                  <Button size="sm" variant="outlined">
                    left
                  </Button>
                </Tooltip>
              </Row>
            ),
          },
          {
            id: 'tooltip-delay',
            title: 'Delay & duration',
            description:
              'delayMs defaults to 300; durationMs unset keeps the tip sticky, set to auto-dismiss it while still hovered (test: auto-dismisses after durationMs while still hovered).',
            cardStyle: TOOLTIP_CARD,
            content: (
              <Row gap={8} wrap>
                <Tooltip
                  content="Default 300ms delay, sticky until blur"
                  delayMs={300}
                >
                  <Button size="sm">Default delay</Button>
                </Tooltip>
                <Tooltip content="delayMs 0 — opens instantly" delayMs={0}>
                  <Button size="sm">delayMs 0</Button>
                </Tooltip>
                <Tooltip
                  content="Auto-dismisses after 2s even while hovered"
                  delayMs={0}
                  durationMs={2000}
                >
                  <Button size="sm">durationMs 2000</Button>
                </Tooltip>
              </Row>
            ),
          },
          {
            id: 'tooltip-target',
            title: 'Target selector',
            description:
              'One tooltip delegates to every element matching a CSS selector via document-level listeners — focus, Escape and aria-describedby all work the same as wrapper mode (tests: attaches to matching elements, closes on Escape in target mode).',
            cardStyle: TOOLTIP_CARD,
            content: <TargetTooltipDemo />,
          },
          {
            id: 'tooltip-keyboard',
            title: 'Keyboard',
            content: <KeyboardTable bindings={TOOLTIP_KEYS} />,
          },
        ]}
      />
    );
  }
  return (
    <DemoPage
      title="Alert"
      description="Severity banners with filled, flat, outlined and text variants — role=alert, aria-hidden icon, dismissible by default."
      sections={[
        {
          id: 'alert-severities',
          title: 'Severities',
          description:
            'Every banner renders role="alert" and puts the decorative icon aria-hidden ahead of the content (tests: renders with role=alert and content, renders the icon aria-hidden before the content).',
          content: (
            <Stack orientation="vertical" gap={12}>
              {ALERT_SEVERITIES.map((severity) => (
                <Alert key={severity} severity={severity} title={severity} />
              ))}
            </Stack>
          ),
        },
        {
          id: 'alert-variants',
          title: 'Variants',
          description:
            'One severity across all four variants — filled is the default (test: applies the %s variant class for filled/flat/outlined/text).',
          content: (
            <Stack orientation="vertical" gap={12}>
              {ALERT_VARIANTS.map((variant) => (
                <Alert
                  key={variant}
                  severity="info"
                  variant={variant}
                  title={variant === 'filled' ? 'Filled (default)' : variant}
                />
              ))}
            </Stack>
          ),
        },
        {
          id: 'alert-sizes',
          title: 'Sizes',
          description:
            'xs–xl padding and type ramp on the same banner (test: applies the %s size class).',
          content: (
            <Stack orientation="vertical" gap={8}>
              {ALERT_SIZES.map((size) => (
                <Alert
                  key={size}
                  size={size}
                  severity="success"
                  title={`Size ${size}`}
                />
              ))}
            </Stack>
          ),
        },
        {
          id: 'alert-dismiss',
          title: 'Dismissal & events',
          description:
            'dismissible defaults to true. Uncontrolled dismissal latches and unmounts; controlled visible stays mounted and only notifies (tests: disappears after dismissing, stays mounted when controlled visible and notifies instead, re-shows when controlled visible returns to true).',
          content: <AlertDismissDemo />,
        },
        {
          id: 'alert-keyboard',
          title: 'Keyboard',
          content: <KeyboardTable bindings={ALERT_KEYS} />,
        },
      ]}
    />
  );
}
