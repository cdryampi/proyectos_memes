<script setup>
import { Disclosure } from "@headlessui/vue";
import { useMotion } from "@vueuse/motion";
import { DisclosureButton, DisclosurePanel } from "@headlessui/vue";
useMotion();
defineProps({ reto: Object });
</script>

<template>
  <Disclosure v-slot="{ open }">
    <div
      v-motion="{
        initial: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      }"
      class="bg-primary-900 p-4 rounded border border-primary-700 shadow-sm"
    >
      <DisclosureButton
        class="w-full text-left font-bold text-white cursor-pointer"
      >
        {{ reto.titulo }}
        <span class="float-right text-xs text-primary-400">
          {{ open ? "▲" : "▼" }}
        </span>
      </DisclosureButton>

      <DisclosurePanel class="mt-2 text-sm text-primary-300">
        <p>{{ reto.descripcion }}</p>
        <p
          class="mt-2 text-xs font-mono"
          :class="reto.completado ? 'text-green-400' : 'text-red-400'"
        >
          {{ reto.completado ? "✔ Completado" : "✘ Pendiente" }}
        </p>
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>
<style scoped></style>
