<template>
  <section class="hero-section position-relative overflow-hidden">
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75"></div>
    <div class="container position-relative z-1 text-center text-white py-5">
      <h1 class="display-1 fw-bold mb-4">
        Welcome to the Galaxy
      </h1>
      <p class="lead mb-5">
        Explore the ultimate collection of starships from across the Star Wars universe
      </p>
      <NuxtLink 
        to="/starships"
        class="btn btn-warning btn-lg px-5 py-3 fw-bold"
      >
        Browse Starships
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/hero-section.scss';
</style>