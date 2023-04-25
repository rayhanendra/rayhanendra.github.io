<template>
  <section id="work" class="tw-container tw-mx-auto tw-w-full tw-max-w-3xl tw-py-28 tw-px-4">
    <BaseTitle number="02" title="Where I've Worked" />
    <div class="tw-flex tw-flex-col sm:tw-flex-row tw-gap-12 tw-h-[364px]">
      <div class="tw-flex tw-flex-row sm:tw-flex-col tw-w-full sm:tw-w-1/3 tw-h-fit">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="tw-px-3 tw-py-4 tw-w-full tw-text-gray-400 hover:tw-text-yellow-400 tw-border-b sm:tw-border-b-0 sm:tw-border-l tw-border-opacity-10 tw-cursor-pointer hover:tw-bg-yellow-800 hover:tw-bg-opacity-10 hover:tw-opacity-100 tw-transition tw-duration-300 tw-ease-in-out"
          :class="
            index === activeIndex
              ? 'tw-border-yellow-400 tw-border-opacity-100'
              : 'tw-border-gray-400'
          "
          @click="activeIndex = index"
        >
          {{ item.company }}
        </div>
      </div>

      <div class="w-pl-12 tw-flex tw-flex-col tw-w-full">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="tw-transition tw-duration-700 tw-ease-in-out tw-opacity-100"
          :class="
            index === activeIndex
              ? 'tw-opacity-100 tw-transform -tw-translate-y-5 sm:tw-translate-y-0 sm:tw-translate-x-2 md:tw-translate-x-5'
              : 'tw-opacity-0 tw-invisible'
          "
        >
          <div v-if="index === activeIndex" class="">
            <div class="tw-text-2xl tw-text-white tw-pb-2">
              {{ item.title }}
              <span class="tw-ml-2 tw-font-semibold tw-text-yellow-400">@ {{ item.company }}</span>
            </div>
            <div class="tw-text-sm tw-text-gray-400 tw-font-mono tw-pb-4">{{ item.date }}</div>
            <ul class="tw-flex tw-flex-col tw-gap-2 tw-text-gray-400 sm:tw-list-disc tw-pr-4">
              <li v-for="(description, index) in item.descriptions" :key="index">
                {{ description }}
              </li>
            </ul>
            <div
              class="tw-flex tw-flex-wrap tw-gap-2 tw-py-4 tw-mt-4 tw-border-t tw-border-gray-400 tw-border-opacity-10"
            >
              <div
                v-for="(tool, index) in item.buildAt"
                :key="index"
                class="tw-inline-block tw-px-2 tw-py-1 tw-mr-2 tw-mb-2 tw-text-sm tw-text-gray-400 tw-bg-gray-800 tw-rounded-full tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-yellow-400 hover:tw-text-gray-800"
              >
                {{ tool }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseTitle from './BaseTitle.vue'

const activeIndex = ref(0)

const data = ref([
  {
    title: 'Frontend Engineer',
    company: 'Enb Mobile Care',
    date: 'Aug 2022 - Present',
    descriptions: [
      'ENB Mobile Care is a prominent trade-in company affiliated with the Erajaya group',
      'My primary responsibilities are to manage and enhance several ongoing projects, including Admin Web, Webview, and Marketplace',
      'The technologies I work with include Vue JS and React JS',
      'I have also optimized the user interface and system architecture of some projects by following industry best practices',
      'I work in close collaboration with technical lead, project team, and CEO directly to achieve project objectives'
    ],
    buildAt: [
      'Vue3',
      'React JS',
      'Next Js',
      'Webview',
      'Tailwind CSS',
      'Material UI',
      'Storybook',
      'Vuex',
      'Pinia',
      'Vite'
    ]
  },
  {
    title: 'Frontend Engineer Intern',
    company: 'Pajak.io by Fintax',
    date: 'Oct 2021 - Apr 2022',
    descriptions: [
      'Pajak.io is an innovative online tax management system by Fintax',
      'My primary responsibility is to develop Vue JS web features according to the weekly sprint plan',
      'I collaborate closely with other staff members, including front-end and back-end developers, quality assurance personnel, technical leads, and project managers',
      'Our team engages in regular discussions to address any challenges that arise and find effective solutions',
      'Direct communication and collaboration are critical to ensuring that our work is aligned with project goals'
    ],
    buildAt: ['Vue Js', 'LESS', 'Vuex']
  },
  {
    title: 'Frontend Engineer Intern',
    company: 'Andalin',
    date: 'Sep 2021 - Dec 2021',
    descriptions: [
      'Andalin is a digital freight forwarding expert company',
      'My primary responsibility was to develop features for the Andalin internal Vue JS web platform, including two-way verification and customer file storage',
      'I had the opportunity to work with a knowledgeable technical lead who provided mentorship and encouraged continuous learning',
      'I collaborated with a back-end intern, supervised by the technical lead, to implement the features.',
      'Direct communication and collaboration are critical to ensuring that our work is aligned with project goals',
      'The experience at Andalin provided me with valuable hands-on development experience and further developed my technical skills'
    ],
    buildAt: ['Vue Js', 'SCSS', 'Tailwind CSS', 'Vuex']
  }
])
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
