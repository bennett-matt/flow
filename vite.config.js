const path = require('path')
const { defineConfig } = require('vite');
import bundleCss from "vite-plugin-bundle-css";


module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'static/js/main.js'),
      name: 'output',
      formats: ['umd'],
      fileName: '[name].js',
    },
    outDir: "dist/js",
  },
  plugins: [
    // bundleCss({ include: ['static/**/*.css'] })
  ]
});