import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('shows on hover with role=tooltip', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="More info" delayMs={0}>
        <button type="button">Hover me</button>
      </Tooltip>
    );
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    await user.hover(screen.getByRole('button'));
    expect(await screen.findByRole('tooltip')).toHaveTextContent('More info');
  });

  it('hides on unhover', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="More info" delayMs={0}>
        <button type="button">Hover me</button>
      </Tooltip>
    );
    const button = screen.getByRole('button');
    await user.hover(button);
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
    await user.unhover(button);
    await waitFor(() =>
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    );
  });

  it('wires aria-describedby to the trigger when open', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="More info" delayMs={0}>
        <button type="button">Hover me</button>
      </Tooltip>
    );
    const button = screen.getByRole('button');
    await user.hover(button);
    const tooltip = await screen.findByRole('tooltip');
    expect(button).toHaveAttribute('aria-describedby', tooltip.id);
  });

  it('preserves a consumer-supplied aria-describedby on the trigger', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="More info" delayMs={0}>
        <button type="button" aria-describedby="hint-id">
          Hover me
        </button>
      </Tooltip>
    );
    const button = screen.getByRole('button');
    await user.hover(button);
    const tooltip = await screen.findByRole('tooltip');
    expect(button).toHaveAttribute('aria-describedby', `hint-id ${tooltip.id}`);
  });

  it('closes on Escape', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="More info" delayMs={0}>
        <button type="button">Hover me</button>
      </Tooltip>
    );
    const button = screen.getByRole('button');
    await user.hover(button);
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    await waitFor(() =>
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    );
  });
});

describe('Tooltip — targetSelector & durationMs', () => {
  it('attaches to matching elements and wires aria-describedby', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Tooltip targetSelector="[data-tip]" content="Delegated" delayMs={0} />
        <button type="button" data-tip>
          One
        </button>
        <button type="button">Two</button>
      </>
    );
    const one = screen.getByRole('button', { name: 'One' });
    await user.hover(one);
    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toHaveTextContent('Delegated');
    expect(one).toHaveAttribute('aria-describedby', tooltip.id);
    await user.unhover(one);
    await waitFor(() =>
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    );
    expect(one).not.toHaveAttribute('aria-describedby');
  });

  it('ignores elements that do not match the selector', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Tooltip targetSelector="[data-tip]" content="Delegated" delayMs={0} />
        <button type="button" data-tip>
          One
        </button>
        <button type="button">Two</button>
      </>
    );
    await user.hover(screen.getByRole('button', { name: 'Two' }));
    await new Promise((resolve) => setTimeout(resolve, 30));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('shows on keyboard focus of a matched element', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Tooltip targetSelector="[data-tip]" content="Delegated" delayMs={0} />
        <button type="button" data-tip>
          One
        </button>
      </>
    );
    await user.tab();
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Delegated');
  });

  it('closes on Escape in target mode', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Tooltip targetSelector="[data-tip]" content="Delegated" delayMs={0} />
        <button type="button" data-tip>
          One
        </button>
      </>
    );
    await user.hover(screen.getByRole('button', { name: 'One' }));
    await screen.findByRole('tooltip');
    await user.keyboard('{Escape}');
    await waitFor(() =>
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    );
  });

  it('auto-dismisses after durationMs while still hovered', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Timed" delayMs={0} durationMs={30}>
        <button type="button">Hover me</button>
      </Tooltip>
    );
    await user.hover(screen.getByRole('button'));
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
    await waitFor(
      () => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument(),
      { timeout: 1000 }
    );
  });
});
