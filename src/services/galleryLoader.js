const galleryModules = import.meta.glob('/public/img/gallery/**/*.{jpg,jpeg,png,webp}', { eager: true })

function getImagesFromFolder(path) {
  const prefix = '/public/img/gallery/'
  const images = []

  for (const key in galleryModules) {
    if (key.startsWith(prefix + path)) {
      const relativePath = key.replace('/public/img/', '/img/')
      images.push(relativePath)
    }
  }

  return images.sort()
}

export function getGalleryImages(category, service) {
  return getImagesFromFolder(`eventos/${service}/`) || getImagesFromFolder(`sesiones/${service}/`)
}

export function getEventosImages(service) {
  return getImagesFromFolder(`eventos/${service}/`)
}

export function getSesionesImages(service) {
  return getImagesFromFolder(`sesiones/${service}/`)
}

export function getHeroImages() {
  return getImagesFromFolder('hero/')
}

export function getAllGalleryImages() {
  const result = {}
  for (const key in galleryModules) {
    const relativePath = key.replace('/public/img/', '/img/')
    const parts = key.replace('/public/img/gallery/', '').split('/')
    if (parts.length >= 2) {
      const service = parts[1].replace(/\.(jpg|jpeg|png|webp)$/, '')
      if (!result[service]) result[service] = []
      result[service].push(relativePath)
    }
  }
  return result
}
