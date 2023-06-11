/// <reference types="vitest" />
import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import injectCss from './injectcss'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: './src/exports',
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false
        }
      }
    }),
    injectCss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Zen',
      formats: ['es', 'cjs'],
      fileName: format => {
        return `[name].${format}.js`
      }
    },
    rollupOptions: {
      // preserveModules: true,
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  test: {
    transformMode: {
      web: [/\.[jt]sx$/]
    },
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi']
    },
    include: ['./src/**/*.spec.ts'],
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'testSetup.ts')]
  }
})
