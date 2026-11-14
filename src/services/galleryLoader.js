/**
 * galleryLoader
 * ----------------------------------------------------------------------------
 * Unica fuente de verdad para las imagenes del sitio.
 *
 * Las fotos viven en public/img/gallery/<categoria>/<servicio>/ y se descubren
 * solas: no hay rutas hardcodeadas en ningun lado. Para agregar fotos a un
 * servicio basta con copiarlas en su carpeta.
 *
 * Convenciones de nombres:
 *   foto.jpg       -> imagen a tamano completo (lightbox)
 *   foto-min.jpg   -> miniatura de esa misma foto (grilla / portada)
 * Si solo existe una de las dos, se usa para ambos casos.
 *
 * Portada de cada carpeta: se elige la primera foto segun prioridad
 *   1. el nombre coincide con el de la carpeta   (bodas/bodas.jpg)
 *   2. el nombre empieza por portada/principal/cover/hero
 *   3. orden alfanumerico
 */
import manifest from 'virtual:gallery'

const BASE = import.meta.env.BASE_URL || '/'
const COVER_HINT = /^(portada|principal|cover|hero|main)/i
const MIN_SUFFIX = /-min$/i

function buildUrl(folder, file) {
  const parts = `${BASE}/${manifest.base}/${folder}/${file}`.split('/').filter(Boolean)
  return '/' + parts.map((p) => encodeURIComponent(p)).join('/')
}

function stemOf(file) {
  return file.replace(/\.[^.]+$/, '')
}

function folderName(folder) {
  const parts = folder.split('/')
  return parts[parts.length - 1] || ''
}

function matchesFolder(stem, folder) {
  const name = folderName(folder)
  if (!name) return false
  return stem === name || name.startsWith(stem) || stem.includes(name)
}

function priority(stem, folder) {
  if (matchesFolder(stem, folder)) return 0
  if (COVER_HINT.test(stem)) return 1
  return 2
}

/** Agrupa los archivos de una carpeta en fotos { full, thumb }. */
function buildPhotos(folder) {
  const files = manifest.folders[folder]
  if (!files || files.length === 0) return []

  const groups = new Map()
  for (const file of files) {
    const stem = stemOf(file)
    const key = stem.replace(MIN_SUFFIX, '')
    if (!groups.has(key)) groups.set(key, { key, full: null, thumb: null })
    const g = groups.get(key)
    if (MIN_SUFFIX.test(stem)) g.thumb = file
    else g.full = file
  }

  return [...groups.values()]
    .map((g) => {
      const full = g.full || g.thumb
      const thumb = g.thumb || g.full
      return {
        key: g.key,
        full: buildUrl(folder, full),
        thumb: buildUrl(folder, thumb),
      }
    })
    .sort((a, b) => {
      const pa = priority(a.key, folder)
      const pb = priority(b.key, folder)
      if (pa !== pb) return pa - pb
      return a.key.localeCompare(b.key, 'es', { numeric: true })
    })
}

const photoCache = new Map()

/** Fotos de una carpeta, como objetos { key, full, thumb }. */
export function getPhotos(folder) {
  if (!photoCache.has(folder)) photoCache.set(folder, buildPhotos(folder))
  return photoCache.get(folder)
}

/** Portada de una carpeta: { full, thumb } o null si esta vacia. */
export function getCover(folder) {
  return getPhotos(folder)[0] || null
}

/** Lista de carpetas disponibles bajo una categoria (ej. 'eventos'). */
export function getFolders(category) {
  const prefix = category ? `${category}/` : ''
  return Object.keys(manifest.folders)
    .filter((f) => f.startsWith(prefix) && f !== category)
    .map((f) => f.slice(prefix.length))
    .filter((f) => f && !f.includes('/'))
    .sort()
}

export function getServicePhotos(category, folder) {
  return getPhotos(`${category}/${folder}`)
}

export function getServiceCover(category, folder) {
  return getCover(`${category}/${folder}`)
}

