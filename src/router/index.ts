import { createRouter, createWebHistory, createMemoryHistory, type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/destinations',
    name: 'destinations',
    component: () => import('../views/DestinationsView.vue')
  },
  {
    path: '/visa',
    name: 'visa',
    component: () => import('../views/VisaView.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../views/PaymentView.vue')
  },
  {
    path: '/etiquette',
    name: 'etiquette',
    component: () => import('../views/EtiquetteView.vue')
  }
]

const router = createRouter({
  history: import.meta.env.SSR
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router