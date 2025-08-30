import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  server: {
    host: true, // allows external access
    allowedHosts: [
      "3c7ab6c6862e.ngrok-free.app", // put your ngrok subdomain here
    ],
  },
});
