<template>
    <div>
        <MainSlide />
        <main>
            <div class="mainIntro">
                <h2>
                    항상 흐르는 물 처럼 <br class="brick" />
                    고여 있지 않겠습니다.
                </h2>
                <p>
                    여기까지 오는 데 근 30년이 걸렸습니다. <br class="mobile" />
                    무엇을 해야 하는지 <br class="brick" />
                    어떤 것을 원하는지 모르는 시간을 지나서
                </p>
                <p>
                    마침내 제가 하고자 하는 것을, 진정으로 <br class="brick" />
                    원하는 것을 찾을 수 있어서 기분이 홀가분합니다.
                </p>
                <p>
                    늦었다고 생각했을 땐 이미 늦었지만 <br class="brick" />
                    다른 사람보다 늦었다고 해서 <br class="brick" />
                    항상 뒤처질 것으로 생각하지 않습니다.
                </p>
                <p>
                    늦은 만큼 계속 정진하여 목표한 <br class="brick" />
                    기술 스택을 갖추기 위해 최선을 다할 것입니다.
                </p>
            </div>
            <div class="mainProductWrap">
                <h2><span>PROJECTS</span></h2>
                <div>
                    <MainSwiper />
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainSlide from '../components/main/MainSlide.vue';
import MainSwiper from '../components/main/MainSwiper.vue';

export default defineComponent({
    components: {
        MainSlide,
        MainSwiper,
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/IndexPage';
</style>
