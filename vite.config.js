import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'


// vite.config.js
export default defineConfig({
  plugins: [
    eslintPlugin({ cache: false }),
  ],
  server: {
    host: 'localhost',
    cors: '*',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
  build: {
    minify: true,
    minifyIdentifiers: false,
    manifest: true,
    rollupOptions: {
      input: {
        global: './src/global.js',
        home: './src/home.js',
        // studio: './src/studio.js',
        // work: './src/work.js',
        // workdetail: './src/work-detail.js',
        faces: './src/faces.js',
        // facesdetail: './src/faces-detail.js',
      },
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        esModule: false,
        compact: true,
        globals: {
          jquery: '$',
        },
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
      external: ['jquery'],
    },
  },
})
