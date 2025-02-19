<template>
  <div class="layout">
    <AppHeader />
    <main class="layout__content">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/default.scss';
</style>