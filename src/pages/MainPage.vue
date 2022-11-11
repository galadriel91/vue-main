<template>
    <div>
        <FullPage ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                <MainSlide />
            </div>
            <div class="section">
                <MainAbout />
                <MainWave />
            </div>
            <div class="section">
                <MainSkill />
                <MainWave />
            </div>
            <div class="section">
                <!-- <TheProjects /> -->
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
import MainContact from '@/components/contact/MainContact.vue';
import MainProjects from '@/components/projects/MainProjects.vue';
import MainFooter from '@/components/common/MainFooter.vue';
import MainSkill from '@/components/skills/MainSkill.vue';
import MainWave from '@/components/common/MainWave.vue';
import MainSlide from '@/components/main/MainSlide.vue';

export default defineComponent({
    components: {
        MainAbout,
        MainContact,
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
            // anchors: ['home', 'about', 'skill', 'projects', 'contact'],
            normalScrollElements: '.alertContainer .loadingWrap',
            sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
        });
        return {
            options,
        };
    },
});
</script>

<style lang="scss" scoped>
.fp-watermark {
    display: none !important;
}
</style>
