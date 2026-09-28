/**
 * Ingest curated icon sets from the Iconify API into
 * lib/components/Icon/sets/*.ts (bundled, zero runtime deps).
 *
 * Usage: npm run icons:ingest   (requires network; output is committed)
 *
 * The manifest below maps our shared concept names (the 43 legacy glyph
 * names) to each set's actual Iconify names. Sets that lack a concept
 * simply omit it. Brand sets (simple-icons, fa6-brands) use their own
 * name lists. Bodies are stored verbatim (whitespace-collapsed); the Icon
 * component supplies root fill/stroke per set style.
 *
 * Exits non-zero when a requested icon is not found, so a renamed or
 * removed Iconify icon can never be dropped silently. The npm script
 * chains Prettier because raw output uses JSON-quoted keys.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const OUT_DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'lib',
  'components',
  'Icon',
  'sets'
);

/** concept → per-set Iconify name (null = omit from that set). */
const SETS = {
  feather: {
    style: 'stroke',
    strokeWidth: 2,
    icons: {
      check: 'check',
      close: 'x',
      'chevron-down': 'chevron-down',
      'chevron-left': 'chevron-left',
      'chevron-right': 'chevron-right',
      'chevron-up': 'chevron-up',
      search: 'search',
      plus: 'plus',
      minus: 'minus',
      alert: 'alert-triangle',
      info: 'info',
      'arrow-right': 'arrow-right',
      'arrow-left': 'arrow-left',
      'external-link': 'external-link',
      copy: 'copy',
      trash: 'trash',
      edit: 'edit',
      settings: 'settings',
      user: 'user',
      users: 'users',
      download: 'download',
      upload: 'upload',
      menu: 'menu',
      'more-horizontal': 'more-horizontal',
      mail: 'mail',
      lock: 'lock',
      eye: 'eye',
      'eye-off': 'eye-off',
      refresh: 'refresh-cw',
      calendar: 'calendar',
      clock: 'clock',
      'check-circle': 'check-circle',
      'x-circle': 'x-circle',
      shield: 'shield',
      globe: 'globe',
      file: 'file',
      folder: 'folder',
      home: 'home',
      key: 'key',
      link: 'link',
      star: 'star',
      'star-outline': 'star',
      ban: 'slash',
    },
  },
  lucide: {
    style: 'stroke',
    strokeWidth: 2,
    icons: {
      check: 'check',
      close: 'x',
      'chevron-down': 'chevron-down',
      'chevron-left': 'chevron-left',
      'chevron-right': 'chevron-right',
      'chevron-up': 'chevron-up',
      search: 'search',
      plus: 'plus',
      minus: 'minus',
      alert: 'triangle-alert',
      info: 'info',
      'arrow-right': 'arrow-right',
      'arrow-left': 'arrow-left',
      'external-link': 'external-link',
      copy: 'copy',
      trash: 'trash',
      edit: 'square-pen',
      settings: 'settings',
      user: 'user',
      users: 'users',
      download: 'download',
      upload: 'upload',
      menu: 'menu',
      'more-horizontal': 'ellipsis',
      mail: 'mail',
      lock: 'lock',
      eye: 'eye',
      'eye-off': 'eye-off',
      refresh: 'refresh-cw',
      calendar: 'calendar',
      clock: 'clock',
      'check-circle': 'circle-check',
      'x-circle': 'circle-x',
      shield: 'shield',
      globe: 'globe',
      file: 'file',
      folder: 'folder',
      home: 'house',
      key: 'key',
      link: 'link',
      star: 'star',
      'star-outline': 'star',
      ban: 'ban',
    },
  },
  tabler: {
    style: 'stroke',
    strokeWidth: 2,
    icons: {
      check: 'check',
      close: 'x',
      'chevron-down': 'chevron-down',
      'chevron-left': 'chevron-left',
      'chevron-right': 'chevron-right',
      'chevron-up': 'chevron-up',
      search: 'search',
      plus: 'plus',
      minus: 'minus',
      alert: 'alert-triangle',
      info: 'info-circle',
      'arrow-right': 'arrow-right',
      'arrow-left': 'arrow-left',
      'external-link': 'external-link',
      copy: 'copy',
      trash: 'trash',
      edit: 'edit',
      settings: 'settings',
      user: 'user',
      users: 'users',
      download: 'download',
      upload: 'upload',
      menu: 'menu',
      'more-horizontal': 'dots',
      mail: 'mail',
      lock: 'lock',
      eye: 'eye',
      'eye-off': 'eye-off',
      refresh: 'refresh',
      calendar: 'calendar',
      clock: 'clock',
      'check-circle': 'circle-check',
      'x-circle': 'circle-x',
      shield: 'shield',
      globe: 'globe',
      file: 'file',
      folder: 'folder',
      home: 'home',
      key: 'key',
      link: 'link',
      star: 'star',
      'star-outline': 'star',
      ban: 'ban',
    },
  },
  heroicons: {
    style: 'stroke',
    strokeWidth: 1.5,
    icons: {
      check: 'check',
      close: 'x-mark',
      'chevron-down': 'chevron-down',
      'chevron-left': 'chevron-left',
      'chevron-right': 'chevron-right',
      'chevron-up': 'chevron-up',
      search: 'magnifying-glass',
      plus: 'plus',
      minus: 'minus',
      alert: 'exclamation-triangle',
      info: 'information-circle',
      'arrow-right': 'arrow-right',
      'arrow-left': 'arrow-left',
      'external-link': 'arrow-top-right-on-square',
      copy: 'clipboard-document',
      trash: 'trash',
      edit: 'pencil-square',
      settings: 'cog-6-tooth',
      user: 'user',
      users: 'users',
      download: 'arrow-down-tray',
      upload: 'arrow-up-tray',
      menu: 'bars-3',
      'more-horizontal': 'ellipsis-horizontal',
      mail: 'envelope',
      lock: 'lock-closed',
      eye: 'eye',
      'eye-off': 'eye-slash',
      refresh: 'arrow-path',
      calendar: 'calendar-days',
      clock: 'clock',
      'check-circle': 'check-circle',
      'x-circle': 'x-circle',
      shield: 'shield-check',
      globe: 'globe-alt',
      file: 'document',
      folder: 'folder',
      home: 'home',
      key: 'key',
      link: 'link',
      star: 'star-solid',
      'star-outline': 'star',
      ban: 'no-symbol',
    },
  },
  ph: {
    style: 'fill',
    icons: {
      check: 'check',
      close: 'x',
      'chevron-down': 'caret-down',
      'chevron-left': 'caret-left',
      'chevron-right': 'caret-right',
      'chevron-up': 'caret-up',
      search: 'magnifying-glass',
      plus: 'plus',
      minus: 'minus',
      alert: 'warning',
      info: 'info',
      'arrow-right': 'arrow-right',
      'arrow-left': 'arrow-left',
      'external-link': 'arrow-square-out',
      copy: 'copy',
      trash: 'trash',
      edit: 'pencil',
      settings: 'gear',
      user: 'user',
      users: 'users',
      download: 'download',
      upload: 'upload',
      menu: 'list',
      'more-horizontal': 'dots-three',
      mail: 'envelope',
      lock: 'lock',
      eye: 'eye',
      'eye-off': 'eye-slash',
      refresh: 'arrow-clockwise',
      calendar: 'calendar',
      clock: 'clock',
      'check-circle': 'check-circle',
      'x-circle': 'x-circle',
      shield: 'shield',
      globe: 'globe',
      file: 'file',
      folder: 'folder',
      home: 'house',
      key: 'key',
      link: 'link',
      star: 'star-fill',
      'star-outline': 'star',
      ban: 'prohibit',
    },
  },
  ri: {
    style: 'fill',
    icons: {
      check: 'check-line',
      close: 'close-line',
      'chevron-down': 'arrow-down-s-line',
      'chevron-left': 'arrow-left-s-line',
      'chevron-right': 'arrow-right-s-line',
      'chevron-up': 'arrow-up-s-line',
      search: 'search-line',
      plus: 'add-line',
      minus: 'subtract-line',
      alert: 'error-warning-line',
      info: 'information-line',
      'arrow-right': 'arrow-right-line',
      'arrow-left': 'arrow-left-line',
      'external-link': 'external-link-line',
      copy: 'file-copy-line',
      trash: 'delete-bin-line',
      edit: 'edit-line',
      settings: 'settings-line',
      user: 'user-line',
      users: 'group-line',
      download: 'download-line',
      upload: 'upload-line',
      menu: 'menu-line',
      'more-horizontal': 'more-line',
      mail: 'mail-line',
      lock: 'lock-line',
      eye: 'eye-line',
      'eye-off': 'eye-off-line',
      refresh: 'refresh-line',
      calendar: 'calendar-line',
      clock: 'time-line',
      'check-circle': 'checkbox-circle-line',
      'x-circle': 'close-circle-line',
      shield: 'shield-line',
      globe: 'global-line',
      file: 'file-line',
      folder: 'folder-line',
      home: 'home-line',
      key: 'key-2-line',
      link: 'link',
      star: 'star-fill',
      'star-outline': 'star-line',
      ban: 'forbid-line',
    },
  },
  carbon: {
    style: 'fill',
    icons: {
      check: 'checkmark',
      close: 'close',
      'chevron-down': 'chevron-down',
      'chevron-left': 'chevron-left',
      'chevron-right': 'chevron-right',
      'chevron-up': 'chevron-up',
      search: 'search',
      plus: 'add',
      minus: 'subtract',
      alert: 'warning',
      info: 'information',
      'arrow-right': 'arrow-right',
      'arrow-left': 'arrow-left',
      'external-link': 'launch',
      copy: 'copy',
      trash: 'trash-can',
      edit: 'edit',
      settings: 'settings',
      user: 'user',
      users: 'user-multiple',
      download: 'download',
      upload: 'upload',
      menu: 'menu',
      'more-horizontal': 'overflow-menu-horizontal',
      mail: 'email',
      lock: 'locked',
      eye: 'view',
      'eye-off': 'view-off',
      refresh: 'renew',
      calendar: 'calendar',
      clock: 'time',
      'check-circle': 'checkmark-outline',
      'x-circle': 'close-outline',
      shield: 'security',
      globe: 'globe',
      file: 'document',
      folder: 'folder',
      home: 'home',
      key: 'key',
      link: 'link',
      star: 'star-filled',
      'star-outline': 'star',
      ban: 'square-slash',
    },
  },
  ion: {
    style: 'stroke',
    icons: {
      check: 'checkmark',
      close: 'close',
      'chevron-down': 'chevron-down',
      'chevron-left': 'chevron-back',
      'chevron-right': 'chevron-forward',
      'chevron-up': 'chevron-up',
      search: 'search',
      plus: 'add',
      minus: 'remove',
      alert: 'warning',
      info: 'information-circle',
      'arrow-right': 'arrow-forward',
      'arrow-left': 'arrow-back',
      'external-link': 'open',
      copy: 'copy',
      trash: 'trash',
      edit: 'create',
      settings: 'settings',
      user: 'person',
      users: 'people',
      download: 'download',
      upload: 'upload',
      menu: 'menu',
      'more-horizontal': 'ellipsis-horizontal',
      mail: 'mail',
      lock: 'lock-closed',
      eye: 'eye',
      'eye-off': 'eye-off',
      refresh: 'refresh',
      calendar: 'calendar',
      clock: 'time',
      'check-circle': 'checkmark-circle',
      'x-circle': 'close-circle',
      shield: 'shield',
      globe: 'globe',
      file: 'document',
      folder: 'folder',
      home: 'home',
      key: 'key',
      link: 'link',
      star: 'star',
      'star-outline': 'star-outline',
      ban: 'ban',
    },
  },
  octicon: {
    style: 'fill',
    icons: {
      check: 'check',
      close: 'x',
      'chevron-down': 'chevron-down',
      'chevron-left': 'chevron-left',
      'chevron-right': 'chevron-right',
      'chevron-up': 'chevron-up',
      search: 'search',
      plus: 'plus',
      minus: 'dash',
      alert: 'alert',
      info: 'info',
      'arrow-right': 'arrow-right',
      'arrow-left': 'arrow-left',
      'external-link': 'link-external',
      trash: 'trashcan',
      edit: 'pencil',
      settings: 'gear',
      user: 'person',
      menu: 'three-bars',
      'more-horizontal': 'ellipsis',
      mail: 'mail',
      lock: 'lock',
      eye: 'eye',
      'eye-off': 'eye-closed',
      refresh: 'sync',
      calendar: 'calendar',
      clock: 'clock',
      'check-circle': 'issue-closed',
      shield: 'shield',
      globe: 'globe',
      file: 'file',
      folder: 'file-directory',
      home: 'home',
      key: 'key',
      link: 'link',
      star: 'star',
      'star-outline': 'star',
      ban: 'circle-slash',
    },
  },
  mdi: {
    style: 'fill',
    icons: {
      check: 'check',
      close: 'close',
      'chevron-down': 'chevron-down',
      'chevron-left': 'chevron-left',
      'chevron-right': 'chevron-right',
      'chevron-up': 'chevron-up',
      search: 'magnify',
      plus: 'plus',
      minus: 'minus',
      alert: 'alert',
      info: 'information',
      'arrow-right': 'arrow-right',
      'arrow-left': 'arrow-left',
      'external-link': 'open-in-new',
      copy: 'content-copy',
      trash: 'delete',
      edit: 'pencil',
      settings: 'cog',
      user: 'account',
      users: 'account-multiple',
      download: 'download',
      upload: 'upload',
      menu: 'menu',
      'more-horizontal': 'dots-horizontal',
      mail: 'email',
      lock: 'lock',
      eye: 'eye',
      'eye-off': 'eye-off',
      refresh: 'refresh',
      calendar: 'calendar',
      clock: 'clock',
      'check-circle': 'check-circle',
      'x-circle': 'close-circle',
      shield: 'shield',
      globe: 'earth',
      file: 'file',
      folder: 'folder',
      home: 'home',
      key: 'key',
      link: 'link',
      star: 'star',
      'star-outline': 'star-outline',
      ban: 'do-not-disturb',
    },
  },
  'fa6-solid': {
    style: 'fill',
    icons: {
      check: 'check',
      close: 'xmark',
      'chevron-down': 'chevron-down',
      'chevron-left': 'chevron-left',
      'chevron-right': 'chevron-right',
      'chevron-up': 'chevron-up',
      search: 'magnifying-glass',
      plus: 'plus',
      minus: 'minus',
      alert: 'triangle-exclamation',
      info: 'circle-info',
      'arrow-right': 'arrow-right',
      'arrow-left': 'arrow-left',
      'external-link': 'arrow-up-right-from-square',
      copy: 'copy',
      trash: 'trash-can',
      edit: 'pen-to-square',
      settings: 'gear',
      user: 'user',
      users: 'users',
      download: 'download',
      upload: 'upload',
      menu: 'bars',
      'more-horizontal': 'ellipsis',
      mail: 'envelope',
      lock: 'lock',
      eye: 'eye',
      'eye-off': 'eye-slash',
      refresh: 'rotate-right',
      calendar: 'calendar',
      clock: 'clock',
      'check-circle': 'circle-check',
      'x-circle': 'circle-xmark',
      shield: 'shield',
      globe: 'globe',
      file: 'file',
      folder: 'folder',
      home: 'house',
      key: 'key',
      link: 'link',
      star: 'star',
      ban: 'ban',
    },
  },
  bi: {
    style: 'fill',
    icons: {
      check: 'check',
      close: 'x',
      'chevron-down': 'chevron-down',
      'chevron-left': 'chevron-left',
      'chevron-right': 'chevron-right',
      'chevron-up': 'chevron-up',
      search: 'search',
      plus: 'plus',
      minus: 'dash',
      alert: 'exclamation-triangle',
      info: 'info-circle',
      'arrow-right': 'arrow-right',
      'arrow-left': 'arrow-left',
      'external-link': 'box-arrow-up-right',
      copy: 'copy',
      trash: 'trash',
      edit: 'pencil-square',
      settings: 'gear',
      user: 'person',
      users: 'people',
      download: 'download',
      upload: 'upload',
      menu: 'list',
      'more-horizontal': 'three-dots',
      mail: 'envelope',
      lock: 'lock',
      eye: 'eye',
      'eye-off': 'eye-slash',
      refresh: 'arrow-clockwise',
      calendar: 'calendar',
      clock: 'clock',
      'check-circle': 'check-circle',
      'x-circle': 'x-circle',
      shield: 'shield',
      globe: 'globe',
      file: 'file',
      folder: 'folder',
      home: 'house',
      key: 'key',
      link: 'link',
      star: 'star-fill',
      'star-outline': 'star',
      ban: 'ban',
    },
  },
  fluent: {
    style: 'fill',
    icons: {
      check: 'checkmark-24-regular',
      close: 'dismiss-24-regular',
      'chevron-down': 'chevron-down-24-regular',
      'chevron-left': 'chevron-left-24-regular',
      'chevron-right': 'chevron-right-24-regular',
      'chevron-up': 'chevron-up-24-regular',
      search: 'search-24-regular',
      plus: 'add-24-regular',
      minus: 'subtract-24-regular',
      alert: 'warning-24-regular',
      info: 'info-24-regular',
      'arrow-right': 'arrow-right-24-regular',
      'arrow-left': 'arrow-left-24-regular',
      'external-link': 'open-24-regular',
      copy: 'copy-24-regular',
      trash: 'delete-24-regular',
      edit: 'edit-24-regular',
      settings: 'settings-24-regular',
      user: 'person-24-regular',
      users: 'people-24-regular',
      download: 'arrow-download-24-regular',
      upload: 'arrow-upload-24-regular',
      menu: 'navigation-24-regular',
      'more-horizontal': 'more-24-regular',
      mail: 'mail-24-regular',
      lock: 'lock-24-regular',
      eye: 'eye-24-regular',
      'eye-off': 'eye-off-24-regular',
      refresh: 'arrow-sync-24-regular',
      calendar: 'calendar-24-regular',
      clock: 'clock-24-regular',
      'check-circle': 'checkmark-circle-24-regular',
      'x-circle': 'dismiss-circle-24-regular',
      shield: 'shield-24-regular',
      globe: 'globe-24-regular',
      file: 'document-24-regular',
      folder: 'folder-24-regular',
      home: 'home-24-regular',
      key: 'key-24-regular',
      link: 'link-24-regular',
      star: 'star-24-filled',
      'star-outline': 'star-24-regular',
      ban: 'prohibited-24-regular',
    },
  },
  'material-symbols': {
    style: 'fill',
    icons: {
      check: 'check',
      close: 'close',
      'chevron-down': 'expand-more',
      'chevron-left': 'chevron-left',
      'chevron-right': 'chevron-right',
      'chevron-up': 'expand-less',
      search: 'search',
      plus: 'add',
      minus: 'remove',
      alert: 'warning',
      info: 'info',
      'arrow-right': 'arrow-forward',
      'arrow-left': 'arrow-back',
      'external-link': 'open-in-new',
      copy: 'content-copy',
      trash: 'delete',
      edit: 'edit',
      settings: 'settings',
      user: 'person',
      users: 'group',
      download: 'download',
      upload: 'upload',
      menu: 'menu',
      'more-horizontal': 'more-horiz',
      mail: 'mail',
      lock: 'lock',
      eye: 'visibility',
      'eye-off': 'visibility-off',
      refresh: 'refresh',
      calendar: 'calendar-today',
      clock: 'schedule',
      'check-circle': 'check-circle',
      'x-circle': 'cancel',
      shield: 'shield',
      globe: 'public',
      file: 'description',
      folder: 'folder',
      home: 'home',
      key: 'key',
      link: 'link',
      star: 'star',
      'star-outline': 'star-outline',
      ban: 'block',
    },
  },
  'simple-icons': {
    style: 'fill',
    icons: Object.fromEntries(
      [
        'github',
        'gitlab',
        'figma',
        'slack',
        'stripe',
        'docker',
        'google',
        'microsoft',
        'apple',
        'react',
        'vuedotjs',
        'npm',
        'nextdotjs',
        'nodedotjs',
        'python',
        'openai',
        'discord',
        'x',
        'linkedin',
        'youtube',
        'instagram',
        'facebook',
        'tiktok',
        'reddit',
        'twitch',
        'spotify',
        'dropbox',
        'salesforce',
        'shopify',
        'wordpress',
        'linux',
        'ubuntu',
        'windows',
        'android',
        'typescript',
        'javascript',
        'visualstudiocode',
        'vercel',
        'netlify',
        'cloudflare',
        'supabase',
        'postman',
        'jira',
        'notion',
      ].map((n) => [n, n])
    ),
  },
  'fa6-brands': {
    style: 'fill',
    icons: Object.fromEntries(
      [
        'github',
        'gitlab',
        'bitbucket',
        'google',
        'microsoft',
        'apple',
        'linux',
        'ubuntu',
        'docker',
        'react',
        'angular',
        'vuejs',
        'js',
        'npm',
        'wordpress',
        'php',
        'python',
        'x-twitter',
        'facebook',
        'instagram',
        'linkedin',
        'youtube',
        'tiktok',
        'reddit',
        'twitch',
        'spotify',
        'figma',
        'slack',
        'dropbox',
        'node-js',
        'android',
        'windows',
        'java',
        'rust',
      ].map((n) => [n, n])
    ),
  },
};

