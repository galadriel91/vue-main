<template>
    <div class="itemWrap">
        <div class="itemWrapInner">
            <div class="itemWrapInnerInfo">
                <div class="itemWrapInnerInfoImage">
                    <img :src="item.posts.mainImage" :alt="item.title" />
                    <div>
                        <span>{{ item.title }}</span>
                    </div>
                </div>
                <MainItemInfo :item="item" />
            </div>
            <div class="itemWrapInnerImage">
                <img
                    :src="item.posts.images[0].pc"
                    :alt="item.posts.images[0].alt"
                    @load="onLoadImage"
                />
            </div>
        </div>
        <div class="buttons">
            <button :class="isDark" class="dark" @click="onClickDark"></button>
            <button
                class="closeBtn xi-close-thin"
                @click="onClickClose"
            ></button>
        </div>
    </div>
</template>

<script lang="ts">
import type { ProjectItem } from '@/store/types';
import { defineComponent, type PropType, computed, ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';
import { useCommon } from '@/store/commonStore';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';
import MainItemInfo from './MainItemInfo.vue';
declare global {
    interface Window {
        fullpage_api: any;
    }
}

export default defineComponent({
    components: {
        MainItemInfo,
    },
    props: {
        item: {
            type: Object as PropType<ProjectItem>,
            required: true,
        },
    },
    setup() {
        const commonStore = useCommon();
        const { dark } = storeToRefs(commonStore);
        const isShow = ref(false);
        const postStore = usePost();
        const { OFF_MAINITEM } = postStore;
        const { OFF_LOADING } = commonStore;

        const onClickClose = () => {
            OFF_MAINITEM();
        };

        const onLoadImage = () => {
            OFF_LOADING();
        };

        const onClickDark = () => {
            dark.value = !dark.value;
            localStorage.setItem('dark', JSON.stringify(dark.value));
            document.body.classList.toggle('dark');
        };
        const isDark = computed(() => {
            return dark.value ? 'xi-sun' : 'xi-moon';
        });

        const initDark = () => {
            if (localStorage.dark) {
                dark.value = JSON.parse(localStorage.dark);
                if (dark.value == true) {
                    document.body.classList.add('dark');
                }
            }
        };

        const onClickInfo = () => {
            isShow.value = !isShow.value;
        };

        initDark();

        onMounted(() => {
            window.fullpage_api.setLockAnchors(true);
        });

        onUnmounted(() => {
            window.fullpage_api.setLockAnchors(false);
            location.replace('/#projects');
        });

        return {
            onClickClose,
            onLoadImage,
            isDark,
            dark,
            onClickDark,
            isShow,
            onClickInfo,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/MainItem.scss';
</style>
