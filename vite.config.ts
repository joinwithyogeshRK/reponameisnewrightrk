// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(process.cwd(), "src") },
  },
  // Remove all server config - let server.mjs handle everything
  base: "/",
});