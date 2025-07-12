<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Chart, registerables } from 'chart.js';
// import { Doughnut, Bar } from 'vue-chartjs';

// Register Chart.js components
Chart.register(...registerables);

// Data for charts
// const genderData = {
//   labels: ['Male', 'Female'],
//   datasets: [
//     {
//       backgroundColor: ['#43a047', '#7cb342'],
//       data: [128, 120]
//     }
//   ]
// };

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

// const occupationData = {
//   labels: ['Private Sector', 'Business Owner', 'Student', 'Civil Servant', 'Retired', 'Other'],
//   datasets: [
//     {
//       backgroundColor: ['#43a047', '#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9', '#e8f5e9'],
//       data: [96, 42, 60, 30, 15, 5]
//     }
//   ]
// };

// Chart options
// const doughnutOptions = {
//   responsive: true,
//   maintainAspectRatio: false,
//   plugins: {
//     legend: {
//       position: 'bottom'
//     }
//   }
// };

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

interface FamilyItem {
  id: number,
  zone: number,
  code: string|null,
  name: string,
  amount: number,
  address: string,
  joinDate: string,
  image: string,
}

const familyItems = ref<FamilyItem[]>([
  {
    id: 1,
    zone: 1,
    code: null,
    name: "Pak Teguh",
    amount: 5,
    address: "W-1 No. 6",
    joinDate: "20 Januari 2000",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    zone: 1,
    code: null,
    name: "Pak Priston",
    amount: 10,
    address: "W-1 No. 2",
    joinDate: "20 Mei 2002",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    zone: 1,
    code: null,
    name: "Pak Priston",
    amount: 10,
    address: "W-1 No. 2",
    joinDate: "20 Mei 2002",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    zone: 1,
    code: null,
    name: "Pak Priston",
    amount: 10,
    address: "W-1 No. 2",
    joinDate: "20 Mei 2002",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    zone: 1,
    code: null,
    name: "Pak Priston",
    amount: 10,
    address: "W-1 No. 2",
    joinDate: "20 Mei 2002",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    zone: 1,
    code: null,
    name: "Pak Priston",
    amount: 10,
    address: "W-1 No. 2",
    joinDate: "20 Mei 2002",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    zone: 1,
    code: null,
    name: "Pak Priston",
    amount: 10,
    address: "W-1 No. 2",
    joinDate: "20 Mei 2002",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    zone: 1,
    code: null,
    name: "Pak Priston",
    amount: 10,
    address: "W-1 No. 2",
    joinDate: "20 Mei 2002",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    zone: 1,
    code: null,
    name: "Pak Priston",
    amount: 10,
    address: "W-1 No. 2",
    joinDate: "20 Mei 2002",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    zone: 1,
    code: null,
    name: "Pak Priston",
    amount: 10,
    address: "W-1 No. 2",
    joinDate: "20 Mei 2002",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    zone: 1,
    code: null,
    name: "Pak Priston",
    amount: 10,
    address: "W-1 No. 2",
    joinDate: "20 Mei 2002",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
]);

const zoneOne = [
  { family: "Pak Teguh", address: "",},
  { family: "Pak Priston", address: "",},
  { family: "", address: "",},
  { family: "Pak Warjo", address: "",},
  { family: "Pak Opick", address: "",},
  { family: "Pak Rifai", address: "",},
  { family: "Pak Darsono", address: "",},
  { family: "Pak Wardi", address: "",},
  { family: "Pak Mul", address: "",},
  { family: "Pak Dudun", address: "",},
  { family: "Pak Setya", address: "",},
];

// Show full families
const selectedFamily = ref<FamilyItem | null>(null);

const showFamilyDetail = (familyId: number) => {
  const family = familyItems.value.find(item => item.id === familyId);
  if (family) {
    selectedFamily.value = family;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const closeFamilyDetail = () => {
  selectedFamily.value = null;
};
</script>

<template>
  <div>
    <!-- News Detail View -->
    <div v-if="selectedFamily" class="min-h-screen">
      <!-- Hero Section with Image -->
      <div class="relative h-[50vh] bg-gray-900">
        <img 
          :src="selectedFamily.image" 
          :alt="selectedFamily.name" 
          class="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center">
          <div class="max-w-3xl">
            <button 
              @click="closeFamilyDetail" 
              class="inline-flex items-center text-white mb-6 hover:text-primary-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Kembali ke Denah Warga
            </button>
            
            <div>
              <span class="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4">
                {{ selectedFamily.address }}
              </span>
            </div>
            
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {{ selectedFamily.name }}
            </h1>
            
            <div class="flex items-center text-white text-opacity-90">
              <span>{{ selectedFamily.joinDate }}</span>
              <span class="mx-3">•</span>
              <span>{{ selectedFamily.amount }}</span>
            </div>
          </div>
        </div>
      </div>
      
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
                    {{ selectedFamily.joinDate }}, {{ selectedFamily.amount }}
                  </p>
                </div>
                
                <div>
                  <h3 class="text-sm font-medium text-gray-500 mb-1">Location</h3>
                  <p class="text-lg font-medium text-gray-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {{ selectedFamily.address }}
                  </p>
                </div>
                
                <div>
                  <h3 class="text-sm font-medium text-gray-500 mb-1">Organizer</h3>
                  <p class="text-lg font-medium text-gray-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    {{ selectedFamily.name }}
                  </p>
                </div>
                
                <!-- <div>
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
                </div> -->
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">About This Event</h2>
              <p class="text-gray-700 whitespace-pre-line mb-6">{{ selectedFamily.name }}</p>
              
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
                @click="closeFamilyDetail" 
                class="btn btn-outline"
              >
                Kembali ke Denah Warga
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <!-- Hero Section -->
      <section class="relative bg-primary-700 text-white py-20 md:py-28">
        <div class="absolute inset-0 bg-opacity-70 bg-gray-900"></div>
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Denah Warga</h1>
            <p class="text-xl text-white text-opacity-90 mb-8">
              Jelajahi informasi geografis dan demografis RT 05 Gading Junti Asri
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
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Denah Kependudukan</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Representasi visual wilayah RT 05 RW 05 Gading Junti Asri yang menunjukkan lokasi rumah warga.
            </p>
          </div>
          
          <!-- Map Placeholder (in a real app, this would be an interactive map) -->
          <div class="bg-white rounded-lg shadow-md p-4 md:p-6 relative overflow-hidden">
            <!-- Map Legend -->
            <div class="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="flex items-center">
                <div class="w-4 h-4 bg-primary-600 rounded-full mr-2"></div>
                <span class="text-sm text-gray-700">Zona 1</span>
              </div>
              <div class="flex items-center">
                <div class="w-4 h-4 bg-secondary-500 rounded-full mr-2"></div>
                <span class="text-sm text-gray-700">Zona 2</span>
              </div>
              <div class="flex items-center">
                <div class="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                <span class="text-sm text-gray-700">Zona 3</span>
              </div>
              <div class="flex items-center">
                <div class="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span class="text-sm text-gray-700">Zona 4</span>
              </div>
            </div>
            
            <!-- ZONE 1 -->
            <div class="flex flex-wrap gap-4 lg:gap-2 justify-evenly w-full border-4 border-primary-400 p-4">
              <div v-for="item in familyItems" @click="showFamilyDetail(item.id)" class="w-20 h-20 lg:w-28 lg:h-28 cursor-pointer">
                <img src="/roof.png" alt="" class="w-full h-1/3 lg:h-1/2">
                <div class="flex flex-col justify-center items-center border-4 border-t-0 border-black h-2/3 lg:h-1/2 p-1 lg:p-2">
                  <span class="text-xs lg:text-sm font-semibold">{{ item.name }}</span>
                  <span class="text-xs">{{ item.address }}</span>
                </div>
              </div>
            </div>
            <div class="text-center my-5 lg:my-12">
              <span class="text-xl md:text-2xl lg:text-4xl font-semibold">-- JALAN UTAMA --</span>
            </div>
            <div class="flex flex-wrap justify-between gap-2 lg:gap-4">
              <!-- ZONE 2 -->
              <div class="flex flex-wrap grow gap-4 lg:gap-2 justify-between border-4 border-secondary-500 p-4">
                <div class="flex flex-col flex-wrap gap-4 lg:gap-2 justify-evenly">
                  <div v-for="item in zoneOne" class="w-20 h-20 lg:w-28 lg:h-28">
                    <img src="/roof.png" alt="" class="w-full h-1/3 lg:h-1/2">
                    <div class="flex flex-col justify-center items-center border-4 border-t-0 border-black h-2/3 lg:h-1/2 p-1 lg:p-2">
                      <span class="text-xs lg:text-sm font-semibold">{{ item.family }}</span>
                      <span class="text-xs">{{ item.address }}</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col flex-wrap gap-4 lg:gap-2 justify-evenly">
                  <div v-for="item in zoneOne" class="w-20 h-20 lg:w-28 lg:h-28">
                    <img src="/roof.png" alt="" class="w-full h-1/3 lg:h-1/2">
                    <div class="flex flex-col justify-center items-center border-4 border-t-0 border-black h-2/3 lg:h-1/2 p-1 lg:p-2">
                      <span class="text-xs lg:text-sm font-semibold">{{ item.family }}</span>
                      <span class="text-xs">{{ item.address }}</span>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- ZONE 3 -->
              <div class="flex flex-wrap grow gap-4 lg:gap-2 justify-between border-4 border-red-500 p-4">
                <div class="flex flex-col flex-wrap gap-4 lg:gap-2 justify-evenly">
                  <div v-for="item in zoneOne" class="w-20 h-20 lg:w-28 lg:h-28">
                    <img src="/roof.png" alt="" class="w-full h-1/3 lg:h-1/2">
                    <div class="flex flex-col justify-center items-center border-4 border-t-0 border-black h-2/3 lg:h-1/2 p-1 lg:p-2">
                      <span class="text-xs lg:text-sm font-semibold">{{ item.family }}</span>
                      <span class="text-xs">{{ item.address }}</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col flex-wrap gap-4 lg:gap-2 justify-evenly">
                  <div v-for="item in zoneOne" class="w-20 h-20 lg:w-28 lg:h-28">
                    <img src="/roof.png" alt="" class="w-full h-1/3 lg:h-1/2">
                    <div class="flex flex-col justify-center items-center border-4 border-t-0 border-black h-2/3 lg:h-1/2 p-1 lg:p-2">
                      <span class="text-xs lg:text-sm font-semibold">{{ item.family }}</span>
                      <span class="text-xs">{{ item.address }}</span>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- ZONE 4 -->
              <div class="flex flex-wrap grow gap-4 lg:gap-2 justify-between border-4 border-blue-500 p-4">
                <div class="flex flex-col flex-wrap gap-4 lg:gap-2 justify-evenly">
                  <div v-for="item in zoneOne" class="w-20 h-20 lg:w-28 lg:h-28">
                    <img src="/roof.png" alt="" class="w-full h-1/3 lg:h-1/2">
                    <div class="flex flex-col justify-center items-center border-4 border-t-0 border-black h-2/3 lg:h-1/2 p-1 lg:p-2">
                      <span class="text-xs lg:text-sm font-semibold">{{ item.family }}</span>
                      <span class="text-xs">{{ item.address }}</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col flex-wrap gap-4 lg:gap-2 justify-evenly">
                  <div v-for="item in zoneOne" class="w-20 h-20 lg:w-28 lg:h-28">
                    <img src="/roof.png" alt="" class="w-full h-1/3 lg:h-1/2">
                    <div class="flex flex-col justify-center items-center border-4 border-t-0 border-black h-2/3 lg:h-1/2 p-1 lg:p-2">
                      <span class="text-xs lg:text-sm font-semibold">{{ item.family }}</span>
                      <span class="text-xs">{{ item.address }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center my-5 lg:my-12">
              <span class="text-xl md:text-2xl lg:text-4xl font-semibold">-- JALAN BELAKANG --</span>
            </div>
            <div class="flex flex-wrap justify-between gap-2 lg:gap-4">
              <!-- Taman 1 -->
              <div class="flex flex-wrap grow gap-4 lg:gap-2 justify-center items-center border-4 border-gray-400 p-4">
                <span class="text-lg md:text-xl lg:text-2xl font-semibold">TAMAN 1</span>
              </div>
  
              <!-- POS RT 5 -->
              <div class="flex flex-wrap grow gap-4 lg:gap-2 justify-center items-center border-4 border-gray-400 p-4">
                <span class="text-lg md:text-xl lg:text-2xl font-semibold">POS KEAMANAN</span>
              </div>
  
              <!-- Taman 2 -->
              <div class="flex flex-wrap grow gap-4 lg:gap-2 justify-center items-center border-4 border-gray-400 p-4">
                <span class="text-lg md:text-xl lg:text-2xl font-semibold">TAMAN 2</span>
              </div>
            </div>
            <!-- <div class="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
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
            </div> -->
            
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
              <!-- <div class="h-64">
                <Doughnut :data="genderData" :options="doughnutOptions" />
              </div> -->
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
              <!-- <div class="h-64">
                <Doughnut :data="occupationData" :options="doughnutOptions" />
              </div> -->
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
  </div>
</template>