
import { defineConfig } from "vite";
import { copyFileSync } from "node:fs";

export default defineConfig({
  plugins: [
    {
      name: "copiar-videos-para-producao",
      apply: "build",
      closeBundle() {
        copyFileSync(
          "backend/videos.json",
          "dist/videos.json"
        );
      },
    },
  ],
});
