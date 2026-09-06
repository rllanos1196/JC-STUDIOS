<template>
  <div>
    <HeroCarousel />
    <AboutSection />
    <ServiceTabs />
    <VideoGallery />
    <ContactSection />
  </div>
</template>

<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal.js'
import HeroCarousel from '@/components/hero/HeroCarousel.vue'
import AboutSection from '@/components/about/AboutSection.vue'
import ServiceTabs from '@/components/services/ServiceTabs.vue'
import VideoGallery from '@/components/videos/VideoGallery.vue'
import ContactSection from '@/components/contact/ContactSection.vue'

useScrollReveal()
</script>
