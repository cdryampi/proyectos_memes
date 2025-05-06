<template>
  <div
    class="relative inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-center overflow-hidden"
  >
    <!-- Imagen de fondo oscura, congelada -->
    <img
      src="/empty.jpg"
      alt="Banco vacío, como tus respuestas"
      class="absolute inset-0 w-full h-full object-cover opacity-50 grayscale blur-sm"
    />

    <!-- Mensaje principal con animación de entrada -->
    <transition name="fade-up" appear>
      <div class="z-10 text-primary-100 px-6 py-8 max-w-xl">
        <p class="text-2xl md:text-3xl font-bold font-mono mb-4">
          El video ha terminado. Como tu motivación.
        </p>
        <p class="text-primary-400 italic text-xl">
          El silencio final también es feedback.
        </p>
      </div>
    </transition>

    <!-- Créditos tristes al fondo -->
    <div class="absolute bottom-0 w-full z-10 text-center pb-4">
      <p class="text-primary-300 text-xs font-mono">
        hecho por
        <a
          href="https://github.com/cdryampi/"
          target="_blank"
          class="underline hover:text-primary-100 transition"
        >
          cdryampi
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Animación suave de entrada */
.fade-up-enter-active {
  transition: all 1.2s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
