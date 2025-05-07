<template>
  <main
    class="min-h-screen bg-primary-900 text-primary-100 font-mono p-6 flex flex-col items-center"
  >
    <NihilisticIntro :data="data" />
    <button
      @click="modal.open"
      class="mt-4 px-4 py-2 bg-primary-700 hover:bg-primary-600 text-white rounded shadow-md"
    >
      Why they rejected me?
    </button>
    <!-- Experiencia -->
    <ExperienceBlock :items="data.experience" />
    <!-- Education -->
    <EducationBlock :items="data.education" />
    <!-- Skills -->
    <SkillBlock :items="data.skills" />
    <FooterNihilista />
    <ModalDesesperanza ref="modal" :messages="data.rejectionMessages" />
  </main>
</template>

<script setup>
import data from "./data/cvData.js";
import { ref } from "vue";
import ModalDesesperanza from "./components/ModalDesesperanza.vue";
import ExperienceBlock from "./components/ExperienceBlock.vue";
import EducationBlock from "./components/EducationBlock.vue";
import SkillBlock from "./components/SkillBlock.vue";
import FooterNihilista from "./components/FooterNihilista.vue";
import NihilisticIntro from "./components/NihilisticIntro.vue";
const modal = ref(null);
</script>
