<template>
    <div class="itemWrap">
        <button class="closeBtn xi-close-thin" @click="onClickClose"></button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePost } from '@/store/postStore';
export default defineComponent({
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
