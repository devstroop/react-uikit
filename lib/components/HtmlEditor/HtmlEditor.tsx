import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as RKeyboardEvent,
  type ReactNode,
} from 'react';
import DOMPurify from 'dompurify';
import styles from './HtmlEditor.module.css';

export type HtmlEditorTool =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'separator'
  | 'undo'
  | 'redo'
  | 'removeFormat'
  | 'source';

export interface HtmlEditorProps {
  /** Controlled HTML value. Omit for uncontrolled. */
  value?: string;
  /** Initial HTML for uncontrolled mode. */
  defaultValue?: string;
  /** Fires with sanitized HTML on every edit. */
  onChange?: (html: string) => void;
  /** Toolbar tools in order. Defaults to the full core set. */
  toolbar?: HtmlEditorTool[];
  readOnly?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  /** Sanitize output HTML (DOMPurify). Defaults to true. */
  sanitize?: boolean;
}

const DEFAULT_TOOLBAR: HtmlEditorTool[] = [
  'bold',
  'italic',
  'underline',
  'strikethrough',
  'separator',
  'undo',
  'redo',
  'removeFormat',
  'separator',
  'source',
];

const TOOL_META: Record<
  Exclude<HtmlEditorTool, 'separator'>,
  { label: string; glyph: ReactNode; command: string }
> = {
  bold: { label: 'Bold', glyph: <b>B</b>, command: 'bold' },
  italic: { label: 'Italic', glyph: <i>I</i>, command: 'italic' },
  underline: { label: 'Underline', glyph: <u>U</u>, command: 'underline' },
  strikethrough: {
    label: 'Strikethrough',
    glyph: <s>S</s>,
    command: 'strikeThrough',
  },
  undo: { label: 'Undo', glyph: '↺', command: 'undo' },
  redo: { label: 'Redo', glyph: '↻', command: 'redo' },
  removeFormat: {
    label: 'Remove formatting',
    glyph: 'Tₓ',
    command: 'removeFormat',
  },
  source: { label: 'Source', glyph: '</>', command: 'source' },
};

function execCommand(command: string): boolean {
  if (typeof document === 'undefined') return false;
  const exec = (
    document as Document & {
      execCommand?: (command: string) => boolean;
    }
  ).execCommand;
  if (typeof exec !== 'function') return false;
  try {
    return exec.call(document, command);
  } catch {
    return false;
  }
}

export function HtmlEditor({
  value,
  defaultValue = '',
  onChange,
  toolbar = DEFAULT_TOOLBAR,
  readOnly = false,
  disabled = false,
  ariaLabel = 'HTML editor',
  className,
  sanitize = true,
}: HtmlEditorProps) {
  const [sourceMode, setSourceMode] = useState(false);
  const [sourceText, setSourceText] = useState(defaultValue);
  const areaRef = useRef<HTMLDivElement>(null);
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

  const run = useCallback(
    (tool: Exclude<HtmlEditorTool, 'separator' | 'source'>) => {
      if (readOnly || disabled) return;
      areaRef.current?.focus();
      if (execCommand(TOOL_META[tool].command)) {
        const area = areaRef.current;
        if (area) emit(area.innerHTML);
      }
    },
    [emit, readOnly, disabled]
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
  }, [sourceMode, sourceText, clean, emit, readOnly, disabled]);

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

  return (
    <div className={[styles.editor, className].filter(Boolean).join(' ')}>
      <div
        role="toolbar"
        aria-label={`${ariaLabel} toolbar`}
        className={styles.toolbar}
      >
        {toolbar.map((tool, i) =>
          tool === 'separator' ? (
            <span
              key={`sep-${i}`}
              role="separator"
              className={styles.separator}
            />
          ) : tool === 'source' ? (
            <button
              key="source"
              type="button"
              className={styles.tool}
              aria-label="Source"
              aria-pressed={sourceMode}
              disabled={disabled}
              // Keep the selection alive: mousedown on a toolbar button
              // would otherwise blur the editable region first.
              onMouseDown={(e) => e.preventDefault()}
              onClick={flipSource}
            >
              {'</>'}
            </button>
          ) : (
            <button
              key={tool}
              type="button"
              className={styles.tool}
              aria-label={TOOL_META[tool].label}
              disabled={disabled}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => run(tool)}
            >
              {TOOL_META[tool].glyph}
            </button>
          )
        )}
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
          aria-label={ariaLabel}
          aria-multiline="true"
          aria-readonly={readOnly || undefined}
          aria-disabled={disabled || undefined}
          dangerouslySetInnerHTML={{ __html: committedRef.current }}
          onInput={onInput}
          onKeyDown={onKeyDown}
        />
      )}
    </div>
  );
}
