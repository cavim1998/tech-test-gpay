<template>
  <div 
    class="starship-card card bg-dark text-light border border-secondary rounded-3 overflow-hidden position-relative transition-all hover-transform"
    @click="viewDetails"
  >
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-warning bg-opacity-10 opacity-0 hover-opacity"></div>

    <div class="card-body p-4 position-relative z-1">
      <h3 class="card-title text-warning fw-bold mb-3">
        {{ starship.name }}
      </h3>

      <ul class="list-unstyled mb-0">
        <li class="mb-2 d-flex align-items-center gap-2">
          <i class="bi bi-rocket fs-5 text-warning"></i>
          <span>{{ starship.model }}</span>
        </li>
        <li class="mb-2 d-flex align-items-center gap-2">
          <i class="bi bi-cash-coin fs-5 text-warning"></i>
          <span>{{ formatCurrency(starship.cost_in_credits) }}</span>
        </li>
        <li class="d-flex align-items-center gap-2">
          <i class="bi bi-rulers fs-5 text-warning"></i>
          <span>{{ metersToFeet(starship.length) }} ft</span>
        </li>
      </ul>
    </div>

    <div class="card-footer bg-transparent border-top border-secondary p-3 position-relative z-1">
      <button 
        class="btn btn-outline-warning w-100 d-flex align-items-center justify-content-center gap-2"
        @click.stop="viewDetails"
      >
        <span>View Details</span>
        <i class="bi bi-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { formatCurrency, metersToFeet } from '@/utils/helpers'

const props = defineProps({
  starship: Object
})

const viewDetails = () => {
  const starshipId = props.starship.url.split('/').filter(Boolean).pop()
  navigateTo(`/starship/${starshipId}`)
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/starshipcard.scss';
</style>