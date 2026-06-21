import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  vite: {
    resolve: {
      alias: {
        '@astgov/theme': path.resolve(__dirname, '../packages/theme'),
      },
    },
  },

});
