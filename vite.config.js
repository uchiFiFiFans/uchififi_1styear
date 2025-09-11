import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./", // 使用相對路徑
  server: {
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist", // 輸出目錄為 dist
    assetsDir: "assets", // 資源檔案目錄為 assets
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
