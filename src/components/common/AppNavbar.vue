<template>
  <nav class="navbar navbar-expand-lg fixed-top" :class="{ scrolled: isScrolled }">
    <div class="container">
      <router-link class="navbar-brand" to="/#inicio">
        <img src="/img/JcStudiosBlanco.png" alt="logo" class="logo-jc" />
      </router-link>
      <div class="d-flex align-items-center">
        <button class="theme-toggle" @click="themeStore.toggle" :title="themeStore.isDark ? 'Modo claro' : 'Modo oscuro'">
          <i :class="themeStore.isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="link in navLinks" :key="link.href">
            <a class="nav-link" :href="link.href" @click="closeMobileNav">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useThemeStore } from '@/stores/theme.js'

const themeStore = useThemeStore()
const isScrolled = ref(false)

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contáctanos' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 100
}

function closeMobileNav() {
  const collapse = document.getElementById('navbarNav')
  if (collapse?.classList.contains('show')) {
    const bsCollapse = bootstrap.Collapse.getInstance(collapse)
    bsCollapse?.hide()
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
