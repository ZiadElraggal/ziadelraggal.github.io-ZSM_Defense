
<template>
  <section class="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] 2xl:h-[90vh] w-full overflow-hidden">
    <!-- Background Video -->
    <video
      ref="videoEl"
      autoplay
      loop
      muted
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
    >
      <source src="/videos/ZSM_Defense_Official_Trailer.mp4" type="video/mp4" />
    </video>

    <!-- Pause/Play Button (Top Left) -->
    <UButton
      @click="togglePlay"
      class="absolute top-4 left-4 z-20 bg-transparent hover:bg-transparent text-white rounded-full p-0 shadow
            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center hover:scale-110 transition-transform duration-200"
    >
      <img
        v-if="isPlaying"
        src="~/assets/images/Pause.png"
        alt="Pause"
        class="w-4/5 h-4/5 object-contain"
      />
      <img
        v-else
        src="~/assets/images/Resume.png"
        alt="Resume"
        class="w-4/5 h-4/5 object-contain"
      />
    </UButton>

    <!-- Watch Full Trailer (Bottom Right) -->
    <UButton
      @click="showModal = true"
      class="absolute bottom-4 right-4 z-20 bg-transparent hover:bg-transparent text-white rounded-full p-0 shadow
            w-15 h-15 sm:w-[72px] sm:h-[72px] md:w-[84px] md:h-[84px] lg:w-[96px] lg:h-[96px] flex items-center justify-center hover:scale-110 transition-transform duration-200"
    >
      <img
        src="~/assets/images/trailer_btn.png"
        alt="Play"
        class="w-4/5 h-4/5 object-contain">
    </UButton>

    <!-- Overlay Content -->
    <div class="relative z-10 flex flex-col justify-center items-center h-full text-center text-white bg-black/40 backdrop-blur-xxs px-4">
          <img
          src="~/assets/images/logo.png"
          alt="Play"
          class="w-2/5 h-2/5 object-contain">

      <!-- CTA Button -->
      <a
        @click.prevent="handleDownload"
        class="mt-1 ml-8 text-sm sm:text-base md:text-lg lg:ml-[80px] md:ml-12 sm:ml-10 hover:scale-110 transition-all font-semibold"
      >
      <img
          src="~/assets/images/play_now.png"
          alt="Play"
          class="w-4/5 h-3/5 object-contain">
      </a>

    <!-- Platform Icons (bottom of section) -->
    <div class="absolute bottom-0 w-full flex justify-center items-end pb-4 gap-8 sm:gap-10 md:gap-16 opacity-90">
      <!-- macOS group -->
      <div class="flex items-center gap-2">
        <UIcon name="gravity-ui:logo-macos" class="h-6 sm:h-8 md:h-10 lg:h-12 2xl:h-14 w-6 sm:w-8 md:w-10 lg:w-12 2xl:w-14 text-gray-50" />
        <span class="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl font-medium tracking-wide text-gray-200">
          macOS
        </span>
      </div>

      <!-- Windows group -->
      <div class="flex items-center gap-2">
        <UIcon name="qlementine-icons:windows-16" class="h-6 sm:h-8 md:h-10 lg:h-12 2xl:h-14 w-6 sm:w-8 md:w-10 lg:w-12 2xl:w-14 text-gray-50" />
        <span class="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl font-medium tracking-wide text-gray-200">
          Windows
        </span>
      </div>
    </div>
    </div>

    <!-- Full Trailer Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-30 bg-black bg-opacity-80 flex items-center justify-center"
    >
      <div class="relative w-[90vw] max-w-4xl">
        <video controls autoplay class="w-full rounded shadow-lg">
          <source src="/videos/ZSM_Defense_Official_Trailer.mp4" type="video/mp4" />
        </video>
        <UButton
          @click="showModal = false"
          class="absolute top-0 right-0 z-20 bg-transparent hover:bg-transparent text-white rounded-full p-0 shadow
                w-12 h-12 sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] flex items-center justify-center hover:scale-110 transition-transform duration-200"
        >
        <img
          src="~/assets/images/X_btn.png"
          alt="Play"
          class="w-4/5 h-4/5 object-contain">
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isPlaying = ref(true)
const showModal = ref(false)
const pauseIcon = ref(false)
let videoEl

const togglePlay = () => {
  if (!videoEl) return
  isPlaying.value = !isPlaying.value
  isPlaying.value ? videoEl.play() : videoEl.pause()
}

// handle download button click dependant on platform
const handleDownload = () => {
  const userAgent = navigator.userAgent
  const isMac = /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)
  
  const macLink = "https://github.com/ZiadElraggal/ziadelraggal.github.io-ZSM_Defense/releases/tag/v0.1.0-alpha-MacOS"
  const winLink = "https://github.com/ZiadElraggal/ziadelraggal.github.io-ZSM_Defense/releases/tag/v0.1.0-alpha-Windows"

  window.location.href = isMac ? macLink : winLink
}
</script>