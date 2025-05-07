<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary-900 text-primary-200 text-center"
    >
      <p class="text-lg italic animate-pulse mb-4">Cargando mis fracasos...</p>
      <div class="w-48 h-1 bg-primary-700 relative overflow-hidden rounded">
        <div class="absolute w-1/3 h-full bg-primary-500 animate-slide"></div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, ref } from "vue";

const visible = ref(true);

onMounted(() => {
  setTimeout(() => {
    visible.value = false;
  }, 2500); // Puedes cambiarlo si quieres más drama
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes slide {
  0% {
    left: -33%;
  }
  100% {
    left: 100%;
  }
}

.animate-slide {
  animation: slide 1.5s infinite linear;
}
</style>
