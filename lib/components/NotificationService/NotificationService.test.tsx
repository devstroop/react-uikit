import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ToastProvider, useToast } from '../Toast/Toast';
import type { NotifyMessage } from './NotificationService';

describe('NotificationService', () => {
  it('routes notify through the shared toast queue', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const message: NotifyMessage = {
      severity: 'warning',
      summary: 'Via entrypoint',
      payload: { id: 3 },
      click: onClick,
      closeOnClick: true,
    };
    function Harness() {
      const { notify } = useToast();
      return (
        <button type="button" onClick={() => notify(message)}>
          Notify
        </button>
      );
    }
    render(
      <ToastProvider>
        <Harness />
      </ToastProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Notify' }));
    const body = await screen.findByText('Via entrypoint');
    await user.click(body);
    expect(onClick).toHaveBeenCalledWith({ id: 3 });
    await waitFor(() =>
      expect(screen.queryByText('Via entrypoint')).not.toBeInTheDocument()
    );
  });
});
