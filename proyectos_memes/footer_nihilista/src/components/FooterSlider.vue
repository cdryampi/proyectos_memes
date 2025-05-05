<template>
  <div class="w-full max-w-3xl mx-auto px-4 py-8">
    <Swiper
      :pagination="{ dynamicBullets: true, clickable: true }"
      :modules="[Pagination, Autoplay]"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :loop="true"
    >
      <SwiperSlide v-for="(item, index) in rejections" :key="index">
        <SliderItem :item="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import rejections from "../data/rejections.js";
import SliderItem from "./SliderItem.vue";
</script>
<style>
/* 🔘 Bolitas de paginación */
.swiper-pagination-bullet {
  background-color: #5e544c; /* primary-600 (dignidad en sombra) */
  opacity: 0.5;
  transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
  background-color: #cbc5bb; /* primary-300 (pobreza matte) */
  opacity: 1;
}

/* ⬅ Flechas de navegación */
.swiper-button-next,
.swiper-button-prev {
  color: #f5f3f0; /* primary-100 (harina reciclada) */
  transition: all 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #e0dcd6; /* primary-200 (pared sin pintar) */
}
</style>
