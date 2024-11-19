import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

//导入支持Tailwindcss
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()], // 自动引入 Element Plus API
      imports: ["vue", "vue-router"],    // 自动引入 Vue 和 Vue Router 的 API
      dts: "src/types/auto-imports.d.ts",      // 生成类型声明文件
    }),
    Components({
      resolvers: [ElementPlusResolver()], // 自动按需注册 Element Plus 组件
      dts: "src/types/components.d.ts",         // 生成类型声明文件
    }),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
    postcss:{
      plugins:[
        tailwindcss,
        autoprefixer,
      ]
    }
  },

})