const camel = (s) => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());

async function fetchSet(prefix, iconNames) {
  const url = `https://api.iconify.design/${prefix}.json?icons=${iconNames.join(',')}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${prefix}: HTTP ${res.status}`);
  return res.json();
}

/**
 * Collection default viewBox for sets whose JSON omits top-level
 * width/height (bi, octicon are 16-unit grids, not 24). The rendered
 * SVG of an icon that declares no per-icon dimensions is authoritative.
 */
async function fetchCollectionViewBox(prefix, name) {
  const res = await fetch(`https://api.iconify.design/${prefix}/${name}.svg`);
  if (!res.ok) throw new Error(`${prefix}/${name}: HTTP ${res.status}`);
  const svg = await res.text();
  const m = svg.match(/viewBox="([^"]+)"/);
  if (!m) throw new Error(`${prefix}/${name}: no viewBox in svg`);
  const parts = m[1].trim().split(/\s+/).map(Number);
  return { w: parts[2], h: parts[3] };
}

const collapse = (s) => s.replace(/\s+/g, ' ').trim();

const report = [];
let total = 0;
let anyMissing = false;

await mkdir(OUT_DIR, { recursive: true });

for (const [prefix, def] of Object.entries(SETS)) {
  const aliases = def.icons;
  const wanted = [...new Set(Object.values(aliases))];
  const data = await fetchSet(prefix, wanted);
  const found = { ...(data.icons ?? {}) };
  // Iconify returns renamed icons under `aliases` ({ parent } → real name).
  for (const [alias, def] of Object.entries(data.aliases ?? {})) {
    const parent = typeof def === 'string' ? def : def.parent;
    if (parent && data.icons?.[parent] && !found[alias]) {
      found[alias] = data.icons[parent];
    }
  }
  const missing = (data.not_found ?? []).filter((n) => !found[n]);
  if (missing.length) {
    report.push(`${prefix}: NOT FOUND ${missing.join(', ')}`);
    anyMissing = true;
  }

  // Collection default viewBox: use top-level dims when present, else
  // resolve from the SVG of an icon that declares no per-icon dimensions.
  let collW = data.width ?? null;
  let collH = data.height ?? null;
  if (collW == null || collH == null) {
    const plain = Object.keys(found).find(
      (n) => found[n].width == null && found[n].height == null
    );
    if (!plain) {
      console.error(
        `${prefix}: cannot resolve collection viewBox (no undimensioned icon)`
      );
      process.exit(1);
    }
    const { w, h } = await fetchCollectionViewBox(prefix, plain);
    collW = collW ?? w;
    collH = collH ?? h;
  }

  const vb = `0 0 ${collW} ${collH}`;
  const icons = {};
  const viewBoxBy = {};
  let kept = 0;
  for (const [concept, name] of Object.entries(aliases)) {
    const hit = found[name];
    if (!hit) continue;
    icons[concept] = collapse(hit.body);
    const iw = hit.width ?? collW;
    const ih = hit.height ?? collH;
    const ivb = `0 0 ${iw} ${ih}`;
    if (ivb !== vb) viewBoxBy[concept] = ivb;
    kept += 1;
  }
  total += kept;

  const lines = Object.entries(icons)
    .map(([k, v]) => `    ${JSON.stringify(k)}: ${JSON.stringify(v)}`)
    .join(',\n');
  const vbLines = Object.entries(viewBoxBy)
    .map(([k, v]) => `      ${JSON.stringify(k)}: ${JSON.stringify(v)}`)
    .join(',\n');

  const src = `/* Generated by scripts/ingest-icons.mjs — do not edit by hand. */
import type { IconSetDef } from './types';

export const ${camel(prefix)}: IconSetDef = {
  style: '${def.style}',${
    def.strokeWidth ? `\n  strokeWidth: ${def.strokeWidth},` : ''
  }
  viewBox: ${JSON.stringify(vb)},
  icons: {
${lines},
  },${
    vbLines
      ? `
  viewBoxBy: {
${vbLines},
  },`
      : ''
  }
};
`;
  await writeFile(join(OUT_DIR, `${prefix}.ts`), src, 'utf8');
  report.push(
    `${prefix}: ${kept}/${Object.keys(aliases).length} glyphs (viewBox ${vb})`
  );
}

