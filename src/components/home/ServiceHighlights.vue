<script setup lang="ts">
// interface ServiceItem {
//   id: number;
//   icon: string;
//   title: string;
//   description: string;
//   link: string;
// }

const services = [
  {
    id: 1,
    icon: 'document',
    title: 'Administrative Letters',
    description: 'Request various administrative letters such as domicile letters, business permits, and more.',
    link: '/services#letters'
  },
  {
    id: 2,
    icon: 'megaphone',
    title: 'Community Reporting',
    description: 'Report neighborhood issues, infrastructure problems, or security concerns.',
    link: '/services#reporting'
  },
  {
    id: 3,
    icon: 'calendar',
    title: 'Event Management',
    description: 'Manage community events and reserve communal spaces for gatherings.',
    link: '/services#events'
  },
  {
    id: 4,
    icon: 'user-group',
    title: 'New Resident Registration',
    description: 'Register as a new resident or update your family information in our database.',
    link: '/services#registration'
  }
];
</script>

<template>
  <section class="section-padding bg-white">
    <div class="container mx-auto container-padding">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          We provide various services to make community living easier and more connected
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="service in services" 
          :key="service.id" 
          class="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-primary-300 group"
        >
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center bg-primary-100 text-primary-600 mb-4 group-hover:bg-primary-200 transition-colors">
              <!-- Document Icon -->
              <svg v-if="service.icon === 'document'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              
              <!-- Megaphone Icon -->
              <svg v-if="service.icon === 'megaphone'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
              </svg>
              
              <!-- Calendar Icon -->
              <svg v-if="service.icon === 'calendar'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              
              <!-- User Group Icon -->
              <svg v-if="service.icon === 'user-group'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            
            <h3 class="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            
            <router-link :to="service.link" class="text-primary-600 font-medium inline-flex items-center group-hover:underline">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-10">
        <router-link to="/services" class="btn btn-primary">
          Explore All Services
        </router-link>
      </div>
    </div>
  </section>
</template>