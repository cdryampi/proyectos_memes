// proyectos_memes/footer_nihilista/vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/proyectos_memes/proyectos_memes/footer_nihilista/",
  plugins: [vue(), tailwindcss()],
});
