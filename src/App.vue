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
                <MainContact />
            </div>
        </FullPage>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import MainHeader from './components/common/MainHeader.vue';
import MainAbout from './components/main/MainAbout.vue';
import MainContact from './components/main/MainContact.vue';
import MainSlide from './components/main/MainSlide.vue';

export default defineComponent({
    components: {
        MainAbout,
        MainContact,
        MainHeader,
        MainSlide,
    },
    setup() {
        const options = reactive({
            licenseKey: 'YOUR_KEY_HEERE',
            menu: '#menu',
            anchors: ['page1', 'page2', 'page3'],
            sectionsColor: ['#fff', '#f7f7f7', '#0798ec'],
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
