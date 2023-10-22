import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/IndexView.vue')
    }
    // Note: implement this when deployed in a hosting service
    // {
    //   path: '/archive',
    //   name: 'archive',
    //   component: () => import('@/views/ArchiveView.vue')
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    // Note: implement this when deployed in a hosting service
    if (to.name === 'archive') {
      return { top: 0 }
    }
  }
})

export default router
