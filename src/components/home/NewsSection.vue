<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface NewsItem {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  url: string;
}

const news = ref<NewsItem[]>([
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Community Clean-up Event Received Great Response',
    excerpt: 'More than 50 residents participated in our monthly neighborhood clean-up program last weekend.',
    date: '24 Oct, 2025',
    category: 'Event',
    url: '/news/community-cleanup'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'New Healthcare Service Available for Elderly Citizens',
    excerpt: 'The neighborhood committee has partnered with local clinics to provide free monthly check-ups.',
    date: '18 Oct, 2025',
    category: 'Services',
    url: '/news/healthcare-service'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/935943/pexels-photo-935943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Youth Education Program Launches Next Month',
    excerpt: 'A new after-school program for children aged 6-12 will begin next month, offering various educational activities.',
    date: '15 Oct, 2025',
    category: 'Education',
    url: '/news/youth-education'
  }
]);

const navigateToNews = (id: number) => {
  router.push("/news#"+id);
};
</script>

<template>
  <section class="section-padding">
    <div class="container mx-auto container-padding">
      <div class="flex justify-between items-center mb-12">
        <div>
          <h2 class="text-3xl font-bold text-gray-800 mb-2">Latest News</h2>
          <p class="text-gray-600">Stay updated with the latest from our community</p>
        </div>
        <router-link to="/news" class="btn btn-outline hidden md:block">View All News</router-link>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="item in news" 
          :key="item.id" 
          class="card group cursor-pointer"
          @click="navigateToNews(item.id)"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="item.image" 
              :alt="item.title" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute top-4 left-4 bg-secondary-500 text-white text-xs font-medium px-2 py-1 rounded">
              {{ item.category }}
            </div>
          </div>
          
          <div class="p-6">
            <div class="text-sm text-gray-500 mb-2">{{ item.date }}</div>
            <h3 class="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-gray-600 mb-4">{{ item.excerpt }}</p>
            <div class="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-8 text-center md:hidden">
        <router-link to="/news" class="btn btn-outline">View All News</router-link>
      </div>
    </div>
  </section>
</template>