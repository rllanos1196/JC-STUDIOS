import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getHeroImages } from '@/services/galleryLoader.js'

const heroImages = getHeroImages()

const defaultSlides = [
  {
    id: 1,
    image: '/img/principal.jpg',
    title: 'Capturamos tus mejores Momentos',
    subtitle: 'Fotografía profesional para eventos, retratos y momentos únicos.',
    ctaText: 'Descubre Nuestros Servicios',
    ctaLink: '#servicios',
    active: true,
  },
  {
    id: 2,
    image: '/img/portada.jpg',
    title: 'Arte Visual que Cuenta Historias',
    subtitle: 'La magia del momento capturada para siempre.',
    ctaText: 'Ver Nuestro Portfolio',
    ctaLink: '#servicios',
    active: true,
  },
  {
    id: 3,
    image: '/img/portada2.jpg',
    title: 'Profesionalismo y Creatividad',
    subtitle: 'Transformamos tus celebraciones en recuerdos inolvidables',
    ctaText: 'Contáctanos Ahora',
    ctaLink: '#contacto',
    active: true,
  },
]

function buildSlidesFromImages(images) {
  return images.map((img, index) => ({
    id: index + 1,
    image: img,
    title: 'JC Studios - Fotografía Profesional',
    subtitle: 'Capturamos tus mejores momentos.',
    ctaText: 'Descubre Nuestros Servicios',
    ctaLink: '#servicios',
    active: true,
  }))
}

export const useHeroStore = defineStore('hero', () => {
  const slides = ref(heroImages.length > 0 ? buildSlidesFromImages(heroImages) : defaultSlides)

  const activeSlides = computed(() => slides.value.filter((s) => s.active))

  function addSlide(slide) {
    slides.value.push({ id: Date.now(), ...slide, active: true })
  }

  function removeSlide(id) {
    slides.value = slides.value.filter((s) => s.id !== id)
  }

  function updateSlide(id, data) {
    const idx = slides.value.findIndex((s) => s.id === id)
    if (idx !== -1) slides.value[idx] = { ...slides.value[idx], ...data }
  }

  return { slides, activeSlides, addSlide, removeSlide, updateSlide }
})
