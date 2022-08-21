import { createRouter, createWebHistory, RouterOptions } from "vue-router"
import layout from '@/views/layout/index.vue';
const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/home',
        component: layout,
        children:[{
          path: 'echarts',
          name:'echarts',
          component: () => import('@/views/echarts/index.vue'),
        }]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
