import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { withZephyr } from "vite-plugin-zephyr";
import { federation } from "@module-federation/vite";
import path from "path";

const skipZephyr = process.env.SKIP_ZEPHYR === "true";

const mfConfig = {
  name: "farms-fiap-host",
  remotes: {
    dashboard: `dashboard-app@${process.env.VITE_DASHBOARD_URL || "http://localhost:5001"}/assets/remoteEntry.js`,
    sales: `sales-app@${process.env.VITE_SALES_URL || "http://localhost:5003"}/sales-assets/remoteEntry.js`,
    goals: `goals-app@${process.env.VITE_GOALS_URL || "http://localhost:5004"}/goals-assets/remoteEntry.js`,
  },
  shared: {
    react: { singleton: true, requiredVersion: "^19.0.0" },
    "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
    "react-router-dom": { singleton: true },
    "@tanstack/react-query": { singleton: true },
    zustand: { singleton: true },
    appwrite: { singleton: true },
    "@tanstack/react-table": { singleton: true },
  },
  dts: false,
};

export default defineConfig({
  plugins: [
    react(),
    skipZephyr ? federation(mfConfig) : withZephyr({ mfConfig }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    needsInterop: ["react", "@tanstack/react-query", "zustand"],
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 5173,
  },
});
