<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>


<template>
  <main class="flex-grow">
    <!-- Hero Banner -->
    <section class="hero-bg h-96 flex items-center justify-center text-white relative">
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="container mx-auto px-4 z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Discover the Wonders of China</h1>
        <p class="text-xl mb-8">Your ultimate guide to exploring China's rich culture and breathtaking landscapes</p>
        <RouterLink to="/destinations" class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Explore Destinations
        </RouterLink>
      </div>
    </section>

    <!-- Featured Destinations -->
    <section class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold text-center mb-8">Featured Destinations</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Beijing -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <img src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
               alt="Beijing" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Beijing</h3>
            <p class="text-gray-600 mb-4">Explore the Great Wall and Forbidden City</p>
            <RouterLink to="/destinations/beijing" class="text-red-600 font-medium hover:underline">Learn More &rarr;</RouterLink>
          </div>
        </div>
        
        <!-- Shanghai -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <img src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
               alt="Shanghai" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Shanghai</h3>
            <p class="text-gray-600 mb-4">Modern metropolis with historic charm</p>
            <RouterLink to="/destinations/shanghai" class="text-red-600 font-medium hover:underline">Learn More &rarr;</RouterLink>
          </div>
        </div>
        
        <!-- Xi'an -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <img src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
               alt="Xi'an" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Xi'an</h3>
            <p class="text-gray-600 mb-4">Home of the Terracotta Warriors</p>
            <RouterLink to="/destinations/xian" class="text-red-600 font-medium hover:underline">Learn More &rarr;</RouterLink>
          </div>
        </div>
        
        <!-- Chengdu -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <img src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
               alt="Chengdu" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Chengdu</h3>
            <p class="text-gray-600 mb-4">Panda sanctuary and spicy cuisine</p>
            <RouterLink to="/destinations/chengdu" class="text-red-600 font-medium hover:underline">Learn More &rarr;</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Practical Info -->
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Practical Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <i class="fas fa-passport text-4xl text-red-600 mb-4"></i>
            <h3 class="text-xl font-semibold mb-2">Visa Information</h3>
            <p class="text-gray-600 mb-4">Everything you need to know about getting a Chinese visa</p>
            <RouterLink to="/visa" class="text-red-600 font-medium hover:underline">Learn More &rarr;</RouterLink>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <i class="fas fa-money-bill-wave text-4xl text-red-600 mb-4"></i>
            <h3 class="text-xl font-semibold mb-2">Payment Guide</h3>
            <p class="text-gray-600 mb-4">How to pay and use money in China</p>
            <RouterLink to="/payment" class="text-red-600 font-medium hover:underline">Learn More &rarr;</RouterLink>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <i class="fas fa-hands-helping text-4xl text-red-600 mb-4"></i>
            <h3 class="text-xl font-semibold mb-2">Cultural Etiquette</h3>
            <p class="text-gray-600 mb-4">Do's and don'ts when traveling in China</p>
            <RouterLink to="/etiquette" class="text-red-600 font-medium hover:underline">Learn More &rarr;</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Travel Stories -->
    <section class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold text-center mb-8">Travel Stories</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
               alt="Travel Story" class="w-full h-64 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Hiking the Great Wall</h3>
            <p class="text-gray-600 mb-4">An unforgettable journey along one of the world's greatest wonders...</p>
            <RouterLink to="/stories/great-wall" class="text-red-600 font-medium hover:underline">Read Full Story &rarr;</RouterLink>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
               alt="Travel Story" class="w-full h-64 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Shanghai by Night</h3>
            <p class="text-gray-600 mb-4">Exploring the dazzling nightlife and skyline of China's most cosmopolitan city...</p>
            <RouterLink to="/stories/shanghai-night" class="text-red-600 font-medium hover:underline">Read Full Story &rarr;</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Night City -->
    <section class="relative py-16">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <img src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
           alt="Shanghai Night" class="w-full h-96 object-cover">
      <div class="container mx-auto px-4 relative z-10 text-white text-center mt-8">
        <h2 class="text-3xl font-bold mb-4">Experience China's Vibrant Nightlife</h2>
        <p class="text-xl mb-6 max-w-2xl mx-auto">From Shanghai's dazzling skyline to Beijing's hutongs at night, discover China after dark</p>
        <RouterLink to="/nightlife" class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
          Nightlife Guide
        </RouterLink>
      </div>
    </section>
  </main>
</template>