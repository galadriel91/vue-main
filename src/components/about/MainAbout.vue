<template>
    <div class="aboutWrap">
        <div class="introWrap">
            <div class="introWrapProfile">
                <h3>PROFILE</h3>
                <div class="introWrapProfileWrap">
                    <div class="myInfo">
                        <div>
                            <img
                                class="profilePic"
                                src="@/assets/image/about-pic.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <ul>
                                <li><span>Name</span>이문섭</li>
                                <li><span>Birth</span>1991. 12. 11</li>
                                <li class="emailInfo">
                                    <span>E-Mail</span>g_ala@naver.com
                                </li>
                                <li><span>Cell Phone</span>010-6660-8915</li>
                                <li><span>Hobby</span>포토샵 인물보정</li>
                                <li><span></span>축구·영화 시청, 게임</li>
                                <li><span>Favorite</span>반지의 제왕</li>
                                <li><span></span>처음가는 카페 방문</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><span>Education</span>경상대학교</li>
                                <li><span></span>생물학과 3학년 중퇴</li>
                                <li><span></span>~ 학점은행제 진행중</li>
                                <li class="licenseInfo">
                                    <span>자격증</span>정보처리산업기사(필기)
                                </li>
                                <li><span></span>워드프로세서</li>
                                <li><span></span>MOS Master</li>
                                <li><span></span>한국사능력검정1급</li>
                            </ul>
                        </div>
                    </div>
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
@import '@/assets/scss/components/about/MainAbout.scss';
</style>
