<template>
  <div class="relative h-screen w-full overflow-hidden">
    <SadVideo @video-ended="handleEnd" />
    <TypewriterMessage v-if="!videoEnded" />
    <FinalOverlay v-if="videoEnded" />
    <button
      @click="forceEnd"
      v-if="!videoEnded"
      class="absolute bottom-8 right-6 z-50 text-sm px-3 py-2 bg-primary-100 hover:bg-primary-700 text-black rounded shadow transition cursor-pointer"
    >
      Saltar al final
    </button>
  </div>
</template>

<script setup>
import SadVideo from "./SadVideo.vue";
import TypewriterMessage from "./TypewriterMessage.vue";
import FinalOverlay from "./FinalOverlay.vue";
import { ref } from "vue";

const videoEnded = ref(false);
function handleEnd() {
  videoEnded.value = true;
}
function forceEnd() {
  videoEnded.value = true;
  const vid = document.querySelector("video");
  if (vid) {
    vid.pause();
    vid.currentTime = vid.duration;
  }
}
</script>
