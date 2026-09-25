/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      include: ["lib"],
      exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.test.d.ts"],
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    lib: {
      entry: "lib/main.ts",
      formats: ["es", "cjs"],
      cssFileName: "style",
      fileName: (format) => (format === "es" ? "main.es.js" : "main.cjs.js"),
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
    cssCodeSplit: false,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    exclude: ["e2e/**", "node_modules/**", "dist/**", "preview/dist/**"],
    // Coverage stays opt-in (enabled:false): @vitest/coverage-v8 is not
    // installed (npm arborist failures on this tree) so no script wires
    // --coverage yet. Install the provider, flip enabled, then set
    // thresholds at measured levels — raise, never lower.
    coverage: {
      provider: "v8",
      enabled: false,
      reporter: ["text", "lcov"],
    },
  },
});