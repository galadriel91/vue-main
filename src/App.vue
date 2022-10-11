<template>
    <div>
        <MainFooter />
        <MainLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainFooter from './components/common/MainFooter.vue';
import MainLoading from './components/common/MainLoading.vue';

export default defineComponent({
    components: {
        MainFooter,
        MainLoading,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
