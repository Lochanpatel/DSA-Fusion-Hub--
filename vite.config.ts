import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/DSA-Fusion-Hub--/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
