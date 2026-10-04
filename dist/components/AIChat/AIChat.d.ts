import { ReactNode } from 'react';
export type ChatRole = 'user' | 'assistant' | 'system';
export interface ChatMessage {
    role: ChatRole;
    content: ReactNode;
}
export interface AIChatProps {
    /** Controlled message list. */
    messages?: ChatMessage[];
    /**
     * Send handler: called with the trimmed input text. Append the user
     * message and, when ready, the assistant reply — streaming lands in a
     * follow-up (the list already announces arrivals via aria-live).
     */
    onSend?: (text: string) => void | Promise<void>;
    placeholder?: string;
    sendText?: string;
    inputLabel?: string;
    ariaLabel?: string;
    /** Override message rendering (receives message + index). */
    messageTemplate?: (message: ChatMessage, index: number) => ReactNode;
    /** Override the input row (receives the default row element). */
    inputTemplate?: (input: ReactNode) => ReactNode;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
}
/**
 * Non-streaming chat surface (uikit#100): message list with role styling,
 * input + send, aria-live announcements for incoming messages.
 */
export declare function AIChat({ messages, onSend, placeholder, sendText, inputLabel, ariaLabel, messageTemplate, inputTemplate, loading, disabled, className, }: AIChatProps): import("react").JSX.Element;
