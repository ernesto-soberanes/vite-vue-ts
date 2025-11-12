import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import test from 'node:test'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    testTimeout: 20000
  }
})
