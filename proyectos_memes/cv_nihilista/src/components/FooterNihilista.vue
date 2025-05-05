<template>
  <footer
    class="mt-16 py-6 text-center text-primary-400 text-sm border-t border-primary-700 w-full"
  >
    <p>
      © {{ year }} {{ name }} —
      <span class="italic"
        >Este currículum fue generado con esperanza… y publicado sin
        expectativas.</span
      >
    </p>
    <p class="mt-1">
      <a
        href="mailto:yampi@nadienomecontrata.dev"
        class="hover:text-primary-200 underline"
        >Contáctame (si te atreves)</a
      >
    </p>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import data from "../data/cvData.js";

const year = new Date().getFullYear();
const name = computed(() => data.name);
</script>
