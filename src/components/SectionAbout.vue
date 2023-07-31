<template>
  <div id="about">
    <section
      id="about-section"
      class="tw-container tw-mx-auto tw-w-full tw-max-w-3xl tw-py-28 tw-px-4"
    >
      <BaseTitle id="about-title" number="01" title="About Me" />
      <p id="about-text" class="tw-pb-12 tw-text-justify">
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
      <div
        class="tw-flex tw-justify-between tw-gap-4 tw-w-full tw-overflow-auto md:tw-overflow-hidden"
      >
        <div id="about-skills" class="tw-font-bold tw-text-yellow-400">Skills</div>
        <div
          v-for="(skill, index) in skills"
          id="about-skills"
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseTitle from '@/components/BaseTitle.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const section = document.getElementById('about-section')
  const aboutTitle = document.getElementById('about-title')
  const aboutText = document.getElementById('about-text')
  const aboutSkills = gsap.utils.toArray('#about-skills') as HTMLElement[]

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
      // markers: true
    }
  })

  tl.from(aboutTitle, {
    opacity: 0,
    y: 200,
    duration: 1.8,
    ease: 'power3.inOut'
  })

  tl.from(
    aboutText,
    {
      opacity: 0,
      x: -120,
      duration: 1.8,
      ease: 'power3.inOut'
    },
    `<0.5`
  )

  aboutSkills.forEach((skill) => {
    tl.from(
      skill,
      {
        opacity: 0,
        x: 120,
        duration: 1.8,
        ease: 'power3.inOut'
      },
      `<0.2`
    )
  })

  // Note: Regular fckin' animation
  // const section = gsap.utils.toArray('#about-section') as HTMLElement[]

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: section,
  //     start: 'top 80%',
  //     end: 'bottom 20%',
  //     toggleActions: 'play none none reverse'
  //     // markers: true
  //   }
  // })

  // tl.from(section, {
  //   opacity: 0,
  //   y: 200,
  //   duration: 1.8,
  //   ease: 'power3.inOut'
  // })
})

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
    title: 'Testing',
    data: ['Jest', 'React Testing Library', 'Cypress']
  },
  {
    title: 'Design',
    data: ['Figma', 'Wireframing', 'Interface Design', 'Prototyping']
  }
])
</script>

<style scoped></style>
