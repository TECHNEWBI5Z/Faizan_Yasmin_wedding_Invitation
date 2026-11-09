import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0", // reachable from your phone on the same Wi-Fi
    port: 3000,
    proxy: {
      // Optional: only used if you run the Python backend locally.
      "/api": { target: "http://localhost:8001", changeOrigin: true },
    },
  },
});
