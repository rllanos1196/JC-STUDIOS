import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getAllPhotos } from '@/services/galleryLoader.js'

/**
 * El portfolio se arma solo con todas las fotos de public/img/gallery,
 * excluyendo hero y logos. `thumb` usa la version -min cuando existe.
 */
function titleFromKey(key) {
  return key
    .replace(/-/g, ' ')
    .replace(/(^|\s)\S/g, (c) => c.toUpperCase())
}

function buildImages() {
  return getAllPhotos().map((photo, index) => ({
    id: index + 1,
    src: photo.full,
    thumb: photo.thumb,
    title: titleFromKey(photo.key),
    folder: photo.folder,
    active: true,
  }))
}

export const usePortfolioStore = defineStore('portfolio', () => {
  const images = ref(buildImages())

  function getActiveImages() {
    return images.value.filter((img) => img.active)
  }

  function addImage(image) {
    images.value.push({
      id: Date.now(),
      ...image,
      active: true,
    })
  }

  function removeImage(id) {
    images.value = images.value.filter((img) => img.id !== id)
  }

  function toggleImage(id) {
    const img = images.value.find((i) => i.id === id)
    if (img) img.active = !img.active
  }

  function reorderImages(orderedIds) {
    const map = new Map(images.value.map((img) => [img.id, img]))
    images.value = orderedIds.map((id) => map.get(id)).filter(Boolean)
  }

  return { images, getActiveImages, addImage, removeImage, toggleImage, reorderImages }
})
