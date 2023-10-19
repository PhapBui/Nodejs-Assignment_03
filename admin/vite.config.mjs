import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";
import jsconfigPaths from "vite-jsconfig-paths";
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@/": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    /* eslint-disable no-undef */
    CLOUD_NAME: `"${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}"`,
    BACKEND_URL: `"${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}"`,
  },
});
