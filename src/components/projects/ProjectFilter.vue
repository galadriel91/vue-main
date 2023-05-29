<template>
    <div class="btnWrap">
        <button
            @click="onClickInit('first')"
            :class="{ active: isActive === 'first' }"
        >
            ALL
        </button>
        <button
            @click="onClickWeb('second')"
            :class="{ active: isActive === 'second' }"
        >
            HTML
        </button>
        <button
            @click="onClickJs('third')"
            :class="{ active: isActive === 'third' }"
        >
            JS
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const isActive = ref('first');
        const postStore = usePost();
        const { projectsList } = storeToRefs(postStore);
        const { INIT_POST } = postStore;

        const onClickInit = (value: string) => {
            INIT_POST();
            isActive.value = value;
        };

        const onClickWeb = (value: string) => {
            INIT_POST();
            isActive.value = value;
            projectsList.value = projectsList.value.filter(item => {
                if (item.web) {
                    return item;
                }
            });
        };

        const onClickJs = (value: string) => {
            INIT_POST();
            isActive.value = value;
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
            isActive,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/projects/ProjectsFilter.scss';
</style>
