import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as RKeyboardEvent,
  type ReactNode,
} from 'react';
import DOMPurify from 'dompurify';
import { Button } from '../Button/Button';
import { Dialog } from '../Dialog/Dialog';
import { Field } from '../Field/Field';
import { Input } from '../Input/Input';
import { Text } from '../Text/Text';
import styles from './HtmlEditor.module.css';

export type HtmlEditorTool =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'separator'
  | 'foreColor'
  | 'backgroundColor'
  | 'formatBlock'
  | 'fontName'
  | 'fontSize'
  | 'unorderedList'
  | 'orderedList'
  | 'indent'
  | 'outdent'
  | 'justifyLeft'
  | 'justifyCenter'
  | 'justifyRight'
  | 'justifyFull'
  | 'link'
  | 'unlink'
  | 'image'
  | 'table'
  | 'undo'
  | 'redo'
  | 'removeFormat'
  | 'source';

export interface HtmlEditorToolApi {
  execCommand: (command: string, value?: string) => boolean;
  getHtml: () => string;
  insertHtml: (html: string) => void;
  focus: () => void;
}

export interface HtmlEditorCustomTool {
  id: string;
  label: string;
  glyph?: ReactNode;
  title?: string;
  onExecute: (api: HtmlEditorToolApi) => void;
}

export type HtmlEditorToolbarItem = HtmlEditorTool | HtmlEditorCustomTool;

export interface HtmlEditorHandle {
  execCommand: (command: string, value?: string) => boolean;
  getHtml: () => string;
}

export interface ImageUploadOptions {
  url: string;
  headers?: Record<string, string>;
  parameterName?: string;
  /** Map the upload response body to the image URL. Defaults to a `{url}` JSON field or a plain-text URL. */
  parseUrl?: (body: unknown) => string;
}

export interface HtmlEditorProps {
  /** Controlled HTML value. Omit for uncontrolled. */
  value?: string;
  /** Initial HTML for uncontrolled mode. */
  defaultValue?: string;
  /** Fires with sanitized HTML on every edit. */
  onChange?: (html: string) => void;
  /** Fires when an upload fails. */
  onError?: (message: string) => void;
  /** Toolbar tools in order. Defaults to the full built-in set. */
  toolbar?: HtmlEditorToolbarItem[];
  /** Image upload wiring for the image tool. Without it the tool inserts by URL. */
  imageUpload?: ImageUploadOptions;
  readOnly?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  /** Sanitize output HTML (DOMPurify). Defaults to true. */
  sanitize?: boolean;
}

export const DEFAULT_HTML_EDITOR_TOOLBAR: HtmlEditorToolbarItem[] = [
  'bold',
  'italic',
  'underline',
  'strikethrough',
  'separator',
  'foreColor',
  'backgroundColor',
  'separator',
  'formatBlock',
  'fontName',
  'fontSize',
  'separator',
  'unorderedList',
  'orderedList',
  'indent',
  'outdent',
  'separator',
  'justifyLeft',
  'justifyCenter',
  'justifyRight',
  'justifyFull',
  'separator',
  'link',
  'unlink',
  'image',
  'table',
  'separator',
  'undo',
  'redo',
  'removeFormat',
  'separator',
  'source',
];

const SIMPLE_COMMANDS: Partial<
  Record<HtmlEditorTool, { label: string; glyph: ReactNode; command: string }>
