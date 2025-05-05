import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// 💀 AOS
import AOS from "aos";
import "aos/dist/aos.css";
// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

createApp(App).mount("#app");

AOS.init({
  duration: 1200,
  once: true,
  mirror: false,
  disable: "mobile",
});
