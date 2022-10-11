<template>
    <div>
        <MainFooter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainFooter from './components/common/MainFooter.vue';

export default defineComponent({
    components: {
        MainFooter,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
