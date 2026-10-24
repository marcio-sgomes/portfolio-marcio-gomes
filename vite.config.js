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
      // Mede todo o código do src, não só os arquivos que algum teste importa
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/**/*.spec.{js,jsx}', 'src/test/**'],
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
