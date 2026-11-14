/// <reference types="vitest/config" />
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const ROOT_DIR = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const libRoot = resolve(ROOT_DIR, 'lib');

// tokens.css/utilities.css/base.css ship as standalone subpath exports as well
// as folded into style.css, so they are copied verbatim into dist. Only dist/ is
// published, and base.css must stay out of style.css: it is an opt-in document
// layer, and cssCodeSplit: false would fold every CSS the entry graph touches.
const copyStandaloneCss = {
  name: 'copy-standalone-css',
  closeBundle() {
    for (const [from, to] of [['styles/base.css', 'base.css'], ['styles/tokens.css', 'tokens.css'], ['utilities.css', 'utilities.css']] as const) {
      copyFileSync(resolve(libRoot, from), resolve(libRoot, '../dist', to));
    }
  }
};
export default defineConfig({
  plugins: [dts({
    include: ['lib'],
    exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.test.d.ts'],
    tsconfigPath: './tsconfig.json'
  }), copyStandaloneCss],
  build: {
    lib: {
      entry: {
        main: 'lib/main.ts',
        theme: 'lib/theme.ts'
      },
      formats: ['es', 'cjs'],
      cssFileName: 'style',
      fileName: (format, name) => `${name}.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime']
    },
    cssCodeSplit: false
  },
  test: {
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
        lines: 84
      }
    },
    projects: [{
      extends: true,
      test: {
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        exclude: ['e2e/**', 'node_modules/**', 'dist/**', 'demos/dist/**']
      }
    }, {
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(ROOT_DIR, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});