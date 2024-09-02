/// <reference types="vite" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

/// <reference types="vite/client" />
//
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js'
  }
})
