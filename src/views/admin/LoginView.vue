<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <div class="text-center mb-4">
          <img :src="logo" alt="JC Studios" class="login-logo" />
          <h2 class="login-title">Panel de Administración</h2>
        </div>

        <div v-if="error" class="alert alert-danger">{{ error }}</div>

        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Contraseña</label>
            <input v-model="password" type="password" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-primary w-100" :disabled="loading">
            <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
            {{ loading ? 'Ingresando...' : 'Iniciar Sesión' }}
          </button>
        </form>

        <div class="text-center mt-3">
          <button class="btn btn-link login-theme-toggle" @click="themeStore.toggle">
            <i :class="themeStore.isDark ? 'fas fa-sun me-1' : 'fas fa-moon me-1'"></i>
            {{ themeStore.isDark ? 'Modo claro' : 'Modo oscuro' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import { useThemeStore } from '@/stores/theme.js'
import { getLogo } from '@/services/galleryLoader.js'

const logo = getLogo('jcstudios')

const router = useRouter()
const authStore = useAuthStore()
const themeStore = useThemeStore()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

async function handleLogin() {
  loading.value = true
  error.value = ''

  const result = await authStore.login(email.value, password.value)

  if (result.success) {
    router.push({ name: 'admin-dashboard' })
  } else {
    error.value = result.error
  }

  loading.value = false
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #233559, #e30512);
}

.login-card {
  background: var(--bg-card);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 420px;
  transition: background 0.3s ease;
}

.login-logo {
  width: 120px;
  height: auto;
}

.login-title {
  color: var(--text-primary);
}

.form-label {
  color: var(--text-secondary);
}

.form-control {
  background: var(--input-bg);
  border-color: var(--border-color);
  color: var(--text-primary);
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

.form-control:focus {
  background: var(--input-bg);
  color: var(--text-primary);
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.2rem rgba(227, 5, 18, 0.25);
}

.login-theme-toggle {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.85rem;
}

.login-theme-toggle:hover {
  color: var(--primary-color);
}
</style>
