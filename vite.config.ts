/// <reference types="vitest" />
import {defineConfig} from 'vite';
// @ts-ignore
import react from '@vitejs/plugin-react';
import {resolve} from 'path';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from "vite-tsconfig-paths";
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [react(), tsconfigPaths(), tailwindcss(), dts({rollupTypes: true})],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./lib/test/setup.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/',
                'lib/test/setup.ts',
                '**/*.stories.tsx',
                'storybook-static/',
                '**/generated/**',
                '.storybook/**',
                '**/build-svg-icons.cjs',
            ],
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/index.ts'),
            name: 'simple-ui',
            formats: ['es', 'cjs'],
            fileName: (format) => `simple-ui.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                inlineDynamicImports: false,
                preserveModules: true,
                exports: 'named',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'react/jsx-runtime',
                },
            },
        },
    },
});