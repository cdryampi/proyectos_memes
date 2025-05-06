<template>
  <video
    class="absolute inset-0 w-full h-full object-cover filter grayscale brightness-75"
    autoplay
    muted
    playsinline
    @ended="emitEnded"
    ref="videoEl"
  >
    <source src="/sad.mp4" type="video/mp4" />
    Tu navegador no soporta videos deprimentes.
  </video>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["video-ended"]);
const videoEl = ref(null);

function emitEnded() {
  // Congela el último frame
  if (videoEl.value) {
    videoEl.value.pause();
  }
  emit("video-ended");
}
</script>
