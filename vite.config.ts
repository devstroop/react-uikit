/// <reference types="vitest/config" />
import { copyFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const libRoot = resolve(dirname(fileURLToPath(import.meta.url)), 'lib');

// tokens.css/utilities.css/base.css ship as standalone subpath exports as well
// as folded into style.css, so they are copied verbatim into dist. Only dist/ is
// published, and base.css must stay out of style.css: it is an opt-in document
// layer, and cssCodeSplit: false would fold every CSS the entry graph touches.
const copyStandaloneCss = {
  name: 'copy-standalone-css',
  closeBundle() {
    for (const [from, to] of [
      ['styles/base.css', 'base.css'],
      ['styles/tokens.css', 'tokens.css'],
      ['utilities.css', 'utilities.css'],
    ] as const) {
      copyFileSync(resolve(libRoot, from), resolve(libRoot, '../dist', to));
    }
  },
};

export default defineConfig({
  plugins: [
    dts({
      include: ['lib'],
      exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.test.d.ts'],
      tsconfigPath: './tsconfig.json',
    }),
    copyStandaloneCss,
  ],
  build: {
    lib: {
      entry: { main: 'lib/main.ts', theme: 'lib/theme.ts' },
      formats: ['es', 'cjs'],
      cssFileName: 'style',
      fileName: (format, name) => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    cssCodeSplit: false,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    exclude: ['e2e/**', 'node_modules/**', 'dist/**', 'demos/dist/**'],
    // Coverage provider installed (@vitest/coverage-v8, version-matched to
    // vitest) and enforced on every run. Thresholds sit at measured levels
    // (measured 2026-09-28: 82.25/74.96/89.02/84.16) — raise, never lower.
    coverage: {
      provider: 'v8',
      enabled: true,
      // Gates the shipped library only. The demos app is guarded by
      // e2e (demo-completeness + the axe crawl), so loading its pages here
      // would dilute lib thresholds.
      include: ['lib/**'],
      reporter: ['text', 'lcov'],
      thresholds: {
        statements: 80,
        branches: 74,
        functions: 88,
        lines: 84,
      },
    },
  },
});
