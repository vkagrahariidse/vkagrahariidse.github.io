// @ts-check
import { defineConfig } from 'astro/config';
import { fontless } from 'fontless';

// https://astro.build/config
export default defineConfig({
  site: 'https://vkagrahariidse.github.io/',
  vite: {
    plugins: [
      fontless({
        families: [
          {
            name: 'Noto Serif',
            provider: 'google',
            weights: [300, 500, 700],
          },
        ],
      })
    ],
  },
});