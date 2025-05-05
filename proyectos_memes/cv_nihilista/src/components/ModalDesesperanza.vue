<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
  >
    <div
      class="bg-primary-800 text-primary-100 p-6 rounded-xl shadow-lg w-11/12 max-w-md relative"
    >
      <button
        @click="close"
        class="absolute top-2 right-3 text-primary-300 hover:text-primary-100 text-xl"
      >
        ×
      </button>
      <h2 class="text-lg font-bold mb-2 text-center">
        Echo resumes into the void.
      </h2>
      <p class="italic text-center text-primary-200 mb-4">{{ phrase }}</p>
      <button
        @click="nextPhrase"
        class="px-3 py-1 bg-primary-600 hover:bg-primary-500 text-sm text-white rounded cursor-pointer transition duration-200 ease-in-out"
      >
        Give me another one
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 🧠 Recibimos frases desde el padre
const props = defineProps({
  messages: {
    type: Array,
    required: true,
  },
});

const visible = ref(false);
const phrase = ref("");

function open() {
  nextPhrase();
  visible.value = true;
}

function close() {
  visible.value = false;
}

function nextPhrase() {
  const frases = props.messages;
  phrase.value = frases[Math.floor(Math.random() * frases.length)];
}

// Exportamos el método `open` para que App.vue pueda activarlo
defineExpose({ open });
</script>
