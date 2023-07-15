import { mergeConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 15000,
      globals: true,
      environment: 'jsdom',
    },
  }),
);
