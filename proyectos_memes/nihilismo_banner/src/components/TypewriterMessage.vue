<template>
  <div
    class="absolute inset-0 flex items-center justify-center z-50 text-center px-4 transition-opacity duration-500 ease-in-out opacity-100"
  >
    <vue-typer
      :text="messages"
      :repeat="1"
      :shuffle="true"
      :type-delay="50"
      :pre-type-delay="300"
      :post-type-delay="2000"
      :delete-delay="1400"
      :caret-animation="smooth"
      erase-style="clear"
      class="text-primary-100 text-6xl md:text-2xl font-mono select-none"
    />
  </div>
</template>

<script setup>
import VueTyper from "vue3-typer";
import "vue3-typer/dist/vue-typer.css";

import messages from "../data/messages.js";
</script>

<style scoped>
.vue-typer,
.vue-typer * {
  user-select: none; /* evita selección */
  caret-color: transparent; /* oculta el cursor de texto */
  color: #ffffff !important;
  font-family: "Courier New", Courier, monospace !important; /* fuente monoespaciada */
  font-size: 2.5rem !important; /* tamaño de fuente grande */
  text-align: center !important; /* centrado */
  line-height: 1.5 !important; /* espaciado entre líneas */
  transition: all 0.3s ease; /* transición suave */
  font-weight: bolder !important; /* negrita */
}
</style>
