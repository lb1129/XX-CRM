import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      extensions: ['vue', 'tsx'],
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true,
          importStyle: 'less'
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
      }
    }
  }
})
