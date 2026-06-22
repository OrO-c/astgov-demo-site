import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@astgov/theme': path.resolve(__dirname, '../packages/theme/src'),
      },
    },
  },
});
