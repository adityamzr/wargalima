<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  type: string;
  isUpcoming: boolean;
}

const events = ref<Event[]>([
  {
    id: 1,
    title: 'Monthly Neighborhood Meeting',
    description: 'Regular meeting for all residents to discuss community matters, updates, and upcoming plans.',
    date: 'October 30, 2025',
    time: '19:00 - 21:00',
    location: 'Community Hall',
    organizer: 'RT Management',
    type: 'Meeting',
    isUpcoming: true
  },
  {
    id: 2,
    title: 'Children\'s Vaccination Day',
    description: 'Free vaccination services for children under 5 years old. Please bring immunization records.',
    date: 'November 5, 2025',
    time: '09:00 - 12:00',
    location: 'Health Post',
    organizer: 'Health Committee',
    type: 'Health',
    isUpcoming: true
  },
  {
    id: 3,
    title: 'Community Garden Project',
    description: 'Join us for planting new vegetables and flowers in the community garden. Tools will be provided.',
    date: 'November 12, 2025',
    time: '16:00 - 18:00',
    location: 'Park Area',
    organizer: 'Environment Committee',
    type: 'Environment',
    isUpcoming: true
  },
  {
    id: 4,
    title: 'Youth Sports Day',
    description: 'Sports competition for children and teenagers including football, badminton, and running races.',
    date: 'November 20, 2025',
    time: '08:00 - 14:00',
    location: 'Sports Field',
    organizer: 'Youth Committee',
    type: 'Sports',
    isUpcoming: true
  },
  {
    id: 5,
    title: 'Senior Citizens Gathering',
    description: 'Special gathering for senior residents with health talks, light exercise sessions, and social activities.',
    date: 'November 25, 2025',
    time: '10:00 - 13:00',
    location: 'Community Hall',
    organizer: 'Social Committee',
    type: 'Social',
    isUpcoming: true
  },
  {
    id: 6,
    title: 'Independence Day Celebration',
    description: 'Celebration of Indonesia\'s Independence Day with flag ceremony, traditional games, and cultural performances.',
    date: 'August 17, 2025',
    time: '10:00 - 14:00',
    location: 'Main Square',
    organizer: 'RT Management',
    type: 'Celebration',
    isUpcoming: false
  }
]);

// Filter options
const selectedType = ref('All');
const selectedMonth = ref('All');

