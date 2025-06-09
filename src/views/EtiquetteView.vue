<template>
  <div class="font-sans bg-gray-50">
    <main class="container mx-auto px-4 py-12">
      <h1 class="text-3xl md:text-4xl font-bold mb-8 text-center">Chinese Cultural Etiquette</h1>
    
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-red-600">Dining Etiquette</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="item in diningEtiquette" :key="item.title" class="border-l-4 border-red-600 pl-4">
          <h3 class="text-xl font-medium mb-2">{{ item.title }}</h3>
          <ul class="list-disc pl-6 text-gray-600 space-y-1">
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-red-600">Social Interactions</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="item in socialInteractions" :key="item.title" class="border-l-4 border-red-600 pl-4">
          <h3 class="text-xl font-medium mb-2">{{ item.title }}</h3>
          <ul class="list-disc pl-6 text-gray-600 space-y-1">
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-red-600">Cultural Taboos</h2>
      <div class="space-y-4">
        <div v-for="taboo in culturalTaboos" :key="taboo.title" class="flex items-start">
          <div class="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
            <i class="fas fa-ban"></i>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-1">{{ taboo.title }}</h3>
            <p class="text-gray-600">{{ taboo.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold mb-4 text-red-600">Practical Tips</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="tip in practicalTips" :key="tip.title">
          <h3 class="text-xl font-medium mb-2">{{ tip.title }}</h3>
          <ul class="list-disc pl-6 text-gray-600 space-y-1">
            <li v-for="point in tip.points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>
    </main>
  </div>
</template>

<script setup lang="ts">
interface EtiquetteItem {
  title: string;
  points: string[];
}

interface TabooItem {
  title: string;
  description: string;
}

const diningEtiquette: EtiquetteItem[] = [
  {
    title: 'Table Manners',
    points: [
      'Wait to be seated - hierarchy is important',
      'Don\'t stick chopsticks upright in rice (resembles funeral incense)',
      'Try a bit of everything to show appreciation',
      'Burping is acceptable, blowing nose is not'
    ]
  },
  {
    title: 'Tipping',
    points: [
      'Not expected in most restaurants',
      'High-end hotels may add 10-15% service charge',
      'Tour guides and drivers appreciate tips'
    ]
  }
];

const socialInteractions: EtiquetteItem[] = [
  {
    title: 'Greetings',
    points: [
      'Handshakes are common in business settings',
      'Nodding or slight bow shows respect',
      'Address people by their title + surname'
    ]
  },
  {
    title: 'Gift Giving',
    points: [
      'Present gifts with both hands',
      'Avoid clocks, handkerchiefs or sharp objects',
      'Gifts may be refused once or twice before acceptance'
    ]
  }
];

const culturalTaboos: TabooItem[] = [
  {
    title: 'Don\'t Discuss Sensitive Topics',
    description: 'Avoid politics, Taiwan, Tibet or human rights in casual conversation.'
  },
  {
    title: 'Respect Personal Space',
    description: 'Chinese may stand closer than Westerners are used to - don\'t back away.'
  },
  {
    title: 'Public Behavior',
    description: 'Avoid public displays of affection and loud conversations.'
  }
];

const practicalTips: EtiquetteItem[] = [
  {
    title: 'Temple Etiquette',
    points: [
      'Dress modestly (cover shoulders and knees)',
      'Walk clockwise around Buddhist stupas',
      'Don\'t touch or point at religious statues'
    ]
  },
  {
    title: 'Photography',
    points: [
      'Ask permission before photographing people',
      'Some religious sites prohibit photography',
      'Military installations are strictly off-limits'
    ]
  }
];
</script>