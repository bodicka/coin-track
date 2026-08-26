import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (source, filename) => {
          const normalized = filename.replace(/\\/g, '/')
          if (normalized.includes('/src/styles/')) return source
          return `@use "@/styles/variables" as *;\n@use "@/styles/mixins" as *;\n${source}`
        },
      },
    },
  },
})
