import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "farms-fiap-app",
      remotes: {
        dashboard:
          process.env.NODE_ENV === "production"
            ? `https://${process.env.VITE_DASHBOARD_URL}/assets/remoteEntry.js`
            : "/dashboard-assets/remoteEntry.js",
        production:
          process.env.NODE_ENV === "production"
            ? `https://${process.env.VITE_PRODUCTION_URL}/assets/remoteEntry.js`
            : "/production-assets/remoteEntry.js",
        sales:
          process.env.NODE_ENV === "production"
            ? `https://${process.env.VITE_SALES_URL}/assets/remoteEntry.js`
            : "/sales-assets/remoteEntry.js",
        goals:
          process.env.NODE_ENV === "production"
            ? `https://${process.env.VITE_GOALS_URL}/assets/remoteEntry.js`
            : "/goals-assets/remoteEntry.js",
      },
      shared: [
        "react",
        "react-dom",
        "tailwindcss",
        "postcss",
        "autoprefixer",
        "react-router-dom",
      ],
    }),
  ],
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
      "/production-assets": {
        target: "http://localhost:5002",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/production-assets/, "/assets"),
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
