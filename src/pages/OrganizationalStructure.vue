<script setup lang="ts">
import { computed, ref } from 'vue';

interface OrgMember {
  id: number;
  name: string;
  position: string;
  email: string;
  phone: string;
  image: string;
  department: string;
  responsibilities: string[];
}

const orgMembers = ref<OrgMember[]>([
  {
    id: 1,
    name: 'Budi Santoso',
    position: 'RT Head',
    email: 'budi.santoso@wargalima-rt5.id',
    phone: '+62 812-3456-7890',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    department: 'Management',
    responsibilities: [
      'Overall coordination of RT administration',
      'Main representative in external communications',
      'Leading community meetings',
      'Final approval of official documents'
    ]
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    position: 'Secretary',
    email: 'siti.rahayu@wargalima-rt5.id',
    phone: '+62 812-9876-5432',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    department: 'Administration',
    responsibilities: [
      'Managing official correspondence',
      'Recording meeting minutes',
      'Organizing administrative documents',
      'Coordinating with the RW administration'
    ]
  },
  {
    id: 3,
    name: 'Agus Widodo',
    position: 'Treasurer',
    email: 'agus.widodo@wargalima-rt5.id',
    phone: '+62 813-5678-9012',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    department: 'Finance',
    responsibilities: [
      'Managing RT finances',
      'Collecting community dues',
      'Preparing financial reports',
      'Budgeting for community activities'
    ]
  },
  {
    id: 4,
    name: 'Maya Indah',
    position: 'Security Coordinator',
    email: 'maya.indah@wargalima-rt5.id',
    phone: '+62 813-1122-3344',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    department: 'Security',
    responsibilities: [
      'Coordinating neighborhood security',
      'Managing night watch schedule',
      'Handling security incidents',
      'Liaising with local police'
    ]
  },
  {
    id: 5,
    name: 'Hendra Wijaya',
    position: 'Social & Welfare Coordinator',
    email: 'hendra.wijaya@wargalima-rt5.id',
    phone: '+62 815-9988-7766',
    image: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    department: 'Social Affairs',
    responsibilities: [
      'Organizing community events',
      'Coordinating social assistance programs',
      'Managing medical aid for residents in need',
      'Running community youth programs'
    ]
  },
  {
    id: 6,
    name: 'Dewi Permata',
    position: 'Health Coordinator',
    email: 'dewi.permata@wargalima-rt5.id',
    phone: '+62 816-5544-3322',
    image: 'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    department: 'Health',
    responsibilities: [
      'Organizing health education programs',
      'Coordinating with local health centers',
      'Managing vaccination programs',
      'Disseminating health information'
    ]
  },
  {
    id: 7,
    name: 'Rizal Fauzi',
    position: 'Environment Coordinator',
    email: 'rizal.fauzi@wargalima-rt5.id',
    phone: '+62 817-1212-3434',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    department: 'Environment',
    responsibilities: [
      'Coordinating community clean-up activities',
      'Managing waste management programs',
      'Organizing the community garden',
      'Promoting environmental awareness'
    ]
  },
  {
    id: 8,
    name: 'Ratna Sari',
    position: 'Women\'s Empowerment Coordinator',
    email: 'ratna.sari@wargalima-rt5.id',
    phone: '+62 818-7878-9090',
    image: 'https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    department: 'Women\'s Affairs',
    responsibilities: [
      'Organizing women\'s skills training',
      'Coordinating women\'s health programs',
      'Facilitating home industry initiatives',
      'Supporting family welfare programs'
    ]
  }
]);

// Group by department
interface DepartmentGroup {
  name: string;
  members: OrgMember[];
}

const departments = computed(() => {
  const groups: DepartmentGroup[] = [];
  const deptMap = new Map<string, OrgMember[]>();
  
  // Group members by department
  orgMembers.value.forEach(member => {
    if (!deptMap.has(member.department)) {
      deptMap.set(member.department, []);
    }
    deptMap.get(member.department)?.push(member);
  });
  
  // Convert map to array
  deptMap.forEach((members, name) => {
    groups.push({ name, members });
  });
  
  return groups;
});

// Selected member for details
const selectedMember = ref<OrgMember | null>(null);

