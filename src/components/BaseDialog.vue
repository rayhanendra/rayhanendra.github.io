<template>
  <transition name="fade">
    <div
      v-show="showDialog"
      class="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-z-50"
    >
      <div class="tw-bg-gray-900 tw-bg-opacity-75 tw-fixed tw-inset-0"></div>
      <transition name="dialog">
        <div
          v-if="showDialog"
          class="tw-bg-[#1C1F33] tw-shadow-md tw-w-11/12 sm:tw-max-w-3xl md:tw-h-fit tw-p-0 md:tw-p-3"
        >
          <div
            class="tw-flex tw-justify-between tw-items-start tw-mb-3 tw-text-xl tw-font-bold tw-pt-3 tw-px-3"
          >
            <slot name="title"></slot>
            <button
              type="button"
              class="tw-text-gray-400 hover:tw-text-gray-500 tw-transition tw-duration-150 tw-ease-in-out"
              @click="close"
            >
              <svg
                class="tw-w-6 tw-h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="tw-h-96 tw-flex tw-flex-col tw-justify-between tw-p-3 tw-gap-4 tw-mb-3 tw-overflow-y-auto scrollbar-y"
          >
            <slot name="content"></slot>
          </div>
          <div class="tw-flex tw-justify-end tw-items-center tw-gap-4 tw-pb-3 tw-px-3">
            <slot name="actions"></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { watch } from 'vue'
const emit = defineEmits(['close'])

const props = defineProps({
  showDialog: {
    type: Boolean,
    required: true
  }
})

watch(
  () => props.showDialog,
  (value) => {
    const body = document.querySelector('body')
    if (body) {
      body.classList.toggle('tw-overflow-hidden', value)
    }
  }
)

const close = () => {
  emit('close')
}
</script>

<style scoped>
.dialog-enter-active {
  animation: dialog-enter 0.25s;
}

.dialog-leave-active {
  animation: dialog-leave 0.25s;
}

@keyframes dialog-enter {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes dialog-leave {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(0.9);
    opacity: 0;
  }
}

.tw-overflow-hidden {
  overflow: hidden;
}
</style>
