import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVideosStore = defineStore('videos', () => {
  const videos = ref([
    {
      id: 1,
      youtubeId: '2udhIhZM1ug',
      title: 'Video Promocional JC Studios',
      description: 'Conoce nuestro trabajo y la pasión que ponemos en cada proyecto fotográfico.',
      active: true,
    },
    {
      id: 2,
      youtubeId: 'iTJV4btlumU',
      title: 'Highlights Cinematográficos',
      description: 'Un día especial capturado con el estilo cinematográfico único de JC Studios.',
      active: true,
    },
    {
      id: 3,
      youtubeId: 'N4vXf44Zk-4',
      title: 'Evento Corporativo Profesional',
      description: 'Cobertura completa de eventos empresariales con la máxima calidad profesional.',
      active: true,
    },
    {
      id: 4,
      youtubeId: 'OwRREXjF6FM',
      title: 'Sesión Artística Creativa',
      description: 'Trabajo creativo que muestra nuestro lado más artístico y experimental.',
      active: true,
    },
    {
      id: 5,
      youtubeId: 'Ee9eo2tikdo',
      title: 'Backstage Fotográfico',
      description: 'La magia y espontaneidad que ocurre detrás de la cámara.',
      active: true,
    },
    {
      id: 6,
      youtubeId: 'NjGnfpfIqLo',
      title: 'Proyecto Musical',
      description: 'Conoce nuestro trabajo y la pasión que le ponemos en cada proyecto musical.',
      active: true,
    },
  ])

  function getActiveVideos() {
    return videos.value.filter((v) => v.active)
  }

  function addVideo(video) {
    videos.value.push({
      id: Date.now(),
      ...video,
      active: true,
    })
  }

  function removeVideo(id) {
    videos.value = videos.value.filter((v) => v.id !== id)
  }

  function toggleVideo(id) {
    const vid = videos.value.find((v) => v.id === id)
    if (vid) vid.active = !vid.active
  }

  return { videos, getActiveVideos, addVideo, removeVideo, toggleVideo }
})