const imports = Object.keys(SETS)
  .map((p) => `import { ${camel(p)} } from './${p}';`)
  .join('\n');
const entries = Object.keys(SETS)
  .map((p) => `  '${p}': ${camel(p)},`)
  .join('\n');
const prefixes = Object.keys(SETS)
  .map((p) => `  | '${p}'`)
  .join('\n');

const index = `/* Generated by scripts/ingest-icons.mjs — do not edit by hand. */
import type { IconSetDef } from './types';
${imports}

export type { IconSetDef };

/** Prefixes accepted in \`<Icon name="prefix:glyph" />\`. */
export type IconSetPrefix =${prefixes};

export const iconSets: Record<IconSetPrefix, IconSetDef> = {
${entries}
};

export const iconSetNames = Object.keys(iconSets) as IconSetPrefix[];
`;
await writeFile(join(OUT_DIR, 'index.ts'), index, 'utf8');

const types = `export interface IconSetDef {
  /** Root stroke/fill mode: stroke sets inherit stroke from the <svg>. */
  style: 'stroke' | 'fill';
  /** Default stroke-width for stroke sets (body attrs may override). */
  strokeWidth?: number;
  viewBox: string;
  icons: Record<string, string>;
  /** Sparse per-glyph viewBox overrides (sets with mixed icon grids). */
  viewBoxBy?: Record<string, string>;
}
`;
await writeFile(join(OUT_DIR, 'types.ts'), types, 'utf8');

console.log(report.join('\n'));
console.log(`total glyphs: ${total}`);

if (anyMissing) {
  console.error('Missing icons — fix the manifest before committing.');
  process.exit(1);
}
