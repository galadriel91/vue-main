<template>
    <div>
        <MainHeader />
        <RouterView />
        <MainLoading />
        <MainModal :isModal="isModal">
            <template #alertMessage>{{ modalMessage }}</template>
        </MainModal>
        <MainItem v-if="isMain" :item="projectsList[itemIndex]" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useCommon } from '@/store/commonStore';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';
import MainHeader from '@/components/common/MainHeader.vue';
import MainLoading from './components/common/MainLoading.vue';
import MainModal from '@/components/common/MainModal.vue';
import MainItem from './components/common/MainItem.vue';

export default defineComponent({
    components: {
        MainHeader,
        MainLoading,
        MainModal,
        MainItem,
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
        // Modal
        const commonStore = useCommon();
        const { isModal, modalMessage } = storeToRefs(commonStore);
        //Item
        const postStore = usePost();
        const { isMain, projectsList, itemIndex } = storeToRefs(postStore);

        return {
            isModal,
            modalMessage,
            isMain,
            projectsList,
            itemIndex,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
