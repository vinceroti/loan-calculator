import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import 'media-blender';
          @import '@/styles/tools/_mixins';
          @import '@/styles/tools/_functions';
          @import '@/styles/settings/_globals';
          @import '@/styles/settings/_colors';
          @import '@/styles/settings/_fonts';
        `,
      },
    },
  },
  test: {
    testTimeout: 15000,
    globals: true,
    environment: 'jsdom',
  },
});
