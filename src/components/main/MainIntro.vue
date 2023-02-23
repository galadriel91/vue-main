<template>
    <div class="visualWrap">
        <img
            class="intro window"
            src="@/assets/image/word.png"
            alt="word"
            @load="onLoadImage"
        />
        <img
            class="intro mobile"
            src="@/assets/image/word1.png"
            alt="word"
            @load="onLoadImage"
        />
        <nav :class="{ showing: isActive }" class="nav">
            <ul id="menu">
                <li data-menuanchor="home" @click="onClickRemove">
                    <a href="#home"><span>Home</span></a>
                </li>
                <li data-menuanchor="about" @click="onClickRemove">
                    <a href="#about"><span>About</span></a>
                </li>
                <li data-menuanchor="skill" @click="onClickRemove">
                    <a href="#skill"><span>Skill</span></a>
                </li>
                <li data-menuanchor="projects" @click="onClickRemove">
                    <a href="#projects"><span>Projects</span></a>
                </li>
                <li data-menuanchor="contact" @click="onClickRemove">
                    <a href="#contact"><span>Contact</span></a>
                </li>
            </ul>
        </nav>
        <a href="javascript:void(0)" class="wholeBtn" @click="onToggleActive">
            <span :class="{ active: isActive }">&nbsp;</span>
        </a>
        <div class="scroll">
            <p>scroll</p>
            <span></span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useCommon } from '@/store/commonStore';

export default defineComponent({
    setup() {
        const isActive = ref(false);
        const commonStore = useCommon();
        const { OFF_LOADING } = commonStore;

        const onToggleActive = () => {
            isActive.value = !isActive.value;
        };

        const onClickRemove = () => {
            isActive.value = false;
        };

        const onLoadImage = () => {
            OFF_LOADING();
        };

        return {
            isActive,
            onToggleActive,
            onClickRemove,
            onLoadImage,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/main/MainIntro';
</style>
