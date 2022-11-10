<template>
    <div>
        <MainHeader />
        <RouterView />
        <MainLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import MainHeader from '@/components/common/MainHeader.vue';
import MainLoading from './components/common/MainLoading.vue';

export default defineComponent({
    components: {
        MainHeader,
        MainLoading,
    },
    setup() {
        const setScreenSize = () => {
            const vh = window.innerHeight * 0.01;
            console.log(window.innerHeight);
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        onMounted(() => {
            setScreenSize();
            window.addEventListener('resize', () => setScreenSize());
        });
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
