<template>
  <section
    id="hero"
    class="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-6 relative before:absolute before:inset-0 before:bg-black/60"
    style="background-image: url('./assets/sad.jpg')"
    v-motion="{
      initial: { opacity: 0, y: 40 },
      enter: { opacity: 1, y: 0 },
      transition: { duration: 0.8 },
    }"
  >
    <div class="relative z-10">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
        Yampi / <span class="text-primary-500">Nihilismo</span> / Ruina Técnica
      </h1>
      <p class="text-lg md:text-xl text-primary-300 italic">
        Esta web es un intento más. Bienvenido al archivo.
      </p>
    </div>
  </section>
</template>

<script setup>
import { useMotion } from "@vueuse/motion";
useMotion();
</script>
