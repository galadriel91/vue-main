<template>
    <div>
        <MainHeader />
        <FullPage ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                <MainSlide />
            </div>
            <div class="section">
                <MainAbout />
            </div>
            <div class="section">
                <MainProjects />
            </div>
            <!-- <div class="section">
                <MainContact />
            </div> -->
        </FullPage>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import MainAbout from '@/components/about/MainAbout.vue';
import MainHeader from '@/components/common/MainHeader.vue';
import MainContact from './components/main/MainContact.vue';
import MainProjects from '@/components/projects/MainProjects.vue';
import MainSlide from './components/main/MainSlide.vue';

export default defineComponent({
    components: {
        MainAbout,
        MainContact,
        MainHeader,
        MainSlide,
        MainProjects,
    },
    setup() {
        const options = reactive({
            licenseKey: 'YOUR_KEY_HEERE',
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
