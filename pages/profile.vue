<template>
  <div class="profile-page bg-dark text-light">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-12">
          <!-- Card Profil -->
          <div class="card bg-dark border border-secondary rounded-3 shadow-lg">
            <div class="card-body p-4">
              <div class="text-center mb-4">
                <i class="bi bi-person-circle fs-1 text-warning"></i>
                <h1 class="h3 mt-2 fw-bold">User Profile</h1>
              </div>

              <!-- Informasi Profil -->
              <div v-if="authStore.user" class="profile-info">
                <div class="mb-3">
                  <label class="form-label text-warning">Name:</label>
                  <p class="text-light mb-0">{{ authStore.user.name }}</p>
                </div>

                <div class="mb-3">
                  <label class="form-label text-warning">Member Since:</label>
                  <p class="text-light mb-0">{{ formatDate(authStore.user.iat) }}</p>
                </div>
              </div>

              <!-- Jika Belum Login -->
              <div v-else class="text-center">
                <p class="text-light opacity-75">Please login to view your profile.</p>
                <NuxtLink to="/login" class="btn btn-warning">
                  <i class="bi bi-box-arrow-in-right me-2"></i>
                  Go to Login
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.store'
import { formatDate } from '@/utils/helpers'

const authStore = useAuthStore()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/profile.scss';
</style>