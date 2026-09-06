<template>
  <header class="admin-header">
    <div>
      <h5 class="mb-0">JC Studios Admin</h5>
    </div>
    <div class="d-flex align-items-center gap-3">
      <span class="header-date">{{ currentDate }}</span>
      <button class="theme-toggle-admin" @click="themeStore.toggle" :title="themeStore.isDark ? 'Modo claro' : 'Modo oscuro'">
        <i :class="themeStore.isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </button>
      <div class="dropdown">
        <button class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
          <i class="fas fa-user-circle me-2"></i>Admin
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><router-link to="/" class="dropdown-item"><i class="fas fa-globe me-2"></i>Ver Sitio</router-link></li>
          <li><hr class="dropdown-divider" /></li>
          <li><button class="dropdown-item text-danger" @click="handleLogout"><i class="fas fa-sign-out-alt me-2"></i>Salir</button></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import { useThemeStore } from '@/stores/theme.js'

const router = useRouter()
const authStore = useAuthStore()
const themeStore = useThemeStore()

const currentDate = computed(() => {
  return new Date().toLocaleDateString('es-PE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})

function handleLogout() {
  authStore.logout()
  router.push({ name: 'admin-login' })
}
</script>

<style scoped>
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--bg-card);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  color: var(--text-primary);
  transition: background 0.3s ease, color 0.3s ease;
}

.header-date {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.theme-toggle-admin {
  background: var(--bg-tertiary);
  border: 2px solid var(--border-color);
  color: var(--text-primary);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.theme-toggle-admin:hover {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
  transform: rotate(20deg);
}
</style>
