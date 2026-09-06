import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { serviceData } from '@/services/serviceData.js'

export const useServicesStore = defineStore('services', () => {
  const services = ref(serviceData)
  const activeCategory = ref('eventos')

  const eventos = computed(() =>
    Object.entries(services.value)
      .filter(([_, s]) => s.category === 'evento')
      .map(([key, s]) => ({ key, ...s }))
  )

  const sesiones = computed(() =>
    Object.entries(services.value)
      .filter(([_, s]) => s.category === 'sesion')
      .map(([key, s]) => ({ key, ...s }))
  )

  const activeServices = computed(() =>
    activeCategory.value === 'eventos' ? eventos.value : sesiones.value
  )

  function getService(key) {
    return services.value[key] || null
  }

  function setCategory(cat) {
    activeCategory.value = cat
  }

  return { services, activeCategory, eventos, sesiones, activeServices, getService, setCategory }
})
