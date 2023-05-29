<template>
    <div class="btnWrap">
        <button @click="onClickInit" class="active">ALL</button>
        <button @click="onClickWeb">HTML</button>
        <button @click="onClickJs">JS</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const postStore = usePost();
        const { projectsList } = storeToRefs(postStore);
        const { INIT_POST } = postStore;

        const onClickInit = () => {
            INIT_POST();
        };
        const onClickWeb = () => {
            INIT_POST();
            projectsList.value = projectsList.value.filter(item => {
                if (item.web) {
                    return item;
                }
            });
        };
        const onClickJs = () => {
            INIT_POST();
            projectsList.value = projectsList.value.filter(item => {
                if (item.web == null) {
                    return item;
                }
            });
        };
        return {
            onClickInit,
            onClickWeb,
            onClickJs,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/projects/ProjectsFilter.scss';
</style>
