<template>
    <div class="allTechWrap">
        <h2>WHAT I DO</h2>
        <div class="techWrap">
            <div class="techWrapPresent">
                <h3>Skill</h3>
                <ul>
                    <li class="html"></li>
                    <li class="css"></li>
                    <li class="ts"></li>
                    <li class="vue"></li>
                </ul>
                <p>
                    마크업의 기본이 되는 HTML & CSS<br class="brick" />
                    동적인 부분을 담당하는 JS와 TS<br />
                    실력을 탄탄하게 만들기 위해 노력하고 있습니다<br />
                    JS의 프레임워크인 Vue.js를 학습하고 있습니다.
                    <br class="brick" />
                    추후 React를 학습하여 개발범위를 넓힐 예정입니다.
                </p>
            </div>
            <div class="techWrapFuture">
                <h3>Tool</h3>
                <ul>
                    <li class="vsc"></li>
                    <li class="git"></li>
                    <li class="photo"></li>
                    <li class="figma"></li>
                </ul>
                <p>
                    Git을 이용하여 버전 관리를 하고 있습니다.
                    <br class="brick" />
                    웹디자인을 위해 관련 서적을 통한 학습과<br />
                    Figma, Photoshop툴을 이용하고 있습니다.
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

<style lang="scss" scoped>
@import '@/assets/scss/components/skill/MainSkill';
</style>
