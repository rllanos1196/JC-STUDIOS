<template>
  <section id="inicio">
    <div id="heroCarousel" class="carousel slide hero-carousel" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="'ind-' + slide.id"
          type="button"
          data-bs-target="#heroCarousel"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
        ></button>
      </div>

      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img
            :src="slide.image"
            :alt="slide.title"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : 'auto'"
            decoding="async"
          />
          <div class="carousel-caption">
            <h1 class="hero-title">{{ slide.title }}</h1>
            <p class="hero-subtitle">{{ slide.subtitle }}</p>
            <a :href="slide.ctaLink" class="btn-hero">{{ slide.ctaText }}</a>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useHeroStore } from '@/stores/hero.js'

const heroStore = useHeroStore()
const slides = computed(() => heroStore.activeSlides)
</script>
