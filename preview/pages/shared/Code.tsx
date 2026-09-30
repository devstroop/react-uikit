import type { ReactNode } from 'react';

/**
 * Inline code chip for demo blurbs (Radzen demo prose parity): props and
 * values like `variant="flat"` render as code without markdown. Section
 * descriptions accept ReactNode precisely so this stays usable.
 */
export function Code({ children }: { children: ReactNode }) {
  return (
    <code
      style={{
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
        fontSize: '0.9em',
        background: 'var(--dx-surface-container-color)',
        border: '1px solid var(--dx-border-color)',
        borderRadius: 4,
        padding: '0 4px',
      }}
    >
      {children}
    </code>
  );
}
