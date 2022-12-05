<template>
    <header>
        <div class="headerWrap">
            <h1><a href="#home">PORTFOLIO</a></h1>
            <div>
                <nav :class="{ showing: isActive }">
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
                <button
                    :class="isDark"
                    @click="onClickDark"
                    class="dark"
                ></button>
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
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
    setup() {
        const isActive = ref(false);
        const dark = ref(false);
        const onToggleActive = () => {
            isActive.value = !isActive.value;
        };
        const onClickRemove = () => {
            isActive.value = false;
        };
        const onClickDark = () => {
            dark.value = !dark.value;
            localStorage.setItem('dark', JSON.stringify(dark.value));
            document.body.classList.toggle('dark');
        };
        const isDark = computed(() => {
            return dark.value ? 'xi-sun' : 'xi-moon';
        });
        const initDark = () => {
            if (localStorage.dark) {
                dark.value = JSON.parse(localStorage.dark);
                if (dark.value == true) {
                    document.body.classList.add('dark');
                }
            }
        };
        initDark();

        return {
            isActive,
            onToggleActive,
            onClickRemove,
            onClickDark,
            isDark,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/MainHeader';
</style>
