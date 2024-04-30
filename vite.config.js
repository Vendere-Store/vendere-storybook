import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: './src/components/index.ts', // Adjust based on your entry file's location
      name: 'VendereStorybookTest', // This is a variable name used in UMD builds, should be a valid JS variable name
      formats: ['es', 'cjs'], // Output both ESM and CommonJS modules
      fileName: (format) => `vendere-storybook-test.${format}.js` // Naming convention for output files
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@headlessui/react', '@heroicons/react'], // Externalize these dependencies
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@headlessui/react': 'HeadlessUI',
          '@heroicons/react': 'Heroicons'
        }
      }
    }
  }
});
