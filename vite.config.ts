import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Adjust based on your project

export default defineConfig({
  plugins: [react()],
  base: '/mellacounseling/', // Replace 'repository-name' with your GitHub repo name
});
