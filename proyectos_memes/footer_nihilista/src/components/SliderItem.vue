<template>
  <div
    class="bg-primary-800 text-primary-100 p-5 shadow rounded-lg border border-primary-700 text-center min-h-[200px] flex flex-col justify-center items-center"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <h3 class="text-lg font-bold">{{ item.company }}</h3>
    <p class="text-sm text-primary-400 italic mb-2">
      {{ item.date }} — {{ item.test }}
    </p>
    <p class="text-primary-200 mb-1">{{ item.comment }}</p>
    <p class="text-primary-500 italic text-sm">→ {{ item.result }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
