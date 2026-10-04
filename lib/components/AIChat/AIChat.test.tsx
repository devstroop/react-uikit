import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { AIChat } from './AIChat';

describe('AIChat', () => {
  it('renders messages with roles and an aria-live log', () => {
    render(
      <AIChat
        messages={[
          { role: 'user', content: 'Hello' },
          { role: 'assistant', content: 'Hi there' },
        ]}
      />
    );
    const log = screen.getByRole('log', { name: 'Chat' });
    expect(log).toHaveAttribute('aria-live', 'polite');
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Hi there')).toBeInTheDocument();
  });

  it('sends trimmed input and clears the box', async () => {
    const user = userEvent.setup();
    const onSend = vi.fn();
    render(<AIChat messages={[]} onSend={onSend} />);
    const input = screen.getByLabelText('Message');
    await user.type(input, '  hello  ');
    await user.click(screen.getByRole('button', { name: 'Send' }));
    expect(onSend).toHaveBeenCalledWith('hello');
    expect(input).toHaveValue('');
  });

  it('blocks empty sends and disables while loading', async () => {
    const user = userEvent.setup();
    const onSend = vi.fn();
    const { rerender } = render(
      <AIChat messages={[]} onSend={onSend} loading />
    );
    expect(screen.getByRole('button', { name: 'Send' })).toBeDisabled();
    rerender(<AIChat messages={[]} onSend={onSend} />);
    await user.type(screen.getByLabelText('Message'), '   ');
    await user.click(screen.getByRole('button', { name: 'Send' }));
    expect(onSend).not.toHaveBeenCalled();
  });

  it('honors message and input templates', () => {
    render(
      <AIChat
        messages={[{ role: 'user', content: 'Hello' }]}
        messageTemplate={(message) => <p>tpl:{String(message.content)}</p>}
        inputTemplate={() => <div>custom input</div>}
      />
    );
    expect(screen.getByText('tpl:Hello')).toBeInTheDocument();
    expect(screen.getByText('custom input')).toBeInTheDocument();
    expect(screen.queryByLabelText('Message')).not.toBeInTheDocument();
  });

  it('announces incoming assistant messages', async () => {
    const { rerender } = render(
      <AIChat messages={[{ role: 'user', content: 'Hello' }]} />
    );
    rerender(
      <AIChat
        messages={[
          { role: 'user', content: 'Hello' },
          { role: 'assistant', content: 'Hi there' },
        ]}
      />
    );
    await waitFor(() =>
      expect(screen.getByText('Hi there')).toBeInTheDocument()
    );
    expect(screen.getByRole('log', { name: 'Chat' })).toHaveTextContent(
      'Hi there'
    );
  });
});
