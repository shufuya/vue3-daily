import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve(__dirname, 'src'), // 路径别名
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
        },
        extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "src/assets/scss/global.scss";' // 添加公共样式
            }
        }
    }
})
