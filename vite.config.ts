import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ModuleFederationOptions,  withZephyr } from "vite-plugin-zephyr";
import { federation } from "@module-federation/vite";
import path from "path";

const mfConfig: ModuleFederationOptions = {
  name: "farms-fiap-host",
  filename: "remoteEntry.js",
  remotes: {
    dashboard: {
      name: 'dashboard',
      entry: "http://localhost:5001/remoteEntry.js",
      type: 'module',
    },
    sales: {
      name: 'sales',
      entry: "http://localhost:5003/remoteEntry.js",
      type: 'module',
    },
    goals: {
      name: 'goals',
      entry: "http://localhost:5004/remoteEntry.js",
      type: 'module',
    },
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
  manifest: true,
  dts: false,
};

export default defineConfig({
  plugins: [
    react(),
    process.env.SKIP_ZEPHYR === "true"
      ? federation(mfConfig)
      : withZephyr({ mfConfig }),
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
