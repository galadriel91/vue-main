<template>
    <div class="itemWrap">
        <div class="itemWrapInner">
            <div class="itemWrapInnerInfo">
                <div class="itemWrapInnerInfoImage">
                    <img :src="item.posts.mainImage" :alt="item.posts.title" />
                </div>
                <div class="itemWrapInnerInfoDetail">
                    <p>작업 후기</p>
                    <ul>
                        <li>기존 사이트의 디자인을 바꾸지 않고</li>
                        <li>반응형으로 구현하는 것에 집중</li>
                        <li>최소 360px을 기준으로 작업</li>
                        <li>Slick 슬라이더를 이용해 보았다</li>
                    </ul>
                </div>
                <div class="itemWrapInnerInfoText">
                    <h3>상세 정보</h3>
                    <div class="itemWrapInnerInfoTextHow">
                        <p v-if="item.markup">W3C Validator : <span>O</span></p>
                        <p v-if="item.vue">
                            Backend : <span>{{ item.posts.backend }}</span>
                        </p>
                        <p>
                            반응형 :
                            <span>{{ item.posts.responsive }}</span>
                        </p>
                        <p>
                            배포 : <span>{{ item.posts.deploy }}</span>
                        </p>
                    </div>
                    <div class="itemWrapInnerInfoTextColor">
                        <p>사용 색상 :</p>
                        <ul>
                            <li>
                                <span class="color"></span>
                                <span>Primary</span>
                            </li>
                            <li>
                                <span class="color"></span>
                                <span>Secondary</span>
                            </li>
                        </ul>
                    </div>
                    <div class="itemWrapInnerInfoTextFont">
                        <p>사용 폰트 :</p>
                        <span>Noto Sans</span>
                    </div>
                    <div class="itemWrapInnerInfoTextSkill">
                        <span>사용 기술 :</span>
                        <ul>
                            <li class="html icon" v-if="item.markup">HTML</li>
                            <li class="css icon" v-if="item.markup">CSS</li>
                            <li class="js icon" v-if="item.markup">JS</li>
                            <li class="vue icon" v-if="item.vue">VUE</li>
                            <li class="sass icon" v-if="item.vue">SASS</li>
                        </ul>
                    </div>
                    <div class="itemWrapInnerInfoTextLink">
                        <a href="">바로가기</a>
                    </div>
                </div>
            </div>
            <div class="itemWrapInnerImage"></div>
        </div>
        <button class="closeBtn xi-close-thin" @click="onClickClose"></button>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { usePost } from '@/store/postStore';
import type { ProjectItem } from '@/store/types';
export default defineComponent({
    props: {
        item: {
            type: Object as PropType<ProjectItem>,
            required: true,
        },
    },
    setup() {
        const postStore = usePost();
        const { OFF_MAINITEM } = postStore;

        const onClickClose = () => {
            OFF_MAINITEM();
        };
        return {
            onClickClose,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/MainItem.scss';
</style>
