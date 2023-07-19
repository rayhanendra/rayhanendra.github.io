<template>
  <div class="square"></div>
  <div class="hold">Hold</div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  const square = document.querySelector('.square')
  gsap.set(square, { xPercent: -100, yPercent: -100 })

  // Start: Using quickSetter ----------------
  // const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
  // const mouse = { x: pos.x, y: pos.y }
  // const speed = 0.2

  // const xSet = gsap.quickSetter(square, 'x', 'px')
  // const ySet = gsap.quickSetter(square, 'y', 'px')

  // gsap.ticker.add(() => {
  //   // adjust speed for higher refresh monitors
  //   const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio())

  //   pos.x += (mouse.x - pos.x) * dt
  //   pos.y += (mouse.y - pos.y) * dt
  //   xSet(pos.x)
  //   ySet(pos.y)
  // })

  // window.addEventListener('mousemove', (e) => {
  // Note: quickSetter
  // mouse.x = e.x
  // mouse.y = e.
  // })
  // End: Using quickSetter ----------------

  // Start: Using quickTo ----------------
  // const xTo = gsap.quickTo(square, 'x', { duration: 0.6, ease: 'power3' })
  const xTo = gsap.utils.pipe(
    // gsap.utils.clamp(39, window.innerWidth - 100),
    gsap.utils.snap(window.innerWidth / 18),
    gsap.quickTo(square, 'x', { duration: 0.6, ease: 'power3' })
  )
  // const yTo = gsap.quickTo(square, 'y', { duration: 0.6, ease: 'power3' })
  const yTo = gsap.utils.pipe(
    // gsap.utils.clamp(100, window.innerHeight - 100),
    gsap.utils.snap(window.innerHeight / 9.65),
    gsap.quickTo(square, 'y', { duration: 0.6, ease: 'power3' })
  )

  // Note: hold animation
  const hold = document.querySelector('.hold')
  gsap.set(hold, { xPercent: 0, yPercent: -100 })

  const xHold = gsap.quickTo(hold, 'x', { duration: 0.6, ease: 'power3' })
  const yHold = gsap.quickTo(hold, 'y', { duration: 0.6, ease: 'power3' })

  // Note: listen to mousemove
  window.addEventListener('mousemove', (e) => {
    xHold(e.x)
    yHold(e.y)

    xTo(e.x)
    yTo(e.y)
  })
  // End: Using quickTo ----------------

  // special thanks to Blake Bowen for most of the code.

  // quickTo() version, new in version 3.10.0: https://codepen.io/GreenSock/pen/xxpbORN?editors=0010

  // Note: this is only for the scale and opacity
  let inOutSquare: gsap.core.Timeline
  let inOutHold: gsap.core.Timeline

  function initAnims() {
    inOutSquare = gsap
      .timeline({ paused: true })
      // Note: this is only for the scale
      .fromTo(square, { scale: 1 }, { scale: 10, duration: 0.5, ease: 'power2.inOut' })
      // Note: this is only for the opacity
      .to(square, { opacity: 0, duration: 0.5 }, 0)

    inOutHold = gsap
      .timeline({ paused: true })
      .fromTo(hold, { opacity: 1 }, { opacity: 0, duration: 0.5, ease: 'power2.inOut' })
  }

  function animationMouseDown() {
    inOutSquare.play()
    inOutHold.play()
  }

  function animationMouseUp() {
    inOutSquare.reverse()
    inOutHold.reverse()
  }

  function bindings() {
    window.addEventListener('mousedown', animationMouseDown)
    window.addEventListener('touchstart', animationMouseDown)
    window.addEventListener('mouseup', animationMouseUp)
    window.addEventListener('touchend', animationMouseUp)
  }

  function init() {
    initAnims()
    bindings()
  }

  init()
})
</script>

<style scoped>
.square {
  width: calc(100vw / 18);
  height: calc(100vw / 18);
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid rgba(250, 204, 21, 0.78);
  pointer-events: none;
}

.hold {
  position: fixed;
  top: 0;
  left: 0;
  padding: 4px 10px;
  font-size: 12px;
  color: rgba(250, 204, 21, 0.78);
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
