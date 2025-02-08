import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Mosar/', // Remplace par le nom de ton repository
  plugins: [react()],
})
