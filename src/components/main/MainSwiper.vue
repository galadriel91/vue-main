<template>
    <div class="swiperItemWrap">
        <swiper
            :modules="modules"
            :slides-per-view="4"
            :space-between="30"
            :autoplay="autoplay"
        >
            <swiper-slide v-for="item in projectsList" :key="item.id">
                <div class="itemWrap">
                    <div>
                        <ul>
                            <li class="itemPost">
                                <div class="itemImage">
                                    <img
                                        :src="item.posts.mainImage"
                                        :alt="item.posts.title"
                                    />
                                </div>
                                <div class="itemInner">
                                    <p class="innerNumber">
                                        <strong>{{
                                            10 > item.id
                                                ? `0${item.id}`
                                                : item.id
                                        }}</strong>
                                        <span>{{ item.posts.title }}</span>
                                    </p>
                                    <h3>{{ item.posts.subTitle }}</h3>
                                    <div class="checkWeb clear">
                                        <p v-if="item.markup">
                                            W3C Validator : <span>O</span>
                                        </p>
                                        <p v-if="item.vue">
                                            Backend :
                                            <span>{{
                                                item.posts.backend
                                            }}</span>
                                        </p>
                                        <p>
                                            반응형 :
                                            <span>{{
                                                item.posts.responsive
                                            }}</span>
                                        </p>
                                        <p>
                                            배포 :
                                            <span>{{ item.posts.deploy }}</span>
                                        </p>
                                    </div>
                                    <div class="skillWrap">
                                        <div class="skillWrapInfo">
                                            <div>
                                                <span>사용 기술 :</span>
                                                <ul class="skill">
                                                    <li
                                                        class="html icon"
                                                        v-if="item.markup"
                                                    >
                                                        HTML
                                                    </li>
                                                    <li
                                                        class="css icon"
                                                        v-if="item.markup"
                                                    >
                                                        CSS
                                                    </li>
                                                    <li
                                                        class="js icon"
                                                        v-if="item.markup"
                                                    >
                                                        JS
                                                    </li>
                                                    <li
                                                        class="vue icon"
                                                        v-if="item.vue"
                                                    >
                                                        VUE
                                                    </li>
                                                    <li
                                                        class="sass icon"
                                                        v-if="item.vue"
                                                    >
                                                        SASS
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <span>지원 :</span>
                                                <p>
                                                    <img
                                                        v-for="(
                                                            image, i
                                                        ) in item.posts.support"
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
                                            v-for="(items, i) in item.posts
                                                .sites"
                                            :key="i"
                                            :href="items.link"
                                            target="_blank"
                                            >{{ items.name }}</a
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
            </swiper-slide>
        </swiper>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';
import 'swiper/css/autoplay';
import 'swiper/css';
export default defineComponent({
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const postStore = usePost();
        const { projectsList } = storeToRefs(postStore);
        const autoplay = ref({
            delay: 3000,
        });
        const breakpoints = ref({});
        return {
            autoplay,
            projectsList,
            modules: [Autoplay],
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/main/MainSwiper';
</style>
