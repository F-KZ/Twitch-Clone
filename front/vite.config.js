import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base :"/Twitch-Clone/",
  server: {
    https : {
      key : './project-1-privateKey.key',
      cert : './project-1.crt',
    }
  }
})