const eventTypes = ['All', 'Meeting', 'Health', 'Environment', 'Sports', 'Social', 'Celebration'];
const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Filtered events
const filteredEvents = computed(() => {
  return events.value.filter(event => {
    const matchesType = selectedType.value === 'All' || event.type === selectedType.value;
    
    if (selectedMonth.value === 'All') {
      return matchesType;
    } else {
      const eventMonth = new Date(event.date).toLocaleString('en-US', { month: 'long' });
      return matchesType && eventMonth === selectedMonth.value;
    }
  }).sort((a, b) => {
    // Sort by date (newest first)
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
});

// Selected event for details
const selectedEvent = ref<Event | null>(null);

onMounted(() => {
  const hash = window.location.hash.substring(1);
  const idFromHash = parseInt(hash);
  if (!isNaN(idFromHash)) {
    showEventDetails(idFromHash);
  }
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substring(1);
  const idFromHash = parseInt(hash);
  if (!isNaN(idFromHash)) {
    showEventDetails(idFromHash);
  }
});


const showEventDetails = (eventId: number) => {
  const event = events.value.find(item => item.id === eventId)
  if(event){
    selectedEvent.value = event;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const closeEventDetails = () => {
  selectedEvent.value = null;
  history.replaceState(null, '', window.location.pathname);
};

// Add to calendar function (placeholder)
const addToCalendar = (event: Event) => {
  alert(`Event "${event.title}" would be added to your calendar app.`);
};
</script>

<template>
  <div>
    <!-- Event Details View -->
    <div v-if="selectedEvent" class="min-h-screen">
      <!-- Hero Section with Type Color -->
      <section 
        class="py-20 md:py-28 relative text-white"
        :class="{
          'bg-primary-700': selectedEvent.type === 'Meeting',
          'bg-red-600': selectedEvent.type === 'Health',
          'bg-green-600': selectedEvent.type === 'Environment',
          'bg-blue-600': selectedEvent.type === 'Sports',
          'bg-purple-600': selectedEvent.type === 'Social', 
          'bg-secondary-600': selectedEvent.type === 'Celebration'
        }"
      >
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            @click="closeEventDetails" 
            class="inline-flex items-center text-white mb-8 hover:text-opacity-80 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Kembali ke Kegiatan
          </button>
          
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <span class="inline-block px-3 py-1 bg-white text-gray-800 text-sm font-medium rounded-full mb-4">
                {{ selectedEvent.type }}
              </span>
              
              <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {{ selectedEvent.title }}
              </h1>
            </div>
            
            <button 
              @click="addToCalendar(selectedEvent)" 
              class="mt-4 md:mt-0 inline-flex items-center bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              Add to Calendar
            </button>
          </div>
        </div>
      </section>
      
      <!-- Event Details Content -->
      <section class="py-12">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 class="text-sm font-medium text-gray-500 mb-1">Date & Time</h3>
                  <p class="text-lg font-medium text-gray-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    {{ selectedEvent.date }}, {{ selectedEvent.time }}
                  </p>
                </div>
                
                <div>
                  <h3 class="text-sm font-medium text-gray-500 mb-1">Location</h3>
                  <p class="text-lg font-medium text-gray-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {{ selectedEvent.location }}
                  </p>
                </div>
                
                <div>
                  <h3 class="text-sm font-medium text-gray-500 mb-1">Organizer</h3>
                  <p class="text-lg font-medium text-gray-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    {{ selectedEvent.organizer }}
                  </p>
                </div>
                
                <div>
                  <h3 class="text-sm font-medium text-gray-500 mb-1">Event Type</h3>
                  <p class="text-lg font-medium">
                    <span 
                      class="inline-block px-3 py-1 text-sm font-medium rounded-full"
                      :class="{
                        'bg-primary-100 text-primary-700': selectedEvent.type === 'Meeting',
                        'bg-red-100 text-red-700': selectedEvent.type === 'Health',
                        'bg-green-100 text-green-700': selectedEvent.type === 'Environment',
                        'bg-blue-100 text-blue-700': selectedEvent.type === 'Sports',
                        'bg-purple-100 text-purple-700': selectedEvent.type === 'Social',
                        'bg-secondary-100 text-secondary-700': selectedEvent.type === 'Celebration'
                      }"
                    >
                      {{ selectedEvent.type }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">About This Event</h2>
              <p class="text-gray-700 whitespace-pre-line mb-6">{{ selectedEvent.description }}</p>
              
              <div class="border-t border-gray-200 pt-6 mt-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Important Notes</h3>
                <ul class="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Please arrive 10-15 minutes before the scheduled start time.</li>
                  <li>For any questions, contact the event organizer.</li>
                  <li>Updates regarding this event will be posted on the Citizen Portal.</li>
                </ul>
              </div>
            </div>
            
            <div class="mt-8 text-center">
              <button 
                @click="closeEventDetails" 
                class="btn btn-outline"
              >
                Kembali ke Daftar Kegiatan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <!-- Events List View -->
    <div v-else>
      <!-- Hero Section -->
      <section class="relative bg-primary-700 text-white py-20 md:py-28">
        <div class="absolute inset-0 bg-opacity-70 bg-gray-900"></div>
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Kegiatan RT 05</h1>
            <p class="text-xl text-white text-opacity-90 mb-6">
              Tetap terinformasi tentang semua acara dan kegiatan yang akan datang di lingkungan kita
            </p>
          </div>
        </div>
      </section>
      
      <!-- Filter Controls -->
      <section class="py-8 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex flex-wrap gap-3">
              <button 
                v-for="type in eventTypes" 
                :key="type"
                @click="selectedType = type"
                class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                :class="selectedType === type ? 
                  'bg-primary-600 text-white' : 
                  'bg-white text-gray-700 hover:bg-gray-100'"
              >
                {{ type }}
              </button>
            </div>
            
            <div class="w-full md:w-auto">
              <select 
                v-model="selectedMonth" 
                class="bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option v-for="month in months" :key="month" :value="month">
                  {{ month === 'All' ? 'All Months' : month }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Events List -->
      <section class="py-12 md:py-16">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col space-y-6">
            <div 
              v-for="event in filteredEvents" 
              :key="event.id"
              class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group cursor-pointer"
              @click="showEventDetails(event.id)"
            >
              <div class="flex flex-col md:flex-row">
                <!-- Date Column -->
                <div 
                  class="text-white p-6 text-center md:w-1/6 flex flex-row md:flex-col justify-center md:justify-start items-center"
                  :class="{
                    'bg-primary-600': event.type === 'Meeting',
                    'bg-red-600': event.type === 'Health',
                    'bg-green-600': event.type === 'Environment',
                    'bg-blue-600': event.type === 'Sports',
                    'bg-purple-600': event.type === 'Social',
                    'bg-secondary-600': event.type === 'Celebration'
                  }"
                >
                  <div class="text-2xl md:text-3xl font-bold">
                    {{ event.date.split(' ')[1].replace(',', '') }}
                  </div>
                  <div class="text-sm md:text-base ml-2 md:ml-0 md:mt-1">
                    {{ event.date.split(' ')[0] }}
                  </div>
                </div>
                
                <!-- Content Column -->
                <div class="p-6 flex-1 flex flex-col md:flex-row items-start">
                  <div class="flex-1">
                    <h3 class="text-xl font-semibold text-gray-800 group-hover:text-primary-600 transition-colors mb-3">
                      {{ event.title }}
                    </h3>
                    
                    <p class="text-gray-600 mb-4">
                      {{ event.description.length > 120 ? event.description.substring(0, 120) + '...' : event.description }}
                    </p>
                    
                    <div class="flex flex-wrap gap-y-2 text-gray-600 text-sm">
                      <div class="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 text-gray-400">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ event.time }}
                      </div>
                      <div class="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 text-gray-400">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {{ event.location }}
                      </div>
                      <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 text-gray-400">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                        {{ event.organizer }}
                      </div>
                    </div>
                  </div>
                  
                  <div class="mt-4 md:mt-0 self-end md:self-center">
                    <span class="inline-flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Empty State -->
            <div v-if="filteredEvents.length === 0" class="text-center py-16">
              <div class="text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 mx-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-700 mb-2">No events found</h3>
              <p class="text-gray-500">Try changing your filter options to find more events.</p>
              <button 
                @click="selectedType = 'All'; selectedMonth = 'All'" 
                class="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                View All Events
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Call-to-Action Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Want to propose a community event?</h2>
            <p class="text-gray-600 mb-8">
              Residents can propose new events for the community. Submit your proposal through the Citizen Portal.
            </p>
            <router-link to="/login" class="btn btn-primary">
              Submit Event Proposal
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>