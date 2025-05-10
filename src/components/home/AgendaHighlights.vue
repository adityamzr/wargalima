<script setup lang="ts">
import { ref } from 'vue';

interface AgendaItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  isUpcoming: boolean;
}

const agendaItems = ref<AgendaItem[]>([
  {
    id: 1,
    title: 'Monthly Neighborhood Meeting',
    date: 'October 30, 2025',
    time: '19:00 - 21:00',
    location: 'Community Hall',
    type: 'Meeting',
    isUpcoming: true
  },
  {
    id: 2,
    title: 'Children\'s Vaccination Day',
    date: 'November 5, 2025',
    time: '09:00 - 12:00',
    location: 'Health Post',
    type: 'Health',
    isUpcoming: true
  },
  {
    id: 3,
    title: 'Community Garden Project',
    date: 'November 12, 2025',
    time: '16:00 - 18:00',
    location: 'Park Area',
    type: 'Environment',
    isUpcoming: true
  },
  {
    id: 4,
    title: 'Independence Day Celebration',
    date: 'August 17, 2025',
    time: '10:00 - 14:00',
    location: 'Main Square',
    type: 'Celebration',
    isUpcoming: false
  }
]);

// Filter only upcoming events
const upcomingAgenda = agendaItems.value.filter(item => item.isUpcoming);
</script>

<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto container-padding">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">Upcoming Events</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Stay informed about important events and activities happening in our neighborhood
        </p>
      </div>
      
      <div class="flex flex-col space-y-4">
        <div 
          v-for="item in upcomingAgenda" 
          :key="item.id"
          class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group"
        >
          <div class="flex flex-col md:flex-row">
            <!-- Date Column -->
            <div class="bg-primary-600 text-white p-4 md:p-6 text-center md:w-1/6 flex flex-row md:flex-col justify-center md:justify-start items-center">
              <div class="text-2xl md:text-3xl font-bold">
                {{ item.date.split(' ')[1].replace(',', '') }}
              </div>
              <div class="text-sm md:text-base ml-2 md:ml-0">
                {{ item.date.split(' ')[0] }}
              </div>
            </div>
            
            <!-- Content Column -->
            <div class="p-4 md:p-6 flex-1 flex flex-col md:flex-row items-start">
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <span class="text-xs font-medium px-2 py-1 rounded-full"
                    :class="{
                      'bg-primary-100 text-primary-700': item.type === 'Meeting',
                      'bg-red-100 text-red-700': item.type === 'Health',
                      'bg-green-100 text-green-700': item.type === 'Environment',
                      'bg-secondary-100 text-secondary-700': item.type === 'Celebration'
                    }"
                  >
                    {{ item.type }}
                  </span>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                  {{ item.title }}
                </h3>
                
                <div class="mt-3 flex flex-wrap gap-y-2 text-gray-600 text-sm">
                  <div class="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ item.time }}
                  </div>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {{ item.location }}
                  </div>
                </div>
              </div>
              
              <div class="mt-4 md:mt-0 self-end md:self-center">
                <router-link :to="`/agenda/${item.id}`" class="btn btn-outline py-2 px-4">
                  Details
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-8 text-center">
        <router-link to="/agenda" class="btn btn-primary">
          View All Events
        </router-link>
      </div>
    </div>
  </section>
</template>