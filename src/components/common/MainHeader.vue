<template>
    <header>
        <div class="headerWrap">
            <h1>
                <a href="#home">Moon<span>。</span></a>
            </h1>
            <div>
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
