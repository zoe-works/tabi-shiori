import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/tabi-shiori/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.png', 'images/*'],
      manifest: {
        name: '旅のしおり',
        short_name: '旅のしおり',
        description: 'みんなで作る旅のしおりアプリ',
        theme_color: '#F0B4C4',
        background_color: '#FBF8F4',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/tabi-shiori/',
        icons: [
          { src: 'images/mascot.jpg', sizes: '192x192', type: 'image/jpeg' },
          { src: 'images/mascot.jpg', sizes: '512x512', type: 'image/jpeg' },
          { src: 'images/mascot.jpg', sizes: '512x512', type: 'image/jpeg', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'gstatic-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } }
          },
          {
            urlPattern: /^https:\/\/firebasestorage\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'firebase-storage-cache', expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 } }
          }
        ]
      }
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
