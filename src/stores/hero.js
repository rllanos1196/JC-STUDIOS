import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getHeroImages } from '@/services/galleryLoader.js'

/**
 * Las slides del hero salen de public/img/gallery/hero/.
 * Los textos rotan sobre las imagenes que haya en la carpeta, asi que agregar
 * o quitar una foto no requiere tocar codigo.
 */
const copy = [
  {
    title: 'JC Studios - Fotografía Profesional',
    subtitle: 'Capturamos tus mejores momentos.',
    ctaText: 'Descubre Nuestros Servicios',
    ctaLink: '#servicios',
  },
  {
    title: 'Arte Visual que Cuenta Historias',
    subtitle: 'La magia del momento capturada para siempre.',
    ctaText: 'Ver Nuestros Servicios',
    ctaLink: '#servicios',
  },
  {
    title: 'Profesionalismo y Creatividad',
    subtitle: 'Transformamos tus celebraciones en recuerdos inolvidables.',
    ctaText: 'Contáctanos Ahora',
    ctaLink: '#contacto',
  },
]

function buildSlidesFromImages(images) {
  return images.map((img, index) => ({
    id: index + 1,
    image: img,
    ...copy[index % copy.length],
    active: true,
  }))
}

export const useHeroStore = defineStore('hero', () => {
  const slides = ref(buildSlidesFromImages(getHeroImages()))

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