const showMemberDetails = (member: OrgMember) => {
  selectedMember.value = member;
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const closeMemberDetails = () => {
  selectedMember.value = null;
};
</script>

<template>
  <div>
    <!-- Member Details View -->
    <div v-if="selectedMember" class="min-h-screen">
      <!-- Header Section -->
      <section class="relative bg-primary-700 text-white py-20">
        <div class="absolute inset-0 bg-opacity-70 bg-gray-900"></div>
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            @click="closeMemberDetails" 
            class="inline-flex items-center text-white mb-8 hover:text-opacity-80 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Organization Structure
          </button>
          
          <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white">
              <img 
                :src="selectedMember.image" 
                :alt="selectedMember.name" 
                class="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <span class="inline-block px-3 py-1 bg-white text-gray-800 text-sm font-medium rounded-full mb-4">
                {{ selectedMember.department }}
              </span>
              <h1 class="text-3xl md:text-4xl font-bold mb-2">{{ selectedMember.name }}</h1>
              <p class="text-xl text-white text-opacity-90 mb-6">{{ selectedMember.position }}</p>
              
              <div class="flex flex-wrap gap-6">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-white text-opacity-70">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>{{ selectedMember.email }}</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-white text-opacity-70">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>{{ selectedMember.phone }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Details Section -->
      <section class="py-12">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">Responsibilities</h2>
              
              <ul class="space-y-4">
                <li 
                  v-for="(responsibility, index) in selectedMember.responsibilities" 
                  :key="index"
                  class="flex items-start"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-3 text-primary-600 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-700">{{ responsibility }}</span>
                </li>
              </ul>
              
              <div class="mt-8 pt-8 border-t border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                <p class="text-gray-700 mb-6">
                  For matters related to {{ selectedMember.position.toLowerCase() }} in our neighborhood, you can contact {{ selectedMember.name }} using the email or phone number provided above. For urgent matters, please use the phone number.
                </p>
                <p class="text-gray-700">
                  Office hours: Monday to Friday, 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
            
            <div class="mt-8 text-center">
              <button 
                @click="closeMemberDetails" 
                class="btn btn-outline"
              >
                Back to Organization Structure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <!-- Organization Structure View -->
    <div v-else>
      <!-- Hero Section -->
      <section class="relative bg-primary-700 text-white py-20 md:py-28">
        <div class="absolute inset-0 bg-opacity-70 bg-gray-900"></div>
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Organizational Structure</h1>
            <p class="text-xl text-white text-opacity-90 mb-8">
              Meet the dedicated team managing RT 5 Gading Junti administration
            </p>
          </div>
        </div>
      </section>
      
      <!-- Organization Chart -->
      <section class="py-16">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Structure</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Our neighborhood is organized into specialized departments, each managed by dedicated coordinators who work together under the RT leadership.
            </p>
          </div>
          
          <div class="relative mb-20">
            <!-- RT Head (Top) -->
            <div class="flex justify-center mb-16">
              <div 
                class="bg-primary-700 rounded-lg shadow-lg p-6 text-white text-center w-64 cursor-pointer hover:shadow-xl transition-all duration-300"
                @click="showMemberDetails(orgMembers[0])"
              >
                <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-white mx-auto mb-4">
                  <img 
                    :src="orgMembers[0].image" 
                    :alt="orgMembers[0].name" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-xl font-bold">{{ orgMembers[0].name }}</h3>
                <p class="text-white text-opacity-90">{{ orgMembers[0].position }}</p>
              </div>
            </div>
            
            <!-- Core Team (Second Level) -->
            <div class="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 mb-16">
              <div 
                v-for="member in orgMembers.slice(1, 4)" 
                :key="member.id"
                class="bg-primary-100 rounded-lg shadow-md p-6 text-center w-64 cursor-pointer hover:shadow-lg transition-all duration-300"
                @click="showMemberDetails(member)"
              >
                <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-200 mx-auto mb-4">
                  <img 
                    :src="member.image" 
                    :alt="member.name" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-lg font-semibold text-gray-800">{{ member.name }}</h3>
                <p class="text-primary-700">{{ member.position }}</p>
              </div>
            </div>
            
            <!-- Connect lines (visible only on md and up) -->
            <div class="hidden md:block absolute top-[104px] left-1/2 w-0.5 h-12 bg-gray-300"></div>
            <div class="hidden md:block absolute top-52 left-1/4 w-1/2 h-0.5 bg-gray-300"></div>
            <div class="hidden md:block absolute top-52 left-1/4 w-0.5 h-12 bg-gray-300"></div>
            <div class="hidden md:block absolute top-52 left-1/2 w-0.5 h-12 bg-gray-300"></div>
            <div class="hidden md:block absolute top-52 left-3/4 w-0.5 h-12 bg-gray-300"></div>
          </div>
          
          <!-- Departments -->
          <div class="space-y-16">
            <div v-for="(department, index) in departments.slice(2)" :key="department.name">
              <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ department.name }} Department</h2>
                <div class="w-20 h-1 bg-primary-600 mx-auto"></div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div 
                  v-for="member in department.members" 
                  :key="member.id"
                  class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
                  @click="showMemberDetails(member)"
                >
                  <div class="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      :src="member.image" 
                      :alt="member.name" 
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ member.name }}</h3>
                  <p class="text-primary-600 mb-3">{{ member.position }}</p>
                  <div class="flex justify-center space-x-2">
                    <a :href="`mailto:${member.email}`" @click.stop class="text-gray-400 hover:text-primary-600 transition-colors">
                      <span class="sr-only">Email</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </a>
                    <a :href="`tel:${member.phone}`" @click.stop class="text-gray-400 hover:text-primary-600 transition-colors">
                      <span class="sr-only">Phone</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Get Involved in Your Community</h2>
            <p class="text-gray-600 mb-8">
              There are many ways to contribute to our neighborhood's development. Join various committees or volunteer for community events.
            </p>
            <router-link to="/login" class="btn btn-primary">
              Join Community Activities
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>