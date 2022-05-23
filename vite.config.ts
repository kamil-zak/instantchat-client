import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        panel: 'index.html',
        chatbox: 'chatbox/chatbox.html',
      },
    },
  },
});
