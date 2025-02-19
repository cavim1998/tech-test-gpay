<template>
  <div class="login-page d-flex align-items-center justify-content-center bg-dark">
    <div class="card bg-dark text-light border border-secondary rounded-3 shadow-lg" style="width: 100%; max-width: 400px;">
      <div class="card-body p-4">
        <!-- Logo atau Judul -->
        <div class="text-center mb-4">
          <i class="bi bi-stars fs-1 text-warning"></i>
          <h1 class="h3 mt-2 fw-bold">Login to Test Marketplace</h1>
          <p class="text-light opacity-75">Welcome back! Please enter your credentials.</p>
        </div>

        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              class="form-control bg-dark text-light border-secondary"
              id="username"
              v-model="username"
              placeholder="Enter your username"
              required
            >
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control bg-dark text-light border-secondary"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            >
          </div>

          <button type="submit" class="btn btn-warning w-100 fw-bold">
            <i class="bi bi-box-arrow-in-right me-2"></i>
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const username = ref('')
const password = ref('')
const authStore = useAuthStore()

const handleLogin = () => {
  // Dummy JWT token for demonstration
  const dummyToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  
  authStore.login(dummyToken)
  navigateTo('/profile')
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/login.scss';
</style>