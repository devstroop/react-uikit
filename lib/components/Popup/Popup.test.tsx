import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../Button/Button';
import { PopupProvider, usePopup } from './Popup';

function PopupHarness({ onOpened }: { onOpened?: () => void }) {
  const popup = usePopup();
  return (
    <Button
      onClick={(e) =>
        popup.open({
          anchor: e.currentTarget,
          content: 'panel body',
          onOpen: onOpened,
        })
      }
    >
      Open popup
    </Button>
  );
}

describe('Popup', () => {
  it('throws when usePopup is used outside the provider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<PopupHarness />)).toThrow(
      'usePopup must be used inside <PopupProvider>'
    );
    spy.mockRestore();
  });

  it('opens an anchored, labelled panel and fires onOpen', async () => {
    const user = userEvent.setup();
    const onOpened = vi.fn();
    render(
      <PopupProvider>
        <PopupHarness onOpened={onOpened} />
      </PopupProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Open popup' }));
    const panel = await screen.findByRole('dialog', { name: 'Popup' });
    expect(panel).toHaveTextContent('panel body');
    expect(onOpened).toHaveBeenCalledTimes(1);
  });

  it('Escape closes and fires onClose', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    function Closer() {
      const popup = usePopup();
      return (
        <Button
          onClick={(e) =>
            popup.open({ anchor: e.currentTarget, content: 'x', onClose })
          }
        >
          Open popup
        </Button>
      );
    }
    render(
      <PopupProvider>
        <Closer />
      </PopupProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Open popup' }));
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    );
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('returned closer shuts only its own panel', async () => {
    const user = userEvent.setup();
    let firstClose: (() => void) | undefined;
    function Two() {
      const popup = usePopup();
      return (
        <Button
          onClick={(e) => {
            firstClose = popup.open({
              anchor: e.currentTarget,
              content: 'first',
            });
          }}
        >
          Open popup
        </Button>
      );
    }
    render(
      <PopupProvider>
        <Two />
      </PopupProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Open popup' }));
    expect(await screen.findByText('first')).toBeInTheDocument();
    firstClose?.();
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    );
  });
});
