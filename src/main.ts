import { createApp } from 'vue'
// @ts-ignore
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from "./router"
import * as echarts from 'echarts';
import Components from './components' // 全局组件

import 'ant-design-vue/dist/antd.css';
import i18n from "@/i18n/index";
import dayjs from 'dayjs'
import utils from '@/utils/index'

const app = createApp(App);

app.use(i18n);
app.use(router)
app.use(Components)
app.use(Antd).mount('#app');
app.provide('$dayjs', dayjs)
app.provide('$utils', utils)
app.provide('$echarts', echarts)

