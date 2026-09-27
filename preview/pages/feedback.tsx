import { useState } from 'react';
import {
  Alert,
  Button,
  Dialog,
  EmptyState,
  Progress,
  Row,
  Skeleton,
  Stack,
  Text,
  ToastProvider,
  Tooltip,
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
            content: <Progress value={40} max={100} />,
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
