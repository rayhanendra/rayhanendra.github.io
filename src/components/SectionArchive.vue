<template>
  <section
    id="archive"
    class="tw-container tw-max-w-screen-lg tw-mx-auto tw-py-28 tw-pt-28 tw-px-4"
  >
    <BaseTitle id="rows" title="Archive" />
    <table class="tw-w-full tw-table-auto">
      <thead>
        <tr id="rows">
          <th class="tw-font-semibold">Year</th>
          <th class="tw-font-semibold">Title</th>
          <!-- <th class="tw-font-semibold tw-hidden sm:tw-table-cell">Type</th> -->
          <th class="tw-font-semibold tw-hidden sm:tw-table-cell">Made At</th>
          <th class="tw-font-semibold tw-hidden sm:tw-table-cell">Build With</th>
          <th class="tw-font-semibold tw-hidden sm:tw-block">Link</th>
        </tr>
      </thead>
      <tbody>
        <tr
          id="rows"
          v-for="item in archives"
          :key="item.id"
          class="tw-text-sm hover:tw-bg-yellow-400 hover:tw-bg-opacity-5 tw-cursor-pointer"
          ref="activeRowRef"
        >
          <!-- @click="handleShowDropdown(item.id)" -->
          <td class="tw-font-mono tw-text-yellow-400">{{ new Date(item.year).getFullYear() }}</td>
          <td class="tw-font-semibold">
            <div v-if="item.link" class="sm:tw-hidden">
              <a
                v-if="item.link"
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="tw-flex tw-items-center tw-justify-between tw-gap-1 tw-cursor-pointer"
              >
                <div class="tw-min-w-max">
                  {{ filterHttpsAnd3w(item.title) }}
                </div>
                <ExternalLinkIcon class="tw-w-4" />
              </a>
            </div>
            <div v-else class="sm:tw-hidden">
              {{ item.title }}
            </div>
            <div class="tw-hidden sm:tw-block">
              {{ item.title }}
            </div>
          </td>
          <!-- <td class="tw-uppercase tw-hidden sm:tw-table-cell">{{ item.type }}</td> -->
          <td class="tw-hidden sm:tw-table-cell">{{ item.madeAt }}</td>
          <td class="tw-hidden sm:tw-table-cell">
            <span
              v-for="(tech, index) in item.buildWith"
              :key="index"
              class="tw-inline-block tw-border tw-border-yellow-400 tw-border-opacity-10 tw-rounded-full tw-px-3 tw-py-1 tw-text-xs tw-font-mono tw-font-medium tw-text-yellow-400 tw-mr-2"
              >{{ tech }}
            </span>
          </td>
          <td class="tw-hidden sm:tw-flex tw-items-center tw-gap-1">
            <a
              v-if="item.link"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-flex tw-items-center tw-justify-between tw-gap-1 tw-cursor-pointer"
            >
              <div class="tw-min-w-max">
                {{ filterHttpsAnd3w(item.link) }}
              </div>
              <ExternalLinkIcon class="tw-w-4" />
            </a>
            <a
              v-if="item.github"
              :href="item.github"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-flex tw-items-center tw-justify-between tw-gap-1 tw-cursor-pointer"
            >
              Github
              <GithubIcon class="tw-w-4" />
            </a>
          </td>
          <!-- <Transition name="fade">
            <div
              id="dropdown"
              v-if="showDropdown === item.id"
              class="tw-absolute tw-w-full tw-left-0 tw-top-0 tw-p-4 tw-bg-[#1C1F33] tw-border tw-border-gray-400 tw-border-opacity-10 tw-z-10 tw-shadow-lg"
            >
              <div
                class="tw-relative tw-flex tw-items-center tw-justify-between tw-mb-4 tw-text-sm tw-text-gray-400"
              >
                <div class="tw-font-semibold">
                  {{ item.title }}
                </div>
              </div>
              <ul>
                <li v-for="desc in item.descriptions" :key="desc" class="tw-text-sm tw-mb-2">
                  {{ desc }}
                </li>
              </ul>
            </div>
          </Transition> -->
        </tr>
      </tbody>
    </table>
  </section>
  <!-- Note: use this if want to create the archive page -->
  <!-- <div class="tw-container tw-mx-auto tw-w-full tw-max-w-3xl tw-py-28">
    <div class="tw-text-center">
      <router-link to="/archive">
        <button
          class="tw-text-lg tw-font-bold tw-border tw-border-opacity-100 tw-p-2 hover:tw-scale-105 tw-mb-4 tw-px-4 tw-py-2 tw-cursor-pointer tw-transition tw-duration-300 tw-ease-in-out tw-transform hover:tw-text-yellow-400 tw-min-w-fit tw-w-24 tw-text-center hover:tw-bg-yellow-400 hover:tw-bg-opacity-10 tw-text-yellow-400 tw-border-b tw-border-yellow-400"
        >
          The Archive
        </button>
      </router-link>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { data } from '@/data/data'
import { ExternalLinkIcon, GithubIcon } from 'lucide-vue-next'
import BaseTitle from '@/components/BaseTitle.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const rows = gsap.utils.toArray('#rows') as HTMLElement[]

  rows.forEach((row) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
        markers: true,
        id: 'rows'
      }
    })

    tl.from(row, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power3.inOut'
    })
  })
})

const acend = (a: any, b: any) => {
  const datePrev = Date.parse(a.year)
  const dateNext = Date.parse(b.year)

  return dateNext - datePrev
}
const archives = ref(data)
archives.value.sort(acend)

const filterHttpsAnd3w = (url: string) => {
  const regex = /(https?:\/\/)?(www\.)?/g
  return url.replace(regex, '')
}

// const showDropdown = ref('')
// const handleShowDropdown = (id: string) => {
//   showDropdown.value !== id ? (showDropdown.value = id) : (showDropdown.value = '')
// }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  /* transition: height 0.5s ease;
  height: 100%; */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  /* height: 0; */
}
</style>
