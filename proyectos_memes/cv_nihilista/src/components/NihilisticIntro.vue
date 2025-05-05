<template>
  <section class="text-center mb-10 max-w-2xl">
    <h1 class="text-4xl font-bold text-primary-100">{{ data.name }}</h1>
    <p class="text-primary-300 text-sm mt-1">{{ data.location }}</p>

    <p class="mt-6 text-primary-200 italic leading-relaxed">
      {{ data.summary }}
    </p>

    <blockquote
      class="mt-4 text-primary-500 text-sm italic border-l-4 pl-4 border-primary-700"
    >
      “A résumé is just a scream in PDF.”
    </blockquote>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
