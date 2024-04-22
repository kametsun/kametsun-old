import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@kametsun/", replacement: `${__dirname}/src/` }],
  },
  plugins: [react()],
});
