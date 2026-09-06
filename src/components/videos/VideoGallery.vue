<template>
  <section id="videos" class="section videos">
    <div class="container">
      <h2 class="section-title reveal">Nuestros Videos</h2>
      <div class="video-grid">
        <div
          v-for="(video, index) in activeVideos"
          :key="video.id"
          class="video-item reveal"
          :class="'reveal-delay-' + (index + 1)"
          @click="openVideo(video.youtubeId)"
        >
          <div class="video-thumbnail">
            <img
              :src="'https://img.youtube.com/vi/' + video.youtubeId + '/maxresdefault.jpg'"
              :alt="video.title"
            />
            <div class="play-overlay">
              <div class="play-button">
                <i class="fas fa-play"></i>
              </div>
            </div>
          </div>
          <div class="video-content">
            <h3 class="video-title">{{ video.title }}</h3>
            <p class="video-description">{{ video.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade video-modal" id="videoModal" tabindex="-1">
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="video-close-btn" data-bs-dismiss="modal">
              <i class="fas fa-times"></i>
            </button>
            <iframe
              ref="videoEmbed"
              class="video-embed"
              src=""
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useVideosStore } from '@/stores/videos.js'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

const videosStore = useVideosStore()
const activeVideos = computed(() => videosStore.getActiveVideos())

const videoEmbed = ref(null)
let bsModal = null

function openVideo(youtubeId) {
  if (!bsModal) {
    bsModal = new bootstrap.Modal(document.getElementById('videoModal'))
  }
  videoEmbed.value.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`
  bsModal.show()
}

onMounted(() => {
  document.getElementById('videoModal')?.addEventListener('hidden.bs.modal', () => {
    if (videoEmbed.value) videoEmbed.value.src = ''
  })
})
</script>
