<template>
  <Preloader />
  <div v-if="!loading">
    <main class="relative">
      <Navbar />
      <Hero />
      <!-- Sección de Retos -->
      <RetoContainer />
      <hr class="my-12 border-primary-700 opacity-30" />
      <!-- Sección del Manifiesto -->
      <ManifiestoContainer />
      <hr class="my-12 border-primary-700 opacity-30" />
      <p class="text-center text-sm italic text-primary-400 mb-12">
        ...y aún sigo.
      </p>
      <Footer />
      <OscurecimientoExistencial />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Preloader from "./components/Preloader.vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import RetoContainer from "./components/RetoContainer.vue";
import ManifiestoContainer from "./components/ManifiestoContainer.vue";
import Footer from "./components/Footer.vue";
import OscurecimientoExistencial from "./components/OscurecimientoExistencial.vue";

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 2500); // mismo tiempo que el preloader
</script>
