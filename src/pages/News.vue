<script setup lang="ts">
import { ref } from 'vue';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

const newsItems = ref<NewsItem[]>([
  {
    id: 1,
    title: 'Community Clean-up Event Received Great Response',
    excerpt: 'More than 50 residents participated in our monthly neighborhood clean-up program last weekend.',
    content: 'Last weekend marked another successful community clean-up event in RT 5 Gading Junti, with over 50 residents coming together to beautify our neighborhood. Participants collected trash, cleaned public spaces, and planted new flowers in community gardens. The event was followed by a small gathering where refreshments were served. The neighborhood committee extends their gratitude to all participants for their dedication to keeping our community clean and beautiful.',
    author: 'Admin Team',
    date: 'October 24, 2025',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Events'
  },
  {
    id: 2,
    title: 'New Healthcare Service Available for Elderly Citizens',
    excerpt: 'The neighborhood committee has partnered with local clinics to provide free monthly check-ups.',
    content: 'We are pleased to announce a new healthcare initiative for our elderly residents. Through a partnership with local healthcare providers, we will now offer free monthly check-ups at the community center on the first Monday of each month. Services will include basic health screenings, blood pressure monitoring, and wellness consultations. Residents aged 60 and above can register for this service through the Citizen Portal or by contacting the community office.',
    author: 'Health Committee',
    date: 'October 18, 2025',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Services'
  },
  {
    id: 3,
    title: 'Youth Education Program Launches Next Month',
    excerpt: 'A new after-school program for children aged 6-12 will begin next month, offering various educational activities.',
    content: 'Starting next month, RT 5 Gading Junti will launch a new youth education program designed for children aged 6-12. The program will run every Tuesday and Thursday from 3:30 PM to 5:30 PM at the community hall. Activities will include homework help, reading sessions, arts and crafts, and educational games. The program aims to provide a safe and enriching environment for children after school while supporting their academic and personal development. Registration is now open through the Citizen Portal.',
    author: 'Education Committee',
    date: 'October 15, 2025',
    image: 'https://images.pexels.com/photos/935943/pexels-photo-935943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Education'
  },
  {
    id: 4,
    title: 'Neighborhood Security System Upgrade Completed',
    excerpt: 'The installation of new security cameras and improved street lighting has been successfully completed.',
    content: 'We are pleased to inform residents that the security system upgrade project has been successfully completed. The project included the installation of 12 new security cameras at strategic locations and the replacement of street lights with brighter, energy-efficient LED models. This upgrade aims to enhance neighborhood safety and provide better visibility in public areas during nighttime. The security system is now fully operational and monitored 24/7 by our security team. We thank all residents for their patience during the installation process.',
    author: 'Security Committee',
    date: 'October 10, 2025',
    image: 'https://images.pexels.com/photos/4473888/pexels-photo-4473888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Security'
  },
  {
    id: 5,
    title: 'Annual Neighborhood Meeting Scheduled for November',
    excerpt: 'The yearly gathering to discuss community plans and budget allocation will be held next month.',
    content: 'The Annual Neighborhood Meeting for RT 5 Gading Junti has been scheduled for November 15, 2025, at 7:00 PM in the community hall. This important meeting will cover various topics including the annual financial report, budget allocation for the coming year, upcoming projects, and election of new committee members. All residents are encouraged to attend and participate in the decision-making process. The agenda and related documents will be available on the Citizen Portal one week before the meeting.',
    author: 'Admin Team',
    date: 'October 5, 2025',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Announcement'
  },
  {
    id: 6,
    title: 'Community Garden Expansion Project to Begin Soon',
    excerpt: 'More space will be allocated for residents to grow vegetables and flowers in the community garden.',
    content: 'Due to the popularity of our community garden program, we are excited to announce an expansion project that will begin next week. The expanded area will add 15 new garden plots for resident use, along with a small pergola for shade and a water-efficient irrigation system. Residents interested in securing a plot in the expanded garden area can submit applications through the Citizen Portal beginning October 1. Plots will be allocated on a first-come, first-served basis, with priority given to those on the current waiting list.',
    author: 'Environment Committee',
    date: 'September 28, 2025',
    image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Environment'
  }
]);

