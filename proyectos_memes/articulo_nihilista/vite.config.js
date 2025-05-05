// proyectos_memes/proyectos_memes/vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/proyectos_memes/proyectos_memes/articulo_nihilista/",
  plugins: [vue(), tailwindcss()],
});
