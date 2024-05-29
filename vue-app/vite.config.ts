import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  server: {
    fs: {
      allow: [
        '../localStorage', // Adicione aqui o caminho para a pasta 'localStorage'
        '../vue-app/src' // Adicione aqui o caminho para o diretório 'src' do seu projeto Vue
      ]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});