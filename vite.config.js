import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  build: {
    // Increase bundle size limit to avoid unnecessary warnings
    chunkSizeWarningLimit: 1500, // 1.5 MB — safe for Supabase + large UI libs
  },
})