> = {
  bold: { label: 'Bold', glyph: <b>B</b>, command: 'bold' },
  italic: { label: 'Italic', glyph: <i>I</i>, command: 'italic' },
  underline: { label: 'Underline', glyph: <u>U</u>, command: 'underline' },
  strikethrough: {
    label: 'Strikethrough',
    glyph: <s>S</s>,
    command: 'strikeThrough',
  },
  unorderedList: {
    label: 'Bulleted list',
    glyph: '☰',
    command: 'insertUnorderedList',
  },
  orderedList: {
    label: 'Numbered list',
    glyph: '1☰',
    command: 'insertOrderedList',
  },
  indent: { label: 'Increase indent', glyph: '→', command: 'indent' },
  outdent: { label: 'Decrease indent', glyph: '←', command: 'outdent' },
  justifyLeft: {
    label: 'Align left',
    glyph: (
      <span className={styles.alignGlyph} style={{ textAlign: 'left' }}>
        ≡
      </span>
    ),
    command: 'justifyLeft',
  },
  justifyCenter: {
    label: 'Align center',
    glyph: (
      <span className={styles.alignGlyph} style={{ textAlign: 'center' }}>
        ≡
      </span>
    ),
    command: 'justifyCenter',
  },
  justifyRight: {
    label: 'Align right',
    glyph: (
      <span className={styles.alignGlyph} style={{ textAlign: 'right' }}>
        ≡
      </span>
    ),
    command: 'justifyRight',
  },
  justifyFull: {
    label: 'Justify',
    glyph: (
      <span className={styles.alignGlyph} style={{ textAlign: 'justify' }}>
        ≡
      </span>
    ),
    command: 'justifyFull',
  },
  unlink: { label: 'Remove link', glyph: '⛓̸', command: 'unlink' },
  undo: { label: 'Undo', glyph: '↺', command: 'undo' },
  redo: { label: 'Redo', glyph: '↻', command: 'redo' },
  removeFormat: {
    label: 'Remove formatting',
    glyph: 'Tₓ',
    command: 'removeFormat',
  },
};

const FONT_NAMES = [
  'sans-serif',
  'serif',
  'monospace',
  'Arial',
  'Georgia',
  'Courier New',
];
const FONT_SIZES = ['1', '2', '3', '4', '5', '6', '7'];
const BLOCKS = ['p', 'h1', 'h2', 'h3', 'blockquote', 'pre'];

function execCommand(command: string, value?: string): boolean {
  if (typeof document === 'undefined') return false;
  const exec = (
    document as Document & {
      execCommand?: (
        command: string,
        showUI?: boolean,
        value?: string
      ) => boolean;
    }
  ).execCommand;
  if (typeof exec !== 'function') return false;
  try {
    return exec.call(document, command, false, value);
  } catch {
    return false;
  }
}

/** formatBlock wants `<h1>` in Chromium but bare `h1` in Firefox. */
function execBlock(tag: string): boolean {
  return (
    execCommand('formatBlock', `<${tag}>`) || execCommand('formatBlock', tag)
  );
}

function defaultParseUrl(body: unknown): string {
  if (typeof body === 'string') return body.trim();
  if (body != null && typeof body === 'object' && 'url' in body) {
    const url = (body as { url?: unknown }).url;
    if (typeof url === 'string') return url;
  }
  throw new Error('Upload response has no url');
}

