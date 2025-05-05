<template>
  <section class="mt-10 w-full max-w-3xl text-center">
    <h2 class="text-2xl font-bold mb-4 text-primary-100">
      Skills (Nobody Asked For)
    </h2>

    <div class="flex flex-wrap justify-center gap-2">
      <span
        v-for="(skill, index) in items"
        :key="index"
        class="bg-primary-700 text-primary-100 text-sm px-3 py-1 rounded-full shadow border border-primary-500"
      >
        {{ skill }}
      </span>
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
