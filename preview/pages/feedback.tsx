import { useState } from 'react';
import {
  Alert,
  Button,
  Dialog,
  DialogProvider,
  EmptyState,
  Progress,
  Row,
  Skeleton,
  Stack,
  Text,
  ToastProvider,
  Tooltip,
  useDialog,
  useToast,
} from '../../lib/main';
import { DemoPage } from './demo-page';

function ToastDemo() {
  const { toast } = useToast();
  return (
    <Button
      onClick={() => toast({ description: 'Saved.', severity: 'success' })}
    >
      Show toast
    </Button>
  );
}

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
  const [result, setResult] = useState('');
  return (
    <>
      <Stack orientation="horizontal" gap="md" wrap>
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
            setResult(confirmed ? 'Deleted.' : 'Kept.');
          }}
        >
          Request confirm
        </Button>
        <Button
          onClick={async () => {
            await alert({ message: 'Everything is saved.' });
            setResult('Alert acknowledged.');
          }}
        >
          Request alert
        </Button>
      </Stack>
      {result && (
        <Text textStyle="Body2" className="dx-mt-2">
          Last result: {result}
        </Text>
      )}
    </>
  );
}

function TargetTooltipDemo() {
  return (
    <Stack orientation="horizontal" gap="md" wrap>
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

export function FeedbackDemos({ slug }: { slug: string }) {
  if (slug === 'progress') {
    return (
      <DemoPage
        title="Progress"
        description="Determinate bars and indeterminate spinners."
        sections={[
          {
            id: 'progress-determinate',
            title: 'Determinate',
            content: <Progress value={40} max={100} aria-label="Progress" />,
          },
          {
            id: 'progress-indeterminate',
            title: 'Indeterminate',
            content: <Progress indeterminate aria-label="Loading" />,
          },
        ]}
      />
    );
  }
  if (slug === 'skeleton') {
    return (
      <DemoPage
        title="Skeleton"
        description="Placeholder bars while content loads."
        sections={[
          {
            id: 'skeleton-widths',
            content: (
              <Stack orientation="vertical" gap="sm">
                <Skeleton width="60%" />
                <Skeleton width="40%" />
              </Stack>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'emptystate') {
    return (
      <DemoPage
        title="EmptyState"
        description="Friendly placeholder for empty collections."
        sections={[
          {
            id: 'emptystate-basic',
            content: (
              <EmptyState
                title="Nothing here"
                description="Try a different filter."
              />
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'toast') {
    return (
      <DemoPage
        title="Toast"
        description="Transient notifications via the toast provider."
        sections={[
          {
            id: 'toast-basic',
            content: (
              <ToastProvider position="bottom-left">
                <ToastDemo />
              </ToastProvider>
            ),
          },
        ]}
      />
    );
  }
  if (slug === 'dialog') {
    return (
      <DemoPage
        title="Dialog"
        description="Content-sized modal with focus trap and edge-to-edge scroll."
        sections={[
          {
            id: 'dialog-basic',
            content: <DialogDemo />,
          },
          {
            id: 'dialog-imperative',
            title: 'Imperative confirm & alert',
            description:
              'DialogProvider + useDialog(): promises resolve on confirm, cancel or Escape; concurrent calls queue.',
            content: <ImperativeDialogDemo />,
          },
        ]}
      />
    );
  }
  if (slug === 'tooltip') {
    return (
      <DemoPage
        title="Tooltip"
        description="Hover hint with delay and keyboard dismissal."
        sections={[
          {
            id: 'tooltip-basic',
            content: (
              <Tooltip content="Helpful hint">
                <span>Hover me</span>
              </Tooltip>
            ),
          },
          {
            id: 'tooltip-target',
            title: 'Target selector',
            description:
              'One tooltip delegates to every element matching a CSS selector; Escape or scroll dismisses it.',
            content: <TargetTooltipDemo />,
          },
        ]}
      />
    );
  }
  return (
    <DemoPage
      title="Alert"
      description="Severity banners with flat, filled and outlined variants."
      sections={[
        {
          id: 'alert-severities',
          title: 'Severities',
          content: (
            <Stack orientation="vertical" gap="md">
              <Alert severity="info" title="Heads up" />
              <Alert severity="success" title="Saved" dismissible />
              <Alert severity="warning" title="Check this" />
              <Alert severity="danger" title="Failed" visible={false} />
            </Stack>
          ),
        },
        {
          id: 'alert-variants',
          title: 'Variants',
          content: (
            <Row align="center" gap="md" wrap>
              <Alert severity="info" title="Outlined" variant="outlined" />
              <Alert severity="danger" title="Flat" variant="flat" />
            </Row>
          ),
        },
      ]}
    />
  );
}
