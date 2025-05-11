<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const slides = ref([
  {
    id: 1,
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Welcome to Wargalima RT 5 Gading Junti',
    subtitle: 'Your integrated neighborhood information system',
    buttonText: 'Tentang RT 05',
    buttonLink: '/about'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Community Services at Your Fingertips',
    subtitle: 'Easy access to letters, permissions, and neighborhood information',
    buttonText: 'Lihat Layanan',
    buttonLink: '/services'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/296115/pexels-photo-296115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Stay Updated with Community Events',
    subtitle: 'Never miss important announcements and gatherings',
    buttonText: 'Lihat Kegiatan',
    buttonLink: '/agenda'
  }
]);

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

onMounted(() => {
  // Auto-rotate slides every 5 seconds
  const interval = setInterval(nextSlide, 8000);
  
  // Clean up on unmount
  return () => clearInterval(interval);
});

const navigateToSlideLink = (link: string) => {
  router.push(link);
};
</script>

<template>
  <section class="relative h-[70vh] md:h-[80vh] overflow-hidden">
    <!-- Slide Background -->
    <div class="absolute inset-0 w-full h-full">
      <transition name="fade" mode="out-in">
        <div 
          :key="currentSlide" 
          class="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
          :style="{ backgroundImage: `url(${slides[currentSlide].image})` }"
        >
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      </transition>
    </div>
    
    <!-- Slide Content -->
    <div class="container mx-auto px-4 md:px-8 lg:px-10 h-full flex items-center relative z-10">
      <div class="max-w-3xl">
        <transition name="slide-up" mode="out-in">
          <div :key="currentSlide" class="text-white">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {{ slides[currentSlide].title }}
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-white text-opacity-90">
              {{ slides[currentSlide].subtitle }}
            </p>
            <div class="flex flex-wrap gap-4">
              <button 
                @click="navigateToSlideLink(slides[currentSlide].buttonLink)"
                class="btn btn-primary"
              >
                {{ slides[currentSlide].buttonText }}
              </button>
              <router-link to="/login" class="btn bg-white text-primary-700 hover:bg-gray-100">
                Lapor atau Pengajuan
              </router-link>
            </div>
          </div>
        </transition>
      </div>
    </div>
    
    <!-- Navigation Arrows -->
    <!-- <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300 z-20"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300 z-20"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button> -->
    
    <!-- Slide Indicators -->
    <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        @click="currentSlide = index"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'"
      ></button>
    </div>
  </section>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>