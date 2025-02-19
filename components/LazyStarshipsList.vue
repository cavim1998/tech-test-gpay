<template>
  <div class="starships-list">
    <div v-if="loading" class="loading">Loading starships...</div>
    
    <div v-else class="starships-grid">
      <StarshipCard
        v-for="starship in starships"
        :key="starship.url"
        :starship="starship"
        @click="navigateToStarship(starship)"
      />
    </div>
  </div>
</template>

<script setup>
const starships = ref([])
const loading = ref(true)

const { fetchStarships } = useSwapi()

onMounted(async () => {
  try {
    starships.value = await fetchStarships()
  } catch (error) {
    console.error('Error fetching starships:', error)
  } finally {
    loading.value = false
  }
})

const navigateToStarship = (starship) => {
  const starshipId = starship.url.split('/').filter(Boolean).pop()
  navigateTo(`/starship/${starshipId}`)
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/lazy-starship-list.scss';
</style>