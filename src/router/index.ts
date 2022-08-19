import { createRouter, createWebHistory } from "vue-router"
const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     component: () => import('../view/about.vue')
    // }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router