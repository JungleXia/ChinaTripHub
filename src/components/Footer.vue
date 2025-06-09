<script lang="ts">

export default {
  setup() {
    return {}
  }
}
</script>

<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">ChinaTripHub</h3>
          <p class="text-gray-400">Your ultimate guide to exploring China's rich culture and breathtaking landscapes.</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><RouterLink to="/" class="text-gray-400 hover:text-white">Home</RouterLink></li>
            <li><RouterLink to="/destinations" class="text-gray-400 hover:text-white">Destinations</RouterLink></li>
            <li><RouterLink to="/visa" class="text-gray-400 hover:text-white">Visa Info</RouterLink></li>
            <li><RouterLink to="/payment" class="text-gray-400 hover:text-white">Payment Guide</RouterLink></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Services</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">Tour Packages</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Hotel Booking</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Transportation</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Travel Insurance</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
          <ul class="space-y-2">
            <li class="flex items-center"><i class="fas fa-envelope mr-2"></i> info@chinatriphub.com</li>
            <li class="flex items-center"><i class="fas fa-phone mr-2"></i> +86 10 1234 5678</li>
            <li class="flex items-center"><i class="fas fa-map-marker-alt mr-2"></i> Beijing, China</li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2023 ChinaTripHub. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>