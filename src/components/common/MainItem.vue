<template>
    <div class="itemWrap">
        <div class="itemWrapInner">
            <div class="itemWrapInnerInfo">
                <div class="itemWrapInnerInfoImage">
                    <img :src="item.posts.mainImage" :alt="item.posts.title" />
                    <div>
                        <strong>{{
                            10 > item.id ? `0${item.id}` : item.id
                        }}</strong>
                        <span>{{ item.posts.title }}</span>
                    </div>
                </div>
                <div class="itemWrapInnerInfoFlex">
                    <div class="itemWrapInnerInfoFlexText">
                        <h3>상세 정보</h3>
                        <div class="itemWrapInnerInfoFlexTextHow">
                            <p v-if="item.markup">
                                W3C Validator : <span>O</span>
                            </p>
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
                        <div class="itemWrapInnerInfoFlexTextColor">
                            <p>사용 색상 :</p>
                            <ul>
                                <li
                                    v-for="(post, index) in item.posts.color"
                                    :key="index"
                                >
                                    <span
                                        class="color"
                                        :style="{ background: post }"
                                    ></span>
                                    <span>{{ post }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="itemWrapInnerInfoFlexTextFont">
                            <p>사용 폰트 :</p>
                            <span>{{ item.posts.fonts }}</span>
                        </div>
                        <div class="itemWrapInnerInfoFlexTextSkill">
                            <span>사용 기술 :</span>
                            <ul>
                                <li class="html icon" v-if="item.markup">
                                    HTML
                                </li>
                                <li class="css icon" v-if="item.markup">CSS</li>
                                <li class="js icon" v-if="item.markup">JS</li>
                                <li class="vue icon" v-if="item.vue">VUE</li>
                                <li class="sass icon" v-if="item.vue">SASS</li>
                            </ul>
                        </div>
                        <div class="itemWrapInnerInfoFlexTextLink">
                            <span>바로 가기 :</span>
                            <a
                                v-for="(post, i) in item.posts.sites"
                                :key="i"
                                :href="post.link"
                                target="_blank"
                                >{{ post.name }}</a
                            >
                        </div>
                    </div>
                    <div class="itemWrapInnerInfoFlexDetail">
                        <p>작업 후기</p>
                        <ul>
                            <li
                                v-for="(value, index) in item.posts.review"
                                :key="index"
                            >
                                {{ value }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- <div class="itemWrapInnerImage">
                <div class="pcShadow">
                    <img src="@/assets/image/dominoWeb.png" alt="" />
                </div>
                <div class="mobileShadow"></div>
                v-if="item.posts.responsive !== 'X'"
            </div> -->
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