const selectedCategory = ref('All');
const categories = ['All', 'Events', 'Services', 'Education', 'Security', 'Announcement', 'Environment'];

// Filter news by category
const filteredNews = computed(() => {
  if (selectedCategory.value === 'All') {
    return newsItems.value;
  }
  return newsItems.value.filter(item => item.category === selectedCategory.value);
});

const setCategory = (category: string) => {
  selectedCategory.value = category;
};

// Show full news content
const selectedNews = ref<NewsItem | null>(null);

const showNewsDetail = (news: NewsItem) => {
  selectedNews.value = news;
  // Scroll to top when opening news detail
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const closeNewsDetail = () => {
  selectedNews.value = null;
};
</script>

<template>
  <div>
    <!-- News Detail View -->
    <div v-if="selectedNews" class="min-h-screen">
      <!-- Hero Section with Image -->
      <div class="relative h-[50vh] bg-gray-900">
        <img 
          :src="selectedNews.image" 
          :alt="selectedNews.title" 
          class="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center">
          <div class="max-w-3xl">
            <button 
              @click="closeNewsDetail" 
              class="inline-flex items-center text-white mb-6 hover:text-primary-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to News
            </button>
            
            <span class="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4">
              {{ selectedNews.category }}
            </span>
            
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {{ selectedNews.title }}
            </h1>
            
            <div class="flex items-center text-white text-opacity-90">
              <span>{{ selectedNews.date }}</span>
              <span class="mx-3">•</span>
              <span>{{ selectedNews.author }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Content Section -->
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="max-w-3xl mx-auto">
          <div class="prose prose-lg">
            <p class="text-xl font-medium text-gray-800 mb-6">{{ selectedNews.excerpt }}</p>
            
            <p class="text-gray-700 whitespace-pre-line">{{ selectedNews.content }}</p>
          </div>
          
          <div class="mt-12 pt-8 border-t border-gray-200">
            <button 
              @click="closeNewsDetail" 
              class="btn btn-outline"
            >
              Back to News List
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- News List View -->
    <div v-else>
      <!-- Hero Section -->
      <section class="relative bg-primary-700 text-white py-20 md:py-28">
        <div class="absolute inset-0 bg-opacity-70 bg-gray-900"></div>
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
            <p class="text-xl text-white text-opacity-90 mb-8">
              Stay informed about the latest happenings in our neighborhood
            </p>
          </div>
        </div>
      </section>
      
      <!-- News Categories -->
      <section class="py-8 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-wrap justify-center gap-3">
            <button 
              v-for="category in categories" 
              :key="category"
              @click="setCategory(category)"
              class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              :class="selectedCategory === category ? 
                'bg-primary-600 text-white' : 
                'bg-white text-gray-700 hover:bg-gray-100'"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </section>
      
      <!-- News Grid -->
      <section class="py-12 md:py-16">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="news in filteredNews" 
              :key="news.id" 
              class="card group cursor-pointer"
              @click="showNewsDetail(news)"
            >
              <div class="relative h-48 overflow-hidden">
                <img 
                  :src="news.image" 
                  :alt="news.title" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute top-4 left-4 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
                  {{ news.category }}
                </div>
              </div>
              
              <div class="p-6">
                <div class="text-sm text-gray-500 mb-2">{{ news.date }}</div>
                <h3 class="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                  {{ news.title }}
                </h3>
                <p class="text-gray-600 mb-4">{{ news.excerpt }}</p>
                <div class="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Empty State -->
          <div v-if="filteredNews.length === 0" class="text-center py-16">
            <div class="text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-700 mb-2">No news found</h3>
            <p class="text-gray-500">There are no news items in this category yet.</p>
            <button 
              @click="setCategory('All')" 
              class="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              View All News
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>