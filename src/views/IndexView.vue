<template>
  <div>
    <SectionRocketThree />
    <!-- <SectionRocket /> -->
    <SectionHero />
    <SectionAbout />
    <SectionWork />
    <SectionProject />
    <SectionArchive />
    <!-- <div class="container tw-w-[728px] tw-outline tw-outline-green-400 tw-m-auto">
      <div class="marquee tw-flex">
        <div class="box" v-for="(item, index) in items" :key="index">
          <img :src="item" class="tw-block" />
        </div>
      </div>
    </div> -->
    <!-- <div class="container">
      <div class="marquee">
        <div class="box"><img src="https://via.placeholder.com/150x75?text=1" alt="" /></div>
        <div class="box"><img src="https://via.placeholder.com/300x75?text=2" alt="" /></div>
        <div class="box"><img src="https://via.placeholder.com/200x75?text=3" alt="" /></div>
        <div class="box"><img src="https://via.placeholder.com/400x75?text=4" alt="" /></div>
        <div class="box"><img src="https://via.placeholder.com/150x75?text=5" alt="" /></div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import SectionRocketThree from '@/components/SectionRocketThree.vue'
// import SectionRocket from '@/components/SectionRocket.vue'
import SectionHero from '@/components/SectionHero.vue'
import SectionAbout from '@/components/SectionAbout.vue'
import SectionWork from '@/components/SectionWork.vue'
import SectionProject from '@/components/SectionProject.vue'
import SectionArchive from '@/components/SectionArchive.vue'

// Note: Example of using GSAP ScrollTrigger with array of sections
// import { onMounted } from 'vue'
// import { gsap } from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

// onMounted(() => {
//   const sections = gsap.utils.toArray('#section') as HTMLElement[]

//   sections.forEach((section) => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: 'top 80%',
//         end: 'bottom 20%',
//         toggleActions: 'play none none reverse',
//         markers: true
//       }
//     })

//     tl.from(section, {
//       opacity: 0,
//       y: 200,
//       duration: 1.8,
//       ease: 'power3.inOut'
//     })
//   })
// })

// Note: Example of using GSAP ScrollTrigger with array of sections
// const items = [
//   'https://via.placeholder.com/150x75?text=1',
//   'https://via.placeholder.com/300x75?text=2',
//   'https://via.placeholder.com/200x75?text=3',
//   'https://via.placeholder.com/400x75?text=4',
//   'https://via.placeholder.com/150x75?text=5',
//   'https://via.placeholder.com/300x75?text=6',
//   'https://via.placeholder.com/200x75?text=7',
//   'https://via.placeholder.com/400x75?text=8',
//   'https://via.placeholder.com/150x75?text=9'
// ]

// const boxes = gsap.utils.toArray('.box')

// const loop = horizontalLoop(boxes, { repeat: -1 })

// boxes.forEach((box: any, i) =>
//   box.addEventListener('click', () => loop.toIndex(i, { duration: 0.8, ease: 'power1.inOut' }))
// )

// function horizontalLoop(items, config) {
//   items = gsap.utils.toArray(items)
//   config = config || {}
//   let tl = gsap.timeline({
//       repeat: config.repeat,
//       paused: config.paused,
//       defaults: { ease: 'none' },
//       onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
//     }),
//     length = items.length,
//     startX = items[0].offsetLeft,
//     times = [],
//     widths = [],
//     xPercents = [],
//     curIndex = 0,
//     pixelsPerSecond = (config.speed || 1) * 100,
//     snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
//     totalWidth,
//     curX,
//     distanceToStart,
//     distanceToLoop,
//     item,
//     i
//   gsap.set(items, {
//     // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
//     xPercent: (i, el) => {
//       let w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px')))
//       xPercents[i] = snap(
//         (parseFloat(gsap.getProperty(el, 'x', 'px')) / w) * 100 + gsap.getProperty(el, 'xPercent')
//       )
//       return xPercents[i]
//     }
//   })
//   gsap.set(items, { x: 0 })
//   totalWidth =
//     items[length - 1].offsetLeft +
//     (xPercents[length - 1] / 100) * widths[length - 1] -
//     startX +
//     items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], 'scaleX') +
//     (parseFloat(config.paddingRight) || 0)
//   for (i = 0; i < length; i++) {
//     item = items[i]
//     curX = (xPercents[i] / 100) * widths[i]
//     distanceToStart = item.offsetLeft + curX - startX
//     distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX')
//     tl.to(
//       item,
//       {
//         xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
//         duration: distanceToLoop / pixelsPerSecond
//       },
//       0
//     )
//       .fromTo(
//         item,
//         {
//           xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100)
//         },
//         {
//           xPercent: xPercents[i],
//           duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
//           immediateRender: false
//         },
//         distanceToLoop / pixelsPerSecond
//       )
//       .add('label' + i, distanceToStart / pixelsPerSecond)
//     times[i] = distanceToStart / pixelsPerSecond
//   }
//   function toIndex(index, vars) {
//     vars = vars || {}
//     Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length) // always go in the shortest direction
//     let newIndex = gsap.utils.wrap(0, length, index),
//       time = times[newIndex]
//     if (time > tl.time() !== index > curIndex) {
//       // if we're wrapping the timeline's playhead, make the proper adjustments
//       vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) }
//       time += tl.duration() * (index > curIndex ? 1 : -1)
//     }
//     curIndex = newIndex
//     vars.overwrite = true
//     return tl.tweenTo(time, vars)
//   }
//   tl.next = (vars) => toIndex(curIndex + 1, vars)
//   tl.previous = (vars) => toIndex(curIndex - 1, vars)
//   tl.current = () => curIndex
//   tl.toIndex = (index, vars) => toIndex(index, vars)
//   tl.times = times
//   tl.progress(1, true).progress(0, true) // pre-render for performance
//   if (config.reversed) {
//     tl.vars.onReverseComplete()
//     tl.reverse()
//   }
//   return tl
// }
</script>

<style scoped>
/* Note: Example of using GSAP ScrollTrigger with array of sections */
/* .container {
  margin: auto;
  outline: 10px solid green;
  width: 768px;
  margin-top: 50px;
}
.marquee {
  display: flex;
}

img {
  display: block;
}
.box {
  outline: 2px solid red;
} */
</style>
