import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-hsy",
    project: "javascript-react"
  })],

  resolve: {
    alias: [
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components')
      },
      {
        find: '@utils',
        replacement: resolve(__dirname, './src/utils')
      },
      {
        find: '@constants',
        replacement: resolve(__dirname, './src/constants')
      }
    ]
  },

  build: {
    sourcemap: true
  }
})