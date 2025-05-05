<template>
  <footer class="bg-primary-900 text-primary-100 py-10 px-4 font-mono">
    <div class="max-w-5xl mx-auto flex flex-col gap-10">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-primary-100 mb-2">
          Historial de rechazos
        </h2>
        <p class="text-primary-400 italic text-sm">
          20 entrevistas. 0 ofertas. 1 footer para recordarlos a todos.
        </p>
      </div>

      <FooterSlider />

      <FooterClasic :data="footerData" />
    </div>
  </footer>
</template>

<script setup>
import FooterSlider from "./FooterSlider.vue";
import FooterClasic from "./FooterClasic.vue";
import footerData from "../data/footerData.js";
</script>
