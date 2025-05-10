<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import { useRouter } from 'vue-router'

const isLoading = ref(true)
const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    isLoading.ref = false
  }, 500)
  
  router.afterEach(() => {
    window.scrollTo(0, 0)
  })
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <AppFooter />
  </div>
</template>