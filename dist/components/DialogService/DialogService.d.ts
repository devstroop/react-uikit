/**
 * DialogService entrypoint: re-exports the provider API (host +
 * `useDialog`) so the service contract has one import surface. The
 * implementation lives in `../Dialog/DialogProvider`.
 */
export { DialogProvider, useDialog, } from '../Dialog/DialogProvider';
export type { AlertOptions, ConfirmOptions, DialogApi, DialogProviderProps, OpenOptions, OpenSideOptions, } from '../Dialog/DialogProvider';
