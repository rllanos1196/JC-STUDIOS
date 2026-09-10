#!/usr/bin/env node
/**
 * Valida la coherencia entre public/img/gallery y el catalogo de servicios.
 * Uso: npm run gallery:check
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const GALLERY = path.join(ROOT, 'public/img/gallery')
const SERVICE_DATA = path.join(ROOT, 'src/services/serviceData.js')
const IMG_RE = /\.(jpe?g|png|webp|avif|gif)$/i
const CATEGORY_DIRS = { evento: 'eventos', sesion: 'sesiones' }

const c = {
  red: (t) => `\x1b[31m${t}\x1b[0m`,
  yellow: (t) => `\x1b[33m${t}\x1b[0m`,
  green: (t) => `\x1b[32m${t}\x1b[0m`,
  dim: (t) => `\x1b[2m${t}\x1b[0m`,
  bold: (t) => `\x1b[1m${t}\x1b[0m`,
}

const errors = []
const warnings = []

function listImages(dir) {
  if (!fs.existsSync(dir)) return null
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && IMG_RE.test(e.name) && !e.name.startsWith('.'))
    .map((e) => e.name)
}

/** Extrae { key, category, folder } de serviceData.js sin ejecutarlo. */
function readServices() {
  const src = fs.readFileSync(SERVICE_DATA, 'utf8')
  const services = []
  const blockRe = /^\s{2}(\w+):\s*\{$/gm
  let m
  while ((m = blockRe.exec(src))) {
    const key = m[1]
    const rest = src.slice(m.index, m.index + 2000)
    const category = rest.match(/category:\s*'([^']+)'/)?.[1]
    const folder = rest.match(/folder:\s*'([^']+)'/)?.[1] || key
    if (category) services.push({ key, category, folder })
  }
  return services
}

console.log(c.bold('\n  Verificacion de la galeria\n'))

// 1. Cada servicio tiene su carpeta con al menos una imagen
const services = readServices()
const used = new Set()

for (const { key, category, folder } of services) {
  const dir = CATEGORY_DIRS[category]
  if (!dir) {
    errors.push(`Servicio "${key}": categoria desconocida "${category}"`)
    continue
  }
  const rel = `${dir}/${folder}`
  used.add(rel)
  const files = listImages(path.join(GALLERY, dir, folder))
  if (files === null) {
    errors.push(`Servicio "${key}": falta la carpeta public/img/gallery/${rel}/`)
  } else if (files.length === 0) {
    errors.push(`Servicio "${key}": la carpeta ${rel}/ esta vacia`)
  } else {
    console.log(`  ${c.green('OK')}  ${key.padEnd(14)} ${c.dim(rel + '/')} ${files.length} archivos`)
  }
}

// 2. Recorrido de todas las carpetas: huerfanas, nombres y pares -min
function walk(abs, rel) {
  for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue
    const childRel = rel ? `${rel}/${e.name}` : e.name
    if (e.isDirectory()) {
      walk(path.join(abs, e.name), childRel)
      continue
    }
    if (!IMG_RE.test(e.name)) continue
    if (/[A-Z\s_]|[^\x00-\x7F]/.test(e.name)) {
      warnings.push(`Nombre no normalizado: ${childRel} (usa minusculas, sin espacios ni tildes)`)
    }
  }
}
walk(GALLERY, '')

const leafDirs = []
;(function collect(abs, rel) {
  const entries = fs.readdirSync(abs, { withFileTypes: true })
  const hasImages = entries.some((e) => e.isFile() && IMG_RE.test(e.name))
  if (hasImages && rel) leafDirs.push(rel)
  for (const e of entries) {
    if (e.isDirectory() && !e.name.startsWith('.')) collect(path.join(abs, e.name), rel ? `${rel}/${e.name}` : e.name)
  }
})(GALLERY, '')

for (const rel of leafDirs) {
  if (rel === 'hero' || rel === 'logos' || used.has(rel)) continue
  warnings.push(`Carpeta sin servicio que la use: ${rel}/`)
}

// 3. Fotos cuyo nombre no corresponde a su carpeta (posible contenido cruzado)
const folderNames = leafDirs.map((r) => r.split('/').pop())
for (const rel of leafDirs) {
  if (rel === 'hero' || rel === 'logos') continue
  const own = rel.split('/').pop()
  for (const file of listImages(path.join(GALLERY, rel)) || []) {
    const stem = file.replace(/\.[^.]+$/, '').replace(/-min$/, '')
    const foreign = folderNames.find((n) => n !== own && stem.includes(n))
    if (foreign) warnings.push(`Posible contenido cruzado: ${rel}/${file} menciona "${foreign}"`)
  }
}

// 4. hero y logos deben existir
for (const required of ['hero', 'logos']) {
  const files = listImages(path.join(GALLERY, required))
  if (!files || files.length === 0) errors.push(`Falta contenido en public/img/gallery/${required}/`)
}

if (warnings.length) {
  console.log(c.bold('\n  Avisos'))
  warnings.forEach((w) => console.log(`  ${c.yellow('!')}  ${w}`))
}

if (errors.length) {
  console.log(c.bold('\n  Errores'))
  errors.forEach((e) => console.log(`  ${c.red('X')}  ${e}`))
  console.log(c.red(`\n  ${errors.length} error(es).\n`))
  process.exit(1)
}

console.log(c.green(`\n  Todo correcto. ${services.length} servicios, ${leafDirs.length} carpetas.\n`))
