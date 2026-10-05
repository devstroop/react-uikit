/// <reference types="vite/client" />
import { defineConfig } from 'vite';

// Demos app build (e2e target): plain app bundle into demos/dist,
// served by `vite preview demos`. Never shipped in the package.
export default defineConfig({
  root: __dirname,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
