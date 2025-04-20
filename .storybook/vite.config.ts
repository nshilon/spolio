import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

// This is a workaround for the MDX files that import from @/components
const mdxAliasPlugin = () => ({
  name: 'mdx-alias-plugin',
  resolveId(id, importer) {
    if (id.startsWith('@/components') && importer?.endsWith('.mdx')) {
      const relativePath = id.replace('@/components', '../lib/components');
      return resolve(__dirname, relativePath);
    }
    return null;
  }
});

export default defineConfig({
  plugins: [
    mdxAliasPlugin(),
    react({
      include: [/\.(jsx|tsx|mdx)$/],
    }),
    tsconfigPaths(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../lib'),
      '@/components': resolve(__dirname, '../lib/components'),
    },
  },
});
