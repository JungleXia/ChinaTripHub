import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// SSG configuration moved to main.ts

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  publicDir: 'public',
  build: {
    outDir: 'dist'
  }
})
