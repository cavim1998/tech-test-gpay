<template>
  <header class="bg-dark py-3">
    <div class="container">
      <nav class="navbar navbar-dark">
        <NuxtLink to="/" class="navbar-brand text-warning fs-3 fw-bold">
          <i class="bi bi-stars me-2"></i>
          Test Marketplace
        </NuxtLink>
        
        <ul class="navbar-nav flex-row gap-3">
          <li v-for="link in navLinks" :key="link.path" class="nav-item">
            <NuxtLink :to="link.path" class="nav-link text-light">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const navLinks = [
  { path: '/starships', label: 'Starships' },
  { path: '/profile', label: 'Profile' },
  { path: '/login', label: 'Login' }
]
</script>