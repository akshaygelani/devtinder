import { defineConfig } from 'vite';
import { DEV_SERVER_PORT } from './src/utils/constants';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: DEV_SERVER_PORT },
});
