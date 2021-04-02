import { defineConfig } from "vite";
import { resolve } from "path";

import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  base: "",
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
});
