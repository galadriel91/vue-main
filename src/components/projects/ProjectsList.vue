<template>
    <div>
        <ul>
            <li
                v-for="(item, index) in projectsList.slice(showNum, showLimits)"
                :key="item.id"
                @click="onClickMainItem(index + showNum)"
            >
                <div class="listWrap">
                    <div class="indexWrap">
                        <span
                            >{{
                                10 > showNum + 1
                                    ? `0${showNum + index + 1}`
                                    : showNum + index + 1
                            }}.</span
                        >
                        <h3>{{ item.title }}</h3>
                    </div>
                    <div class="classWrap">
                        <span v-if="item.markup">#Web</span>
                        <span v-if="item.react">#React</span>
                        <span v-if="item.vue">#Vue</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { useCommon } from '@/store/commonStore';
import { usePost } from '@/store/postStore';
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const postStore = usePost();
        const commonStore = useCommon();
        const { ON_LOADING } = commonStore;
        const { projectsList, showLimits, hasMorePost, showNum } =
            storeToRefs(postStore);
        const { MORE_POST, ON_MAINITEM, SET_INDEX } = postStore;
        const onClickMorePost = () => {
            MORE_POST();
        };
        const onClickMainItem = (value: number) => {
            ON_LOADING();
            ON_MAINITEM();
            SET_INDEX(value);
        };

        return {
            showNum,
            onClickMorePost,
            hasMorePost,
            projectsList,
            showLimits,
            onClickMainItem,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/projects/ProjectsList';
</style>
