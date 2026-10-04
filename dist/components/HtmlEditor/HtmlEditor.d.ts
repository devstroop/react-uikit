export type HtmlEditorTool = 'bold' | 'italic' | 'underline' | 'strikethrough' | 'separator' | 'undo' | 'redo' | 'removeFormat' | 'source';
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
export declare function HtmlEditor({ value, defaultValue, onChange, toolbar, readOnly, disabled, ariaLabel, className, sanitize, }: HtmlEditorProps): import("react").JSX.Element;
