<template>
  <div class="bg-primary-800 p-4 rounded shadow text-primary-100 mb-6">
    <h3 class="text-lg font-bold mb-1">{{ repo.name }}</h3>
    <p class="text-sm italic text-primary-300 mb-2">
      {{ repo.description || "Sin descripción" }}
    </p>

    <p v-if="critica" class="text-primary-200 text-sm mt-2">💬 {{ critica }}</p>

    <div class="flex items-center gap-2 mt-3">
      <button
        @click="cargarCritica"
        :disabled="cargandoLocal || cargandoGlobal"
        class="text-xs px-3 py-1 rounded text-white bg-primary-700 hover:bg-primary-600 disabled:opacity-50 cursor-pointer transition-colors duration-200"
        :class="{ 'cursor-not-allowed': cargandoLocal || cargandoGlobal }"
        :aria-disabled="cargandoLocal || cargandoGlobal"
      >
        {{ cargandoLocal ? "Cargando..." : "Critícalo cruelmente" }}
      </button>

      <svg
        v-if="cargandoLocal"
        class="animate-spin h-4 w-4 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  repo: Object,
  cargandoGlobal: Boolean,
});

const emit = defineEmits(["start-carga", "fin-carga"]);
const critica = ref("");
const cargandoLocal = ref(false);

import { obtenerCriticaCruel } from "../services/CriticaService";

async function cargarCritica() {
  cargandoLocal.value = true;
  emit("start-carga");

  const payload = {
    nombre: props.repo.name,
    descripcion: props.repo.description || "Sin descripción",
    tags: props.repo.topics || [],
    estrellas: props.repo.stargazers_count || 0,
    forks: props.repo.forks_count || 0,
    issues: props.repo.open_issues_count || 0,
  };

  critica.value = await obtenerCriticaCruel(payload);

  cargandoLocal.value = false;
  emit("fin-carga");
}
</script>
