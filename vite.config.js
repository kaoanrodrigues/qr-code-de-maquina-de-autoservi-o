import { defineConfig } from 'vite'

export default defineConfig({
  base: '/qr-code-de-maquina-de-autoservi-o/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html'
    }
  }
})
