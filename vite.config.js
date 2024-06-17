const path = require('path')
import { defineConfig } from 'vite';

export default {
  root: path.resolve(__dirname, 'public'),
  server: {
    port: 8080,
    hot: true,
      build: {
    outDir: 'dist', // Répertoire de sortie
    rollupOptions: {
      input: 'index.html' // Fichier d'entrée pour Rollup
    }
  }
  }
}
