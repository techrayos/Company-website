import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({
      algorithm: 'brotliCompress', // or 'gzip'
      ext: '.br', // generate Brotli-compressed files
      threshold: 1024, // only compress files >1kb
      deleteOriginFile: false, // keep original uncompressed files
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz', // also generate Gzip files
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ],

  base: "/",

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },

  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    chunkSizeWarningLimit: 1500,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor'
            if (id.includes('@supabase')) return 'supabase-vendor'
            if (id.includes('framer-motion')) return 'motion-vendor'
            return 'vendor'
          }
        },
      },
    },
  },

  server: {
    port: 5173,
    open: true,
  },
})
