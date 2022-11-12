<template>
    <div>
        <MainHeader />
        <RouterView />
        <MainLoading />
        <MainModal :isModal="isModal">
            <template #alertMessage>{{ modalMessage }}</template>
        </MainModal>
        <!-- <ProjectsItem /> -->
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import MainHeader from '@/components/common/MainHeader.vue';
import MainLoading from './components/common/MainLoading.vue';
import MainModal from '@/components/common/MainModal.vue';
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import ProjectsItem from './components/projects/ProjectsItem.vue';

export default defineComponent({
    components: {
        MainHeader,
        MainLoading,
        MainModal,
        ProjectsItem,
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
        return {
            isModal,
            modalMessage,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
