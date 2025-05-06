<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <RepoCard
      v-for="repo in repos"
      :key="repo.id"
      :repo="repo"
      :cargando-global="cargando"
      @start-carga="cargando = true"
      @fin-carga="cargando = false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import RepoCard from "./RepoCard.vue";

const props = defineProps({
  repos: {
    type: Array,
    required: true,
  },
});

const cargando = ref(false); // bloqueo global
</script>
