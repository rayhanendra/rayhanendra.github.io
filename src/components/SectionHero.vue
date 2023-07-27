<template>
  <div
    id="hero"
    class="tw-container tw-max-w-screen-lg tw-mx-auto tw-py-28 tw-pt-12 sm:tw-pt-28 tw-px-4"
  >
    <div class="tw-grid tw-grid-cols-12 tw-gap-4 tw-space-y-10 sm:tw-space-y-0">
      <div id="content-left" class="tw-col-span-12 sm:tw-col-span-6">
        <div class="tw-text-2xl">
          Hello, I’m <span class="tw-font-semibold">Nendra</span> | ネンドラ
          <span class="tw-text-xs">(Nendora)</span>
        </div>
        <div class="tw-text-xl">
          a <span class="tw-font-semibold">Frontend Engineer </span>who is
        </div>
        <div class="tw-text-4xl tw-max-w-[645px] tw-font-bold">
          Striving for excellence through implementing best practices in all aspects.
        </div>

        <a :href="resume" target="_blank" rel="noopener noreferrer">
          <button
            class="tw-mt-10 tw-p-4 tw-py-[12px] tw-px-8 tw-border tw-border-yellow-300 tw-text-yellow-300 tw-text-base tw-font-semibold tw-transition tw-duration-300 tw-ease-in-out tw-transform hover:tw-text-[#000000] hover:tw-bg-yellow-300 hover:tw-scale-105"
          >
            Check Resume!
          </button>
        </a>
      </div>
      <div
        id="content-right"
        class="tw-col-span-12 sm:tw-col-span-6 tw-flex sm:tw-justify-end tw-px-4"
      >
        <div class="tw-relative tw-w-96 tw-h-fit">
          <img src="@/assets/images/hero.webp" alt="hero" />
          <div
            class="tw-absolute -tw-top-4 -tw-left-4 tw-border tw-border-yellow-300 tw-w-full tw-h-full"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="tw-overflow-clip tw-py-4 tw-mt-14 tw-border-t tw-border-b tw-border-gray-400 tw-border-opacity-10"
    >
      <div ref="textLoopRef" class="tw-whitespace-nowrap">
        <span id="box" class="tw-inline-block tw-mr-14 tw-text-yellow-300">
          Frontend Development
        </span>
        <span id="box" class="tw-inline-block tw-mr-14 tw-text-yellow-300"> UI / UX Design </span>
        <span id="box" class="tw-inline-block tw-mr-14 tw-text-yellow-300"> Web Development </span>
        <span id="box" class="tw-inline-block tw-mr-14 tw-text-yellow-300">
          Responsive Web App
        </span>
        <span id="box" class="tw-inline-block tw-mr-14 tw-text-yellow-300">
          Progressive Web App
        </span>
        <span id="box" class="tw-inline-block tw-mr-14 tw-text-yellow-300"> Mobile First </span>
        <span id="box" class="tw-inline-block tw-mr-14 tw-text-yellow-300">
          Mobile Integration
        </span>
        <span id="box" class="tw-inline-block tw-mr-14 tw-text-yellow-300"> Webview </span>
        <span id="box" class="tw-inline-block tw-mr-14 tw-text-yellow-300">
          Single Page Application
        </span>
        <span id="box" class="tw-inline-block tw-mr-14 tw-text-yellow-300">
          E-Commerce Website
        </span>
        <span id="box" class="tw-inline-block tw-mr-14 tw-text-yellow-300">
          Unit / End to End Testing
        </span>
        <!-- <span
          id="tool"
          v-for="tool in tools"
          :key="tool"
          class="tw-inline-block tw-w-6 tw-mr-14 tw-text-yellow-300"
        >
          <div class="">
            {{ tool }}
          </div>
        </span> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  let mm = gsap.matchMedia(),
    breakpoint = 640

  mm.add(
    {
      isDesktop: `(min-width: ${breakpoint}px)`,
      isMobile: `(max-width: ${breakpoint - 1}px)`
    },
    (context) => {
      let { isMobile } = context.conditions as {
        isMobile: boolean
        isDesktop: boolean
      }

      const contentLeft = document.getElementById('content-left')
      const contentRight = document.getElementById('content-right')

      const tlContentLeft = gsap.timeline({
        scrollTrigger: {
          trigger: contentLeft,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
          // markers: true
        }
      })

      tlContentLeft.from(contentLeft, {
        opacity: 0,
        x: isMobile ? -40 : -120,
        duration: 1.8,
        ease: 'power3.inOut'
      })

      const tlContentRight = gsap.timeline({
        scrollTrigger: {
          trigger: contentRight,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
          // markers: true
        }
      })

      tlContentRight.from(contentRight, {
        opacity: 0,
        x: isMobile ? 40 : 120,
        duration: 1.8,
        ease: 'power3.inOut'
      })
    }
  )

  gsap.to('#box', {
    duration: 10,
    ease: 'none',
    x: '-=1000', //move each box 1000px to left
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % 1000) //force x value to be between 0 and 500 using modulus
    },
    repeat: -1
  })

  // const textLoop = gsap.timeline({ repeat: -1 })
  // const textElements = Array.from(textLoopRef.value.children)

  // const duration = 12
  // textElements.forEach((el, index) => {
  //   // Note: this is just to set the initial position of the elements
  //   gsap.set(el as any, { xPercent: index * 340 })
  //   // Note: this is the animation that will loop
  //   textLoop.to(
  //     el as any,
  //     {
  //       xPercent: (index - textElements.length) * 340,
  //       duration: duration,
  //       ease: 'none'
  //     },
  //     0
  //   )
  // })
})

const resume = import.meta.env.VITE_RESUME_URL

const textLoopRef = ref(null) as any

// const tools = ref([
// 'Web Development',
// 'Responsive Web Design',
// 'Mobile First',
// 'Progressive Web App',
// 'Single Page Application',
// 'Webview',
// 'State Management',
// 'Custom Hooks',
// 'End to End Testing',
// 'Unit Testing'

//   'HTML',
//   'CSS',
//   'LESS',
//   'Javascript',
//   'Typescript',
//   'ReactJs',
//   'VueJs',
//   'NextJs',
//   'NuxtJs',
//   'MaterialUI',
//   'TailwindCSS',
//   'GSAP',
//   'Cypress',
//   'Storybook'
//   // 'Vuetify'
// ])
</script>

<style scoped></style>
