<template>
  <svg id="demo" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <radialGradient id="maskGradient">
        <stop offset="50%" stop-color="#fff" />
        <stop offset="100%" stop-color="#000" />
      </radialGradient>
      <mask id="theMask">
        <circle id="masker" r="150" fill="url(#maskGradient)" cx="0" cy="0" />
      </mask>
    </defs>

    <g id="maskReveal" mask="url(#theMask)">
      <image id="regular" xlink:href="../assets/images/grid2.svg" class="grid" />
    </g>
    <!-- <div id="ring" class="square"></div> -->
    <!-- <circle id="ring" r="20" fill="none" stroke="#F8E71C" stroke-width="2" cx="800" cy="450" /> -->
    <!-- <circle id="dot" r="4" fill="#F8E71C" cx="800" cy="450" /> -->
  </svg>

  <div id="instructions"></div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  // Note: mask reveal animation
  const tl = gsap.timeline()

  tl.to('#masker', { duration: 2, attr: { r: 2400 }, ease: 'power2.in' })
  tl.reversed(true)

  function mouseHandler() {
    tl.reversed(!tl.reversed())
  }

  window.addEventListener('mousedown', mouseHandler)
  window.addEventListener('touchstart', mouseHandler)
  window.addEventListener('mouseup', mouseHandler)
  window.addEventListener('touchend', mouseHandler)

  // Note: older approach using gsap.to
  // Start: Using gsap.to ----------------
  // const svg: any = document.querySelector('#demo')
  // let pt = svg.createSVGPoint()

  // function getPoint(evt: MouseEvent) {
  //   pt.x = evt.clientX
  //   pt.y = evt.clientY

  //   if (svg) return pt.matrixTransform(svg.getScreenCTM().inverse())
  // }

  // function mouseMove(evt: MouseEvent) {
  //   let newPoint = getPoint(evt)
  //   gsap.to('#masker', {
  //     duration: 2.5,
  //     attr: { cx: newPoint.x, cy: newPoint.y },
  //     ease: 'steps (6)'
  //   })
  // }
  // window.addEventListener('mousemove', mouseMove)
  // End: Using gsap.to ----------------

  // Note: newer approach using gsap.quickTo
  // Start: Using gsap.quickTo ----------------
  const xTo = gsap.quickTo('#masker', 'x', { duration: 1, ease: 'steps (6)' })
  const yTo = gsap.quickTo('#masker', 'y', { duration: 1, ease: 'steps (6)' })

  window.addEventListener('mousemove', (e) => {
    xTo(e.x)
    yTo(e.y)
  })
  // End: Using gsap.quickTo ----------------
})
</script>

<style scoped>
#demo {
  position: fixed;
}

.grid {
  width: 100%;
  opacity: 0.4;
  z-index: -1;
}

@media screen and (min-width: 768px) {
  .grid {
    opacity: 0.5;
  }
}

.square {
  width: 80px;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(250, 204, 21, 1);
  pointer-events: none;
}
</style>
