import { createWebHistory, createRouter } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/pages/MainPage.vue'),
        },
        {
            path: '/post/:id',
            component: () => import('@/pages/PostPage.vue'),
        },
    ],
});
