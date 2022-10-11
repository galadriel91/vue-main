<template>
    <div class="itemWrap">
        <div>
            <ul>
                <li class="itemPost">
                    <div class="itemImage">
                        <img
                            :src="post.posts.mainImage"
                            :alt="post.posts.title"
                        />
                    </div>
                    <div class="itemInner">
                        <p class="innerNumber">
                            <strong>{{
                                10 > post.id ? `0${post.id}` : post.id
                            }}</strong>
                            <span>{{ post.posts.title }}</span>
                        </p>
                        <h3>{{ post.posts.subTitle }}</h3>
                        <div class="checkWeb clear">
                            <p v-if="post.markup">
                                W3C Validator : <span>O</span>
                            </p>
                            <p v-if="post.vue">
                                Backend : <span>{{ post.posts.backend }}</span>
                            </p>
                            <p>
                                반응형 :
                                <span>{{ post.posts.responsive }}</span>
                            </p>
                            <p>
                                배포 : <span>{{ post.posts.deploy }}</span>
                            </p>
                        </div>
                        <div class="skillWrap">
                            <div class="skillWrapInfo">
                                <div>
                                    <span>사용 기술 :</span>
                                    <ul class="skill">
                                        <li
                                            class="html icon"
                                            v-if="post.markup"
                                        >
                                            HTML
                                        </li>
                                        <li class="css icon" v-if="post.markup">
                                            CSS
                                        </li>
                                        <li class="js icon" v-if="post.markup">
                                            JS
                                        </li>
                                        <li class="vue icon" v-if="post.vue">
                                            VUE
                                        </li>
                                        <li class="sass icon" v-if="post.vue">
                                            SASS
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <span>지원 :</span>
                                    <p>
                                        <img
                                            v-for="(image, i) in post.posts
                                                .support"
                                            :key="i"
                                            :src="image.src"
                                            :alt="image.title"
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="linkWrap">
                            <a
                                v-for="(item, i) in post.posts.sites"
                                :key="i"
                                :href="item.link"
                                target="_blank"
                                >{{ item.name }}</a
                            >
                        </div>
                    </div>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import type { ProjectItem } from '@/store/types';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    props: {
        post: {
            type: Object as PropType<ProjectItem>,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/post/PostItem';
</style>
