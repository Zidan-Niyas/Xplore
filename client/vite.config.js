import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // React plugin for Vite
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname since it's not available in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"), // Map '@' to the 'client' directory
    },
  },
});
