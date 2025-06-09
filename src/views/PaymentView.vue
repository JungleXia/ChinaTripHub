<template>
  <div class="font-sans bg-gray-50">
    <main class="container mx-auto px-4 py-12">
      <h1 class="text-3xl md:text-4xl font-bold mb-8 text-center">Payment Guide for China</h1>
    
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-red-600">Mobile Payment</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="method in mobilePayments" :key="method.name" class="border-l-4 border-red-600 pl-4">
          <h3 class="text-xl font-medium mb-2">{{ method.name }}</h3>
          <p class="text-gray-600 mb-2">{{ method.description }}</p>
          <ul class="list-disc pl-6 text-gray-600">
            <li v-for="feature in method.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-red-600">Cash & Cards</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="option in cashCards" :key="option.name" class="border-l-4 border-red-600 pl-4">
          <h3 class="text-xl font-medium mb-2">{{ option.name }}</h3>
          <p class="text-gray-600">{{ option.description }}</p>
          <div v-if="option.tips" class="mt-4">
            <h4 class="font-medium mb-1">{{ option.tipsTitle }}</h4>
            <ul class="list-disc pl-6 text-gray-600">
              <li v-for="tip in option.tips" :key="tip">{{ tip }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold mb-4 text-red-600">Payment Tips</h2>
      <div class="space-y-6">
        <div v-for="(tip, index) in paymentTips" :key="tip.title" class="flex items-start">
          <div class="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
            {{ index + 1 }}
          </div>
          <div>
            <h3 class="text-lg font-medium mb-1">{{ tip.title }}</h3>
            <p class="text-gray-600">{{ tip.description }}</p>
          </div>
        </div>
      </div>
    </div>
     </main>
  </div>
</template>

<script setup lang="ts">
interface PaymentMethod {
  name: string;
  description: string;
  features: string[];
}

interface CashCardOption {
  name: string;
  description: string;
  tipsTitle?: string;
  tips?: string[];
}

interface PaymentTip {
  title: string;
  description: string;
}

const mobilePayments: PaymentMethod[] = [
  {
    name: 'WeChat Pay',
    description: 'Most widely used mobile payment in China. Requires linking a Chinese bank account.',
    features: [
      'Used by over 1 billion users',
      'Accepts foreign credit cards with limitations',
      'Minimum 3% fee for international cards'
    ]
  },
  {
    name: 'Alipay',
    description: 'Second most popular mobile payment platform. More foreigner-friendly.',
    features: [
      'Tour Pass program for short-term visitors',
      'Prepaid balance up to ¥2000',
      'Valid for 90 days'
    ]
  }
];

const cashCards: CashCardOption[] = [
  {
    name: 'Chinese Yuan (CNY/RMB)',
    description: 'Cash is still accepted but becoming less common. Small bills recommended.',
    tipsTitle: 'Exchange Tips:',
    tips: [
      'Exchange at banks for best rates',
      'Keep exchange receipts for reconversion',
      'ATMs accept foreign cards (look for UnionPay logo)'
    ]
  },
  {
    name: 'Credit Cards',
    description: 'Limited acceptance, mainly in hotels and upscale establishments.',
    tipsTitle: 'Card Types Accepted:',
    tips: [
      'Visa and MasterCard most widely accepted',
      'American Express less common',
      'UnionPay cards work everywhere'
    ]
  }
];

const paymentTips: PaymentTip[] = [
  {
    title: 'Set Up Mobile Payment Before Arrival',
    description: 'Download WeChat/Alipay and verify your account before traveling.'
  },
  {
    title: 'Carry Some Cash',
    description: 'Keep ¥200-500 for small vendors, taxis, and emergencies.'
  },
  {
    title: 'Inform Your Bank',
    description: 'Notify your bank of travel plans to avoid card blocks.'
  },
  {
    title: 'Use Hotel Exchange Services',
    description: 'Hotels often provide better exchange rates than airports.'
  }
];
</script>