export const HtmlEditor = forwardRef<HtmlEditorHandle, HtmlEditorProps>(
  function HtmlEditor(
    {
      value,
      defaultValue = '',
      onChange,
      onError,
      toolbar = DEFAULT_HTML_EDITOR_TOOLBAR,
      imageUpload,
      readOnly = false,
      disabled = false,
      ariaLabel = 'HTML editor',
      className,
      sanitize = true,
    }: HtmlEditorProps,
    ref
  ) {
    const [sourceMode, setSourceMode] = useState(false);
    const [sourceText, setSourceText] = useState(defaultValue);
    const [prompt, setPrompt] = useState<null | 'link' | 'image' | 'table'>(
      null
    );
    const [linkUrl, setLinkUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [tableRows, setTableRows] = useState(2);
    const [tableCols, setTableCols] = useState(2);
    const [uploading, setUploading] = useState(false);
    const areaRef = useRef<HTMLDivElement>(null);
    const fileRef = useRef<HTMLInputElement>(null);
    // Last committed HTML: remounts (e.g. leaving source mode) render this,
    // since dangerouslySetInnerHTML only applies on mount.
    const committedRef = useRef(defaultValue);

    const clean = useCallback(
      (html: string) => (sanitize ? DOMPurify.sanitize(html) : html),
      [sanitize]
    );

    // Controlled mode: mirror external value into the editable region.
    useEffect(() => {
      const area = areaRef.current;
      if (value !== undefined && area && area.innerHTML !== value) {
        area.innerHTML = value;
      }
      if (value !== undefined) committedRef.current = value;
    }, [value]);

    const emit = useCallback(
      (html: string) => {
        committedRef.current = clean(html);
        onChange?.(committedRef.current);
      },
      [clean, onChange]
    );

    const runValue = useCallback(
      (command: string, commandValue?: string) => {
        if (readOnly || disabled) return false;
        areaRef.current?.focus();
        const ok = execCommand(command, commandValue);
        if (ok) {
          const area = areaRef.current;
          if (area) emit(area.innerHTML);
        }
        return ok;
      },
      [emit, readOnly, disabled]
    );

    const getHtml = useCallback(
      () => areaRef.current?.innerHTML ?? committedRef.current,
      []
    );

    const insertHtml = useCallback(
      (html: string) => {
        runValue('insertHTML', html);
      },
      [runValue]
    );

    const focusArea = useCallback(() => {
      areaRef.current?.focus();
    }, []);

    const toolApi = useMemo<HtmlEditorToolApi>(
      () => ({
        execCommand: runValue,
        getHtml,
        insertHtml,
        focus: focusArea,
      }),
      [runValue, getHtml, insertHtml, focusArea]
    );

    useImperativeHandle(ref, () => ({ execCommand: runValue, getHtml }), [
      runValue,
      getHtml,
    ]);

    const run = useCallback(
      (tool: Exclude<HtmlEditorTool, 'separator' | 'source'>) => {
        const meta = SIMPLE_COMMANDS[tool];
        if (!meta || readOnly || disabled) return;
        runValue(meta.command);
      },
      [runValue, readOnly, disabled]
    );

    const flipSource = useCallback(() => {
      if (readOnly || disabled) return;
      if (!sourceMode) {
        setSourceText(areaRef.current?.innerHTML ?? '');
        setSourceMode(true);
      } else {
        setSourceMode(false);
        emit(sourceText);
      }
    }, [sourceMode, sourceText, emit, readOnly, disabled]);

    const onKeyDown = useCallback(
      (e: RKeyboardEvent<HTMLDivElement>) => {
        if (!(e.ctrlKey || e.metaKey) || readOnly || disabled) return;
        const key = e.key.toLowerCase();
        const tool =
          key === 'b'
            ? 'bold'
            : key === 'i'
              ? 'italic'
              : key === 'u'
                ? 'underline'
                : null;
        if (!tool) return;
        e.preventDefault();
        run(tool);
      },
      [run, readOnly, disabled]
    );

    const onInput = useCallback(() => {
      const area = areaRef.current;
      if (area) emit(area.innerHTML);
    }, [emit]);

    const insertLink = useCallback(() => {
      if (!linkUrl.trim()) return;
      runValue('createLink', linkUrl.trim());
      setLinkUrl('');
      setPrompt(null);
    }, [linkUrl, runValue]);

    const insertImageUrl = useCallback(() => {
      if (!imageUrl.trim()) return;
      runValue('insertImage', imageUrl.trim());
      setImageUrl('');
      setPrompt(null);
    }, [imageUrl, runValue]);

    const uploadImage = useCallback(
      async (file: File) => {
        if (!imageUpload) return;
        setUploading(true);
        try {
          const form = new FormData();
          form.append(imageUpload.parameterName ?? 'file', file);
          const response = await fetch(imageUpload.url, {
            method: 'POST',
            headers: imageUpload.headers,
            body: form,
          });
          if (!response.ok)
            throw new Error(`Upload failed: ${response.status}`);
          const contentType = response.headers.get('content-type') ?? '';
          const body = contentType.includes('application/json')
            ? await response.json()
            : await response.text();
          const url = (imageUpload.parseUrl ?? defaultParseUrl)(body);
          runValue('insertImage', url);
        } catch (err) {
          onError?.(err instanceof Error ? err.message : 'Image upload failed');
        } finally {
          setUploading(false);
          setPrompt(null);
        }
      },
      [imageUpload, onError, runValue]
    );

    const insertTable = useCallback(() => {
      const rows = Math.max(1, Math.min(10, Math.floor(tableRows) || 1));
      const cols = Math.max(1, Math.min(10, Math.floor(tableCols) || 1));
      const cells = Array.from({ length: cols }, () => '<td><br></td>').join(
        ''
      );
      const body = Array.from({ length: rows }, () => `<tr>${cells}</tr>`).join(
        ''
      );
      runValue('insertHTML', `<table><tbody>${body}</tbody></table>`);
      setPrompt(null);
    }, [tableRows, tableCols, runValue]);

    const renderTool = (tool: HtmlEditorToolbarItem, i: number) => {
      if (tool === 'separator') {
        return (
          <span
            key={`sep-${i}`}
            role="separator"
            className={styles.separator}
          />
        );
      }
      if (typeof tool === 'object') {
        return (
          <button
            key={tool.id}
            type="button"
            className={styles.tool}
            aria-label={tool.label}
            title={tool.title ?? tool.label}
            disabled={disabled}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              if (!readOnly && !disabled) tool.onExecute(toolApi);
            }}
          >
            {tool.glyph ?? tool.label}
          </button>
        );
      }
      if (tool === 'source') {
        return (
          <button
            key="source"
            type="button"
            className={styles.tool}
            aria-label="Source"
            aria-pressed={sourceMode}
            disabled={disabled}
            onMouseDown={(e) => e.preventDefault()}
            onClick={flipSource}
          >
            {'</>'}
          </button>
        );
      }
      if (tool === 'foreColor' || tool === 'backgroundColor') {
        const label = tool === 'foreColor' ? 'Text color' : 'Background color';
        return (
          <label key={tool} className={styles.tool} title={label}>
            <span aria-hidden="true">A</span>
            <input
              type="color"
              aria-label={label}
              disabled={disabled}
              className={styles.colorInput}
              onMouseDown={(e) => e.preventDefault()}
              onChange={(e) =>
                runValue(
                  tool === 'foreColor' ? 'foreColor' : 'hiliteColor',
                  e.target.value
                )
              }
            />
          </label>
        );
      }
      if (
        tool === 'formatBlock' ||
        tool === 'fontName' ||
        tool === 'fontSize'
      ) {
        const label =
          tool === 'formatBlock'
            ? 'Format block'
            : tool === 'fontName'
              ? 'Font name'
              : 'Font size';
        const options =
          tool === 'formatBlock'
            ? BLOCKS
            : tool === 'fontName'
              ? FONT_NAMES
              : FONT_SIZES;
        return (
          <select
            key={tool}
            aria-label={label}
            title={label}
            disabled={disabled}
            defaultValue=""
            className={styles.select}
            onMouseDown={(e) => e.preventDefault()}
            onChange={(e) => {
              if (!e.target.value || readOnly || disabled) return;
              if (tool === 'formatBlock') execBlock(e.target.value);
              else if (tool === 'fontName')
                runValue('fontName', e.target.value);
              else runValue('fontSize', e.target.value);
              e.target.value = '';
            }}
          >
            <option value="" disabled>
              {tool === 'formatBlock' ? '¶' : tool === 'fontName' ? 'Aa' : '12'}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      }
      if (tool === 'link') {
        return (
          <button
            key="link"
            type="button"
            className={styles.tool}
            aria-label="Insert link"
            disabled={disabled}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              if (!readOnly && !disabled) {
                setLinkUrl('');
                setPrompt('link');
              }
            }}
          >
            🔗
          </button>
        );
      }
      if (tool === 'image') {
        return (
          <button
            key="image"
            type="button"
            className={styles.tool}
            aria-label="Insert image"
            disabled={disabled}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              if (!readOnly && !disabled) {
                setImageUrl('');
                setPrompt('image');
              }
            }}
          >
            🖼
          </button>
        );
      }
      if (tool === 'table') {
        return (
          <button
            key="table"
            type="button"
            className={styles.tool}
            aria-label="Insert table"
            disabled={disabled}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              if (!readOnly && !disabled) {
                setTableRows(2);
                setTableCols(2);
                setPrompt('table');
              }
            }}
          >
            ▦
          </button>
        );
      }
      const meta = SIMPLE_COMMANDS[tool];
      if (!meta) return null;
      return (
        <button
          key={tool}
          type="button"
          className={styles.tool}
          aria-label={meta.label}
          disabled={disabled}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => run(tool)}
        >
          {meta.glyph}
        </button>
      );
    };

    return (
      <div className={[styles.editor, className].filter(Boolean).join(' ')}>
        <div
          role="toolbar"
          aria-label={`${ariaLabel} toolbar`}
          className={styles.toolbar}
        >
          {toolbar.map((tool, i) => renderTool(tool, i))}
        </div>
        {sourceMode ? (
          <textarea
            className={styles.source}
            aria-label={`${ariaLabel} source`}
            value={sourceText}
            disabled={disabled}
            readOnly={readOnly}
            onChange={(e) => {
              setSourceText(e.target.value);
              emit(e.target.value);
            }}
          />
        ) : (
          <div
            ref={areaRef}
            className={styles.area}
            contentEditable={!readOnly && !disabled}
            suppressContentEditableWarning
            role="textbox"
            tabIndex={0}
            aria-label={ariaLabel}
            aria-multiline="true"
            aria-readonly={readOnly || undefined}
            aria-disabled={disabled || undefined}
            dangerouslySetInnerHTML={{ __html: committedRef.current }}
            onInput={onInput}
            onKeyDown={onKeyDown}
          />
        )}
        <Dialog
          open={prompt !== null}
          onClose={() => setPrompt(null)}
          title={
            prompt === 'link'
              ? 'Insert link'
              : prompt === 'image'
                ? 'Insert image'
                : 'Insert table'
          }
          size="sm"
          footer={
            <>
              <Button variant="text" onClick={() => setPrompt(null)}>
                Cancel
              </Button>
              {prompt === 'link' && (
                <Button onClick={insertLink}>Insert</Button>
              )}
              {prompt === 'image' && (
                <Button onClick={insertImageUrl} disabled={uploading}>
                  Insert
                </Button>
              )}
              {prompt === 'table' && (
                <Button onClick={insertTable}>Insert</Button>
              )}
            </>
          }
        >
          {prompt === 'link' && (
            <Field label="URL" required>
              {({ inputId }) => (
                <Input
                  id={inputId}
                  value={linkUrl}
                  placeholder="https://"
                  onChange={(e) => setLinkUrl(e.target.value)}
                />
              )}
            </Field>
          )}
          {prompt === 'image' && (
            <>
              <Field label="Image URL">
                {({ inputId }) => (
                  <Input
                    id={inputId}
                    value={imageUrl}
                    placeholder="https://"
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                )}
              </Field>
              {imageUpload && (
                <Field label="Or upload a file">
                  {({ inputId }) => (
                    <input
                      id={inputId}
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      aria-label="Upload image file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) void uploadImage(file);
                        e.target.value = '';
                      }}
                    />
                  )}
                </Field>
              )}
              {uploading && <Text textStyle="body2">Uploading…</Text>}
            </>
          )}
          {prompt === 'table' && (
            <>
              <Field label="Rows">
                {({ inputId }) => (
                  <Input
                    id={inputId}
                    type="number"
                    value={String(tableRows)}
                    onChange={(e) => setTableRows(Number(e.target.value))}
                  />
                )}
              </Field>
              <Field label="Columns">
                {({ inputId }) => (
                  <Input
                    id={inputId}
                    type="number"
                    value={String(tableCols)}
                    onChange={(e) => setTableCols(Number(e.target.value))}
                  />
                )}
              </Field>
            </>
          )}
        </Dialog>
      </div>
    );
  }
);
