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

  it('open renders arbitrary content and close resolves the result', async () => {
    const user = userEvent.setup();
    const onResult = vi.fn();
    function OpenHarness() {
      const dialog = useDialog();
      return (
        <Button
          onClick={async () => {
            const result = await dialog.open({
              title: 'Custom',
              content: <p>arbitrary body</p>,
            });
            onResult(result);
          }}
        >
          Open custom
        </Button>
      );
    }
    render(
      <DialogProvider>
        <OpenHarness />
      </DialogProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Open custom' }));
    expect(await screen.findByText('arbitrary body')).toBeInTheDocument();
    // Default footer offers a Close button that settles undefined.
    await user.click(screen.getByText('Close'));
    await waitFor(() => expect(onResult).toHaveBeenCalledWith(undefined));
    expect(screen.queryByText('arbitrary body')).not.toBeInTheDocument();
  });

  it('close(result) resolves the custom open promise', async () => {
    const user = userEvent.setup();
    const onResult = vi.fn();
    function Closer() {
      const dialog = useDialog();
      return (
        <>
          <Button
            onClick={() => {
              void dialog
                .open({ title: 'Pick', content: 'x' })
                .then((r) => onResult(r));
            }}
          >
            Open pick
          </Button>
          <Button onClick={() => dialog.close('picked')}>Do close</Button>
        </>
      );
    }
    render(
      <DialogProvider>
        <Closer />
      </DialogProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Open pick' }));
    expect(await screen.findByText('Pick')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Do close' }));
    await waitFor(() => expect(onResult).toHaveBeenCalledWith('picked'));
  });

  it('closeAll empties the queue and settles pending promises', async () => {
    const user = userEvent.setup();
    const results: unknown[] = [];
    function Multi() {
      const dialog = useDialog();
      return (
        <>
          <Button
            onClick={() => {
              void dialog.open({ title: 'One' }).then((r) => results.push(r));
              void dialog.open({ title: 'Two' }).then((r) => results.push(r));
            }}
          >
            Open two
          </Button>
          <Button onClick={() => dialog.closeAll()}>Do close all</Button>
        </>
      );
    }
    render(
      <DialogProvider>
        <Multi />
      </DialogProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Open two' }));
    expect(await screen.findByText('One')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Do close all' }));
    await waitFor(() => expect(results).toEqual([undefined, undefined]));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('traps focus while open and restores the opener on close', async () => {
    const user = userEvent.setup();
    render(
      <DialogProvider>
        <ConfirmHarness onResult={() => {}} />
      </DialogProvider>
    );
    const opener = screen.getByRole('button', { name: 'Ask confirm' });
    opener.focus();
    await user.click(opener);
    await screen.findByText('Delete the zone?');
    // Focus moves into the dialog (close control first).
    await waitFor(() =>
      expect(screen.getByRole('dialog').contains(document.activeElement)).toBe(
        true
      )
    );
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    // Opener regains focus once the dialog closes.
    await waitFor(() => expect(document.activeElement).toBe(opener));
  });

  it('openSide docks the panel and keeps the service contract', async () => {
    const user = userEvent.setup();
    const onResult = vi.fn();
    function SideHarness() {
      const dialog = useDialog();
      return (
        <Button
          onClick={async () => {
            const result = await dialog.openSide({
              position: 'right',
              title: 'Rail',
              content: 'side content',
            });
            onResult(result);
          }}
        >
          Open side
        </Button>
      );
    }
    render(
      <DialogProvider>
        <SideHarness />
      </DialogProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Open side' }));
    expect(await screen.findByText('side content')).toBeInTheDocument();
    const dialog = screen.getByRole('dialog');
    expect(dialog.className).toMatch(/side-right/);
    await user.click(screen.getByText('Close'));
    await waitFor(() => expect(onResult).toHaveBeenCalledWith(undefined));
  });

  it('showCloseButton=false hides the header close button', async () => {
    const user = userEvent.setup();
    function Bare() {
      const dialog = useDialog();
      return (
        <Button
          onClick={() => {
            void dialog.open({
              title: 'Bare',
              content: 'x',
              showCloseButton: false,
            });
          }}
        >
          Open bare
        </Button>
      );
    }
    render(
      <DialogProvider>
        <Bare />
      </DialogProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Open bare' }));
    expect(await screen.findByText('Bare')).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Close dialog' })
    ).not.toBeInTheDocument();
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
