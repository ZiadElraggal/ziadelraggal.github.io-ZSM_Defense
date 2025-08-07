<template>
  <section class="bg-[#1a0e0e] py-12 text-center text-white">
    <!-- Title -->
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f0c85e] font-['Press_Start_2P'] mb-6 drop-shadow">
      ZSM ARCHIVES
    </h2>

    <!-- Tabs -->
    <div class="flex justify-center gap-4 mb-8">
      <button
        @click="activeTab = 'towers'"
        :class="['px-4 py-2 rounded-md border-2 text-sm sm:text-base', activeTab === 'towers' ? 'bg-yellow-700 border-yellow-500' : 'bg-[#3a1f1f] border-gray-600']"
        class="font-['Press_Start_2P'] text-[#f0c85e] hover:text-white transition duration-300 hover:scale-110"
      >
        TOWERS
      </button>
      <button
        @click="activeTab = 'enemies'"
        :class="['px-4 py-2 rounded-md border-2 text-sm sm:text-base', activeTab === 'enemies' ? 'bg-yellow-700 border-yellow-500' : 'bg-[#3a1f1f] border-gray-600']"
        class="font-['Press_Start_2P'] text-[#f0c85e] hover:text-white transition duration-300 hover:scale-110"
      >
        ENEMIES
      </button>
    </div>

    <!-- Card Display: ENEMIES -->
    <div v-if="activeTab === 'enemies'" class="min-h-[600px] min-w-[300px] flex items-center justify-center gap-6 px-4 relative max-w-5xl mx-auto">
      <button @click="prevEnemy" class="w-12 h-12 sm:w-14 sm:h-14">
        <img src="~/assets/images/Previous_btn.png" alt="Previous" class="w-full h-full object-contain hover:scale-110 transition-all duration-150" />
      </button>
      <div class="w-[300px] sm:w-[350px] md:w-[400px] min-h-[400px] flex items-center justify-center relative">
        <transition name="fade" mode="out-in">
          <img
            :key="enemyCards[currentEnemyIndex]"
            :src="enemyCards[currentEnemyIndex]"
            alt="Enemy Card"
            class="w-full h-auto object-contain transition-transform duration-300 hover:scale-110"
          />
        </transition>
      </div>
      <button @click="nextEnemy" class="w-12 h-12 sm:w-14 sm:h-14">
        <img src="~/assets/images/Resume.png" alt="Next" class="w-full h-full object-contain hover:scale-110 transition-all duration-150" />
      </button>
    </div>

    <!-- Card Display: TOWERS -->
    <div v-else class="min-h-[600px] min-w-[300px] flex items-center justify-center gap-6 px-4 relative max-w-5xl mx-auto">
      <button @click="prevTower" class="w-12 h-12 sm:w-14 sm:h-14">
        <img src="~/assets/images/Previous_btn.png" alt="Previous" class="w-full h-full object-contain hover:scale-110 transition-all duration-150" />
      </button>
      <div class="w-[300px] sm:w-[350px] md:w-[400px] min-h-[400px] flex items-center justify-center relative">
        <transition name="fade" mode="out-in">
          <img
            :key="towerCards[currentTowerIndex]"
            :src="towerCards[currentTowerIndex]"
            alt="Tower Card"
            class="w-full h-auto object-contain transition-transform duration-300 hover:scale-110"
          />
        </transition>
      </div>
      <button @click="nextTower" class="w-12 h-12 sm:w-14 sm:h-14">
        <img src="~/assets/images/Resume.png" alt="Next" class="w-full h-full object-contain hover:scale-110 transition-all duration-150" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Enemy Cards
import MageCard from '~/assets/images/Cards/Mage_Card.gif'
import SkeletonCard from '~/assets/images/Cards/Skeleton_Card.gif'
import DemonCard from '~/assets/images/Cards/Demon_Card.gif'
import BeholderCard from '~/assets/images/Cards/Beholder_Card.gif'
import RatCard from '~/assets/images/Cards/Rat_Card.gif'
import ParagonCard from '~/assets/images/Cards/Paragon_Card.gif'
import TrollCard from '~/assets/images/Cards/Troll_Card.gif'
import ReaperCard from '~/assets/images/Cards/Reaper_Card.gif'

// Tower Cards
import ArcherTowerCard from '~/assets/images/Cards/Archer_Tower_Card.gif'
import MageTowerCard from '~/assets/images/Cards/Mage_Tower_Card.gif'
import CurseTowerCard from '~/assets/images/Cards/Curse_Tower_Card.gif'
import DemonTowerCard from '~/assets/images/Cards/Demon_Tower_Card.gif'

// Tabs
const activeTab = ref('enemies')

// Enemy Cards
const enemyCards = [MageCard, SkeletonCard, DemonCard, BeholderCard, RatCard, ParagonCard, TrollCard, ReaperCard]
const currentEnemyIndex = ref(0)

const nextEnemy = () => {
  currentEnemyIndex.value = (currentEnemyIndex.value + 1) % enemyCards.length
}
const prevEnemy = () => {
  currentEnemyIndex.value = (currentEnemyIndex.value - 1 + enemyCards.length) % enemyCards.length
}

// Tower Cards (placeholder for now)
const towerCards = [ArcherTowerCard, MageTowerCard, CurseTowerCard, DemonTowerCard]
const currentTowerIndex = ref(0)

const nextTower = () => {
  currentTowerIndex.value = (currentTowerIndex.value + 1) % towerCards.length
}
const prevTower = () => {
  currentTowerIndex.value = (currentTowerIndex.value - 1 + towerCards.length) % towerCards.length
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>