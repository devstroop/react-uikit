import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { HtmlEditor } from './HtmlEditor';

function stubExecCommand() {
  const calls: string[] = [];
  Object.defineProperty(document, 'execCommand', {
    value: vi.fn((command: string) => {
      calls.push(command);
      return true;
    }),
    configurable: true,
    writable: true,
  });
  return calls;
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('HtmlEditor', () => {
  it('renders the toolbar and the editable region', () => {
    render(<HtmlEditor defaultValue="<p>hi</p>" />);
    expect(
      screen.getByRole('toolbar', { name: 'HTML editor toolbar' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: 'HTML editor' })
    ).toBeInTheDocument();
  });

  it('dispatches execCommand for toolbar tools', async () => {
    const calls = stubExecCommand();
    const user = userEvent.setup();
    render(<HtmlEditor defaultValue="<p>hi</p>" />);
    await user.click(screen.getByRole('button', { name: 'Bold' }));
    await user.click(screen.getByRole('button', { name: 'Italic' }));
    await user.click(screen.getByRole('button', { name: 'Strikethrough' }));
    expect(calls).toEqual(['bold', 'italic', 'strikeThrough']);
  });

  it('emits sanitized HTML, stripping scripts', async () => {
    stubExecCommand();
    const onChange = vi.fn();
    render(<HtmlEditor onChange={onChange} />);
    const area = screen.getByRole('textbox', { name: 'HTML editor' });
    area.innerHTML = '<p>hi</p><script>alert(1)</script>';
    fireEvent.input(area);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0]).toContain('<p>hi</p>');
    expect(onChange.mock.calls[0][0]).not.toContain('<script>');
  });

  it('ctrl+b/i/u run the matching command', async () => {
    const calls = stubExecCommand();
    const user = userEvent.setup();
    render(<HtmlEditor defaultValue="<p>hi</p>" />);
    const area = screen.getByRole('textbox', { name: 'HTML editor' });
    area.focus();
    await user.keyboard('{Control>}b{/Control}');
    await user.keyboard('{Control>}u{/Control}');
    expect(calls).toEqual(['bold', 'underline']);
  });

  it('source mode edits round-trip through the toggle', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<HtmlEditor defaultValue="<p>hi</p>" onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Source' }));
    const source = screen.getByRole('textbox', { name: 'HTML editor source' });
    expect(source).toHaveValue('<p>hi</p>');
    await user.clear(source);
    await user.type(source, '<p>bye</p>');
    await user.click(screen.getByRole('button', { name: 'Source' }));
    expect(
      screen.getByRole('textbox', { name: 'HTML editor' })
    ).toHaveTextContent('bye');
    expect(onChange).toHaveBeenLastCalledWith('<p>bye</p>');
  });

  it('mirrors a controlled value', () => {
    const { rerender } = render(<HtmlEditor value="<p>a</p>" />);
    expect(
      screen.getByRole('textbox', { name: 'HTML editor' })
    ).toHaveTextContent('a');
    rerender(<HtmlEditor value="<p>b</p>" />);
    expect(
      screen.getByRole('textbox', { name: 'HTML editor' })
    ).toHaveTextContent('b');
  });
});
