import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detecta se está publicando no GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/teste-vercel/' : '/', // Para GitHub usa /teste-vercel/, para Vercel usa /
})
