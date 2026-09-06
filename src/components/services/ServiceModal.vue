<template>
  <div class="modal fade service-modal" ref="modalRef" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">

        <!-- Body -->
        <div class="modal-body">
          <button type="button" class="service-close-btn" data-bs-dismiss="modal" @click="resetState">
            <i class="fas fa-times"></i>
          </button>

          <div class="service-modal-title">
            <i :class="service?.icon"></i>
            <span>{{ service?.name }}</span>
          </div>

          <!-- PASO 1: Galería -->
          <div v-if="step === 'gallery'" class="gallery-step">
            <p class="gallery-intro">{{ service?.description }}</p>

            <div class="gallery-grid">
              <div
                v-for="(img, index) in service?.gallery"
                :key="index"
                class="gallery-photo"
                :style="{ animationDelay: index * 0.08 + 's' }"
                @click="openLightbox(index)"
              >
                <img :src="img" :alt="service?.name + ' ' + (index + 1)" loading="lazy" />
                <div class="photo-hover">
                  <i class="fas fa-expand"></i>
                </div>
              </div>
            </div>

            <div class="gallery-actions">
              <button class="btn btn-primary btn-lg" @click="step = 'plans'">
                <i class="fas fa-tag me-2"></i>Ver Paquetes e Inversión
              </button>
            </div>
          </div>

          <!-- PASO 2: Planes / Cotización -->
          <div v-if="step === 'plans'" class="plans-step">
            <button class="btn btn-back" @click="step = 'gallery'">
              <i class="fas fa-arrow-left me-2"></i>Volver a Galería
            </button>

            <h3 class="plans-title">Elige tu Paquete</h3>
            <p class="plans-subtitle">Selecciona el plan perfecto para tu {{ service?.name }}</p>

            <div class="plans-grid">
              <div
                v-for="(pkg, key) in service?.packages"
                :key="key"
                class="plan-card"
                :class="'plan-' + key"
              >
                <div class="plan-badge" v-if="key === 'premium'">Popular</div>
                <div class="plan-header">
                  <i :class="getPackageIcon(key)" class="plan-icon"></i>
                  <h4 class="plan-name">{{ pkg.namePaquete }}</h4>
                  <div class="plan-price">S/. {{ pkg.price }}</div>
                  <span class="plan-duration">{{ pkg.duration }}</span>
                </div>
                <div class="plan-body">
                  <p class="plan-photos">{{ pkg.photos }}</p>
                  <ul class="plan-features">
                    <li v-for="(feat, i) in pkg.features" :key="i">
                      <i class="fas fa-check"></i>
                      {{ feat }}
                    </li>
                  </ul>
                </div>
                <div class="plan-footer">
                  <button class="btn btn-plan" @click="cotizar(key, pkg.namePaquete)">
                    <i class="fab fa-whatsapp me-2"></i>Cotizar Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox">
        <i class="fas fa-times"></i>
      </button>
      <button class="lightbox-prev" @click="prevPhoto">
        <i class="fas fa-chevron-left"></i>
      </button>
      <img :src="service?.gallery[lightboxIndex]" :alt="service?.name" class="lightbox-img" />
      <button class="lightbox-next" @click="nextPhoto">
        <i class="fas fa-chevron-right"></i>
      </button>
      <div class="lightbox-counter">{{ lightboxIndex + 1 }} / {{ service?.gallery?.length }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

const modalRef = ref(null)
const service = ref(null)
const step = ref('gallery')
let bsModal = null

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const packageIcons = {
  basico: 'fas fa-camera',
  standard: 'fas fa-star',
  premium: 'fas fa-crown',
}

function getPackageIcon(key) {
  return packageIcons[key] || 'fas fa-camera'
}

function open(serviceData) {
  service.value = serviceData
  step.value = 'gallery'
  if (!bsModal) {
    bsModal = new bootstrap.Modal(modalRef.value)
  }
  bsModal.show()
}

function resetState() {
  step.value = 'gallery'
  lightboxOpen.value = false
}

function openLightbox(index) {
  lightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function prevPhoto() {
  const total = service.value?.gallery?.length || 0
  lightboxIndex.value = (lightboxIndex.value - 1 + total) % total
}

function nextPhoto() {
  const total = service.value?.gallery?.length || 0
  lightboxIndex.value = (lightboxIndex.value + 1) % total
}

function handleKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevPhoto()
  if (e.key === 'ArrowRight') nextPhoto()
}

function cotizar(type, name) {
  const message = `¡Hola! Me interesa el paquete ${name} de ${service.value.name}. ¿Podrían darme más información?`
  const url = `https://wa.me/51978147539?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

defineExpose({ open })
</script>

<style scoped>
/* ===== GALERÍA STEP ===== */
.gallery-intro {
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 6px;
  margin-bottom: 1.5rem;
}

.gallery-photo {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  animation: photoFadeIn 0.4s ease both;
  min-height: 200px;
}

.gallery-photo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  transition: transform 0.4s ease;
}

.gallery-photo:hover img {
  transform: scale(1.05);
}

.photo-hover {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-photo:hover .photo-hover {
  opacity: 1;
}

.photo-hover i {
  color: white;
  font-size: 1.5rem;
}

.gallery-actions {
  text-align: center;
}

.gallery-actions .btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border: none;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-actions .btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(227, 5, 18, 0.35);
}

/* ===== PLANES STEP ===== */
.btn-back {
  background: transparent;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  border-radius: 50px;
  padding: 8px 20px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: var(--secondary-color);
  color: white;
}

.plans-title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 0.3rem;
}

.plans-subtitle {
  text-align: center;
  color: #888;
  margin-bottom: 2rem;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.plan-card {
  background: white;
  border-radius: 16px;
  border: 2px solid #eee;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.plan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.plan-premium {
  border-color: var(--primary-color);
}

.plan-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, var(--primary-color), #ff4757);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.plan-header {
  padding: 1.5rem 1.2rem 1rem;
  text-align: center;
  background: linear-gradient(180deg, #f8f9fa, white);
}

.plan-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}

.plan-basico .plan-icon { color: #28a745; }
.plan-standard .plan-icon { color: #ffc107; }
.plan-premium .plan-icon { color: var(--primary-color); }

.plan-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.plan-price {
  font-size: 2rem;
  font-weight: 800;
  color: var(--secondary-color);
}

.plan-basico .plan-price { color: #28a745; }
.plan-standard .plan-price { color: #e6a800; }
.plan-premium .plan-price { color: var(--primary-color); }

.plan-duration {
  font-size: 0.8rem;
  color: #999;
}

.plan-body {
  padding: 1rem 1.2rem;
  flex: 1;
}

.plan-photos {
  font-size: 0.85rem;
  color: #666;
  text-align: center;
  padding: 6px;
  background: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-weight: 500;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.plan-features li {
  padding: 6px 0;
  font-size: 0.85rem;
  color: #555;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  border-bottom: 1px solid #f0f0f0;
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan-features li i {
  color: #28a745;
  font-size: 0.75rem;
  margin-top: 4px;
  flex-shrink: 0;
}

.plan-footer {
  padding: 1rem 1.2rem 1.5rem;
}

.btn-plan {
  width: 100%;
  padding: 12px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.plan-basico .btn-plan {
  background: #28a745;
  color: white;
  border: none;
}

.plan-standard .btn-plan {
  background: #ffc107;
  color: #333;
  border: none;
}

.plan-premium .btn-plan {
  background: linear-gradient(135deg, var(--primary-color), #ff4757);
  color: white;
  border: none;
}

.btn-plan:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

/* ===== LIGHTBOX ===== */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.97);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 60px;
  animation: fadeIn 0.2s ease;
}

.lightbox-img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 6px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background 0.3s ease;
  backdrop-filter: blur(4px);
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background 0.3s ease;
  backdrop-filter: blur(4px);
}

.lightbox-prev { left: 20px; }
.lightbox-next { right: 20px; }

.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-counter {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.4);
  padding: 6px 16px;
  border-radius: 20px;
  backdrop-filter: blur(4px);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes photoFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }

  .plans-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .plans-title {
    font-size: 1.4rem;
  }

  .plan-price {
    font-size: 1.7rem;
  }

  .lightbox {
    padding: 40px 50px;
  }

  .lightbox-prev,
  .lightbox-next {
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
  }

  .lightbox-prev { left: 8px; }
  .lightbox-next { right: 8px; }

  .lightbox-close {
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
    top: 12px;
    right: 12px;
  }

  .lightbox-counter {
    bottom: 16px;
    font-size: 0.85rem;
    padding: 5px 12px;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .gallery-photo {
    border-radius: 8px;
  }

  .gallery-actions .btn-primary {
    font-size: 0.9rem;
    padding: 12px 24px;
  }

  .lightbox {
    padding: 35px 35px;
  }

  .lightbox-img {
    border-radius: 4px;
  }

  .lightbox-prev,
  .lightbox-next {
    width: 38px;
    height: 38px;
    font-size: 1rem;
  }

  .lightbox-prev { left: 4px; }
  .lightbox-next { right: 4px; }

  .lightbox-close {
    width: 38px;
    height: 38px;
    font-size: 1rem;
    top: 8px;
    right: 8px;
  }
}
</style>
