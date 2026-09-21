export type { ComponentSize, CompactSize } from "./size";
export type { Variant } from "./variant";
export { resolveVariant } from "./variant";
export type { Severity } from "./severity";
export type { Shade } from "./shade";
export { shadeClass } from "./shade";
// Placement/position types re-exported from component types for now; unified type is string-based.
export type Placement = "top" | "right" | "bottom" | "left";
export type ToastPlacement = "top-left" | "top-right" | "bottom-left" | "bottom-right";
