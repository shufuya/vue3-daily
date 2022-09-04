import { App } from 'vue'
import Echarts from './index.vue'

// 定义 install 方法， App 作为参数
Echarts.install = (app: App): void => {
    app.component(Echarts.name, Echarts)
}

export default Echarts

