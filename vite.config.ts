import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/panel/',
  server: {
    proxy: {
      '/graphql': {
        target: 'http://localhost:3434',
        ws: true,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        panel: 'index.html',
        chatbox: 'chatbox/index.html',
      },
    },
  },
});
