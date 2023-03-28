<template>
  <BaseDialog :showDialog="showDialog" @close="closeDialog">
    <template #title>
      <div class="tw-flex tw-justify-between tw-items-center">
        <div class="tw-flex tw-flex-col tw-gap-1">
          <div class="tw-text-white tw-font-bold tw-text-md">
            {{ project.title }}
          </div>
          <div class="tw-flex tw-items-center tw-gap-2">
            <div class="tw-text-gray-400 tw-text-sm">
              {{ project.subtitle }}
            </div>
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="@/assets/icons/github.png" class="tw-h-5" />
            </a>
          </div>
        </div>
      </div>
    </template>
    <template #content>
      <div class="tw-grid tw-grid-cols-12 tw-gap-6">
        <div class="tw-col-span-7">
          <div class="tw-flex tw-justify-center tw-items-center">
            <img
              :src="project.image"
              alt="project"
              class="tw-w-full tw-h-[216px] tw-object-cover tw-object-center"
            />
          </div>
          <div
            v-for="(paragraph, index) in project.description"
            :key="index"
            class="tw-text-gray-400 tw-text-md tw-py-2"
          >
            {{ paragraph }}
          </div>
        </div>
        <div class="tw-col-span-5">
          <div class="tw-flex tw-flex-col tw-gap-4">
            <div v-for="(item, index) in project.process" :key="index">
              <img
                :src="item.image"
                alt="project"
                class="tw-w-fit tw-h-[216px] tw-object-cover tw-object-center"
              />
              <div class="tw-text-gray-400 tw-text-md tw-py-2">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseDialog from './BaseDialog.vue'

defineProps<{
  project: any
}>()

const showDialog = ref(false)

const openDialog = () => {
  showDialog.value = true
}

const closeDialog = () => {
  showDialog.value = false
}

defineExpose({
  openDialog,
  closeDialog
})
</script>

<style scoped></style>
