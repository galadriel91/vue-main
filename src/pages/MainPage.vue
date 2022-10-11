<template>
    <div>
        <MainSlide />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainSlide from '../components/main/MainSlide.vue';

export default defineComponent({
    components: {
        MainSlide,
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/IndexPage';
</style>
