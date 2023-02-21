<template>
    <div class="visualWrap">
        <div class="intro">
            <p>WEB <br class="responsiove" />DEVELOPER</p>
            <span>LEE MOON SEOB</span>
        </div>
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
import { defineComponent, onMounted, ref } from 'vue';
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

        onMounted(() => {
            onLoadImage();
        });

        return {
            isActive,
            onToggleActive,
            onClickRemove,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/main/MainIntro';
</style>
