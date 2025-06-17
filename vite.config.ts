import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ваш правильний base path для GitHub Pages
  base: '/LLM-Chat-Bot/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Для безпеки - не включати source maps в продакшн
    sourcemap: false,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});