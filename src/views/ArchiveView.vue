<template>
  <div class="tw-container tw-mx-auto tw-py-28 tw-pt-12 sm:tw-pt-28 tw-px-4">
    <BaseTitle title="Archive" />
    <table class="tw-w-full tw-table-auto">
      <thead>
        <tr>
          <th class="tw-font-semibold">Year</th>
          <th class="tw-font-semibold">Title</th>
          <th class="tw-font-semibold tw-hidden sm:tw-table-cell">Type</th>
          <th class="tw-font-semibold tw-hidden sm:tw-table-cell">Made At</th>
          <th class="tw-font-semibold tw-hidden sm:tw-table-cell">Build With</th>
          <th class="tw-font-semibold">Link</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in archives"
          :key="item.id"
          class="tw-text-sm hover:tw-bg-yellow-400 hover:tw-bg-opacity-5 tw-transition tw-duration-300 tw-ease-in-out"
        >
          <td class="tw-font-mono tw-text-yellow-400">{{ item.year }}</td>
          <td class="tw-font-semibold">{{ item.title }}</td>
          <td class="tw-uppercase tw-hidden sm:tw-table-cell">{{ item.type }}</td>
          <td class="tw-hidden sm:tw-table-cell">{{ item.madeAt }}</td>
          <td class="tw-hidden sm:tw-table-cell">
            <span
              v-for="(tech, index) in item.buildWith"
              :key="index"
              class="tw-inline-block tw-border tw-border-yellow-400 tw-border-opacity-10 tw-rounded-full tw-px-3 tw-py-1 tw-text-xs tw-font-mono tw-font-medium tw-text-yellow-400 tw-mr-2"
              >{{ tech }}
            </span>
          </td>
          <td class="tw-flex tw-items-center tw-gap-1">
            <a
              v-if="item.link"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-cursor-pointer"
            >
              <ExternalLinkIcon class="tw-w-5" />
            </a>
            <a
              v-if="item.github"
              :href="item.github"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-cursor-pointer"
            >
              <GithubIcon class="tw-w-5" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { data } from '@/data/data'
import { ExternalLinkIcon, GithubIcon } from 'lucide-vue-next'
import BaseTitle from '@/components/BaseTitle.vue'

const archives = ref(data)
</script>

<style scoped>
table,
th,
td {
  border-collapse: collapse;
}
th,
td {
  padding: 5px;
}
th {
  text-align: left;
}
</style>
