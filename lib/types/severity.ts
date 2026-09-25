/**
 * Severity value domain behind every component's `severity` prop —
 * the per-component unions narrow this (e.g. ProgressTone narrows to
 * 4 severities). Internal plumbing, not a prop: no component accepts
 * `hue`, and native `style` is always plain CSS.
 */
export type Severity =
  | 'primary'
  | 'secondary'
  | 'base'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';
