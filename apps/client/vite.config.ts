import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd(), '')
  // console.log('API_BASE_URL', `"${env.API_BASE_URL}"`);
  return {
    // define: {
    //   VITE_API_BASE_URL: JSON.stringify(env.API_BASE_URL)
    // },
    envDir: path.resolve(__dirname),

    server: {
      port: 8001
    },
    plugins: [react()]
  }
})
