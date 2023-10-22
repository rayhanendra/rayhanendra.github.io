<template>
  <div class="stars-container">
    <div class="stars stars-bg" ref="starsBg"></div>
    <div class="stars stars-fg" ref="starsFg"></div>
    <div class="mountain mountain-bg" ref="mountainBg"></div>
    <div class="mountain mountain-fg" ref="mountainFg"></div>
    <div class="rocket-container" ref="rocketContainer">
      <div class="rocket" ref="rocket"></div>
      <div class="exhaust" ref="exhaust"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { Power2 } from 'gsap/all'

const rocketContainer = ref<HTMLElement | null>(null)
const rocket = ref<HTMLElement | null>(null)
const exhaust = ref<HTMLElement | null>(null)
const starsBg = ref<HTMLElement | null>(null)
const starsFg = ref<HTMLElement | null>(null)

const animateRocket = () => {
  const rocketTimeline = gsap.timeline()

  rocketTimeline
    .to(rocket.value, { y: -160, duration: 1, ease: Power2.easeOut })

    // .to(rocketContainer.value, { y: '100vh', duration: 1.5, ease: Power2.easeInOut }, '-=0.8')
    .to(rocketContainer.value, { y: '30vh', duration: 1.5, ease: Power2.easeInOut }, '-=0.8')

    .to(exhaust.value, { opacity: 1, duration: 0.1 }, '-=0.4')
    // .to(exhaust.value, { opacity: 1, duration: 1 }, '-=0.4')

    // .to(exhaust.value, { opacity: 0, duration: 0.8 }, '-=0.1')
    .to(exhaust.value, { opacity: 1, duration: 0.8, scaleY: 1.8, y: 64 }, '-=0.6')

    // .to(exhaust.value, { opacity: 0, duration: 2 }, '-=0.1')

    // .to(rocketContainer.value, { y: '-200vh', duration: 0.5, ease: Power2.easeInOut })
    .to(rocketContainer.value, { y: '-200vh', duration: 1.5, ease: Power2.easeInOut })

  return rocketTimeline
}

let rocketAnimation: any = null

const handleScroll = () => {
  // Check if the elements are not null before accessing their properties
  if (
    rocketContainer.value &&
    rocket.value &&
    exhaust.value &&
    // exhaustSvg.value &&
    starsBg.value &&
    starsFg.value
    // smoke.value
  ) {
    const rocketPosition = rocketContainer.value.getBoundingClientRect().top
    const parallaxAmount = (rocketPosition - window.innerHeight) * 0.2

    // Parallax effect for the background stars
    // gsap.to(starsBg.value, { y: parallaxAmount, duration: 0.5, ease: Power2.easeOut })
    gsap.to(starsBg.value, { y: parallaxAmount })

    // Parallax effect for the foreground stars
    // gsap.to(starsFg.value, { y: parallaxAmount * 0.5, duration: 0.5, ease: Power2.easeOut })
    // gsap.to(starsFg.value, { y: parallaxAmount * 0.2, duration: 0.5, ease: Power2.easeOut })
    // gsap.to(starsFg.value, { y: parallaxAmount * 0.8, duration: 0.5, ease: Power2.easeOut })
    gsap.to(starsFg.value, { y: parallaxAmount * 0.8 })

    if (rocketPosition < window.innerHeight * 0.8 && !rocketAnimation) {
      rocketAnimation = animateRocket()
    }

    if (rocketPosition > window.innerHeight * 1.2 && rocketAnimation) {
      rocketAnimation.kill()
      rocketAnimation = null
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style scoped>
.stars-container {
  position: relative;
  height: 900px;
  overflow: hidden;
}

.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background-repeat: repeat-y;
  /* background-repeat: no-repeat; */
  background-size: contain;
  background-position: center;
  z-index: -1;
}

.stars-bg {
  background-image: url('@/assets/images/bg2.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.stars-fg {
  background-image: url('@/assets/images/pattern.png');
  opacity: 0.4;
  /* opacity: 0.1; */
  background-size: cover;
}

.mountain {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-repeat: repeat-y;
  /* background-repeat: no-repeat; */
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.mountain-bg {
  bottom: 40px;
  background-image: url('@/assets/images/mt-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.mountain-fg {
  background-image: url('@/assets/images/mt-fg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
}

.rocket-container {
  position: absolute;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.rocket {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100px;
  background-image: url('@/assets/icons/rn-logo.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

.exhaust {
  height: 100px;
  width: 100px;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/smoke.svg');
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  z-index: 1;
}

.exhaust-svg {
  height: 100px;
  width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  /* width: 100%;
  height: 200px; */
  /* background-image: url('@/assets/images/exhaust.jpg'); */
  /* background-size: auto;
  background-position: center;
  background-repeat: no-repeat; */
  opacity: 1;
  z-index: 1;
}
</style>
