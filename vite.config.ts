/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      include: ['lib'],
      exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.test.d.ts'],
      tsconfigPath: './tsconfig.json',
    }),
  ],
  build: {
    lib: {
      entry: 'lib/main.ts',
      formats: ['es', 'cjs'],
      cssFileName: 'style',
      fileName: (format) => (format === 'es' ? 'main.es.js' : 'main.cjs.js'),
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    cssCodeSplit: false,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    exclude: ['e2e/**', 'node_modules/**', 'dist/**', 'preview/dist/**'],
    // Coverage provider installed (@vitest/coverage-v8, version-matched to
    // vitest) and enforced on every run. Thresholds sit at measured levels
    // (measured 2026-09-28: 82.25/74.96/89.02/84.16) — raise, never lower.
    coverage: {
      provider: 'v8',
      enabled: true,
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
