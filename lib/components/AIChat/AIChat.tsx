import { useState, type FormEvent, type ReactNode } from 'react';
import { Button } from '../Button/Button';
import { TextBox } from '../TextBox/TextBox';
import styles from './AIChat.module.css';

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
export function AIChat({
  messages = [],
  onSend,
  placeholder = 'Type a message…',
  sendText = 'Send',
  inputLabel = 'Message',
  ariaLabel = 'Chat',
  messageTemplate,
  inputTemplate,
  loading = false,
  disabled = false,
  className,
}: AIChatProps) {
  const [draft, setDraft] = useState('');
  const busy = loading || disabled;
  const canSend = draft.trim().length > 0 && !busy;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || busy) return;
    setDraft('');
    void onSend?.(text);
  };

  const inputRow = (
    <form className={styles.inputRow} onSubmit={(e) => void submit(e)}>
      <TextBox
        value={draft}
        placeholder={placeholder}
        aria-label={inputLabel}
        disabled={busy}
        onChange={(e) => setDraft(e.target.value)}
      />
      <Button type="submit" disabled={!canSend} loading={loading}>
        {sendText}
      </Button>
    </form>
  );

  return (
    <div
      className={[styles.chat, className].filter(Boolean).join(' ')}
      role="log"
      aria-label={ariaLabel}
      aria-live="polite"
    >
      <div className={styles.messages}>
        {messages.map((message, i) =>
          messageTemplate ? (
            <div key={i}>{messageTemplate(message, i)}</div>
          ) : (
            <div
              key={i}
              className={[styles.message, styles[message.role]]
                .filter(Boolean)
                .join(' ')}
            >
              {message.content}
            </div>
          )
        )}
        {loading && <div className={styles.typing}>…</div>}
      </div>
      {inputTemplate ? inputTemplate(inputRow) : inputRow}
    </div>
  );
}
