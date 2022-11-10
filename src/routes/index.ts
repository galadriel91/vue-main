import { createWebHistory, createRouter } from 'vue-router';
import { getPage } from './guard';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/pages/MainPage.vue'),
            beforeEnter: getPage(),
        },
    ],
});
