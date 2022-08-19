import { createApp } from 'vue'
// @ts-ignore
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from "./router"
import 'ant-design-vue/dist/antd.css';
import i18n from "@/i18n/index";

const app = createApp(App);

app.use(i18n);
app.use(router)
app.use(Antd).mount('#app');
