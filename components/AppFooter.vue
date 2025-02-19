<template>
  <footer class="bg-dark text-light py-5 mt-5">
    <div class="container">
      <div class="row g-4">
        <!-- Bagian Tentang Kami -->
        <div class="col-md-4">
          <h5 class="text-warning mb-3">
            <i class="bi bi-stars me-2"></i>
            Test Marketplace
          </h5>
          <p class="text-light opacity-75">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-md-2">
          <h5 class="text-warning mb-3">Quick Links</h5>
          <ul class="list-unstyled">
            <li v-for="link in filteredNavLinks" :key="link.path" class="mb-2">
              <NuxtLink :to="link.path" class="text-light text-decoration-none hover-warning">
                <i class="bi me-2" :class="link.icon"></i>
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Kontak Kami -->
        <div class="col-md-3">
          <h5 class="text-warning mb-3">Contact Us</h5>
          <ul class="list-unstyled text-light opacity-75">
            <li class="mb-2">
              <i class="bi bi-envelope me-2"></i>
              abc@mail.id
            </li>
            <li class="mb-2">
              <i class="bi bi-telephone me-2"></i>
              +62 999-123-333
            </li>
            <li>
              <i class="bi bi-geo-alt me-2"></i>
              Indonesia
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class="col-md-3">
          <h5 class="text-warning mb-3">Follow Us</h5>
          <div class="d-flex gap-3">
            <a href="#" class="text-light hover-warning">
              <i class="bi bi-facebook fs-5"></i>
            </a>
            <a href="#" class="text-light hover-warning">
              <i class="bi bi-twitter fs-5"></i>
            </a>
            <a href="#" class="text-light hover-warning">
              <i class="bi bi-instagram fs-5"></i>
            </a>
            <a href="#" class="text-light hover-warning">
              <i class="bi bi-youtube fs-5"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-top border-secondary pt-4 mt-4 text-center text-light opacity-75">
        &copy; {{ moment().year() }} Test Marketplace. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.store'
import moment from 'moment'

const navLinks = ref([
  { path: '/starships', label: 'Starships', icon: 'bi-rocket' },
  { path: '/profile', label: 'Profile', icon: 'bi-person', requiresAuth: true },
  { path: '/login', label: 'Login', icon: 'bi-box-arrow-in-right', requiresAuth: false }
])

const authStore = useAuthStore()

// Filter navigasi berdasarkan status login
const filteredNavLinks = computed(() => {
  return navLinks.value.filter(link => {
    if (link.requiresAuth === undefined) return true
    return link.requiresAuth ? authStore.token : !authStore.token
  })
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/appfooter.scss';
</style>