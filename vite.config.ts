import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// User page (ewertonslv.github.io) is served from the domain root → base '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
