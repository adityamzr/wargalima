<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
// import { useRouter } from 'vue-router'

// const router = useRouter()
// const isAboutDropdownOpen = ref(false)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Navigation items
// const navItems = [
  // { name: 'Denah Warga', path: '/about/citizen-map' },
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
// ]

// Check if the route is active
// const isActiveRoute = (path: string) => {
//   return router.currentRoute.value.path === path
// }

// Toggle mobile menu
// const toggleMobileMenu = () => {
//   isMobileMenuOpen.value = !isMobileMenuOpen.value
//   if (isMobileMenuOpen.value) {
//     isAboutDropdownOpen.value = false
//   }
// }

// Toggle about dropdown
// const toggleAboutDropdown = (event: Event) => {
//   event.preventDefault()
//   isAboutDropdownOpen.value = !isAboutDropdownOpen.value
// }

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
      <div class="flex justify-center items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <span class="text-primary-700 text-2xl font-bold">Wargalima</span>
            <span class="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">RT 05 RW 05 Gading Junti Asri</span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <!-- Spacer to prevent content from hiding behind fixed header -->
  <div class="h-16 md:h-20"></div>
</template>