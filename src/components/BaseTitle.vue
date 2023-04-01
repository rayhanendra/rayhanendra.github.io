<template>
  <div class="tw-flex tw-gap-6">
    <div class="tw-pb-6">
      <span v-if="number" class="tw-text-xl tw-font-mono tw-text-yellow-400">{{ number }}. </span>
      <span class="tw-font-bold tw-text-2xl tw-text-white">{{ title }}</span>
    </div>
    <div
      class="tw-translate-y-1/3 tw-border-t tw-border-gray-400 tw-border-opacity-10 tw-flex-grow"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  number: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped></style>
