<template>
  <main
    class="bg-gradient-to-b from-primary-900 to-gray-950 min-h-screen text-primary-100 p-6"
  >
    <h1 class="text-2xl font-bold mb-2 text-center">
      Archivo de Proyectos Olvidados y Errores Inolvidables
    </h1>
    <p class="text-center text-primary-400 italic mb-6">
      Donde las ideas van a morir... pero antes las criticamos.
    </p>

    <p
      v-if="repos.length === 0"
      class="text-center text-primary-300 animate-pulse mt-10"
    >
      ⌛ Cargando tus fracasos desde GitHub...
    </p>

    <RepoCardContainer :repos="repos" />

    <footer class="text-center text-xs text-primary-400 mt-10">
      “Todo proyecto empieza con ilusión... y termina con una crítica cruel.” —
      GPT Sarcástico
    </footer>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import RepoCardContainer from "./components/RepoCardContainer.vue";
import { obtenerRepos } from "./services/GitHubService";

const repos = ref([]);

onMounted(async () => {
  repos.value = await obtenerRepos("cdryampi");
});
</script>
