<template>
    <div
        class="alertContainer"
        @click="onClickClose"
        @keypress.enter="onClickClose"
        v-if="isModal"
    >
        <form class="buttonWrap" @submit.prevent="onClickClose">
            <h2>
                <slot name="alertMessage"></slot>
            </h2>
            <button class="xi-close" @click="onClickClose"></button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCommon } from '@/store/commonStore';

export default defineComponent({
    props: {
        isModal: {
            type: Boolean,
            required: true,
        },
    },
    setup() {
        const commonStore = useCommon();
        const { CLOSE_MODAL } = commonStore;
        const onClickClose = () => {
            CLOSE_MODAL();
        };
        return {
            onClickClose,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/contact/ContactModal';
</style>
