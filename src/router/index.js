import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (like when clicking "back"), use it
    if (savedPosition) {
      return savedPosition
    } else {
      // Otherwise, always scroll to top
      return { top: 0, behavior: 'smooth' } // Use 'auto' for instant jump
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/OurTeamView.vue'),
    },
    {
      path: '/programs',
      name: 'programs',
      component: () => import('../views/ProgramsView.vue'),
    },
    {
      path: '/impact',
      name: 'impact',
      component: () => import('../views/ImpactView.vue'),
    },
    {
      path: '/get-involved',
      name: 'get-involved',
      component: () => import('../views/GetInvolvedView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactUsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
