<template>
  <section class="mt-10 w-full max-w-3xl">
    <h2 class="text-2xl font-bold mb-4 text-primary-100 text-center">
      Education (Ignored & Forgotten)
    </h2>

    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-l-4 border-primary-400 pl-4 py-3 mb-4 bg-primary-800/50 rounded"
    >
      <h3 class="text-lg font-semibold text-primary-200">{{ item.degree }}</h3>
      <p class="text-sm text-primary-300 italic">
        {{ item.place }} • {{ item.year }}
      </p>
      <p class="text-primary-100 mt-2">
        {{ item.notes }}
      </p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
