import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  root: './src', // index.html path
  build: {
    target: 'esnext',
    // root (= ./src) から見た相対パスで指定
    outDir: '../dist',
    emptyOutDir: true,
  },
  base: '/',
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: path.join(__dirname, './src/'),
      },
      {
        // amplify setting.
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
    ],
    /* alias: {
      '@/': path.join(__dirname, './src/'),
    }, */
  },
  server: {
    open: true,
    port: 8080, //default 3000
    // Configure custom proxy rules for the dev server.
    proxy: {
      // '/api': 'http://localhost:8000/api',
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
