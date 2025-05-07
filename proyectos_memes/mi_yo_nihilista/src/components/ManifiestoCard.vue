<script setup>
import { Disclosure } from "@headlessui/vue";
import { useMotion } from "@vueuse/motion";
import { DisclosureButton, DisclosurePanel } from "@headlessui/vue";
useMotion();

defineProps({
  titulo: String,
  texto: String,
});
</script>

<template>
  <Disclosure v-slot="{ open }">
    <div
      v-motion="{
        initial: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      }"
      class="bg-primary-800 p-4 rounded border border-primary-600 shadow-sm"
    >
      <DisclosureButton
        class="text-left w-full font-bold text-white flex justify-between items-center cursor-pointer"
      >
        {{ titulo }}
        <span class="text-sm text-primary-400">{{ open ? "−" : "+" }}</span>
      </DisclosureButton>

      <DisclosurePanel class="mt-2 text-primary-300 italic text-sm">
        {{ texto }}
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>
