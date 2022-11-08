<template>
    <div>
        <h2>Tech Stack</h2>
        <div class="techWrap">
            <div class="techWrapPresent">
                <h3>현재</h3>
                <ul>
                    <li class="html"></li>
                    <li class="css"></li>
                    <li class="ts"></li>
                    <li class="vue"></li>
                </ul>
                <p>
                    가장 기본이 되는 HTML & CSS & TS를 <br class="brick" />
                    단단하게 만들기 위해 노력하고 있습니다<br />
                    JS의 대표적인 프레임워크인
                    <br class="brick" />
                    Vue.js를 계속 단련하고 있습니다.<br />
                    Git을 이용하여 버전관리를 하고 있습니다.
                </p>
            </div>
            <div class="techWrapFuture">
                <h3>목표</h3>
                <ul>
                    <li class="python"></li>
                    <li class="django"></li>
                    <li class="flu"></li>
                    <li class="react"></li>
                </ul>
                <p>
                    Python의 Django를 이용하여 풀 스택 개발자로
                    <br class="brick" />
                    성장하는 것을 목표로 삼고 있습니다.<br />
                    Flutter로 모바일 앱 개발도 도전하고 싶습니다.
                    <br class="brick" />
                    완벽보다는 최선을 다해 완료하고 <br class="brick" />
                    발전하는 개발자가 되겠습니다.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/components/skill/MainSkill';
</style>
