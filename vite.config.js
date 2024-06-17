import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'public'), 
  server: {
    port: 8080,
    hot: true
  },
  build: {
    outDir: path.resolve(__dirname, 'public/dist'), 
    rollupOptions: {
      input: path.resolve(__dirname, 'public/index.html') 
    }
  }
});
