<script setup lang="ts">
import { ref } from 'vue';
import HeroBanner from '../components/home/HeroBanner.vue';
import NewsSection from '../components/home/NewsSection.vue';
import StatsSection from '../components/home/StatsSection.vue';
import AgendaHighlights from '../components/home/AgendaHighlights.vue';
import ServiceHighlights from '../components/home/ServiceHighlights.vue';
</script>

<template>
  <div>
    <!-- Hero Banner Section -->
    <HeroBanner />
    
    <!-- Statistics Section -->
    <StatsSection />
    
    <!-- Service Highlights Section -->
    <ServiceHighlights />
    
    <!-- News Section -->
    <NewsSection />
    
    <!-- Agenda Highlights Section -->
    <AgendaHighlights />
  </div>
</template>