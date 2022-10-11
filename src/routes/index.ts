import { createWebHistory, createRouter } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)',
            redirect: '/404',
        },
        {
            path: '/',
            redirect: '/main',
        },

        {
            path: '/404',
            component: () => import('@/pages/NotPage.vue'),
        },
        {
            path: '/about',
            component: () => import('@/pages/AboutPage.vue'),
        },
        {
            path: '/contact',
            component: () => import('@/pages/ContactPage.vue'),
        },
    ],
});
