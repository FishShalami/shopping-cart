import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // so you can use `expect()` without importing
    environment: "jsdom", // browser-like DOM
    setupFiles: "./src/test/setup.js", // we’ll create this next
  },
});
