<template>
    <div>
        <MainSlide />
        <main>
            <MainAbout />
        </main>
    </div>
</template>

<script lang="ts">
import MainAbout from '@/components/main/MainAbout.vue';
import { defineComponent } from 'vue';
import MainSlide from '../components/main/MainSlide.vue';
// import MainSwiper from '../components/main/MainSwiper.vue';

export default defineComponent({
    components: {
        MainSlide,
        MainAbout,
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/IndexPage';
</style>
