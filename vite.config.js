import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import fs from 'node:fs'
import path from 'node:path'

/**
 * Plugin: virtual:gallery
 * ----------------------------------------------------------------------------
 * Escanea public/img/gallery en tiempo de arranque y expone un manifiesto con
 * la estructura de carpetas y sus archivos. Las imagenes NO se importan como
 * modulos (siguen siendo assets estaticos de /public), por lo que no se
 * duplican en el bundle. Con HMR: al agregar o quitar una foto la pagina se
 * recarga sola sin reiniciar el dev server.
 */
const GALLERY_DIR = 'public/img/gallery'
const IMG_RE = /\.(jpe?g|png|webp|avif|gif)$/i
const VIRTUAL_ID = 'virtual:gallery'
const RESOLVED_ID = '\0' + VIRTUAL_ID

function scanGallery(root) {
  const dir = path.resolve(root, GALLERY_DIR)
  const folders = {}

  function walk(abs, rel) {
    let entries
    try {
      entries = fs.readdirSync(abs, { withFileTypes: true })
    } catch {
      return
    }
    const files = entries
      .filter((e) => e.isFile() && IMG_RE.test(e.name) && !e.name.startsWith('.'))
      .map((e) => e.name)
      .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }))

    if (files.length > 0) folders[rel] = files

    for (const e of entries) {
      if (e.isDirectory() && !e.name.startsWith('.')) {
        walk(path.join(abs, e.name), rel ? `${rel}/${e.name}` : e.name)
      }
    }
  }

  walk(dir, '')
  return { base: 'img/gallery/', folders }
}

function galleryPlugin() {
  let root = process.cwd()
  return {
    name: 'jc-gallery-manifest',
    configResolved(cfg) {
      root = cfg.root
    },
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },
    load(id) {
      if (id !== RESOLVED_ID) return
      return `export default ${JSON.stringify(scanGallery(root))}`
    },
    configureServer(server) {
      const dir = path.resolve(root, GALLERY_DIR)
      server.watcher.add(dir)
      const invalidate = (file) => {
        if (!file.startsWith(dir) || !IMG_RE.test(file)) return
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (mod) server.moduleGraph.invalidateModule(mod)
        server.ws.send({ type: 'full-reload' })
      }
      server.watcher.on('add', invalidate)
      server.watcher.on('unlink', invalidate)
      server.watcher.on('addDir', () => server.ws.send({ type: 'full-reload' }))
    },
  }
}

export default defineConfig({
  base: '/JC-STUDIOS/',
  plugins: [vue(), galleryPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
