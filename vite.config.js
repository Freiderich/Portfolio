import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow network access from LAN / ngrok
    port: 5175, // your dev server port
    allowedHosts: 'all' // accept requests from any hostname
  }
})
