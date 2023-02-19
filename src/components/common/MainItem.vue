<template>
    <div class="itemWrap">
        <div class="itemWrapInner">
            <div class="itemWrapInnerInfo">
                <div class="itemWrapInnerInfoImage">
                    <img
                        :src="item.posts.mainImage"
                        :alt="item.title"
                        @load="onLoadImage"
                    />
                    <div>
                        <span>{{ item.title }}</span>
                    </div>
                </div>
                <div class="itemWrapInnerInfoFlex">
                    <div class="itemWrapInnerInfoFlexText">
                        <p v-for="(value, i) in item.posts.subtitle" :key="i">
                            {{ value }}
                        </p>
                        <div class="linkWrap">
                            <a :href="item.posts.sites[0].link"
                                >배포사이트
                                <span class="xi-long-arrow-right"></span
                            ></a>
                            <a :href="item.posts.sites[1].link"
                                >상세정보
                                <span class="xi-long-arrow-right"></span
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="itemWrapInnerImage">
                <img
                    :src="item.posts.images[0].pc"
                    :alt="item.posts.images[0].alt"
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
import {
    defineComponent,
    onMounted,
    onUnmounted,
    type PropType,
    computed,
    ref,
} from 'vue';
import type { ProjectItem } from '@/store/types';
import { useCommon } from '@/store/commonStore';
import { usePost } from '@/store/postStore';

declare global {
    interface Window {
        fullpage_api: any;
    }
}

export default defineComponent({
    props: {
        item: {
            type: Object as PropType<ProjectItem>,
            required: true,
        },
    },
    setup() {
        const dark = ref(false);
        const postStore = usePost();
        const { OFF_MAINITEM } = postStore;
        const commonStore = useCommon();
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
            onClickDark,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/MainItem.scss';
</style>
