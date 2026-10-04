/**
 * NotificationService entrypoint: re-exports the notify surface
 * (`notify` + severity helpers + message type) so the notification
 * contract has one import surface. The implementation lives in
 * `./Toast`; this module only fixes the spec-facing name.
 */
export type { NotifyMessage } from '../Toast/Toast';
