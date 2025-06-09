<script lang="ts">

import { ref } from 'vue'

export default {
  setup() {
    const mobileMenuOpen = ref(false)

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
      const mobileMenu = document.getElementById('mobileMenu')
      if (mobileMenu) {
        mobileMenu.classList.toggle('hidden', !mobileMenuOpen.value)
      }
    }

    return {
      mobileMenuOpen,
      toggleMobileMenu
    }
  }
}
</script>

<template>
  <div>
    <header class="bg-white shadow-md">
      <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
        <RouterLink to="/" class="text-2xl font-bold text-red-600">ChinaTripHub</RouterLink>
        <div class="hidden md:flex space-x-6">
          <RouterLink to="/" class="hover:text-red-600">Home</RouterLink>
          <RouterLink to="/destinations" class="hover:text-red-600">Destinations</RouterLink>
          <RouterLink to="/visa" class="hover:text-red-600">Visa Info</RouterLink>
          <RouterLink to="/payment" class="hover:text-red-600">Payment</RouterLink>
          <RouterLink to="/etiquette" class="hover:text-red-600">Etiquette</RouterLink>
        </div>
        <button class="md:hidden" @click="toggleMobileMenu">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </nav>
    </header>

    <!-- Mobile Menu -->
    <div class="fixed inset-0 bg-black bg-opacity-90 z-50 hidden" id="mobileMenu">
      <div class="flex justify-end p-4">
        <button id="closeMenu" class="text-white text-2xl" @click="toggleMobileMenu">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="flex flex-col items-center justify-center h-full space-y-8">
        <RouterLink to="/" class="text-white text-2xl" @click="toggleMobileMenu">Home</RouterLink>
        <RouterLink to="/destinations" class="text-white text-2xl" @click="toggleMobileMenu">Destinations</RouterLink>
        <RouterLink to="/visa" class="text-white text-2xl" @click="toggleMobileMenu">Visa Info</RouterLink>
        <RouterLink to="/payment" class="text-white text-2xl" @click="toggleMobileMenu">Payment Guide</RouterLink>
        <RouterLink to="/etiquette" class="text-white text-2xl" @click="toggleMobileMenu">Etiquette</RouterLink>
      </div>
    </div>
  </div>
</template>