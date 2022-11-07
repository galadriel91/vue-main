import type { ProjectItem } from './types';
import { defineStore } from 'pinia';
import { db } from '@/utils/db';

export const usePost = defineStore('post', {
    state: () => ({
        projectsList: db as ProjectItem[],
        hasMorePost: true,
        showLimits: 3,
    }),
    actions: {
        MORE_POST() {
            const diff = this.projectsList.length > this.showLimits;
            if (diff) {
                this.showLimits = this.showLimits + 3;
            } else {
                this.showLimits = 3;
            }
            this.hasMorePost = this.projectsList.length > this.showLimits;
        },
    },
});
