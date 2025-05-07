<template>
  <div class="fixed inset-0 z-50 pointer-events-none">
    <!-- Overlay oscuro -->
    <div
      :style="{ opacity: darkness }"
      class="absolute inset-0 bg-black transition-opacity duration-1000"
    ></div>

    <!-- Mensaje final -->
    <div
      v-if="darkness >= 0.8"
      class="absolute inset-0 flex items-center justify-center text-center text-primary-300 text-xl font-mono"
    >
      <p>¿Ves? Nada importa. Pero tú seguiste bajando. Gracias.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const darkness = ref(0);
let interval = null;

onMounted(() => {
  interval = setInterval(() => {
    if (darkness.value < 0.8) {
      darkness.value = +(darkness.value + 0.05).toFixed(2);
    } else {
      clearInterval(interval);
    }
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>
