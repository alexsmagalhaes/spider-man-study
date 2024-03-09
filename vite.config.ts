import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 90,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 90,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 90,
      },
      tiff: {
        // https://sharp.pixelplumbing.com/api-output#tiff
        quality: 90,
      },
      // gif does not support lossless compression
      // https://sharp.pixelplumbing.com/api-output#gif
      gif: {},
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
      },
      cache: true,
      cacheLocation: undefined,
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})


