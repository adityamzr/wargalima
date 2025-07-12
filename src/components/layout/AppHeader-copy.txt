<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isAboutDropdownOpen = ref(false)

// Navigation items
const navItems = [
  { name: 'Denah Warga', path: '/about/citizen-map' },
  // { name: 'Beranda', path: '/' },
  // { 
  //   name: 'Tentang Kami', 
  //   path: '/about',
  //   dropdown: true,
  //   children: [
  //     { name: 'Struktur Organisasi', path: '/about/organizational-structure' },
  //     { name: 'Denah Warga', path: '/about/citizen-map' }
  //   ]
  // },
  // { name: 'Layanan', path: '/services' },
  // { name: 'Kegiatan', path: '/agenda' },
  // { name: 'Berita', path: '/news' },
]

// Check if the route is active
const isActiveRoute = (path: string) => {
  return router.currentRoute.value.path === path
}

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    isAboutDropdownOpen.value = false
  }
}

// Toggle about dropdown
const toggleAboutDropdown = (event: Event) => {
  event.preventDefault()
  isAboutDropdownOpen.value = !isAboutDropdownOpen.value
}

// Close mobile menu when clicking outside
const closeMobileMenu = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.mobile-menu-container') && !target.closest('.menu-button')) {
    isMobileMenuOpen.value = false
  }
}

// Handle scroll to update header style
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Lifecycle hooks for event listeners
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', closeMobileMenu)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', closeMobileMenu)
})

// Computed style for header based on scroll
const headerClass = computed(() => {
  return {
    'bg-white shadow-md': isScrolled.value,
    'bg-transparent': !isScrolled.value
  }
})
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
    :class="headerClass"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <span class="text-primary-700 text-2xl font-bold">Wargalima</span>
            <span class="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">RT 05 Gading Junti Asri</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <nav class="flex items-center space-x-6">
            <template v-for="(item, index) in navItems" :key="index">
              <!-- Regular nav items -->
              <router-link 
                v-if="!item.dropdown" 
                :to="item.path" 
                class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                :class="{ 'text-primary-600 font-semibold': isActiveRoute(item.path) }"
              >
                {{ item.name }}
              </router-link>

              <!-- Dropdown nav items -->
              <div v-else class="relative">
                <button 
                  @click="toggleAboutDropdown" 
                  class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 flex items-center"
                  :class="{ 'text-primary-600 font-semibold': isActiveRoute(item.path) }"
                >
                  {{ item.name }}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-1" :class="{ 'rotate-180': isAboutDropdownOpen }">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div 
                  v-if="isAboutDropdownOpen" 
                  class="absolute left-0 mt-2 py-2 w-56 bg-white rounded-md shadow-xl z-10 animate-fade-in"
                >
                  <router-link 
                    v-for="(child, childIndex) in item.children" 
                    :key="childIndex" 
                    :to="child.path" 
                    class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    :class="{ 'bg-primary-50 text-primary-600': isActiveRoute(child.path) }"
                  >
                    {{ child.name }}
                  </router-link>
                </div>
              </div>
            </template>
          </nav>

          <!-- CTA Button -->
          <!-- <router-link to="/login" class="btn btn-primary">
            Lapor atau Pengajuan
          </router-link> -->
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu" 
          class="menu-button md:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="isMobileMenuOpen" 
      class="mobile-menu-container md:hidden bg-white shadow-lg animate-fade-in"
    >
      <nav class="px-4 pt-2 pb-4 space-y-1">
        <template v-for="(item, index) in navItems" :key="index">
          <!-- Regular nav items -->
          <router-link 
            v-if="!item.dropdown" 
            :to="item.path" 
            class="block py-2 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md"
            :class="{ 'bg-primary-50 text-primary-600 font-medium': isActiveRoute(item.path) }"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>

          <!-- Dropdown items -->
          <div v-else>
            <button 
              @click="toggleAboutDropdown" 
              class="flex justify-between items-center w-full py-2 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md"
              :class="{ 'bg-primary-50 text-primary-600 font-medium': isActiveRoute(item.path) }"
            >
              {{ item.name }}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-1" :class="{ 'rotate-180': isAboutDropdownOpen }">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div v-if="isAboutDropdownOpen" class="pl-4 mt-1 space-y-1">
              <router-link 
                v-for="(child, childIndex) in item.children" 
                :key="childIndex" 
                :to="child.path" 
                class="block py-2 px-4 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-md"
                :class="{ 'bg-primary-50 text-primary-600 font-medium': isActiveRoute(child.path) }"
                @click="isMobileMenuOpen = false"
              >
                {{ child.name }}
              </router-link>
            </div>
          </div>
        </template>

        <!-- Mobile CTA Button -->
        <div class="pt-2">
          <router-link to="/login" class="btn btn-primary w-full" @click="isMobileMenuOpen = false">
            Lapor atau Pengajuan
          </router-link>
        </div>
      </nav>
    </div>
  </header>
  <!-- Spacer to prevent content from hiding behind fixed header -->
  <div class="h-16 md:h-20"></div>
</template>