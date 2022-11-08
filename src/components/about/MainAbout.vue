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
@import '@/assets/scss/components/about/AboutPage.scss';
</style>
