<template>
  <div class="font-sans bg-gray-50">
    <main class="container mx-auto px-4 py-12">
      <h1 class="text-3xl md:text-4xl font-bold mb-8 text-center">China Visa Information</h1>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-red-600">Visa Types</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="type in visaTypes" :key="type.name" class="border-l-4 border-red-600 pl-4">
            <h3 class="text-xl font-medium mb-2">{{ type.name }}</h3>
            <p class="text-gray-600">{{ type.description }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-red-600">Required Documents</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li v-for="doc in requiredDocuments" :key="doc">{{ doc }}</li>
        </ul>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold mb-4 text-red-600">Application Process</h2>
        <div class="space-y-6">
          <div v-for="(step, index) in applicationSteps" :key="index" class="flex items-start">
            <div class="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
              {{ index + 1 }}
            </div>
            <div>
              <h3 class="text-lg font-medium mb-1">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VisaView',
  data() {
    return {
      visaTypes: [
        {
          name: 'Tourist Visa (L)',
          description: 'For travelers visiting China for tourism purposes. Valid for 30-90 days.'
        },
        {
          name: 'Business Visa (M)',
          description: 'For business-related activities. Requires invitation letter.'
        },
        {
          name: 'Transit Visa (G)',
          description: 'For travelers transiting through China (usually 24-144 hours).'
        },
        {
          name: '10-Year Visa',
          description: 'Available for citizens of certain countries (USA, Canada, etc.).'
        }
      ],
      requiredDocuments: [
        'Passport valid for at least 6 months with blank pages',
        'Completed visa application form',
        'Recent passport-sized photo (33mm x 48mm)',
        'Proof of travel itinerary (flight reservations)',
        'Hotel bookings or invitation letter',
        'For business visa: invitation letter from Chinese company'
      ],
      applicationSteps: [
        {
          title: 'Complete Application Form',
          description: 'Fill out the online form on the Chinese visa application website.'
        },
        {
          title: 'Prepare Documents',
          description: 'Gather all required documents as listed above.'
        },
        {
          title: 'Submit Application',
          description: 'Submit in person at a Chinese embassy/consulate or authorized visa center.'
        },
        {
          title: 'Pay Fees',
          description: 'Visa fees vary by nationality and processing time (standard/express).'
        },
        {
          title: 'Collect Visa',
          description: 'Processing typically takes 4-5 business days (express available).'
        }
      ]
    }
  }
})
</script>