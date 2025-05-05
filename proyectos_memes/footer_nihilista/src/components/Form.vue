<template>
  <div class="max-w-xl mx-auto text-left">
    <h3 class="text-xl font-bold mb-4 text-primary-100">
      Envíame un mensaje (o no)
    </h3>

    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Tu nombre (irrelevante)"
        class="bg-primary-800 text-primary-100 px-4 py-2 rounded border border-primary-700 focus:outline-none"
        v-model="form.name"
      />

      <input
        type="email"
        placeholder="Tu email (no será leído)"
        class="bg-primary-800 text-primary-100 px-4 py-2 rounded border border-primary-700 focus:outline-none"
        v-model="form.email"
      />

      <textarea
        placeholder="Tu mensaje gritado al vacío"
        rows="4"
        class="bg-primary-800 text-primary-100 px-4 py-2 rounded border border-primary-700 focus:outline-none"
        v-model="form.message"
      ></textarea>

      <button
        type="submit"
        class="bg-primary-600 hover:bg-primary-500 text-white py-2 px-4 rounded transition duration-200"
      >
        Enviar al abismo
      </button>
    </form>

    <p v-if="response" class="mt-4 text-primary-400 italic">{{ response }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const response = ref(null);

const responses = [
  "Mensaje enviado al buzón del olvido.",
  "Tu mensaje ha sido ignorado con éxito.",
  "El sistema ha registrado tu grito interior.",
  "Tu esfuerzo ha sido admirable. Y estéril.",
  "Gracias. Hemos decidido no responder.",
];

function handleSubmit() {
  response.value = responses[Math.floor(Math.random() * responses.length)];
  form.value = { name: "", email: "", message: "" };
}
</script>
