import { createWebHistory, createRouter } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/main',
        },
        {
            path: '/about',
            component: () => import('@/pages/AboutPage.vue'),
        },
    ],
});
