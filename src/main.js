import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { loadManifest } from './services/galleryLoader.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/styles/main.css'

// El manifiesto de fotos se lee del servidor ANTES de importar el resto de la
// app: serviceData y los stores resuelven portadas/galerias al importarse.
async function bootstrap() {
  await loadManifest()
  const [{ default: App }, { default: router }] = await Promise.all([
    import('./App.vue'),
    import('./router'),
  ])

  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount('#app')
}

bootstrap()
