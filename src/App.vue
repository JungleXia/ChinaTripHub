<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.hero-bg {
  background-image: url('/images/hero-banner.jpg');
  background-size: cover;
  background-position: center;
}
</style>

<template>
  <div class="font-sans bg-gray-50">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>
