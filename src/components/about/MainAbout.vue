<template>
    <div class="aboutWrap">
        <div class="introWrap">
            <!-- :autoplay="autoplay" -->
            <swiper :modules="modules" :slides-per-view="1" :space-between="20">
                <swiper-slide>
                    <div class="introWrapProfile">
                        <h3>Profile</h3>
                        <div class="introWrapProfileWrap">
                            <img src="@/assets/image/about-pic.png" alt="" />
                            <div class="myInfoWrap">
                                <div class="myInfo">
                                    <div>
                                        <ul>
                                            <li><span>Name</span>이문섭</li>
                                            <li>
                                                <span>Birth</span>1991. 12. 11
                                            </li>
                                            <li>
                                                <span>Address</span>경상남도
                                                진주시 평거동
                                            </li>
                                            <li>
                                                <span>E-Mail</span
                                                >g_ala@naver.com
                                            </li>
                                            <li>
                                                <span>Cell Phone</span
                                                >010-6660-8915
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <span>Favorite</span>반지의 제왕
                                            </li>
                                            <li>
                                                <span>Hobby</span>포토샵
                                                인물보정
                                            </li>
                                            <li>
                                                <span></span>축구, 영화 시청
                                            </li>
                                            <li>
                                                <span>Education</span>경상대학교
                                            </li>
                                            <li>
                                                <span></span>생물학과 3학년 중퇴
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="myInfo">
                                    <div>
                                        <ul>
                                            <li>
                                                <span>자격증</span
                                                >정보처리산업기사(필기)
                                            </li>
                                            <li><span></span>워드 프로세서</li>
                                            <li>
                                                <span></span>2종보통운전면허
                                            </li>
                                            <li><span></span>MOS Master</li>
                                            <li>
                                                <span></span>한국사능력검정1급
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <span>Favorite</span>반지의 제왕
                                            </li>
                                            <li>
                                                <span>Hobby</span>포토샵
                                                인물보정
                                            </li>
                                            <li>
                                                <span></span>축구, 영화 시청
                                            </li>
                                            <li>
                                                <span>Education</span>경상대학교
                                            </li>
                                            <li>
                                                <span></span>생물학과 3학년 중퇴
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="introWrapProfile">
                        <h3>Profile</h3>
                        <div class="myInfo">
                            <div>
                                <img
                                    src="@/assets/image/about-pic.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <span>자격증</span
                                        >정보처리산업기사(필기)
                                    </li>
                                    <li><span></span>워드 프로세서</li>
                                    <li><span></span>2종보통운전면허</li>
                                    <li><span></span>MOS Master</li>
                                    <li><span></span>한국사능력검정1급</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <span>자격증</span
                                        >정보처리산업기사(필기)
                                    </li>
                                    <li><span></span>워드 프로세서</li>
                                    <li><span></span>2종보통운전면허</li>
                                    <li><span></span>MOS Master</li>
                                    <li><span></span>한국사능력검정1급</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <!-- <div class="introWrapTech">
                <h3>Tech Stack</h3>
                <div class="myTech">
                    <div class="myTechPresent">
                        <h4>현재</h4>
                        <div>
                            <ul>
                                <li class="html"></li>
                                <li class="css"></li>
                                <li class="ts"></li>
                                <li class="vue"></li>
                            </ul>
                            <p>
                                기본이 되는 HTML & CSS & TS를
                                <br class="brick" />
                                단단하게 만들기 위해 노력하고 있습니다<br />
                                JS의 대표적인 프레임워크인
                                <br class="brick" />
                                Vue.js를 계속 단련하고 있습니다.<br />
                            </p>
                        </div>
                    </div>
                    <div class="myTechFuture">
                        <h4>목표</h4>
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
                        </p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useCommon } from '@/store/commonStore';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/autoplay';
import 'swiper/css';
export default defineComponent({
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const common = useCommon();
        const { OFF_LOADING } = common;
        const onLoadImage = () => {
            OFF_LOADING();
        };
        const autoplay = ref({
            delay: 3000,
        });
        return {
            autoplay,
            onLoadImage,
            modules: [Autoplay],
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/about/AboutPage.scss';
</style>
