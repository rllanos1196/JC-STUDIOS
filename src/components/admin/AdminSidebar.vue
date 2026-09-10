<template>
  <aside class="admin-sidebar">
    <div class="sidebar-header">
      <img :src="logo" alt="JC Studios" class="sidebar-logo" />
    </div>

    <nav class="sidebar-nav">
      <router-link to="/admin" class="sidebar-link" active-class="active">
        <i class="fas fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </router-link>
      <router-link to="/admin/media" class="sidebar-link" active-class="active">
        <i class="fas fa-photo-film"></i>
        <span>Fotos y Videos</span>
      </router-link>
      <router-link to="/admin/services" class="sidebar-link" active-class="active">
        <i class="fas fa-concierge-bell"></i>
        <span>Servicios</span>
      </router-link>

      <div class="sidebar-divider"></div>

      <a href="/" class="sidebar-link">
        <i class="fas fa-globe"></i>
        <span>Ver Sitio Web</span>
      </a>
      <button class="sidebar-link logout-btn" @click="handleLogout">
        <i class="fas fa-sign-out-alt"></i>
        <span>Cerrar Sesión</span>
      </button>
    </nav>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import { getLogo } from '@/services/galleryLoader.js'

const logo = getLogo('blanco')

const router = useRouter()
const authStore = useAuthStore()

function handleLogout() {
  authStore.logout()
  router.push({ name: 'admin-login' })
}
</script>

<style scoped>
.admin-sidebar {
  width: 260px;
  background: linear-gradient(180deg, #233559, #1a2744);
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.sidebar-header {
  padding: 1.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-logo {
  width: 140px;
  height: auto;
}

.sidebar-nav {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.2s;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  font-size: 0.95rem;
}

.sidebar-link:hover,
.sidebar-link.active {
  color: white;
  background: rgba(227, 5, 18, 0.3);
  border-left: 3px solid #e30512;
}

.sidebar-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 1.5rem;
}

.logout-btn {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
}

.logout-btn:hover {
  color: #ff6b6b;
  background: rgba(255, 0, 0, 0.1);
}
</style>
