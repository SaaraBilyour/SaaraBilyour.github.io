import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/', 
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Labo1 PWA',
        short_name: 'Labo1',
        description: 'A PWA displaying a list of items.',
        theme_color: '#42b883',
        icons: [
          { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,ico}'], // Include all static files
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50, // 50 images
                maxAgeSeconds: 7 * 24 * 60 * 60, //  7 days
              },
            },
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/icon-'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'icons-cache',
              expiration: {
                maxEntries: 5,
              },
            },
          },
        ],
      },
    }),
  ],
});
