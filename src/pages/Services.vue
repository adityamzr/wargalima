<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  steps: string[];
}

interface faq {
  id: number;
  question: string;
  answer: string;
}

const services = ref<Service[]>([
  {
    id: 'letters',
    icon: 'document',
    title: 'Administrative Letters',
    description: 'Request various administrative letters such as domicile letters, good conduct letters, business permits, and more.',
    steps: [
      'Log in to your Citizen Portal account',
      'Navigate to "Letter Requests" section',
      'Select the type of letter you need',
      'Fill in the required information',
      'Submit your request and track its progress'
    ]
  },
  {
    id: 'reporting',
    icon: 'flag',
    title: 'Community Reporting',
    description: 'Report neighborhood issues, infrastructure problems, or security concerns directly to the administration.',
    steps: [
      'Log in to your Citizen Portal account',
      'Select "Report an Issue" from the dashboard',
      'Choose the issue category',
      'Provide details and attach photos if needed',
      'Submit your report and track its resolution status'
    ]
  },
  {
    id: 'events',
    icon: 'calendar',
    title: 'Event Management',
    description: 'Manage community events, reserve communal spaces for gatherings, and participate in neighborhood activities.',
    steps: [
      'Access the Events section in your Citizen Portal',
      'View upcoming community events',
      'Reserve communal spaces for personal or community events',
      'Register for participation in activities',
      'Receive notifications about event updates'
    ]
  },
  {
    id: 'registration',
    icon: 'user-plus',
    title: 'New Resident Registration',
    description: 'Register as a new resident or update your family information in our community database.',
    steps: [
      'Create a new account on the Citizen Portal',
      'Verify your identity using required documents',
      'Complete the resident registration form',
      'Submit your information for verification',
      'Receive confirmation once approved'
    ]
  }
]);

const faq = ref<faq[]>([
  {
    id: 1,
    question: "How quickly will my letter request be processed?",
    answer:
      "Most letter requests are processed within 1-3 working days. Urgent requests may be processed more quickly depending on availability. You can track the status of your request in the Citizen Portal.",
  },
  {
    id: 2,
    question: "Is there a fee for using these services?",
    answer:
      "Basic services on the Wargalima platform are provided free of charge to all residents of RT 5 Gading Junti. Some specialized services may have administrative fees as per local regulations, which will be clearly indicated before processing.",
  },
  {
    id: 3,
    question: "What documents do I need for new resident registration?",
    answer:
      "New residents need to provide: a copy of their ID card (KTP), family card (KK), a recent photograph, and proof of residence (such as a property deed or rental agreement). Additional documents may be required depending on your specific situation.",
  },
  {
    id: 4,
    question: "How do I report an urgent security concern?",
    answer:
      "For urgent security concerns, please contact the security coordinator directly at the emergency number provided in your citizen portal. For non-urgent issues, you can use the reporting feature on the platform.",
  },
]);

const activeTab = ref('letters');

// Handle hash navigation
onMounted(() => {
  const hash = window.location.hash.substring(1);
  if (hash && services.value.some(service => service.id === hash)) {
    activeTab.value = hash;
    
    // Scroll to the tab content after a short delay
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
});

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId;
  window.location.hash = tabId;
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-primary-700 text-white py-20 md:py-28">
      <div class="absolute inset-0 bg-opacity-70 bg-gray-900"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Layanan Kami</h1>
          <p class="text-xl text-white text-opacity-90 mb-8">
            Jelajahi berbagai layanan yang tersedia bagi warga RT 05 Gading Junti Asri.
          </p>
          <router-link to="/login" class="btn bg-white text-primary-700 hover:bg-gray-100">
            Access Citizen Portal
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- Services Tabs -->
    <section class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Layanan Tersedia</h2>
          <p class="text-gray-600 max-w-3xl mx-auto">
            Platform kami menyediakan berbagai layanan digital yang dirancang untuk mempermudah proses administrasi dan meningkatkan keterlibatan masyarakat.
          </p>
        </div>
        
        <!-- Tabs Navigation -->
        <div class="flex flex-wrap justify-center mb-12 border-b">
          <button 
            v-for="service in services" 
            :key="service.id"
            @click="setActiveTab(service.id)"
            class="px-6 py-4 text-lg font-medium transition-colors duration-200 relative"
            :class="activeTab === service.id ? 'text-primary-600' : 'text-gray-600 hover:text-primary-500'"
          >
            {{ service.title }}
            <div 
              class="absolute bottom-0 left-0 right-0 h-1 bg-primary-600 transition-transform duration-300" 
              :class="activeTab === service.id ? 'transform scale-x-100' : 'transform scale-x-0'"
            ></div>
          </button>
        </div>
        
        <!-- Tabs Content -->
        <div class="max-w-4xl mx-auto">
          <div 
            v-for="service in services" 
            :id="service.id" 
            :key="service.id"
            class="transition-all duration-500"
            :class="activeTab === service.id ? 'block opacity-100' : 'hidden opacity-0'"
          >
            <div class="flex flex-col md:flex-row items-start gap-8">
              <!-- Icon Column -->
              <div class="flex-shrink-0 w-full md:w-auto flex justify-center md:block">
                <div class="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                  <!-- Document Icon -->
                  <svg v-if="service.icon === 'document'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  
                  <!-- Flag Icon -->
                  <svg v-if="service.icon === 'flag'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>
                  
                  <!-- Calendar Icon -->
                  <svg v-if="service.icon === 'calendar'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  
                  <!-- User Plus Icon -->
                  <svg v-if="service.icon === 'user-plus'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                  </svg>
                </div>
              </div>
              
              <!-- Content Column -->
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ service.title }}</h3>
                <p class="text-gray-600 text-lg mb-6">{{ service.description }}</p>
                
                <div class="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 class="text-lg font-semibold text-gray-800 mb-4">How to Use This Service:</h4>
                  <ol class="space-y-3">
                    <li 
                      v-for="(step, index) in service.steps" 
                      :key="index"
                      class="flex items-start"
                    >
                      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold text-sm mr-3 mt-0.5">
                        {{ index + 1 }}
                      </div>
                      <span class="text-gray-600">{{ step }}</span>
                    </li>
                  </ol>
                </div>
                
                <div class="flex justify-center md:justify-start">
                  <router-link to="/login" class="btn btn-primary">
                    Access This Service
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Daftar Pertanyaan Umum</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan pada layanan kami
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto space-y-4">
          <div v-for="item in faq" class="bg-white rounded-lg shadow-sm overflow-hidden">
            <details class="group">
              <summary class="flex items-center justify-between cursor-pointer p-6">
                <h3 class="text-lg font-medium text-gray-800">{{ item.question }}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div class="px-6 pb-6 text-gray-600">
                {{ item.answer }}
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Ready to access these services?</h2>
          <p class="text-white text-opacity-90 text-lg mb-8">
            Join the Citizen Portal today to access all available services and stay connected with your neighborhood.
          </p>
          <router-link to="/login" class="btn bg-white text-primary-700 hover:bg-gray-100 text-lg">
            Enter Citizen Portal
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>