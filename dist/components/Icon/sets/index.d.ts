import { IconSetDef } from './types';
export type { IconSetDef };
/** Prefixes accepted in `<Icon name="prefix:glyph" />`. */
export type IconSetPrefix = 'feather' | 'lucide' | 'tabler' | 'heroicons' | 'ph' | 'ri' | 'carbon' | 'ion' | 'octicon' | 'mdi' | 'fa6-solid' | 'bi' | 'fluent' | 'material-symbols' | 'simple-icons' | 'fa6-brands';
export declare const iconSets: Record<IconSetPrefix, IconSetDef>;
export declare const iconSetNames: IconSetPrefix[];
