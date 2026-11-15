<template>
  <section id="servicios" class="section services">
    <div class="container">
      <h2 class="section-title reveal">Nuestros Servicios</h2>

      <div class="service-tabs reveal reveal-delay-1">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              :class="{ active: activeCategory === 'eventos' }"
              @click="store.setCategory('eventos')"
              type="button"
            >
              <i class="fas fa-heart"></i><span class="tab-text"> Eventos</span>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              :class="{ active: activeCategory === 'sesiones' }"
              @click="store.setCategory('sesiones')"
              type="button"
            >
              <i class="fas fa-camera"></i><span class="tab-text"> Sesiones</span>
            </button>
          </li>
        </ul>
      </div>

      <div class="services-grid reveal reveal-delay-2">
        <div
          v-for="(service, index) in activeServices"
          :key="service.key"
          class="service-card"
          @click="openService(service)"
        >
          <div class="service-card-image" :class="{ 'is-empty': !getCover(service) }">
            <img
              v-if="getCover(service)"
              :src="getCover(service)"
              :alt="service.name"
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
              @error="onImgError"
            />
            <i v-else :class="service.icon" class="service-card-placeholder"></i>
            <div class="service-card-overlay">
              <div class="overlay-content">
                <span class="overlay-name">{{ service.name }}</span>
                <div class="overlay-arrow">
                  <i class="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="service-card-body">
            <i :class="service.icon" class="service-card-icon"></i>
            <h3 class="service-card-title">{{ service.name }}</h3>
            <p class="service-card-text">Ver galería y paquetes</p>
          </div>
        </div>
      </div>

      <ServiceModal ref="serviceModalRef" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useServicesStore } from '@/stores/services.js'
import { getPhotosRuntime } from '@/services/galleryLoader.js'
import ServiceModal from './ServiceModal.vue'

const store = useServicesStore()
const serviceModalRef = ref(null)

const activeCategory = computed(() => store.activeCategory)
const activeServices = computed(() => store.activeServices)

// Covers runtime (se actualizan al detectar fotos nuevas)
const runtimeCovers = ref({})

function getCover(service) {
  return runtimeCovers.value[service.key] || service.cover
}

function onImgError(e) {
  e.target.parentElement?.classList.add('is-empty')
  e.target.remove()
}

function openService(service) {
  if (serviceModalRef.value) {
    serviceModalRef.value.open(service)
  }
}

// Detectar covers en runtime (primera foto de cada carpeta)
async function loadCovers() {
  for (const svc of store.activeServices) {
    const dir = svc.category === 'evento' ? 'eventos' : 'sesiones'
    const folder = svc.folder
    if (!folder) continue
    try {
      const photos = await getPhotosRuntime(`${dir}/${folder}`)
      if (photos.length > 0) {
        runtimeCovers.value[svc.key] = photos[0].thumb
      }
    } catch (_) {}
  }
}

onMounted(() => {
  loadCovers()
})

// Recargar covers al cambiar de categoria
import { watch } from 'vue'
watch(activeCategory, () => {
  loadCovers()
})
</script>

<style scoped>
.service-card-image.is-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary, #f4f6f9);
}

.service-card-placeholder {
  font-size: 2.2rem;
  color: var(--primary-color);
  opacity: 0.35;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

@media (max-width: 991.98px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
}

@media (max-width: 576px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .overlay-name {
    font-size: 0.85rem;
    letter-spacing: 1px;
  }

  .overlay-arrow {
    width: 40px;
    height: 40px;
  }

  .overlay-arrow i {
    font-size: 0.9rem;
  }
}

@media (max-width: 380px) {
  .services-grid {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
}
</style>
