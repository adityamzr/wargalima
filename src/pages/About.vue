<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  social: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

const team = ref<TeamMember[]>([
  {
    id: 1,
    name: 'Budi Santoso',
    position: 'RT Head',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      instagram: '#',
      facebook: '#',
      linkedin: '#'
    }
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    position: 'Secretary',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      instagram: '#',
      facebook: '#',
    }
  },
  {
    id: 3,
    name: 'Agus Widodo',
    position: 'Treasurer',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 4,
    name: 'Maya Indah',
    position: 'Security Coordinator',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      instagram: '#',
      facebook: '#'
    }
  }
]);

// Features
const features = [
  {
    id: 1,
    title: 'Digital Document Requests',
    description: 'Submit and track document requests online without the need to visit the office in person.',
    icon: 'document'
  },
  {
    id: 2,
    title: 'Community Updates',
    description: 'Stay informed with the latest news, events, and important announcements in the neighborhood.',
    icon: 'bell'
  },
  {
    id: 3,
    title: 'Issue Reporting',
    description: 'Report neighborhood issues and track the resolution process transparently.',
    icon: 'flag'
  },
  {
    id: 4,
    title: 'Citizen Registry',
    description: 'Access to demographic information and maintain updated household data.',
    icon: 'users'
  }
];

// Navigate to organizational structure
const goToOrganizationalStructure = () => {
  router.push('/about/organizational-structure');
};

// Navigate to citizen map
const goToCitizenMap = () => {
  router.push('/about/citizen-map');
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-primary-700 text-white py-20 md:py-28">
      <div class="absolute inset-0 bg-opacity-70 bg-gray-900"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">About Wargalima</h1>
          <p class="text-xl text-white text-opacity-90 mb-8">
            A modern platform connecting residents and neighborhood administration for a better community experience
          </p>
        </div>
      </div>
    </section>
    
    <!-- About Info Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p class="text-gray-600 mb-6 text-lg">
              Wargalima was created with a simple yet powerful mission: to foster a more connected, informed, and engaged community through technology.
            </p>
            <p class="text-gray-600 mb-6">
              In today's fast-paced world, we believe that neighborhood units like RT 5 Gading Junti need modern tools to facilitate community management, information sharing, and service delivery. Our platform bridges the gap between residents and neighborhood administration.
            </p>
            <p class="text-gray-600">
              By digitizing services, centralizing information, and providing transparent communication channels, we aim to create a more efficient, responsive, and united community for all residents.
            </p>
          </div>
          
          <div class="bg-primary-50 p-8 rounded-lg">
            <h3 class="text-2xl font-semibold mb-6 text-primary-700">Key Features of Wargalima</h3>
            
            <div class="space-y-6">
              <div 
                v-for="feature in features" 
                :key="feature.id"
                class="flex"
              >
                <div class="mt-1 mr-4">
                  <!-- Document Icon -->
                  <div v-if="feature.icon === 'document'" class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V7.125C19.5 6.504 18.996 6 18.375 6h-1.5m-1.5 0h-3m-3 0h-.375a1.125 1.125 0 01-1.125-1.125V4.125A1.125 1.125 0 016 3h1.5m0 0h3M7.5 14.25v1.5c0 .621.504 1.125 1.125 1.125H8.25m0 0h3.75m-3.75 0h-1.5m1.5 0h3.75M7.5 14.25V13.5m13.5 4.5v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-1.5 0h-5.25m5.25 0v1.5c0 .621.504 1.125 1.125 1.125h1.5m-7.5-1.5h3m-3 0h-1.5m0 0h-3M10.5 18.75h3" />
                    </svg>
                  </div>
                  
                  <!-- Bell Icon -->
                  <div v-if="feature.icon === 'bell'" class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  
                  <!-- Flag Icon -->
                  <div v-if="feature.icon === 'flag'" class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                  </div>
                  
                  <!-- Users Icon -->
                  <div v-if="feature.icon === 'users'" class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold mb-1 text-gray-800">{{ feature.title }}</h4>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Get to know the dedicated individuals managing the RT 5 Gading Junti neighborhood and making Wargalima possible.
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="member in team" 
            :key="member.id" 
            class="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <img 
              :src="member.image" 
              :alt="member.name" 
              class="w-full h-56 object-cover object-center"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-1">{{ member.name }}</h3>
              <p class="text-gray-500 mb-4">{{ member.position }}</p>
              <div class="flex space-x-3">
                <a 
                  v-if="member.social.instagram" 
                  :href="member.social.instagram" 
                  class="text-gray-400 hover:text-primary-600 transition-colors"
                >
                  <span class="sr-only">Instagram</span>
                  <div class="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:border-primary-300">
                    <span>I</span>
                  </div>
                </a>
                <a 
                  v-if="member.social.facebook" 
                  :href="member.social.facebook" 
                  class="text-gray-400 hover:text-primary-600 transition-colors"
                >
                  <span class="sr-only">Facebook</span>
                  <div class="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:border-primary-300">
                    <span>F</span>
                  </div>
                </a>
                <a 
                  v-if="member.social.linkedin" 
                  :href="member.social.linkedin" 
                  class="text-gray-400 hover:text-primary-600 transition-colors"
                >
                  <span class="sr-only">LinkedIn</span>
                  <div class="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:border-primary-300">
                    <span>L</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Subpages Preview Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Explore More About Us</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Learn more about our organizational structure and community map to better understand our neighborhood.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Organizational Structure Card -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <div class="relative h-48 md:h-64">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Organizational Structure" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 class="text-white text-2xl font-bold">Organizational Structure</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">
                Understand how our neighborhood administration is structured and the roles of each team member in serving the community.
              </p>
              <button 
                @click="goToOrganizationalStructure" 
                class="btn btn-primary w-full"
              >
                View Structure
              </button>
            </div>
          </div>
          
          <!-- Citizen Map Card -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <div class="relative h-48 md:h-64">
              <img 
                src="https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Citizen Map" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 class="text-white text-2xl font-bold">Citizen Map</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">
                Explore the geographical layout of our neighborhood and gain insights into our community's demographics.
              </p>
              <button 
                @click="goToCitizenMap" 
                class="btn btn-primary w-full"
              >
                View Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>