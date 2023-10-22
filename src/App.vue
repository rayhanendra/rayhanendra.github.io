<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const layout = defineAsyncComponent(() => import('./layouts/DefaultAppLayout.vue'))
</script>

<style scoped></style>
