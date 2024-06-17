import { defineConfig } from 'vite';
const path = require('path');

export default defineConfig({
  root: path.resolve(__dirname, 'public'),
  server: {
    port: 8080,
    hot: true
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'), 
    rollupOptions: {
      input: path.resolve(__dirname, 'public/index.html') 
    }
  }
});