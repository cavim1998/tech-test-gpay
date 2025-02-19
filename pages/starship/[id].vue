<template>
  <div class="container my-5">
    <div v-if="loading" class="text-center">
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else-if="starship" class="starship-detail">
      <h1 class="text-center mb-4">{{ starship.name }}</h1>
      
      <div class="row">
        <div class="col-md-6">
          <img 
            :src="`https://picsum.photos/seed/${starship.name}/600/400`" 
            :alt="starship.name" 
            class="img-fluid rounded"
          >
        </div>
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item">
              <strong>Model:</strong> {{ starship.model }}
            </li>
            <li class="list-group-item">
              <strong>Cost:</strong> {{ formatCurrency(starship.cost_in_credits) }}
            </li>
            <li class="list-group-item">
              <strong>Length:</strong> {{ metersToFeet(starship.length) }} ft
            </li>
            <li class="list-group-item">
              <strong>Crew:</strong> {{ starship.crew }}
            </li>
            <li class="list-group-item">
              <strong>Manufacturer:</strong> {{ starship.manufacturer }}
            </li>
          </ul>
        </div>
      </div>

      <div class="text-center mt-4">
        <NuxtLink to="/starships" class="btn btn-outline-warning">
          <i class="bi bi-arrow-left me-2"></i>
          Back to Starships
        </NuxtLink>
      </div>
    </div>

    <div v-else class="text-center">
      <p class="text-danger">Starship not found!</p>
    </div>
  </div>
</template>

<script setup>
import { formatCurrency, metersToFeet } from '@/utils/helpers'

const route = useRoute()
const starshipId = ref(route.params.id)
const starship = ref(null)
const loading = ref(true)

const fetchStarship = async (id) => {
  try {
    loading.value = true
    const { data } = await useFetch(`https://swapi.dev/api/starships/${id}/`)
    starship.value = data.value
  } catch (error) {
    console.error('Error fetching starship:', error)
    starship.value = null
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchStarship(starshipId.value)
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/starship-detail.scss';
</style>