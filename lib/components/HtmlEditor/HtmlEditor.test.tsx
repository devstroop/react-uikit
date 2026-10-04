import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { HtmlEditor, type HtmlEditorHandle } from './HtmlEditor';

function stubExecCommand() {
  const calls: Array<[string, string | undefined]> = [];
  Object.defineProperty(document, 'execCommand', {
    value: vi.fn((command: string, _showUI: boolean, value?: string) => {
      calls.push([command, value]);
      return true;
    }),
    configurable: true,
    writable: true,
  });
  return calls;
}

function commandsOf(calls: Array<[string, string | undefined]>) {
  return calls.map(([command]) => command);
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
    expect(commandsOf(calls)).toEqual(['bold', 'italic', 'strikeThrough']);
  });

  it('emits sanitized HTML, stripping scripts', async () => {
    stubExecCommand();
    const onChange = vi.fn();
    render(<HtmlEditor onChange={onChange} />);
    const area = screen.getByRole('textbox', { name: 'HTML editor' });
    area.innerHTML = '<p>hi</p><script>alert(1)</script>';
    fireEvent.input(area);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0]?.[0]).toContain('<p>hi</p>');
    expect(onChange.mock.calls[0]?.[0]).not.toContain('<script>');
  });

  it('ctrl+b/i/u run the matching command', async () => {
    const calls = stubExecCommand();
    const user = userEvent.setup();
    render(<HtmlEditor defaultValue="<p>hi</p>" />);
    const area = screen.getByRole('textbox', { name: 'HTML editor' });
    area.focus();
    await user.keyboard('{Control>}b{/Control}');
    await user.keyboard('{Control>}u{/Control}');
    expect(commandsOf(calls)).toEqual(['bold', 'underline']);
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

describe('HtmlEditor extended toolbar', () => {
  it('color inputs apply foreColor/hiliteColor with the picked value', async () => {
    const calls = stubExecCommand();
    const user = userEvent.setup();
    render(<HtmlEditor defaultValue="<p>hi</p>" />);
    const textColor = screen.getByLabelText('Text color');
    fireEvent.change(textColor, { target: { value: '#ff0000' } });
    const bgColor = screen.getByLabelText('Background color');
    fireEvent.change(bgColor, { target: { value: '#00ff00' } });
    const area = screen.getByRole('textbox', { name: 'HTML editor' });
    area.focus();
    await user.click(screen.getByRole('button', { name: 'Bulleted list' }));
    expect(calls).toContainEqual(['foreColor', '#ff0000']);
    expect(calls).toContainEqual(['hiliteColor', '#00ff00']);
    expect(calls).toContainEqual(['insertUnorderedList', undefined]);
  });

  it('format selects dispatch block/font/size commands', async () => {
    const calls = stubExecCommand();
    const user = userEvent.setup();
    render(<HtmlEditor defaultValue="<p>hi</p>" />);
    const block = screen.getByLabelText('Format block');
    fireEvent.change(block, { target: { value: 'h1' } });
    const font = screen.getByLabelText('Font name');
    fireEvent.change(font, { target: { value: 'serif' } });
    const size = screen.getByLabelText('Font size');
    fireEvent.change(size, { target: { value: '4' } });
    await user.click(screen.getByRole('button', { name: 'Align center' }));
    await user.click(screen.getByRole('button', { name: 'Increase indent' }));
    expect(calls).toContainEqual(['formatBlock', '<h1>']);
    expect(calls).toContainEqual(['fontName', 'serif']);
    expect(calls).toContainEqual(['fontSize', '4']);
    expect(calls).toContainEqual(['justifyCenter', undefined]);
    expect(calls).toContainEqual(['indent', undefined]);
  });

  it('link dialog inserts then unlink removes', async () => {
    const calls = stubExecCommand();
    const user = userEvent.setup();
    render(<HtmlEditor defaultValue="<p>hi</p>" />);
    await user.click(screen.getByRole('button', { name: 'Insert link' }));
    const url = screen.getByLabelText(/URL/);
    await user.clear(url);
    await user.type(url, 'https://example.com');
    await user.click(screen.getByRole('button', { name: 'Insert' }));
    await user.click(screen.getByRole('button', { name: 'Remove link' }));
    expect(calls).toContainEqual(['createLink', 'https://example.com']);
    expect(calls).toContainEqual(['unlink', undefined]);
  });

  it('image dialog inserts by URL', async () => {
    const calls = stubExecCommand();
    const user = userEvent.setup();
    render(<HtmlEditor defaultValue="<p>hi</p>" />);
    await user.click(screen.getByRole('button', { name: 'Insert image' }));
    const url = screen.getByLabelText(/Image URL/);
    await user.clear(url);
    await user.type(url, 'https://example.com/i.png');
    await user.click(screen.getByRole('button', { name: 'Insert' }));
    expect(calls).toContainEqual(['insertImage', 'https://example.com/i.png']);
  });

  it('image upload posts the file and inserts the returned URL', async () => {
    const calls = stubExecCommand();
    const fetchMock = vi.fn(async (_url: string, _init?: RequestInit) => ({
      ok: true,
      headers: { get: () => 'application/json' },
      json: async () => ({ url: 'https://cdn.example.com/i.png' }),
    }));
    vi.stubGlobal('fetch', fetchMock);
    const user = userEvent.setup();
    render(
      <HtmlEditor defaultValue="<p>hi</p>" imageUpload={{ url: '/upload' }} />
    );
    await user.click(screen.getByRole('button', { name: 'Insert image' }));
    const file = new File(['x'], 'i.png', { type: 'image/png' });
    const input = screen.getByLabelText('Upload image file');
    await user.upload(input, file);
    await waitFor(() => {
      expect(calls).toContainEqual([
        'insertImage',
        'https://cdn.example.com/i.png',
      ]);
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0]?.[0]).toBe('/upload');
  });

  it('image upload failure reports through onError', async () => {
    stubExecCommand();
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => ({
        ok: false,
        status: 500,
        headers: { get: () => '' },
      }))
    );
    const onError = vi.fn();
    const user = userEvent.setup();
    render(
      <HtmlEditor
        defaultValue="<p>hi</p>"
        imageUpload={{ url: '/upload' }}
        onError={onError}
      />
    );
    await user.click(screen.getByRole('button', { name: 'Insert image' }));
    const file = new File(['x'], 'i.png', { type: 'image/png' });
    await user.upload(screen.getByLabelText('Upload image file'), file);
    await waitFor(() =>
      expect(onError).toHaveBeenCalledWith('Upload failed: 500')
    );
  });

  it('table dialog inserts an RxC table', async () => {
    const calls = stubExecCommand();
    const user = userEvent.setup();
    render(<HtmlEditor defaultValue="<p>hi</p>" />);
    await user.click(screen.getByRole('button', { name: 'Insert table' }));
    const rows = screen.getByLabelText('Rows');
    await user.clear(rows);
    await user.type(rows, '3');
    await user.click(screen.getByRole('button', { name: 'Insert' }));
    const inserted = calls.find(([command]) => command === 'insertHTML');
    expect(inserted?.[1]).toContain('<table>');
    expect(inserted?.[1]?.match(/<tr>/g)?.length).toBe(3);
    expect(inserted?.[1]?.match(/<td>/g)?.length).toBe(6);
  });

  it('custom tools execute with the editor api', async () => {
    const calls = stubExecCommand();
    const onExecute = vi.fn();
    const user = userEvent.setup();
    render(
      <HtmlEditor
        defaultValue="<p>hi</p>"
        toolbar={[
          'bold',
          { id: 'shout', label: 'Shout', glyph: '!', onExecute },
        ]}
      />
    );
    await user.click(screen.getByRole('button', { name: 'Shout' }));
    expect(onExecute).toHaveBeenCalledTimes(1);
    const api = onExecute.mock.calls[0]?.[0];
    expect(typeof api.execCommand).toBe('function');
    expect(typeof api.getHtml).toBe('function');
    expect(typeof api.insertHtml).toBe('function');
    api.execCommand('bold');
    expect(calls).toContainEqual(['bold', undefined]);
  });

  it('ref handle exposes execCommand and getHtml', async () => {
    const calls = stubExecCommand();
    const user = userEvent.setup();
    const ref: { current: HtmlEditorHandle | null } = { current: null };
    render(<HtmlEditor ref={ref} defaultValue="<p>hi</p>" />);
    await user.click(screen.getByRole('button', { name: 'Bold' }));
    ref.current?.execCommand('italic');
    expect(ref.current?.getHtml()).toBe('<p>hi</p>');
    expect(calls).toContainEqual(['bold', undefined]);
    expect(calls).toContainEqual(['italic', undefined]);
  });
});
