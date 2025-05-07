<template>
  <section id="manifiesto" class="px-6 py-12">
    <h2 class="text-4xl font-display text-white mb-6 text-center">
      Manifiesto
    </h2>
    <div class="grid gap-6 md:grid-cols-2">
      <ManifiestoCard
        v-for="(item, i) in manifiesto"
        :key="i"
        :titulo="item.titulo"
        :texto="item.texto"
      />
    </div>
  </section>
</template>

<script setup>
import { manifiesto } from "../data/manifiesto.js";
import ManifiestoCard from "./ManifiestoCard.vue";
</script>
