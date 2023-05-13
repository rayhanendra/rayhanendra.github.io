<template>
  <section
    id="projects"
    class="tw-container tw-mx-auto tw-w-full tw-max-w-3xl tw-py-28 tw-mt-96 sm:tw-mt-0 tw-px-4"
  >
    <BaseTitle title="Projects" number="03" />
    <div
      class="tw-flex tw-justify-between tw-gap-4 tw-border tw-border-gray-400 tw-border-opacity-10 tw-text-white tw-font-bold tw-text-lg tw-w-full tw-overflow-x-auto"
    >
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = tab"
        class="tw-px-6 tw-py-2 tw-cursor-pointer tw-transition tw-duration-300 tw-ease-in-out tw-transform hover:tw-text-yellow-400 tw-min-w-fit tw-w-24 tw-text-center hover:tw-bg-yellow-400 hover:tw-bg-opacity-10"
        :class="
          activeTab === tab
            ? 'tw-text-yellow-400 tw-border-t sm:tw-border-t-0 sm:tw-border-b tw-border-yellow-400'
            : 'tw-text-white'
        "
      >
        {{ tab }}
      </div>
    </div>
    <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4 tw-mt-4">
      <div
        v-for="(item, index) in filteredData"
        :key="index"
        class="tw-flex tw-border tw-border-gray-400 tw-border-opacity-10 hover:tw-text-yellow-400 tw-transition tw-duration-300 tw-ease-in-out"
        :class="
          hovered === index
            ? 'tw-bg-gray-800 tw-border tw-border-yellow-400 tw-border-opacity-100'
            : ''
        "
        @mouseover="hovered = index"
        @mouseleave="hovered = -1"
      >
        <div class="tw-w-full">
          <div class="tw-text-white tw-font-bold tw-text-md tw-py-2 tw-px-4">{{ item.title }}</div>
          <img
            :src="item.image"
            alt="project"
            class="tw-w-full tw-h-[216px] tw-object-cover tw-object-center"
          />
        </div>
        <button
          class="tw-absolute tw-top-0 tw-right-0 tw-h-full tw-px-2 tw-border-l tw-border-yellow-300 tw-text-yellow-300 tw-text-base tw-font-semibold tw-transition tw-duration-300 tw-ease-in-out tw-transform"
          :class="
            hovered === index
              ? 'tw-opacity-100 tw-bg-gray-800 '
              : 'tw-opacity-0 tw-bg-gray-800 -tw-translate-x-4'
          "
          @click="openDialog(item)"
        >
          <img src="@/assets/icons/chevron-right.svg" />
        </button>
      </div>
    </div>
  </section>
  <ProjectDialog v-if="projectItem" ref="projectDialogRef" :project="projectItem" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseTitle from './BaseTitle.vue'
import ProjectDialog from './ProjectDialog.vue'
import { data } from '@/data/data'

const tabs = ref(['All', 'Web', 'UI/UX', 'Design', 'Game', 'Publication'])
const activeTab = ref('All')
const hovered = ref(0)
const projectItem = ref<IProject | null>(null)
const projectDialogRef = ref<InstanceType<typeof ProjectDialog>>()
const projectData = ref(data)

const filteredData = computed(() => {
  projectData.value.filter((item) => item.image !== '')

  if (activeTab.value === 'All') {
    return projectData.value
  } else {
    return projectData.value.filter((item) => item.type === activeTab.value.toLowerCase())
  }
})

const hideNoImage = () => {
  projectData.value = projectData.value.filter((item) => item.image !== '')
}

hideNoImage()

const openDialog = (item: any) => {
  projectItem.value = item
  projectDialogRef.value?.openDialog()

  // Note: to be implemented later
  // router.push({
  //   query: {
  //     id: item.id
  //   }
  // })
}
</script>

<style scoped></style>
