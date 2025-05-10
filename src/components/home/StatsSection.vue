<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface StatItem {
  id: number;
  icon: string;
  value: number;
  target: number;
  title: string;
  prefix?: string;
  suffix?: string;
}

const stats = ref<StatItem[]>([
  {
    id: 1,
    icon: 'users',
    value: 0,
    target: 248,
    title: 'Total Citizens',
    suffix: 'People'
  },
  {
    id: 2,
    icon: 'home',
    value: 0,
    target: 62,
    title: 'Households',
    suffix: 'Houses'
  },
  {
    id: 3,
    icon: 'calendar',
    value: 0,
    target: 24,
    title: 'Events This Year',
    suffix: 'Events'
  },
  {
    id: 4,
    icon: 'document',
    value: 0,
    target: 156,
    title: 'Documents Processed',
    suffix: 'Files'
  }
]);

onMounted(() => {
  // Animate count up when section comes into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });
  
  const section = document.querySelector('.stats-section');
  if (section) {
    observer.observe(section);
  }
});

const animateStats = () => {
  stats.value.forEach((stat, index) => {
    const interval = setInterval(() => {
      if (stat.value < stat.target) {
        // Increment faster for larger values to keep animation time consistent
        const increment = Math.max(1, Math.floor(stat.target / 50));
        stat.value = Math.min(stat.value + increment, stat.target);
      } else {
        clearInterval(interval);
      }
    }, 20);
  });
};
</script>

<template>
  <section class="stats-section section-padding bg-gray-50">
    <div class="container mx-auto container-padding">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Community Statistics</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          A glimpse into our thriving community at RT 5 Gading Junti, showcasing our growth and activities.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="stat in stats" 
          :key="stat.id" 
          class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
            <!-- Users icon -->
            <svg v-if="stat.icon === 'users'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
            
            <!-- Home icon -->
            <svg v-if="stat.icon === 'home'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            
            <!-- Calendar icon -->
            <svg v-if="stat.icon === 'calendar'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            
            <!-- Document icon -->
            <svg v-if="stat.icon === 'document'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          
          <div class="flex items-center justify-center mb-2">
            <span class="text-4xl font-bold text-gray-800">
              {{ stat.prefix || '' }}{{ stat.value }}{{ stat.suffix ? '' : '' }}
            </span>
          </div>
          
          <h3 class="text-lg font-semibold text-gray-700">{{ stat.title }}</h3>
          <p v-if="stat.suffix" class="text-sm text-gray-500 mt-1">{{ stat.suffix }}</p>
        </div>
      </div>
    </div>
  </section>
</template>