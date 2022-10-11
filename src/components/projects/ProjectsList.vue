<template>
    <div>
        <transition-group name="list" tag="ul">
            <li
                v-for="item in projectsList.slice(0, showLimits)"
                :key="item.id"
            >
                <RouterLink :to="`/post/${item.id}`" class="clear">
                    <span>{{ 10 > item.id ? `0${item.id}` : item.id }}.</span>
                    <h3>{{ item.title }}</h3>
                    <div>
                        <span>
                            {{ item.time }}
                        </span>
                    </div>
                </RouterLink>
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
        const { MORE_POST } = postStore;
        const onClickMorePost = () => {
            MORE_POST();
        };
        return {
            onClickMorePost,
            hasMorePost,
            projectsList,
            showLimits,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/projects/ProjectsList';
</style>
