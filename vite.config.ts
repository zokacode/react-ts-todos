import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  base: process.env.NODE_ENV === 'production' ? '/react-ts-todos/' : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
})
