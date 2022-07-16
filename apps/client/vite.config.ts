import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    envDir: path.resolve(__dirname),

    server: {
      port: 8001
    },
    plugins: [react()]
  }
})
