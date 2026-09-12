import { createRouter, createWebHistory } from 'vue-router'

import ClienteLayout from '@/layouts/ClienteLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

import HomeView from '@/views/cliente/HomeView.vue'
import LoginView from '@/views/admin/LoginView.vue'
import DashboardView from '@/views/admin/DashboardView.vue'
import MediaView from '@/views/admin/MediaView.vue'
import ServicesView from '@/views/admin/ServicesView.vue'

const routes = [
  {
    path: '/',
    component: ClienteLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
    ],
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: LoginView,
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'admin-dashboard',
        component: DashboardView,
      },
      {
        path: 'media',
        name: 'admin-media',
        component: MediaView,
      },
      {
        path: 'services',
        name: 'admin-services',
        component: ServicesView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('jc_admin_token')

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'admin-login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
