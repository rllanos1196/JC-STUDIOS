import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePortfolioStore = defineStore('portfolio', () => {
  const images = ref([
    { id: 1, src: '/img/trabajo1.jpg', thumb: '/img/trabajo1_min.jpg', title: 'Trabajo 1', active: true },
    { id: 2, src: '/img/trabajo2.jpg', thumb: '/img/trabajo2_min.jpg', title: 'Trabajo 2', active: true },
    { id: 3, src: '/img/trabajo3.jpg', thumb: '/img/trabajo3_min.jpg', title: 'Trabajo 3', active: true },
    { id: 4, src: '/img/trabajo4.jpg', thumb: '/img/trabajo4_min.jpg', title: 'Trabajo 4', active: true },
    { id: 5, src: '/img/trabajo5.jpg', thumb: '/img/trabajo5_min.jpg', title: 'Trabajo 5', active: true },
    { id: 6, src: '/img/trabajo6.jpg', thumb: '/img/trabajo6_min.jpg', title: 'Trabajo 6', active: true },
    { id: 7, src: '/img/trabajo7.jpg', thumb: '/img/trabajo7_min.jpg', title: 'Trabajo 7', active: true },
    { id: 8, src: '/img/trabajo8.jpg', thumb: '/img/trabajo8_min.jpg', title: 'Trabajo 8', active: true },
    { id: 9, src: '/img/trabajo9.jpg', thumb: '/img/trabajo9_min.jpg', title: 'Trabajo 9', active: true },
    { id: 10, src: '/img/trabajo10.jpg', thumb: '/img/trabajo10_min.jpg', title: 'Trabajo 10', active: true },
    { id: 11, src: '/img/trabajo11.jpg', thumb: '/img/trabajo11_min.jpg', title: 'Trabajo 11', active: true },
    { id: 12, src: '/img/trabajo12.jpg', thumb: '/img/trabajo12_min.jpg', title: 'Trabajo 12', active: true },
  ])

  const activeImages = ref(null)

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
