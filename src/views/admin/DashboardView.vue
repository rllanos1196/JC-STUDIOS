<template>
  <div class="dashboard">
    <h1 class="mb-4 page-title">Dashboard</h1>

    <div class="row g-4">
      <div class="col-md-4">
        <div class="stat-card stat-card--primary">
          <i class="fas fa-images stat-icon"></i>
          <div>
            <h3>{{ portfolioCount }}</h3>
            <p>Fotos en Portfolio</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="stat-card stat-card--success">
          <i class="fas fa-video stat-icon"></i>
          <div>
            <h3>{{ videoCount }}</h3>
            <p>Videos</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="stat-card stat-card--warning">
          <i class="fas fa-concierge-bell stat-icon"></i>
          <div>
            <h3>{{ serviceCount }}</h3>
            <p>Servicios</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4 mt-3">
      <div class="col-md-6">
        <div class="card admin-card">
          <div class="card-body">
            <h5 class="card-title"><i class="fas fa-bolt me-2"></i>Accesos Rápidos</h5>
            <div class="d-grid gap-2">
              <router-link to="/admin/media" class="btn btn-outline-primary">
                <i class="fas fa-photo-film me-2"></i>Gestionar Fotos y Videos
              </router-link>
              <router-link to="/admin/services" class="btn btn-outline-success">
                <i class="fas fa-cog me-2"></i>Gestionar Servicios
              </router-link>
              <router-link to="/" class="btn btn-outline-secondary">
                <i class="fas fa-globe me-2"></i>Ver Sitio Web
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card admin-card">
          <div class="card-body">
            <h5 class="card-title"><i class="fas fa-info-circle me-2"></i>Información</h5>
            <p class="info-text">Los cambios realizados aquí se reflejan automáticamente en la página principal.</p>
            <p class="info-text">Para conectar con una base de datos, edita los stores en <code>src/stores/</code>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio.js'
import { useVideosStore } from '@/stores/videos.js'
import { useServicesStore } from '@/stores/services.js'

const portfolioStore = usePortfolioStore()
const videosStore = useVideosStore()
const servicesStore = useServicesStore()

const portfolioCount = computed(() => portfolioStore.images.length)
const videoCount = computed(() => videosStore.videos.length)
const serviceCount = computed(() => Object.keys(servicesStore.services).length)
</script>

<style scoped>
.page-title {
  color: var(--text-primary);
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 15px;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.stat-card--primary { background: linear-gradient(135deg, #e30512, #c00410); }
.stat-card--success { background: linear-gradient(135deg, #28a745, #1e7e34); }
.stat-card--warning { background: linear-gradient(135deg, #ffc107, #e0a800); color: #333; }

.stat-icon { font-size: 2.5rem; }

.admin-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  box-shadow: var(--shadow-sm);
  transition: background 0.3s ease, border-color 0.3s ease;
}

.admin-card .card-title {
  color: var(--text-primary);
}

.info-text {
  color: var(--text-muted);
}

.admin-card code {
  background: var(--input-bg);
  color: var(--primary-color);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.85rem;
}
</style>
