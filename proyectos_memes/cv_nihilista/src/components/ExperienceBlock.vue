<template>
  <section class="mt-8 w-full max-w-3xl">
    <h2 class="text-2xl font-bold mb-4 text-primary-100 text-center">
      Experience (Unpaid & Unloved)
    </h2>

    <div
      v-for="(job, index) in items"
      :key="index"
      class="border-l-4 border-primary-500 pl-4 py-3 mb-4 bg-primary-800/60 rounded"
    >
      <h3 class="text-lg font-semibold text-primary-200">{{ job.title }}</h3>
      <p class="text-sm text-primary-300 italic">
        {{ job.company }} • {{ job.year }}
      </p>
      <p class="text-primary-100 mt-2">
        {{ job.description }}
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
