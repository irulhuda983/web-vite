import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

const routes = [
    {
        name: 'Home',
        path: '/',
        meta: { menu: 'home' },
        component: () => import('../views/Home.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router