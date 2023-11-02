import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import { copy } from 'copy-vite-plugin'

// vite.config.js
export default defineConfig({
  plugins: [
    eslintPlugin({ cache: false }),
    copy({
      pattern: [
        { from: 'src/_headers', to: '_headers' }
      ]
    })
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
    minify: false,
    //minifyIdentifiers: false,
    //keepNames: true,
    manifest: true,
    rollupOptions: {
      input: {
        global: './src/global.js',
        home: './src/home.js',
        studio: './src/studio.js',
        // work: './src/work.js',
        workdetail: './src/workdetail.js',
        faces: './src/faces.js',
        facesdetail: './src/facesdetail.js',
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
