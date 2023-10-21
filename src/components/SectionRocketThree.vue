<template>
  <div id="rocket-three" class="tw-h-[1000px]">
    <canvas ref="experience" class="tw-sticky"></canvas>
  </div>
</template>

<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  SphereGeometry,
  MeshStandardMaterial,
  PointLight,
  AmbientLight,
  TextureLoader,
  PointLightHelper,
  GridHelper,
  MathUtils,
  Group
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Moon from '@/assets/images/moon.jpeg'
import { computed, onMounted, ref, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

let renderer: WebGLRenderer
let camera: PerspectiveCamera
// let controls: OrbitControls

const experience = ref<HTMLCanvasElement | null>(null)
const scene = new Scene()

const { width, height } = useWindowSize()

const aspectRatio = computed(() => width.value / height.value)

const updateRenderer = () => {
  renderer.setSize(width.value, height.value)
  renderer.setPixelRatio(window.devicePixelRatio)
}

const updateCamera = () => {
  camera.aspect = aspectRatio.value
  camera.updateProjectionMatrix()
}

watch(aspectRatio, updateRenderer)
watch(aspectRatio, updateCamera)

// Camera
camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000)
const cameraInitialPosition = {
  x: -2,
  y: 2,
  z: 4
}
camera.position.set(cameraInitialPosition.x, cameraInitialPosition.y, cameraInitialPosition.z)

// Background
const spaceTexture = new TextureLoader().load('space.jpeg')
scene.background = spaceTexture

// Lights
const pointLight = new PointLight(0xffffff, 150, 1000, 2) // white
pointLight.position.set(5, 5, 5)

const ambientLight = new AmbientLight(0xf5f5f5) // soft white
scene.add(pointLight, ambientLight)

// Helpers
const lightHelper = new PointLightHelper(pointLight)
const gridHelper = new GridHelper(200, 50)
// scene.add(lightHelper, gridHelper)

// Moon
const moonTexture = new TextureLoader().load(Moon)
const moon = new Mesh(
  new SphereGeometry(3, 32, 32),
  new MeshStandardMaterial({
    map: moonTexture
  })
)
scene.add(moon)

// Rocket
let rocket: Group
const rocketInitialPosition = {
  x: -3,
  y: 0,
  z: -10
}
const loader = new GLTFLoader()
loader.load(
  '/toy_rocket/scene.gltf',
  (gltf) => {
    scene.add(gltf.scene)
    rocket = gltf.scene
    gltf.animations // Array<THREE.AnimationClip>
    gltf.scene // THREE.Group
    gltf.scenes // Array<THREE.Group>
    gltf.cameras // Array<THREE.Camera>
    gltf.asset // Object

    gltf.scene.rotateX(Math.PI / 3)
    gltf.scene.position.set(
      rocketInitialPosition.x,
      rocketInitialPosition.y,
      rocketInitialPosition.z
    )
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
  },
  (error) => {
    console.log('An error happened', error)
  }
)

// Stars
function addStar() {
  const light = new PointLight(0xff0040, 400)
  const geometry = new SphereGeometry(0.25, 24, 24)
  const material = new MeshStandardMaterial({
    color: 0xfde047
  })
  const star = new Mesh(geometry, material)

  const [x, y, z] = Array(3)
    // @ts-ignore
    .fill()
    .map(() => MathUtils.randFloatSpread(100))

  star.position.set(x, y, z)
  scene.add(star)
}
// @ts-ignore
Array(200).fill().forEach(addStar)

const animate = () => {
  requestAnimationFrame(animate)

  moon.rotation.y += 0.005

  renderer.render(scene, camera)
}

// Scroll Animation
const moveCamera = () => {
  const t = document.body.getBoundingClientRect().top

  // Moon rotation
  moon.rotation.y += 0.075
  // Moon position
  moon.position.z = t * 0.02
  moon.position.x = t * -0.02
  moon.position.y = t * 0.005

  // Rocket
  const radius = 2
  const angle = t * -0.003
  const x = Math.cos(angle) * radius + rocketInitialPosition.x
  const y = Math.sin(angle) * radius + rocketInitialPosition.y
  const z = angle * radius + rocketInitialPosition.z
  // Update rocket position
  rocket.position.set(x, y, z)
  // Update rocket to always look at its direction
  rocket.lookAt(0, 30, -20)

  // Camera position
  const cameraSpeed = -0.002
  camera.position.x = cameraInitialPosition.x
  camera.position.y = cameraInitialPosition.y
  camera.position.z = t * cameraSpeed + cameraInitialPosition.z
}

onMounted(() => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '#rocket-three',
      scrub: 1,
      pin: true,
      // markers: true,
      start: 'top top',
      end: '+=2000px'
    }
  })

  renderer = new WebGLRenderer({
    canvas: experience.value as unknown as HTMLCanvasElement,
    antialias: true
  })
  // controls = new OrbitControls(camera, renderer.domElement)
  // controls.update()

  updateRenderer()
  updateCamera()

  animate()

  document.body.onscroll = moveCamera
  moveCamera()
})
</script>

<style scoped>
/* canvas {
  position: fixed;
  top: 0;
  left: 0;
} */
</style>
