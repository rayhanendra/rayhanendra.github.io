<template>
  <div>
    <header
      class="tw-fixed tw-py-4 tw-px-6 tw-flex tw-justify-between tw-w-full tw-z-50 tw-backdrop-blur-md tw-bg-[#1C1F33] tw-bg-opacity-50 tw-transition tw-duration-300 tw-ease-in-out"
      :class="
        hideHeader
          ? 'tw-translate-y-[-100%] tw-opacity-100 tw-pointer-events-none'
          : 'tw-translate-y-0 tw-opacity-100 tw-pointer-events-auto tw-shadow-lg'
      "
    >
      <router-link to="/#hero">
        <button>
          <img src="../assets/icons/rn-logo.svg" alt="logo" class="tw-w-12" />
        </button>
      </router-link>
      <div class="tw-flex tw-items-center">
        <div class="tw-hidden sm:tw-flex tw-items-center tw-gap-8">
          <div class="tw-flex tw-gap-6">
            <router-link
              v-for="(nav, index) in navigations"
              :key="nav.title"
              :to="nav.link"
              class="hover:tw-text-yellow-400 tw-transition tw-duration-300 tw-ease-in-out tw-cursor-pointer"
            >
              <span class="tw-font-mono tw-text-yellow-400">0{{ 1 + index }}. </span>{{ nav.title }}
            </router-link>
          </div>
          <a :href="resume" target="_blank" rel="noopener noreferrer">
            <button
              class="tw-p-2 tw-px-6 tw-border tw-border-yellow-400 tw-text-yellow-400 tw-text-xs tw-font-semibold tw-transition tw-duration-300 tw-ease-in-out tw-transform hover:tw-text-[#000000] hover:tw-bg-yellow-300 hover:tw-scale-105"
            >
              Resume
            </button>
          </a>
        </div>
        <button aria-label="Open Mobile Menu" @click="handleShowMobileMenu">
          <MenuIcon
            class="tw-block sm:tw-hidden tw-w-8 tw-h-8 tw-text-yellow-400 tw-transition tw-duration-300 tw-ease-in-out hover:tw-text-[#1C1F33] hover:tw-bg-yellow-300"
          />
        </button>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div
      class="tw-fixed tw-top-0 tw-right-0 tw-min-w-[230px] tw-h-full tw-bg-[#1C1F33] tw-flex tw-flex-col tw-justify-center tw-items-center tw-z-50 tw-transition tw-duration-300 tw-ease-in-out"
      :class="
        showMobileMenu ? 'tw-translate-x-0 tw-shadow-2xl' : 'tw-translate-x-full tw-shadow-none'
      "
    >
      <div class="tw-absolute tw-top-0 tw-right-0 tw-py-4 tw-px-6">
        <button aria-label="Close Mobile Menu" @click="handleShowMobileMenu">
          <XIcon
            class="tw-w-8 tw-h-8 tw-mt-0.5 tw-text-yellow-400 tw-transition tw-duration-300 tw-ease-in-out hover:tw-text-[#1C1F33] hover:tw-bg-yellow-300"
          />
        </button>
      </div>
      <div class="tw-flex tw-flex-col tw-gap-8">
        <router-link
          v-for="(nav, index) in navigations"
          :key="nav.title"
          :to="nav.link"
          class="hover:tw-text-yellow-400 tw-transition tw-duration-300 tw-ease-in-out tw-cursor-pointer"
          @click="handleShowMobileMenu"
        >
          <span class="tw-font-mono tw-text-yellow-400">0{{ 1 + index }}. </span>{{ nav.title }}
        </router-link>
        <a :href="resume" target="_blank" rel="noopener noreferrer">
          <button
            class="tw-p-2 tw-px-6 tw-border tw-border-yellow-400 tw-text-yellow-400 tw-text-xs tw-font-semibold tw-transition tw-duration-300 tw-ease-in-out tw-transform hover:tw-text-[#000000] hover:tw-bg-yellow-300 hover:tw-scale-105"
          >
            Resume
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MenuIcon, XIcon } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'

const resume = import.meta.env.VITE_RESUME_URL

interface INavigation {
  title: string
  link: string
}

const navigations = ref<INavigation[]>([
  {
    title: 'About',
    link: '/#about'
  },
  {
    title: 'Work',
    link: '/#work'
  },
  {
    title: 'Projects',
    link: '/#projects'
  },
  {
    title: 'Archive',
    link: '/#archive'
  }
])

const hideHeader = ref(false)
const showMobileMenu = ref(false)

let lastScrolled = 0
const hideOnScrollDown = () => {
  const scrollPosition = window.scrollY

  if (scrollPosition < lastScrolled) {
    hideHeader.value = false
  } else {
    hideHeader.value = true
  }

  lastScrolled = scrollPosition
}

onMounted(() => {
  window.addEventListener('scroll', hideOnScrollDown)
})

const handleShowMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}
</script>

<style scoped></style>
