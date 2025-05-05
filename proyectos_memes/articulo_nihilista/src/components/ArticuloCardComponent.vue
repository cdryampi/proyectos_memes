<template>
  <article
    class="bg-primary-800 text-primary-50 border border-primary-700 rounded-xl p-4 shadow flex flex-col justify-between hover:bg-primary-700 transition duration-300"
  >
    <h2 class="text-xl font-semibold mb-2 text-primary-100">
      {{ articulo.titulo }}
    </h2>
    <p class="text-sm text-primary-200 italic mb-4">{{ articulo.resumen }}</p>
    <p class="text-xs text-primary-400 text-right">✍️ {{ articulo.autor }}</p>
    <p class="text-sm font-semibold mt-2 text-primary-100 italic text-right">
      <time :datetime="articulo.fecha">{{ articulo.fecha }}</time>
    </p>
  </article>
</template>

<script setup>
defineProps({
  articulo: {
    type: Object,
    required: true,
  },
});
</script>
