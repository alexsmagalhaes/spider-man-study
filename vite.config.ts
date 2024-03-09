import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // File types to optimize
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
              },
              floatPrecision: 2, // Adjust as needed
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      png: {
        // PNG optimization settings
        quality: 100,
      },
      jpeg: {
        // JPEG optimization settings
        quality: 100,
      },
      jpg: {
        // JPG optimization settings
        quality: 100,
      },
      tiff: {
        // TIFF optimization settings
        quality: 100,
      },
      // GIF optimization settings
      gif: {},
      webp: {
        // WebP optimization settings
        lossless: true,
      },
      avif: {
        // AVIF optimization settings
        lossless: true,
      },
      cache: false, // Disable caching
      cacheLocation: undefined, // Let the plugin handle cache location
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})


