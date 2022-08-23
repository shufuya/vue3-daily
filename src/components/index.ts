
import Echarts from './Echarts/index.vue'

const components = {
  Echarts
}

function install(Vue: any) {
  // 全局注册扩展组件

  Object.keys(components).forEach((key: any) => {
    const component = components[key]

    // 全局组件注册
    Vue.component(component.name, component)
  })
}

export default {
  ...components,
  install
}
