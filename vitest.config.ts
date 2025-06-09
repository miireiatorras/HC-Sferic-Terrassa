import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

//import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
//import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        react(),
        tsconfigPaths(),
        // Integra tu Storybook como antes, pero dentro de esta config
        // storybookTest({
        //     configDir: path.resolve(__dirname, '.storybook'),
        // }),
    ],
    test: {
        globals: true, // para describe/it/expect
        environment: 'jsdom', // DOM simulado
        setupFiles: ['.storybook/vitest.setup.ts'],
        // incluye tanto tus tests (*.test.tsx) como tus stories
        include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    },
});
