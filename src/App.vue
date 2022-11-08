<template>
    <div>
        <MainHeader />
        <FullPage ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                <MainSlide />
                <!-- <MainSwiper /> -->
            </div>
            <!-- <div class="section">
                <MainAbout />
            </div>
            <div class="section">
                <MainProjects />
            </div>
            <div class="section">
                <MainContact />
            </div>
            <div class="section fp-auto-height">
                <MainFooter />
            </div> -->
        </FullPage>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import MainAbout from '@/components/about/MainAbout.vue';
import MainHeader from '@/components/common/MainHeader.vue';
import MainContact from '@/components/contact/MainContact.vue';
import MainProjects from '@/components/projects/MainProjects.vue';
import MainSlide from './components/main/MainSlide.vue';
import MainIntro from './components/main/MainIntro.vue';
import MainFooter from './components/common/MainFooter.vue';
// // import MainSwiper from './components/main/MainSwiper.vue';

export default defineComponent({
    components: {
        MainIntro,
        MainAbout,
        MainContact,
        MainHeader,
        MainSlide,
        MainProjects,
        MainFooter,
    },
    setup() {
        const options = reactive({
            licenseKey: import.meta.env.VITE_APP_FULLPAGE_KEY,
            menu: '#menu',
            anchors: ['home', 'about', 'projects', 'contact'],
            sectionsColor: ['#fff', '#f7f7f7', '#fff', '#fff'],
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
