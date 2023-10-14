import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    /* eslint-disable no-undef */
    CLOUD_NAME: `"${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}"`,
    BACKEND_URL: `"${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}"`,
  },
});
