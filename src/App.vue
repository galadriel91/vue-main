<template>
    <div>
        <MainHeader />
        <FullPage ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                <MainSlide />
            </div>
            <div class="section about">
                <MainAbout />
                <MainWave />
            </div>
            <div class="section">
                <MainSkill />
                <MainWave />
            </div>
            <div class="section">
                <MainProjects />
                <MainWave />
            </div>
            <div class="section">
                <MainContact />
            </div>
            <div class="section fp-auto-height">
                <MainFooter />
            </div>
        </FullPage>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import MainAbout from '@/components/about/MainAbout.vue';
import MainHeader from '@/components/common/MainHeader.vue';
import MainContact from '@/components/contact/MainContact.vue';
import MainProjects from '@/components/projects/MainProjects.vue';
import MainFooter from './components/common/MainFooter.vue';
import MainSkill from './components/skills/MainSkill.vue';
import MainWave from './components/common/MainWave.vue';
import MainSlide from './components/main/MainSlide.vue';

export default defineComponent({
    components: {
        MainAbout,
        MainContact,
        MainHeader,
        MainProjects,
        MainFooter,
        MainSkill,
        MainWave,
        MainSlide,
    },
    setup() {
        const options = reactive({
            licenseKey: import.meta.env.VITE_APP_FULLPAGE_KEY,
            menu: '#menu',
            // responsiveHeight: 800,
            anchors: ['home', 'about', 'projects', 'contact'],
            sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
        });

        const setScreenSize = () => {
            const vh = window.innerHeight * 0.01;
            console.log(window.innerHeight);
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        onMounted(() => {
            setScreenSize();
            window.addEventListener('resize', () => setScreenSize());
        });
        return {
            options,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
