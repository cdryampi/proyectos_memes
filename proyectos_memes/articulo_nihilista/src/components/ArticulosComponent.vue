<template>
  <section class="max-w-5xl mx-auto px-4 py-8">
    <header>
      <h1 class="text-2xl md:text-3xl text-primary-100 mb-8 text-center">
        Artículos sobre el Desempleo Programado
      </h1>
    </header>

    <div
      class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch"
    >
      <ArticuloCardComponent
        v-for="articulo in articulos"
        :key="articulo.id"
        :articulo="articulo"
      />
    </div>
    <p class="mt-12 text-center text-sm text-primary-400 italic">
      Si nada tiene sentido, al menos que esté bien maquetado.
    </p>
  </section>
</template>

<script setup>
import { articulos } from "../data/articulos.js";
import ArticuloCardComponent from "./ArticuloCardComponent.vue";
</script>
