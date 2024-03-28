import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  // css预处理
  // css:{
  //   preprocessorOptions:{
  //     scss:{
  //       // 引入你设置的css文件  文件地址
  //       additionalData:`@import "./"`,
  //     }
  //   }
  // },
  plugins: [
    vue(),
  
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
})
