<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
import { Doughnut, Bar } from 'vue-chartjs';

// Register Chart.js components
Chart.register(...registerables);

// Data for charts
const genderData = {
  labels: ['Male', 'Female'],
  datasets: [
    {
      backgroundColor: ['#43a047', '#7cb342'],
      data: [128, 120]
    }
  ]
};

const ageData = {
  labels: ['0-12', '13-17', '18-30', '31-45', '46-60', '60+'],
  datasets: [
    {
      label: 'Number of Citizens',
      backgroundColor: '#4caf50',
      borderColor: '#388e3c',
      borderWidth: 1,
      data: [38, 22, 56, 72, 40, 20]
    }
  ]
};

const occupationData = {
  labels: ['Private Sector', 'Business Owner', 'Student', 'Civil Servant', 'Retired', 'Other'],
  datasets: [
    {
      backgroundColor: ['#43a047', '#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9', '#e8f5e9'],
      data: [96, 42, 60, 30, 15, 5]
    }
  ]
};

// Chart options
const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

// Map visualization placeholder
onMounted(() => {
  // Here you would normally initialize a map using a library like Leaflet
  // For this demo, we'll just show a placeholder
});

// Stats
const stats = [
  { label: 'Total Citizens', value: 248, icon: 'users' },
  { label: 'Total Households', value: 62, icon: 'home' },
  { label: 'Average Family Size', value: 4, icon: 'family' },
  { label: 'Area (km²)', value: 0.25, icon: 'area' }
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-primary-700 text-white py-20 md:py-28">
      <div class="absolute inset-0 bg-opacity-70 bg-gray-900"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Citizen Map</h1>
          <p class="text-xl text-white text-opacity-90 mb-8">
            Explore the geographical and demographic information of RT 5 Gading Junti
          </p>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(stat, index) in stats" 
            :key="index" 
            class="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300"
          >
            <div class="mb-4 mx-auto w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
              <!-- Users Icon -->
              <svg v-if="stat.icon === 'users'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              
              <!-- Home Icon -->
              <svg v-if="stat.icon === 'home'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              
              <!-- Family Icon -->
              <svg v-if="stat.icon === 'family'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              
              <!-- Area Icon -->
              <svg v-if="stat.icon === 'area'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </div>
            
            <div class="text-3xl font-bold text-gray-800 mb-2">{{ stat.value }}</div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Neighborhood Map</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Visual representation of RT 5 Gading Junti area showing household locations and key facilities
          </p>
        </div>
        
        <!-- Map Placeholder (in a real app, this would be an interactive map) -->
        <div class="bg-white rounded-lg shadow-md p-4 md:p-6 relative overflow-hidden">
          <div class="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div class="text-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 mx-auto text-gray-400 mb-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              <p class="text-lg font-medium text-gray-700 mb-2">Interactive Map</p>
              <p class="text-gray-500">
                In the citizen portal, this area displays an interactive map of the neighborhood with household locations and facilities.
              </p>
              <router-link to="/login" class="btn btn-primary mt-4">
                Access Full Map
              </router-link>
            </div>
          </div>
          
          <!-- Map Legend -->
          <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="flex items-center">
              <div class="w-4 h-4 bg-primary-600 rounded-full mr-2"></div>
              <span class="text-sm text-gray-700">Residential Houses</span>
            </div>
            <div class="flex items-center">
              <div class="w-4 h-4 bg-secondary-500 rounded-full mr-2"></div>
              <span class="text-sm text-gray-700">Community Facilities</span>
            </div>
            <div class="flex items-center">
              <div class="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <span class="text-sm text-gray-700">Security Posts</span>
            </div>
            <div class="flex items-center">
              <div class="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
              <span class="text-sm text-gray-700">Public Spaces</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Demographics Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Demographics</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Statistical breakdown of our neighborhood's population and characteristics
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Gender Distribution -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Gender Distribution</h3>
            <div class="h-64">
              <Doughnut :data="genderData" :options="doughnutOptions" />
            </div>
            <div class="mt-4 text-center">
              <div class="inline-flex items-center mr-4">
                <div class="w-3 h-3 bg-primary-600 rounded-full mr-2"></div>
                <span class="text-sm text-gray-600">Male: 51.6%</span>
              </div>
              <div class="inline-flex items-center">
                <div class="w-3 h-3 bg-primary-300 rounded-full mr-2"></div>
                <span class="text-sm text-gray-600">Female: 48.4%</span>
              </div>
            </div>
          </div>
          
          <!-- Age Distribution -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Age Distribution</h3>
            <div class="h-64">
              <Bar :data="ageData" :options="barOptions" />
            </div>
          </div>
          
          <!-- Occupation -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Occupation</h3>
            <div class="h-64">
              <Doughnut :data="occupationData" :options="doughnutOptions" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Additional Information -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">About Our Neighborhood</h2>
            
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Location</h3>
                <p class="text-gray-600">
                  RT 5 Gading Junti is located in the eastern part of the Gading district, bordered by RT 4 to the west, RT 6 to the east, and a small river to the south. The neighborhood spans approximately 0.25 square kilometers.
                </p>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Facilities</h3>
                <p class="text-gray-600 mb-4">
                  Our neighborhood is equipped with various facilities to support the daily needs of residents:
                </p>
                <ul class="list-disc pl-5 text-gray-600 space-y-1">
                  <li>1 community hall for gatherings and events</li>
                  <li>2 security posts at neighborhood entrances</li>
                  <li>1 health post for basic healthcare</li>
                  <li>1 community garden and park</li>
                  <li>3 waste collection points</li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">History</h3>
                <p class="text-gray-600">
                  Established in 1985, RT 5 Gading Junti was originally a small farming community that has gradually developed into a residential area. The name "Gading Junti" comes from the abundance of coconut trees (gading) that used to grow in the area and "junti" which means "aligned" in the local dialect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Access More Detailed Information</h2>
          <p class="text-white text-opacity-90 text-lg mb-8">
            Residents can access more detailed neighborhood maps, household directories, and demographic data through the Citizen Portal.
          </p>
          <router-link to="/login" class="btn bg-white text-primary-700 hover:bg-gray-100 text-lg">
            Enter Citizen Portal
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>