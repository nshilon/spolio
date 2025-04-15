/// <reference types="vitest" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';
import tsconfigPaths from "vite-tsconfig-paths";
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [react(), tsconfigPaths(), dts({rollupTypes: true})],
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
            ],
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/index.ts'),
            name: 'simple-ui',
            fileName: (format) => `simple-ui.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'react/jsx-runtime',
                },
            },
        },
    },
});