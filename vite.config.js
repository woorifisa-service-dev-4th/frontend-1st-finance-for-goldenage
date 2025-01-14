import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 원하는 포트로 변경
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  },
  css: {
    postcss: './postcss.config.js', // PostCSS 설정 파일 경로 명시
  },
})
