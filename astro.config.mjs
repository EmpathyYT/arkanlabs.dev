// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.local(),
    name: "LibronRegular",
    cssVariable: "--font-libron-regular",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Libron-Regular.woff2'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  },
{
    provider: fontProviders.local(),
    name: "HackedFont",
    cssVariable: "--font-hacked",
    options: {
      variants: [{
        src: ['./src/assets/fonts/HACKED.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }],
  vite: {
    plugins: [tailwindcss()],
  }
});