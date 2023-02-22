<template>
    <div>
        <FullPage ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                <MainIntro />
            </div>
            <div class="section">
                <MainAbout />
                <MainWave>
                    <template #waveMessage>ABOUT ME</template>
                </MainWave>
            </div>
            <div class="section">
                <MainSkill />
                <MainWave>
                    <template #waveMessage>SKILL</template>
                </MainWave>
            </div>
            <div class="section">
                <MainProjects />
                <MainWave>
                    <template #waveMessage>PROJECTS</template>
                </MainWave>
            </div>
            <div class="section">
                <MainContact />
                <MainWave v-if="isResponsive > 960">
                    <template #waveMessage>© {{ YEAR }} LEE MOON SEOB</template>
                </MainWave>
            </div>
        </FullPage>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    reactive,
    computed,
    onMounted,
    type ComputedRef,
} from 'vue';
import MainAbout from '@/components/about/MainAbout.vue';
import MainContact from '@/components/contact/MainContact.vue';
import MainProjects from '@/components/projects/MainProjects.vue';
import MainSkill from '@/components/skills/MainSkill.vue';
import MainWave from '@/components/common/MainWave.vue';
import MainIntro from '@/components/main/MainIntro.vue';

export default defineComponent({
    components: {
        MainAbout,
        MainContact,
        MainProjects,
        MainSkill,
        MainWave,
        MainIntro,
    },
    setup() {
        const isResponsive = ref(1920);
        const options = reactive({
            licenseKey: import.meta.env.VITE_APP_FULLPAGE_KEY,
            menu: '#menu',
            anchors: ['home', 'about', 'skill', 'projects', 'contact'],
            normalScrollElements:
                '.alertContainer, .loadingWrap, .projectsWrap, .itemWrap, .nav',
            sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
            css3: true,
        });
        const YEAR: ComputedRef<number> = computed(() => {
            return new Date().getFullYear();
        });
        onMounted(() => {
            isResponsive.value = window.innerWidth;
            window.addEventListener('resize', () => {
                isResponsive.value = window.innerWidth;
            });
        });
        return {
            YEAR,
            options,
            isResponsive,
        };
    },
});
</script>

<style lang="scss" scoped>
.fp-watermark {
    display: none !important;
}
</style>
