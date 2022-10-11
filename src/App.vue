<template>
    <div>
        <MainHeader />
        <div class="pageWrap">
            <RouterView />
        </div>
        <MainFooter />
        <MainLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainFooter from './components/common/MainFooter.vue';
import MainLoading from './components/common/MainLoading.vue';
import MainHeader from './components/common/MainHeader.vue';

export default defineComponent({
    components: {
        MainFooter,
        MainLoading,
        MainHeader,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
