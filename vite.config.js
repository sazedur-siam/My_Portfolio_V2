import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the build works both on a GitHub Pages sub-path and at a domain root.
  base: "./",
  server: {
    port: 3000,
    open: true,
  },
});
