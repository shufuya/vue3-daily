import { App } from 'vue'
import Echarts from './Echarts'

const components = [ Echarts]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component))
}


export default {
  install
}

