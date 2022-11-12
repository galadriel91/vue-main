<template>
    <div class="itemWrap">
        <div>
            <img :src="item.posts.mainImage" />
        </div>
        <button class="closeBtn xi-close-thin" @click="onClickClose"></button>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { usePost } from '@/store/postStore';
import type { ProjectItem } from '@/store/types';
export default defineComponent({
    props: {
        item: {
            type: Object as PropType<ProjectItem>,
            required: true,
        },
    },
    setup() {
        const postStore = usePost();
        const { OFF_MAINITEM } = postStore;

        const onClickClose = () => {
            OFF_MAINITEM();
        };
        return {
            onClickClose,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/MainItem.scss';
</style>
