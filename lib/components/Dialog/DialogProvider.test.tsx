import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../Button/Button';
import { DialogProvider, useDialog } from './DialogProvider';

function ConfirmHarness({ onResult }: { onResult: (ok: boolean) => void }) {
  const dialog = useDialog();
  return (
    <Button
      onClick={async () => {
        onResult(
          await dialog.confirm({
            message: 'Delete the zone?',
            confirmText: 'Delete',
            tone: 'danger',
          })
        );
      }}
    >
      Ask confirm
    </Button>
  );
}

function AlertHarness({ onDone }: { onDone: () => void }) {
  const dialog = useDialog();
  return (
    <Button
      onClick={async () => {
        await dialog.alert({ message: 'Saved.' });
        onDone();
      }}
    >
      Ask alert
    </Button>
  );
}

describe('DialogProvider', () => {
  it('throws when useDialog is used outside the provider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<ConfirmHarness onResult={() => {}} />)).toThrow(
      'useDialog must be used within a <DialogProvider>'
    );
    spy.mockRestore();
  });

  it('confirm resolves true on the confirm button', async () => {
    const user = userEvent.setup();
    const onResult = vi.fn();
    render(
      <DialogProvider>
        <ConfirmHarness onResult={onResult} />
      </DialogProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Ask confirm' }));
    expect(await screen.findByText('Delete the zone?')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Delete' }));
    await waitFor(() => expect(onResult).toHaveBeenCalledWith(true));
    expect(screen.queryByText('Delete the zone?')).not.toBeInTheDocument();
  });

  it('confirm resolves false on cancel', async () => {
    const user = userEvent.setup();
    const onResult = vi.fn();
    render(
      <DialogProvider>
        <ConfirmHarness onResult={onResult} />
      </DialogProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Ask confirm' }));
    await screen.findByText('Delete the zone?');
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    await waitFor(() => expect(onResult).toHaveBeenCalledWith(false));
  });

  it('confirm resolves false on Escape', async () => {
    const user = userEvent.setup();
    const onResult = vi.fn();
    render(
      <DialogProvider>
        <ConfirmHarness onResult={onResult} />
      </DialogProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Ask confirm' }));
    await screen.findByText('Delete the zone?');
    // Native cancel path (jsdom has no Escape→cancel wiring for dialogs).
    screen
      .getByRole('dialog')
      .dispatchEvent(new Event('cancel', { cancelable: true }));
    await waitFor(() => expect(onResult).toHaveBeenCalledWith(false));
  });

  it('alert resolves when acknowledged', async () => {
    const user = userEvent.setup();
    const onDone = vi.fn();
    render(
      <DialogProvider>
        <AlertHarness onDone={onDone} />
      </DialogProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Ask alert' }));
    expect(await screen.findByText('Saved.')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'OK' }));
    await waitFor(() => expect(onDone).toHaveBeenCalledTimes(1));
  });

  it('queues a second confirm behind the open dialog', async () => {
    const user = userEvent.setup();
    const results: boolean[] = [];
    function QueueHarness() {
      const dialog = useDialog();
      return (
        <Button
          onClick={async () => {
            results.push(await dialog.confirm({ message: 'First' }));
            results.push(await dialog.confirm({ message: 'Second' }));
          }}
        >
          Ask twice
        </Button>
      );
    }
    render(
      <DialogProvider>
        <QueueHarness />
      </DialogProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Ask twice' }));
    expect(await screen.findByText('First')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Confirm' }));
    expect(await screen.findByText('Second')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Confirm' }));
    await waitFor(() => expect(results).toEqual([true, true]));
  });

  it('defaults the dialog title so the dialog keeps an accessible name', async () => {
    const user = userEvent.setup();
    render(
      <DialogProvider>
        <ConfirmHarness onResult={() => {}} />
      </DialogProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Ask confirm' }));
    await screen.findByText('Delete the zone?');
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAccessibleName('Confirm');
  });
});
