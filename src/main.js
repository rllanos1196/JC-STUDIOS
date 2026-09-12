import { createApp } from 'vue'import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/styles/main.css'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')

import { useThemeStore } from '@/stores/theme.js'
useThemeStore()
// force redeploy Fri Sep 11 22:48:08 -05 2026
