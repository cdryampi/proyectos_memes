<template>
  <section id="retos" class="px-6 py-12">
    <h2 class="text-4xl font-display text-white mb-6 text-center">
      Retos autoimpuestos
    </h2>
    <div class="grid gap-6 md:grid-cols-2">
      <RetoCard v-for="(reto, i) in retos" :key="i" :reto="reto" />
    </div>
  </section>
</template>

<script setup>
import { retos } from "../data/retos.js";
import RetoCard from "./RetoCard.vue";
</script>
