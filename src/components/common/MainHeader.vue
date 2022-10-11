<template>
    <header>
        <div class="headerWrap">
            <h1><RouterLink to="/">PORTFOLIO</RouterLink></h1>
            <div>
                <nav :class="{ showing: isActive }">
                    <ul>
                        <li @click="onClickRemove">
                            <RouterLink to="/"><span>Home</span></RouterLink>
                        </li>
                        <li @click="onClickRemove">
                            <RouterLink to="/about"
                                ><span>About</span></RouterLink
                            >
                        </li>
                        <li @click="onClickRemove">
                            <RouterLink to="/projects"
                                ><span>Projects</span></RouterLink
                            >
                        </li>
                        <li @click="onClickRemove">
                            <RouterLink to="/contact"
                                ><span>Contact</span></RouterLink
                            >
                        </li>
                    </ul>
                </nav>
                <a
                    href="javascript:void(0)"
                    class="wholeBtn"
                    @click="onToggleActive"
                >
                    <span :class="{ active: isActive }">&nbsp;</span>
                </a>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const isActive = ref(false);
        const onToggleActive = () => {
            isActive.value = !isActive.value;
        };
        const onClickRemove = () => {
            isActive.value = false;
        };
        return {
            isActive,
            onToggleActive,
            onClickRemove,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/MainHeader';
</style>
