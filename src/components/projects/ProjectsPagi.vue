<template>
    <ul>
        <li
            v-for="item in pageIndex"
            :key="item"
            :class="{ active: item === pageNum }"
        >
            <button @click="onClickPagi(item)">{{ item }}</button>
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

        const onClickPagi = (index: number) => {
            SET_PAGENUM(index);
            SET_SHOWNUM(index);
        };

        return {
            pageIndex,
            pageNum,
            onClickPagi,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/projects/ProjectsPagi.scss';
</style>
