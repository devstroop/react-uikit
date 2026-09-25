/// <reference types="vite/client" />
import { defineConfig } from "vite";

// Preview app build (e2e target): plain app bundle into preview/dist,
// served by `vite preview preview`. Never shipped in the package.
export default defineConfig({
  root: __dirname,
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
