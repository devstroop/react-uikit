import { useState } from 'react';
import {
  Alert,
  Button,
  Dialog,
  EmptyState,
  Progress,
  Row,
  Skeleton,
  Text,
  ToastProvider,
  Tooltip,
  useToast,
} from '../../lib/main';
import { DemoSection } from './section';

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
      <DemoSection title="Progress">
        <Progress value={40} max={100} />
        <Progress indeterminate aria-label="Loading" />
      </DemoSection>
    );
  }
  if (slug === 'skeleton') {
    return (
      <DemoSection title="Skeleton">
        <Skeleton width="60%" />
        <Skeleton width="40%" />
      </DemoSection>
    );
  }
  if (slug === 'emptystate') {
    return (
      <DemoSection title="EmptyState">
        <EmptyState
          title="Nothing here"
          description="Try a different filter."
        />
      </DemoSection>
    );
  }
  if (slug === 'toast') {
    return (
      <DemoSection title="Toast">
        <ToastProvider position="bottom-left">
          <ToastDemo />
        </ToastProvider>
      </DemoSection>
    );
  }
  if (slug === 'dialog') {
    return (
      <DemoSection title="Dialog">
        <DialogDemo />
      </DemoSection>
    );
  }
  if (slug === 'tooltip') {
    return (
      <DemoSection title="Tooltip">
        <Tooltip content="Helpful hint">
          <span>Hover me</span>
        </Tooltip>
      </DemoSection>
    );
  }
  return (
    <DemoSection title="Alert">
      <Alert severity="info" title="Heads up" />
      <Alert severity="success" title="Saved" dismissible />
      <Alert severity="warning" title="Check this" />
      <Alert severity="danger" title="Failed" visible={false} />
      <Row align="center" gap="md">
        <Alert severity="info" title="Outlined" variant="outlined" />
        <Alert severity="danger" title="Flat" variant="flat" />
      </Row>
    </DemoSection>
  );
}
