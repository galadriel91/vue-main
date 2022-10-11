<template>
    <div class="aboutWrap">
        <h1>ABOUT ME</h1>
        <div class="introWrap">
            <div class="introWrapLeft">
                <img
                    src="@/assets/image/about-pic.png"
                    alt="경주여행 할 때 찍은 사진"
                    @load="onLoadImage"
                />
            </div>
            <div class="introWrapRight">
                <div class="myInfo">
                    <h3>
                        오늘의 꿈을 내일의 현실로<br />
                        만들어 나가는 웹 개발 지원자.
                    </h3>
                    <div>
                        <ul>
                            <li><span>Name</span>이문섭</li>
                            <li><span>Birth</span>1991. 12. 11</li>
                            <li><span>Address</span>경상남도 진주시 평거동</li>
                            <li><span>E-Mail</span>g_ala@naver.com</li>
                            <li><span>Cell Phone</span>010-6660-8915</li>
                        </ul>
                    </div>
                </div>
                <div class="myGoal">
                    <h2 class="promise">
                        항상 흐르는 물 처럼 <br class="mobile" />
                        고여 있지 않겠습니다.
                    </h2>
                    <p class="introSelf">
                        아버지의 유리 가게 홈페이지를 만들고 싶다는 생각이<br />
                        웹 개발자가 되고싶다는 목표로 바뀌었습니다.<br />
                        늦었다고 생각했을 땐 이미 늦었지만 <br />
                        시작이 다른 사람보다 늦었다고 해서 항상
                        <br class="brick" />
                        뒤쳐질 거라고 생각하지 않습니다.<br />
                        늦은 만큼 계속 정진하여 목표한 <br class="brick" />
                        기술 역량을 갖추기 위해 나아갈 것입니다.<br />
                    </p>
                </div>
            </div>
        </div>
        <div class="skills">
            <h2>Tech Stack</h2>
            <div>
                <div class="present skillbox">
                    <h3>현재</h3>
                    <p>
                        가장 기본이 되는 HTML & CSS & JS를 <br class="brick" />
                        단단하게 만들기 위해 노력하고 있습니다<br />
                        JS의 대표적인 프레임워크와 라이브러리인
                        <br class="brick" />
                        Vue.js , React를 학습하고 있습니다.<br />
                        Git을 이용하여 버전관리를 하고 있습니다.
                    </p>
                    <ul>
                        <li class="html">HTML</li>
                        <li class="css">CSS</li>
                        <li class="js">JS</li>
                        <li class="vue">VUE.JS</li>
                    </ul>
                </div>
                <div class="future skillbox">
                    <h3>목표</h3>
                    <p>
                        Python의 Django를 이용하여 풀 스택 개발자로
                        <br class="brick" />
                        성장하는 것을 목표로 삼고 있습니다.<br />
                        React Native로 모바일 앱 개발도 도전하고 싶습니다.
                        <br class="brick" />
                        완벽보다는 최선을 다해 완료하고 <br class="brick" />
                        발전하는 개발자가 되겠습니다.
                    </p>
                    <ul>
                        <li class="python">PYTHON</li>
                        <li class="django">DJANGO</li>
                        <li class="db">DB</li>
                        <li class="react">REACTNATIVE</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCommon } from '@/store/commonStore';

export default defineComponent({
    setup() {
        const common = useCommon();
        const { OFF_LOADING } = common;
        const onLoadImage = () => {
            OFF_LOADING();
        };
        return {
            onLoadImage,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/AboutPage';
</style>
