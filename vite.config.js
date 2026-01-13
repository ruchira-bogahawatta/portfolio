import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
