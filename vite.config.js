import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-deploy/"
  // base: '/Honey_Online_Website/', // Comment out or remove this line for local development
})
