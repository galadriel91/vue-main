<template>
    <div class="container">
        <PostItem :post="POST" />
        <!-- <MainFooter /> -->
    </div>
</template>

<script lang="ts">
import type { ProjectItem } from '@/store/types';
import { computed, defineComponent, type ComputedRef } from 'vue';
// import { useLoading } from '@/composables/useLoading';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import PostItem from '../components/post/PostItem.vue';
// import MainFooter from '@/components/common/MainFooter.vue';

export default defineComponent({
    components: {
        PostItem,
        // MainFooter,
    },
    setup() {
        // useLoading();
        const route = useRoute();
        const postStore = usePost();
        const { projectsList } = storeToRefs(postStore);
        const POST: ComputedRef<ProjectItem> = computed(() => {
            const postItem = projectsList.value.find(
                v => v.id === parseInt(route.params.id as string, 10),
            );
            return postItem as ProjectItem;
        });

        return {
            POST,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/DetailPage';
</style>
