<template>
  <div class="media-admin">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="page-title">Gestión de Fotos y Videos</h1>
    </div>

    <ul class="nav nav-tabs mb-4">
      <li class="nav-item">
        <button class="nav-link" :class="{ active: tab === 'fotos' }" @click="tab = 'fotos'">
          <i class="fas fa-image me-2"></i>Fotos ({{ portfolioStore.images.length }})
        </button>
      </li>
      <li class="nav-item">
        <button class="nav-link" :class="{ active: tab === 'videos' }" @click="tab = 'videos'">
          <i class="fas fa-video me-2"></i>Videos ({{ videosStore.videos.length }})
        </button>
      </li>
      <li class="nav-item">
        <button class="nav-link" :class="{ active: tab === 'hero' }" @click="tab = 'hero'">
          <i class="fas fa-images me-2"></i>Hero Slides ({{ heroStore.slides.length }})
        </button>
      </li>
    </ul>

    <!-- FOTOS TAB -->
    <div v-if="tab === 'fotos'">
      <div class="card mb-4 admin-card">
        <div class="card-body">
          <h5 class="card-title">Subir nueva foto</h5>
          <div class="row g-3">
            <div class="col-md-4">
              <input v-model="newPhoto.title" type="text" class="form-control" placeholder="Título" />
            </div>
            <div class="col-md-4">
              <input v-model="newPhoto.src" type="text" class="form-control" placeholder="URL imagen completa" />
            </div>
            <div class="col-md-4">
              <input v-model="newPhoto.thumb" type="text" class="form-control" placeholder="URL thumbnail" />
            </div>
            <div class="col-12">
              <button class="btn btn-primary" @click="addPhoto">
                <i class="fas fa-plus me-2"></i>Agregar Foto
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-3">
        <div v-for="img in portfolioStore.images" :key="img.id" class="col-md-3">
          <div class="card photo-card admin-card">
            <img :src="img.thumb" class="card-img-top" :alt="img.title" />
            <div class="card-body">
              <h6 class="card-item-title">{{ img.title }}</h6>
              <div class="d-flex gap-2">
                <button
                  class="btn btn-sm"
                  :class="img.active ? 'btn-success' : 'btn-secondary'"
                  @click="portfolioStore.toggleImage(img.id)"
                >
                  {{ img.active ? 'Activa' : 'Inactiva' }}
                </button>
                <button class="btn btn-sm btn-danger" @click="portfolioStore.removeImage(img.id)">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VIDEOS TAB -->
    <div v-if="tab === 'videos'">
      <div class="card mb-4 admin-card">
        <div class="card-body">
          <h5 class="card-title">Agregar nuevo video</h5>
          <div class="row g-3">
            <div class="col-md-3">
              <input v-model="newVideo.youtubeId" type="text" class="form-control" placeholder="YouTube ID" />
            </div>
            <div class="col-md-3">
              <input v-model="newVideo.title" type="text" class="form-control" placeholder="Título" />
            </div>
            <div class="col-md-4">
              <input v-model="newVideo.description" type="text" class="form-control" placeholder="Descripción" />
            </div>
            <div class="col-md-2">
              <button class="btn btn-primary w-100" @click="addVideo">
                <i class="fas fa-plus me-2"></i>Agregar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-3">
        <div v-for="video in videosStore.videos" :key="video.id" class="col-md-4">
          <div class="card video-card admin-card">
            <img
              :src="'https://img.youtube.com/vi/' + video.youtubeId + '/mqdefault.jpg'"
              class="card-img-top"
              :alt="video.title"
            />
            <div class="card-body">
              <h6 class="card-item-title">{{ video.title }}</h6>
              <p class="card-item-muted">{{ video.description }}</p>
              <div class="d-flex gap-2">
                <button
                  class="btn btn-sm"
                  :class="video.active ? 'btn-success' : 'btn-secondary'"
                  @click="videosStore.toggleVideo(video.id)"
                >
                  {{ video.active ? 'Activo' : 'Inactivo' }}
                </button>
                <button class="btn btn-sm btn-danger" @click="videosStore.removeVideo(video.id)">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- HERO SLIDES TAB -->
    <div v-if="tab === 'hero'">
      <div class="card mb-4 admin-card">
        <div class="card-body">
          <h5 class="card-title">Agregar slide al hero</h5>
          <div class="row g-3">
            <div class="col-md-3">
              <input v-model="newSlide.image" type="text" class="form-control" placeholder="URL imagen" />
            </div>
            <div class="col-md-3">
              <input v-model="newSlide.title" type="text" class="form-control" placeholder="Título" />
            </div>
            <div class="col-md-3">
              <input v-model="newSlide.subtitle" type="text" class="form-control" placeholder="Subtítulo" />
            </div>
            <div class="col-md-3">
              <button class="btn btn-primary w-100" @click="addSlide">
                <i class="fas fa-plus me-2"></i>Agregar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-3">
        <div v-for="slide in heroStore.slides" :key="slide.id" class="col-md-4">
          <div class="card admin-card">
            <img :src="slide.image" class="card-img-top" :alt="slide.title" style="height: 180px; object-fit: cover" />
            <div class="card-body">
              <h6 class="card-item-title">{{ slide.title }}</h6>
              <p class="card-item-muted">{{ slide.subtitle }}</p>
              <div class="d-flex gap-2">
                <button
                  class="btn btn-sm"
                  :class="slide.active ? 'btn-success' : 'btn-secondary'"
                  @click="slide.active = !slide.active"
                >
                  {{ slide.active ? 'Activa' : 'Inactiva' }}
                </button>
                <button class="btn btn-sm btn-danger" @click="heroStore.removeSlide(slide.id)">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio.js'
import { useVideosStore } from '@/stores/videos.js'
import { useHeroStore } from '@/stores/hero.js'

const portfolioStore = usePortfolioStore()
const videosStore = useVideosStore()
const heroStore = useHeroStore()

const tab = ref('fotos')

const newPhoto = reactive({ title: '', src: '', thumb: '' })
const newVideo = reactive({ youtubeId: '', title: '', description: '' })
const newSlide = reactive({ image: '', title: '', subtitle: '', ctaText: '', ctaLink: '#servicios' })

function addPhoto() {
  if (newPhoto.title && newPhoto.src && newPhoto.thumb) {
    portfolioStore.addImage({ ...newPhoto })
    newPhoto.title = ''
    newPhoto.src = ''
    newPhoto.thumb = ''
  }
}

function addVideo() {
  if (newVideo.youtubeId && newVideo.title) {
    videosStore.addVideo({ ...newVideo })
    newVideo.youtubeId = ''
    newVideo.title = ''
    newVideo.description = ''
  }
}

function addSlide() {
  if (newSlide.image && newSlide.title) {
    heroStore.addSlide({ ...newSlide })
    newSlide.image = ''
    newSlide.title = ''
    newSlide.subtitle = ''
  }
}
</script>

<style scoped>
.page-title {
  color: var(--text-primary);
}

.nav-tabs {
  border-bottom: 2px solid var(--border-color);
}

.nav-tabs .nav-link {
  color: var(--text-muted);
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.3s ease;
}

.nav-tabs .nav-link.active {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
  background: transparent;
}

.admin-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  transition: background 0.3s ease, border-color 0.3s ease;
}

.card-title {
  color: var(--text-primary);
}

.card-item-title {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.card-item-muted {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.photo-card img {
  height: 200px;
  object-fit: cover;
}
</style>
