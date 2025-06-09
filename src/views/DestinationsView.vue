<template>
  <div class="font-sans bg-gray-50">
    <main class="container mx-auto px-4 py-12">
      <h1 class="text-3xl md:text-4xl font-bold mb-8 text-center">China's Must-Visit Destinations</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="city in cities" :key="city.name" class="bg-white rounded-lg shadow-md overflow-hidden">
          <img :src="city.image" :alt="city.name" class="w-full h-72 object-cover">
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-2">
              {{ city.name }}
              <span class="text-red-500 ml-2">
                {{ Math.floor(city.rating) >= 1 ? '★'.repeat(Math.floor(city.rating)) : '' }}
                {{ city.rating % 1 >= 0.5 ? '½' : '' }}
                {{ '☆'.repeat(5 - Math.ceil(city.rating)) }}
              </span>
            </h2>
            <p class="text-gray-600 mb-4">{{ city.description }}</p>
            
            <div class="mb-4">
              <h3 class="text-lg font-semibold mb-2 text-red-600">Top Attractions</h3>
              <ul class="list-disc pl-6 text-gray-600 space-y-1">
                <li v-for="attraction in city.attractions" :key="attraction">{{ attraction }}</li>
              </ul>
            </div>
            
            <div class="mb-4">
              <h3 class="text-lg font-semibold mb-2 text-red-600">Must-Try Foods</h3>
              <ul class="list-disc pl-6 text-gray-600 space-y-1">
                <li v-for="food in city.foods" :key="food">{{ food }}</li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-2 text-red-600">Travel Tips</h3>
              <ul class="list-disc pl-6 text-gray-600 space-y-1">
                <li v-for="tip in city.tips" :key="tip">{{ tip }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface City {
  name: string;
  description: string;
  image: string;
  attractions: string[];
  foods: string[];
  tips: string[];
  rating: number; // 1-5 stars
}

export default defineComponent({
  name: 'DestinationsView',
  data() {
    return {
      cities: [
        // Sorted by rating (high to low)
        {
          name: 'Beijing',
          rating: 5,
          description: "China's capital with 3,000 years of history and modern marvels.",
          image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          attractions: ['Forbidden City', 'Great Wall of China', 'Temple of Heaven', 'Summer Palace'],
          foods: ['Peking Duck', 'Zhajiangmian (Noodles with Fried Sauce)', 'Beijing Yogurt'],
          tips: ['Visit the Great Wall at Mutianyu for fewer crowds', 'Avoid summer months due to heat and crowds', 'Purchase attraction tickets online in advance']
        },
        {
          name: 'Shanghai',
          rating: 5,
          description: "China's most cosmopolitan city blending East and West.",
          image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          attractions: ['The Bund', 'Yu Garden', 'Shanghai Tower', 'Tianzifang'],
          foods: ['Xiaolongbao (Soup Dumplings)', 'Shengjianbao (Pan-Fried Buns)', 'Shanghai Hairy Crab'],
          tips: ['Visit the Bund at night for spectacular lights', 'Use the metro - it\'s efficient and inexpensive', 'Explore the French Concession for cafes and boutiques']
        },
        {
          name: 'Xi\'an',
          rating: 5,
          description: "Ancient capital and starting point of the Silk Road.",
          image: 'https://images.unsplash.com/photo-1539609413529-1166774c3954?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Terracotta Warriors', 'Ancient City Wall', 'Muslim Quarter', 'Big Wild Goose Pagoda'],
          foods: ['Roujiamo (Chinese Hamburger)', 'Yangrou Paomo (Lamb Soup with Bread)', 'Biángbiáng Noodles'],
          tips: ['Hire an English-speaking guide for the Terracotta Warriors', 'Visit the Muslim Quarter in the evening for food stalls', 'Spring and autumn have the most pleasant weather']
        },
        {
          name: 'Chengdu',
          rating: 5,
          description: "Home of pandas and Sichuan cuisine.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Chengdu Research Base of Giant Panda Breeding', 'Jinli Ancient Street', 'Wuhou Shrine', 'Qingcheng Mountain'],
          foods: ['Hot Pot', 'Mapo Tofu', 'Dandan Noodles'],
          tips: ['Visit pandas early morning when they\'re most active', 'Ask for "wei la" (less spicy) if you can\'t handle heat', 'Tea houses are great for people watching']
        },
        {
          name: 'Guilin',
          rating: 4,
          description: "Stunning karst landscapes along the Li River.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Li River Cruise', 'Yangshuo', 'Elephant Trunk Hill', 'Longji Rice Terraces'],
          foods: ['Guilin Rice Noodles', 'Beer Fish', 'Stuffed Li River Snails'],
          tips: ['Take the Li River cruise from Guilin to Yangshuo', 'Rent a bike in Yangshuo to explore countryside', 'April-May and September-October have best weather']
        },
        {
          name: 'Hong Kong',
          rating: 5,
          description: "Vibrant metropolis with stunning skyline and delicious dim sum.",
          image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Victoria Peak', 'Star Ferry', 'Tian Tan Buddha', 'Temple Street Night Market'],
          foods: ['Dim Sum', 'Egg Waffles', 'Roast Goose'],
          tips: ['Get an Octopus card for public transport', 'Visit Victoria Peak on a clear day', 'Try dai pai dong (open-air food stalls)']
        },
        {
          name: 'Hangzhou',
          rating: 4,
          description: "Paradise on Earth with lakes, tea fields, and temples.",
          image: 'https://images.unsplash.com/photo-1539609413529-1166774c3954?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['West Lake', 'Lingyin Temple', 'Longjing Tea Plantations', 'Hefang Street'],
          foods: ['Dongpo Pork', 'West Lake Fish in Vinegar Sauce', 'Beggar\'s Chicken'],
          tips: ['Visit early morning to avoid tourist crowds', 'Rent a boat on West Lake', 'Sample Longjing tea with locals']
        },
        {
          name: 'Suzhou',
          rating: 4,
          description: "Classical gardens and ancient silk culture.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Humble Administrator\'s Garden', 'Tiger Hill', 'Suzhou Museum', 'Grand Canal'],
          foods: ['Squirrel-Shaped Mandarin Fish', 'Suzhou-style Mooncakes', 'Sweet and Sour Spare Ribs'],
          tips: ['Avoid weekends for garden visits', 'Combine with Hangzhou for a short trip', 'Suzhou Rail Transit connects most attractions']
        },
        {
          name: 'Nanjing',
          rating: 4,
          description: "Historic capital with rich cultural sites.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Sun Yat-sen Mausoleum', 'Nanjing City Wall', 'Confucius Temple', 'Presidential Palace'],
          foods: ['Salted Duck', 'Duck Blood Noodle Soup', 'Nanjing Roast Duck'],
          tips: ['Use metro to visit outer attractions', 'Fall is best time for city walks', 'Visit Qinhuai River area at night']
        },
        {
          name: 'Harbin',
          rating: 4,
          description: "Ice and snow wonderland with Russian influence.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Harbin Ice and Snow Festival', 'Saint Sophia Cathedral', 'Sun Island Park', 'Zhongyang Pedestrian Street'],
          foods: ['Harbin Sausages', 'Borscht', 'Ice Cream (even in winter!)'],
          tips: ['Dress in thermal layers for January', 'Book festival tickets early', 'Try Russian-style cafes']
        },
        {
          name: 'Sanya',
          rating: 4,
          description: "Tropical island paradise with stunning beaches.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Yalong Bay', 'Tianya Haijiao', 'Nanshan Temple', 'Wuzhizhou Island'],
          foods: ['Hainan Chicken Rice', 'Coconut Rice', 'Seafood BBQ'],
          tips: ['Book resorts in advance during holidays', 'Use sunscreen - strong tropical sun', 'Avoid Spring Festival for crowd reasons']
        },
        {
          name: 'Huangshan',
          rating: 4,
          description: "Majestic yellow mountains with breathtaking views.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Huangshan Mountain', 'Xihai Grand Canyon', 'Hot Springs', 'Ancient Villages (Hongcun/Xidi)'],
          foods: ['Stinky Tofu', 'Huangshan Maofeng Tea', 'Bamboo Shoots Dishes'],
          tips: ['Best time is April-November', 'Bring warm clothes for mountain top', 'Consider cable car to save energy']
        },
        {
          name: 'Zhangjiajie',
          rating: 4,
          description: "Inspiration for the Avatar movie's floating mountains.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Zhangjiajie National Forest Park', 'Tianmen Mountain', 'Glass Skywalk', 'Bailong Elevator'],
          foods: ['Tujia Bacon', 'Sour Fish Soup', 'Wild Mushroom Dishes'],
          tips: ['Prepare for stairs and altitude', 'Avoid foggy days for better mountain views', 'Book hotels near Wulingyuan']
        },
        {
          name: 'Lijiang',
          rating: 4,
          description: "Charming old town with ethnic Naxi culture.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Lijiang Old Town (UNESCO)', 'Jade Dragon Snow Mountain', 'Black Dragon Pool', 'Shuhe Ancient Town'],
          foods: ['Naxi Barbecue', 'Yak Butter Tea', 'Er Kuai (Rice Cake)'],
          tips: ['Altitude may affect some visitors', 'Stay inside Old Town for best experience', 'Visit nearby Yunnan ethnic villages']
        },
        {
          name: 'Dali',
          rating: 3,
          description: "Laid-back town by Erhai Lake with Bai minority culture.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Three Pagodas', 'Erhai Lake', 'Dali Ancient Town', 'Cangshan Mountain'],
          foods: ['Rushan Cheese', 'Dali Baba (Bread)', 'Erhai Lake Fish'],
          tips: ['Rent electric bikes to explore lake area', 'Visit local Bai villages', 'March-April has best weather']
        },
        {
          name: 'Dunhuang',
          rating: 3,
          description: "Oasis city on the ancient Silk Road with Buddhist caves.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Mogao Caves', 'Singing Sand Dunes', 'Crescent Moon Spring', 'Yumen Pass'],
          foods: ['Dunhuang Noodles', 'Lamb Skewers', 'Melons (famous local produce)'],
          tips: ['Book Mogao Caves tickets in advance', 'Visit sand dunes at sunset', 'Bring sun protection for desert']
        },
        {
          name: 'Qingdao',
          rating: 3,
          description: "Coastal city with German heritage and famous beer.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Tsingtao Beer Museum', 'May Fourth Square', 'Zhanqiao Pier', 'Laoshan Mountain'],
          foods: ['Seafood', 'Tsingtao Beer', 'Jiaozi (Dumplings)'],
          tips: ['Visit in August for beer festival', 'Try fresh seafood at local markets', 'Explore German architecture']
        },
        {
          name: 'Chongqing',
          rating: 4,
          description: "Mountain city with spicy hotpot and Yangtze River views.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Hongya Cave', 'Yangtze River Cableway', 'Ciqi Kou Ancient Town', 'Three Gorges Museum'],
          foods: ['Chongqing Hotpot', 'Xiao Mian (Spicy Noodles)', 'Sour and Spicy Noodles'],
          tips: ['Prepare for spicy food challenge', 'Use metro to navigate hilly terrain', 'Visit at night for city lights']
        },
        {
          name: 'Wuhan',
          rating: 3,
          description: "Yangtze River metropolis with lakes and history.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Yellow Crane Tower', 'East Lake', 'Hubei Provincial Museum', 'Yangtze River Bridge'],
          foods: ['Hot Dry Noodles', 'Duck Neck', 'Re Gan Mian (Hot Noodles)'],
          tips: ['Spring has best weather', 'Use ferries to cross Yangtze River', 'Visit university areas for cherry blossoms']
        },
        {
          name: 'Xiamen',
          rating: 3,
          description: "Picturesque coastal city with island charm.",
          image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
          attractions: ['Gulangyu Island', 'Nanputuo Temple', 'Hulishan Fortress', 'Zhongshan Road'],
          foods: ['Seafood', 'Peanut Soup', 'Oyster Omelet'],
          tips: ['Take ferry to Gulangyu Island early', 'Avoid national holidays for fewer crowds', 'Try local tea culture']
        }
      ] as City[]
    }
  }
})
</script>