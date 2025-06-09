import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import App from './App.vue'
import { routes } from './router/index'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router }) => {
    app.use(createPinia())
    
    // 配置SSG包含的路由
    const includedRoutes = ['/', '/visa', '/payment', '/destinations', '/etiquette']
    router.beforeEach((to, _from, next) => {
      if (import.meta.env.SSR && !includedRoutes.includes(to.path)) {
        return next('/')
      }
      next()
    })
  }
)
