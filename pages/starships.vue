<template>
  <div id="starships-list">
    <h1>Starships</h1>
    <ClientOnly>
      <LazyStarshipsList v-if="showList" />
    </ClientOnly>
  </div>
</template>

<script setup>
import LazyStarshipsList from '~/components/LazyStarshipsList.vue'

const showList = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      showList.value = true
    }
  })
  observer.observe(document.getElementById('starships-list'))
})
</script>