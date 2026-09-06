<template>
  <section id="trabajos" class="section portfolio">
    <div class="container">
      <h2 class="section-title">Nuestros Trabajos</h2>
      <div class="portfolio-grid">
        <div
          v-for="image in activeImages"
          :key="image.id"
          class="portfolio-item"
          data-bs-toggle="modal"
          data-bs-target="#portfolioModal"
          @click="selectedImage = image.src"
        >
          <img :src="image.thumb" :alt="image.title" class="portfolio-image" />
          <div class="portfolio-overlay">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="portfolioModal" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nuestro Trabajo</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body text-center">
            <img
              :src="selectedImage"
              alt="Trabajo ampliado"
              class="img-fluid"
              style="border-radius: 15px"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio.js'

const portfolioStore = usePortfolioStore()
const selectedImage = ref('')

const activeImages = computed(() => portfolioStore.getActiveImages())
</script>
