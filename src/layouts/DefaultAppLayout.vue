<template>
  <div>
    <TheAppbar />
    <TheSquare />
    <TheGrid />
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheSquare from '@/components/TheSquare.vue'
import TheGrid from '@/components/TheGrid.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheAppbar from '@/components/TheAppbar.vue'
</script>

<style scoped></style>
