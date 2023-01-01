<template>
    <ul>
        <li>
            <button
                class="material-symbols-outlined"
                :class="{ disable: pageNum === 1 }"
                :disabled="pageNum === 1"
                @click="onMovePagi(pageNum - 1)"
            >
                keyboard_arrow_left
            </button>
        </li>
        <li>
            <span>{{ pageNum }}</span>
        </li>
        <li>
            <button
                class="material-symbols-outlined"
                :class="{ disable: pageIndex === pageNum }"
                :disabled="pageIndex === pageNum"
                @click="onMovePagi(pageNum + 1)"
            >
                keyboard_arrow_right
            </button>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, computed, type ComputedRef } from 'vue';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const post = usePost();
        const { projectsList, pageNum } = storeToRefs(post);
        const { SET_PAGENUM, SET_SHOWNUM } = post;

        const pageIndex: ComputedRef<number> = computed(() => {
            return Math.ceil(projectsList.value.length / 3);
        });

        const onMovePagi = (index: number) => {
            SET_PAGENUM(index);
            SET_SHOWNUM(index);
        };

        return {
            pageIndex,
            pageNum,
            onMovePagi,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/projects/ProjectsPagi.scss';
</style>
