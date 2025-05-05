<template>
  <div class="mt-6 border-t border-primary-700 pt-6 px-4">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto"
    >
      <!-- Enlaces -->
      <div class="flex flex-col items-center lg:items-start text-sm gap-2">
        <p class="text-primary-200 text-base font-semibold mb-2">
          Encuéntrame (o no):
        </p>
        <a
          v-for="(link, index) in data.links"
          :key="index"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary-300 hover:text-primary-100 underline transition duration-200"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Formulario -->
      <div>
        <Form />
      </div>
    </div>

    <!-- Derechos reservados -->
    <div class="flex justify-center items-center my-5 flex-col">
      <p class="text-lg font-semibold text-primary-100 text-center mb-1">
        {{ data.name }}
      </p>
      <p class="text-sm italic text-primary-400 text-center my-5">
        {{ data.tagline }}
      </p>
      <p class="text-sm text-primary-400 text-center my-5">
        &copy; {{ new Date().getFullYear() }} {{ data.name }}. Todos los
        derechos reservados, aunque nadie los quiera.
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
import Form from "./Form.vue";
</script>
