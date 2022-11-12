<template>
    <div>
        <transition-group name="list" tag="ul">
            <li
                v-for="(item, index) in projectsList.slice(0, showLimits)"
                :key="item.id"
                @click="onClickMainItem(index)"
            >
                <div class="clear">
                    <span>{{ 10 > item.id ? `0${item.id}` : item.id }}.</span>
                    <h3>{{ item.title }}</h3>
                    <div>
                        <span>
                            {{ item.time }}
                        </span>
                    </div>
                </div>
            </li>
        </transition-group>
        <button v-if="hasMorePost" @click="onClickMorePost">더보기</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const postStore = usePost();
        const { projectsList, showLimits, hasMorePost } =
            storeToRefs(postStore);
        const { MORE_POST, ON_MAINITEM, SET_INDEX } = postStore;
        const onClickMorePost = () => {
            MORE_POST();
        };
        const onClickMainItem = (value: number) => {
            ON_MAINITEM();
            SET_INDEX(value);
        };
        return {
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
