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
 *   foto-min.jpg   -> miniatura manual (opcional) de esa misma foto
 * Sin -min, en el servidor api/img.php genera solo la miniatura (600 px) y la
 * version del visor (2000 px). Los originales nunca se descargan enteros.
 *
 * Portada de cada carpeta: se elige la primera foto segun prioridad
 *   1. el nombre coincide con el de la carpeta   (bodas/bodas.jpg)
 *   2. el nombre empieza por portada/principal/cover/hero
 *   3. orden alfanumerico
 */
import buildManifest from 'virtual:gallery'

const BASE = import.meta.env.BASE_URL || '/'
const COVER_HINT = /^(portada|principal|cover|hero|main)/i
const MIN_SUFFIX = /-min$/i

/**
 * Manifiesto activo: { base, folders: { 'eventos/bodas': [[archivo, mtime], ...] } }
 * Arranca con el del build (dev / respaldo) y loadManifest() lo reemplaza por
 * el que genera api/galeria.php en el servidor, que refleja lo subido por FTP.
 */
let manifest = buildManifest
const photoCache = new Map()

/** Pide el manifiesto vivo al servidor. Si falla (dev sin PHP), queda el del build. */
export async function loadManifest() {
  try {
    const res = await fetch(`${BASE}api/galeria.php`, { cache: 'no-store' })
    const ct = res.headers.get('content-type') || ''
    if (!res.ok || !ct.includes('json')) return
    const data = await res.json()
    if (data && data.folders) {
      manifest = data
      photoCache.clear()
    }
  } catch (_) {
    /* sin servidor PHP: se usa el manifiesto del build */
  }
}

function fileName(entry) {
  return Array.isArray(entry) ? entry[0] : entry
}

/** Anchos que genera api/img.php: miniatura (grilla/modal) y visor (lightbox/hero). */
export const THUMB_W = 600
export const FULL_W = 2000
/** Carpetas que se sirven siempre en original (logos PNG con transparencia). */
const NO_RESIZE = ['logos']

/** URL del archivo original, versionada por fecha: cambia solo si cambia el archivo. */
function buildUrl(folder, entry) {
  const [file, mtime] = Array.isArray(entry) ? entry : [entry, 0]
  const parts = `${BASE}/${manifest.base}/${folder}/${file}`.split('/').filter(Boolean)
  const url = '/' + parts.map((p) => encodeURIComponent(p)).join('/')
  return mtime ? `${url}?v=${mtime}` : url
}

/**
 * URL reducida a `width` px via api/img.php (solo con el manifiesto del
 * servidor; en dev no hay PHP y se usa el original).
 */
function sizedUrl(folder, entry, width) {
  const canResize = manifest.resize && !NO_RESIZE.some((n) => folder === n || folder.startsWith(`${n}/`))
  if (!canResize) return buildUrl(folder, entry)
  const [file, mtime] = Array.isArray(entry) ? entry : [entry, 0]
  const params = new URLSearchParams({ f: `${folder}/${file}`, w: String(width), v: String(mtime) })
  return `${BASE}api/img.php?${params}`
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
  for (const entry of files) {
    const stem = stemOf(fileName(entry))
    const key = stem.replace(MIN_SUFFIX, '')
    if (!groups.has(key)) groups.set(key, { key, full: null, thumb: null })
    const g = groups.get(key)
    if (MIN_SUFFIX.test(stem)) g.thumb = entry
    else g.full = entry
  }

  return [...groups.values()]
    .map((g) => {
      const full = g.full || g.thumb
      return {
        key: g.key,
        full: sizedUrl(folder, full, FULL_W),
        // Un -min subido a mano se respeta tal cual; si no, se genera.
        thumb: g.thumb ? buildUrl(folder, g.thumb) : sizedUrl(folder, full, THUMB_W),
        original: buildUrl(folder, full),
      }
    })
    .sort((a, b) => {
      const pa = priority(a.key, folder)
      const pb = priority(b.key, folder)
      if (pa !== pb) return pa - pb
      return a.key.localeCompare(b.key, 'es', { numeric: true })
    })
}

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
  return getPhotos('hero').map((p) => p.full).slice(0, 5)
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

export default { get manifest() { return manifest } }
