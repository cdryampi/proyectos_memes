import { createApp } from "vue";
import App from "./App.vue";

import "./style.css"; // tu CSS de Tailwind
import { MotionPlugin } from "@vueuse/motion";
const app = createApp(App);
app.use(MotionPlugin);
app.mount("#app");
