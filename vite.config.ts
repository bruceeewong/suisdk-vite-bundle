import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      fileName: 'index',
      name: 'suiReactHook'
    },
    sourcemap: true,
    emptyOutDir: false,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
