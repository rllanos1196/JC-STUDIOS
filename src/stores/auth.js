import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('jc_admin_token') || null)

  const isAuthenticated = computed(() => !!token.value)

  async function login(email, password) {
    // TODO: Conectar con backend/Supabase
    if (email === 'admin@jcstudios.com' && password === 'admin123') {
      const fakeToken = 'jc_token_' + Date.now()
      token.value = fakeToken
      user.value = { email, name: 'JC Admin', role: 'admin' }
      localStorage.setItem('jc_admin_token', fakeToken)
      return { success: true }
    }
    return { success: false, error: 'Credenciales incorrectas' }
  }

  function logout() {
    token.value = null
    user.value = null
    localStorage.removeItem('jc_admin_token')
  }

  return { user, token, isAuthenticated, login, logout }
})
