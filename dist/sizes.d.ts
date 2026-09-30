/**
 * Cross-component size scale — see specs/sizes.md.
 * Every component with a `size` prop uses exactly these tiers.
 *
 * Radzen mapping (ButtonSize/AlertSize): xs→ExtraSmall, sm→Small,
 * md→Medium, lg→Large. `xl` is larger than anything Radzen ships.
 * Compact components (SelectBar, SplitButton, ToggleButton) narrow to
 * sm|md|lg only.
 */
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
