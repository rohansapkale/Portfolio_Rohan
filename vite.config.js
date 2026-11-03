import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8085,
    strictPort: true,
    proxy: {
      '/api/ops': {
        target: 'http://127.0.0.1:8086',
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 8085
  }
})