export function getHeroImages() {
  return getPhotos('hero').map((p) => p.full)
}

/**
 * Detecta imagenes del hero en tiempo de ejecucion (runtime).
 * Util cuando se suben fotos nuevas a la carpeta despues del build/deploy.
 * Sondea nombres secuenciales (Principal, Principal-2, ..., Principal-N) y
 * extensiones comunes. Devuelve la lista combinada con las del manifest.
 */
export async function getHeroImagesRuntime() {
  const base = import.meta.env.BASE_URL || '/'
  const folder = 'img/gallery/hero/'
  const existing = new Set(getHeroImages())
  const result = [...existing]
  const extensions = ['webp', 'jpg', 'jpeg', 'png']

  // Detectar el patron base a partir de los nombres existentes
  // (ej. "Principal", "Principal-2", "Principal-3", ...)
  const baseNames = new Set()
  for (const url of existing) {
    const file = url.split('/').pop() || ''
    const stem = file.replace(/\.[^.]+$/, '')
    // Extraer prefijo: "Principal-2" -> "Principal"
    const prefix = stem.replace(/-\d+$/, '')
    baseNames.add(prefix)
  }
  if (baseNames.size === 0) baseNames.add('Principal')

  const tryLoad = (url) =>
    new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = url
    })

  // Para cada prefijo, sondear hasta 20 indices consecutivos
  for (const prefix of baseNames) {
    for (let i = 1; i <= 30; i++) {
      const suffix = i === 1 ? '' : `-${i}`
      let found = false
      for (const ext of extensions) {
        const url = `/${[base, folder, `${prefix}${suffix}.${ext}`].join('').replace(/\/+/g, '/')}`.replace(/^\/\//, '/')
        if (existing.has(url)) { found = true; break }
        // normalizar
        const normalized = url.startsWith('/') ? url : '/' + url
        if (existing.has(normalized)) { found = true; break }
        const ok = await tryLoad(normalized)
        if (ok) {
          if (!existing.has(normalized)) {
            existing.add(normalized)
            result.push(normalized)
          }
          found = true
          break
        }
      }
      // Si no se encontro este indice, parar (asumimos secuencia continua)
      if (!found && i > 1) break
    }
  }

  return [...new Set(result)]
}

/**
 * Logo por nombre. Busca coincidencia exacta primero para que nombres que son
 * prefijo de otros (jcstudios vs jcstudiosblanco) no se confundan entre si.
 */
export function getLogo(name = '') {
  const logos = getPhotos('logos')
  if (logos.length === 0) return ''
  const needle = name.toLowerCase()
  const hit =
    logos.find((l) => l.key.toLowerCase() === needle) ||
    logos.find((l) => l.key.toLowerCase().startsWith(needle)) ||
    logos.find((l) => l.key.toLowerCase().includes(needle))
  return (hit || logos[0]).full
}

/** Todas las fotos del sitio, aplanadas. Util para el portfolio. */
export function getAllPhotos({ exclude = ['hero', 'logos'] } = {}) {
  return Object.keys(manifest.folders)
    .filter((f) => !exclude.some((e) => f === e || f.startsWith(`${e}/`)))
    .flatMap((f) => getPhotos(f).map((p) => ({ ...p, folder: f })))
}

/* --- Compatibilidad con la API anterior (arrays de URLs) ------------------ */
export function getEventosImages(service) {
  return getServicePhotos('eventos', service).map((p) => p.full)
}

export function getSesionesImages(service) {
  return getServicePhotos('sesiones', service).map((p) => p.full)
}

export function getGalleryImages(category, service) {
  const photos = getServicePhotos(category, service)
  return photos.length > 0 ? photos.map((p) => p.full) : []
}

export function getAllGalleryImages() {
  const result = {}
  for (const photo of getAllPhotos()) {
    const service = folderName(photo.folder)
    if (!result[service]) result[service] = []
    result[service].push(photo.full)
  }
  return result
}

export default manifest
