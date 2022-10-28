<template>
    <div>
        <MainSlide />
        <main></main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainSlide from '../components/main/MainSlide.vue';
// import MainSwiper from '../components/main/MainSwiper.vue';

export default defineComponent({
    components: {
        MainSlide,
        // MainSwiper,
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/IndexPage';
</style>
