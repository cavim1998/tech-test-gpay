import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null
  }),
  actions: {
    login(token) {
      this.token = token
      this.user = jwtDecode(token)
      localStorage.setItem('sw_token', token)
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('sw_token')
    }
  }
})
