import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@styles/base/functions" as *;
          @use "@styles/base/mixins" as *;
          @use "@styles/base/variables" as *;
        `,
      },
    },
  },
})