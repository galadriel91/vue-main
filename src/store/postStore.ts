import type { ProjectItem } from './types';
import { defineStore } from 'pinia';
import { db } from '@/utils/db';

export const usePost = defineStore('post', {
    state: () => ({
        projectsList: db as ProjectItem[],
        hasMorePost: true,
        showLimits: 3,
        isMain: false,
        itemIndex: 0,
        pageNum: 1,
        showNum: 0,
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
        SET_INDEX(value: number) {
            this.itemIndex = value;
        },
        SET_PAGENUM(value: number) {
            this.pageNum = value;
        },
        SET_SHOWNUM(value: number) {
            if (value === 0) {
                this.showNum = 0;
                this.showLimits = 3;
            } else {
                this.showNum = this.showLimits * (value - 1);
                this.showLimits = 3 * value;
            }
        },
        ON_MAINITEM() {
            this.isMain = true;
        },
        OFF_MAINITEM() {
            this.isMain = false;
        },
    },
});
