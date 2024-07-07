import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    outDir: "dist",
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
});
