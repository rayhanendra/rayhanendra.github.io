<template>
  <section id="about" class="tw-container tw-mx-auto tw-w-full tw-max-w-3xl tw-py-28 tw-px-4">
    <BaseTitle number="01" title="About Me" />
    <p class="tw-pb-12 tw-text-justify">
      My name is Rayhanendra, and I am a Frontend Engineer who strives for excellence in my work.
      <br />
      <br />
      Creativity and uniqueness are some of my core traits, and I believe that working in a group
      with a friendly atmosphere enhances my productivity.
      <br />
      <br />
      As a professional, I prioritize both the quality of my work and the way I interact with
      others.
      <br />
      <br />
      For me, it's not just about implementing ideas but also about generating them.
    </p>
    <div class="tw-flex tw-justify-between tw-gap-4 tw-w-full tw-overflow-auto">
      <div class="tw-font-bold tw-text-yellow-400">Skills</div>
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="tw-flex tw-flex-col tw-gap-2 tw-pb-4 sm:tw-pb-0"
      >
        <div class="tw-font-bold tw-text-white">{{ skill.title }}</div>
        <div class="tw-flex tw-flex-col tw-font-mono tw-gap-1">
          <div v-for="(data, index) in skill.data" :key="index">
            {{ data }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseTitle from './BaseTitle.vue'

const skills = ref([
  {
    title: 'Languanges',
    data: ['Javascript (ES6)', 'Typescript', 'HTML', 'CSS/LESS']
  },
  {
    title: 'Frameworks',
    data: ['ReactJs', 'VueJs', 'NextJs', 'NuxtJs']
  },
  {
    title: 'Libraries',
    data: ['MaterialUI', 'Vuetify', 'TailwindCSS', 'Storybook', 'GSAP']
  },
  {
    title: 'Tools',
    data: ['Git', 'VSCode', 'Postman', 'DevTools']
  },
  {
    title: 'Design',
    data: ['Figma', 'Wireframing', 'Interface Design', 'Prototyping']
  }
])
</script>

<style scoped></style>
