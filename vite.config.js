import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setupTests.js',
    coverage: {
      provider: 'v8',
      // Regra de 97% de aceite exigida:
      thresholds: {
        lines: 97,
        functions: 97,
        branches: 97,
        statements: 97
      }
    }
  },
  server: {
    open: true
  }
})
