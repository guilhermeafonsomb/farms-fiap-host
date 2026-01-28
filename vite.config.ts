import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "farms-fiap-app",
      remotes: {
        dashboard: `${process.env.VITE_DASHBOARD_URL || "http://localhost:5001"}/assets/remoteEntry.js`,
        sales: `${process.env.VITE_SALES_URL || "http://localhost:5003"}/sales-assets/remoteEntry.js`,
        goals: `${process.env.VITE_GOALS_URL || "http://localhost:5004"}/goals-assets/remoteEntry.js`,
      },

      shared: [
        "react",
        "react-dom",
        "tailwindcss",
        "@tanstack/react-query",
        "postcss",
        "autoprefixer",
        "react-router-dom",
        "appwrite",
        "zustand",
        "@tanstack/react-table",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5173,
    proxy: {
      "/dashboard-assets": {
        target: "http://localhost:5001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dashboard-assets/, "/assets"),
      },
      "/sales-assets": {
        target: "http://localhost:5003",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sales-assets/, "/assets"),
      },
      "/goals-assets": {
        target: "http://localhost:5004",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/goals-assets/, "/assets"),
      },
    },
  },
});
