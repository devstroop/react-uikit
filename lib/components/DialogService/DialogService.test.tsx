import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../Button/Button';
import { DialogProvider, useDialog } from './DialogService';

describe('DialogService', () => {
  it('routes open/close through the shared provider queue', async () => {
    const user = userEvent.setup();
    const onResult = vi.fn();
    function Harness() {
      const dialog = useDialog();
      return (
        <Button
          onClick={async () => {
            const result = await dialog.open({
              title: 'Service',
              content: 'via entrypoint',
            });
            onResult(result);
          }}
        >
          Open
        </Button>
      );
    }
    render(
      <DialogProvider>
        <Harness />
      </DialogProvider>
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(await screen.findByText('via entrypoint')).toBeInTheDocument();
    await user.click(screen.getByText('Close'));
    await waitFor(() => expect(onResult).toHaveBeenCalledWith(undefined));
  });
});
