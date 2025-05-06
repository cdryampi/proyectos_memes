import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  base: "/proyectos_memes/proyectos_memes/proyecto_nihilista/",
  plugins: [vue(), tailwindcss()],
  define: {
    "process.env": process.env,
  },
});
