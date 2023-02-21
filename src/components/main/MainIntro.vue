<template>
    <div class="visualWrap">
        <div class="intro">
            <p>WEB <br class="responsiove" />DEVELOPER</p>
            <span>LEE MOON SEOB</span>
        </div>
        <div class="scroll">
            <p>scroll</p>
            <span></span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useCommon } from '@/store/commonStore';

export default defineComponent({
    setup() {
        const commonStore = useCommon();
        const { OFF_LOADING } = commonStore;

        const onLoadImage = () => {
            OFF_LOADING();
        };

        onMounted(() => {
            onLoadImage();
        });

        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/main/MainIntro';
</style>
