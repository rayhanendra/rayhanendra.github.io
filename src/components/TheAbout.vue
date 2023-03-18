<template>
  <div class="tw-container tw-mx-auto tw-w-full tw-max-w-3xl tw-py-28">
    <div class="tw-relative tw-flex tw-gap-6">
      <div class="tw-pb-6">
        <span class="tw-text-xl tw-font-mono tw-text-teal-400">01. </span>
        <span class="tw-font-bold tw-text-2xl tw-text-white">About</span>
      </div>
      <div class="tw-translate-y-1/2 tw-border-t tw-opacity-10 tw-flex-grow" />
    </div>
    <p class="tw-pb-12">
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
    <div class="tw-flex tw-justify-between tw-w-full">
      <div class="tw-font-bold tw-text-teal-400">Skills</div>
      <div v-for="(skill, index) in skills" :key="index" class="tw-flex tw-flex-col tw-gap-2">
        <div class="tw-font-bold tw-text-white">{{ skill.title }}</div>
        <div class="tw-flex tw-flex-col tw-font-mono tw-gap-1">
          <div v-for="(data, index) in skill.data" :key="index">
            {{ data }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
