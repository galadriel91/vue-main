<template>
    <div>
        <MainHeader v-if="name !== 'HOME'" />
        <RouterView />
        <MainLoading />
        <MainModal :isModal="isModal">
            <template #alertMessage>{{ modalMessage }}</template>
        </MainModal>
        <MainItem v-if="isMain" :item="projectsList[itemIndex]" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, ref } from 'vue';
import { useCommon } from '@/store/commonStore';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
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
        const route = useRoute();
        const name = ref('');
        const setScreenSize = () => {
            const vh = window.innerHeight * 0.01;
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

        // HeaderName
        const editHeaderName = (value: string) => {
            const stringArray = value.split('').slice(1, value.length).join('');
            name.value = stringArray.toUpperCase();
            return stringArray.toUpperCase();
        };
        watch(
            () => {
                return route.hash;
            },
            () => {
                document.title = `WHITE TREE | ${editHeaderName(route.hash)}`;
            },
        );

        return {
            isModal,
            modalMessage,
            isMain,
            projectsList,
            itemIndex,
            name,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
