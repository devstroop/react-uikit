import { ReactNode } from 'react';
export type HtmlEditorTool = 'bold' | 'italic' | 'underline' | 'strikethrough' | 'separator' | 'foreColor' | 'backgroundColor' | 'formatBlock' | 'fontName' | 'fontSize' | 'unorderedList' | 'orderedList' | 'indent' | 'outdent' | 'justifyLeft' | 'justifyCenter' | 'justifyRight' | 'justifyFull' | 'link' | 'unlink' | 'image' | 'table' | 'undo' | 'redo' | 'removeFormat' | 'source';
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
export declare const DEFAULT_HTML_EDITOR_TOOLBAR: HtmlEditorToolbarItem[];
export declare const HtmlEditor: import('react').ForwardRefExoticComponent<HtmlEditorProps & import('react').RefAttributes<HtmlEditorHandle>>;
