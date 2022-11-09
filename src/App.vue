<template>
    <div>
        <MainHeader />
        <FullPage ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                <MainIntro />
                <MainFooter />
            </div>
            <div class="section">
                <MainAbout />
                <MainWave />
            </div>
            <div class="section">
                <MainSkill />
                <MainFooter />
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
import { defineComponent, reactive } from 'vue';
import MainAbout from '@/components/about/MainAbout.vue';
import MainHeader from '@/components/common/MainHeader.vue';
import MainContact from '@/components/contact/MainContact.vue';
import MainProjects from '@/components/projects/MainProjects.vue';
import MainIntro from './components/main/MainIntro.vue';
import MainFooter from './components/common/MainFooter.vue';
import MainSkill from './components/skills/MainSkill.vue';
import MainWave from './components/common/MainWave.vue';

export default defineComponent({
    components: {
        MainIntro,
        MainAbout,
        MainContact,
        MainHeader,
        MainProjects,
        MainFooter,
        MainSkill,
        MainWave,
    },
    setup() {
        const options = reactive({
            licenseKey: import.meta.env.VITE_APP_FULLPAGE_KEY,
            menu: '#menu',
            // responsiveHeight: 800,
            anchors: ['home', 'about', 'projects', 'contact'],
            sectionsColor: ['#fff', '#bceef8', '#fff', '#bceef8', '#fff'],
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
