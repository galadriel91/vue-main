<template>
    <div class="infoWrap">
        <div class="infoDesc">
            <p v-for="(value, i) in item.posts.description" :key="i">
                {{ value }}
            </p>
        </div>
        <div class="infoLink">
            <div>
                <img src="@/assets/image/chrome.png" alt="크롬 로고" />
                <a :href="item.posts.sites[0].link" target="_blank">
                    사이트
                    <span class="xi-long-arrow-right"></span
                ></a>
            </div>
            <div v-if="item.posts.sites[1]">
                <img src="@/assets/image/figma.png" alt="피그마 로고" />
                <a :href="item.posts.sites[1].link" target="_blank">
                    피그마
                    <span class="xi-long-arrow-right"></span
                ></a>
            </div>
        </div>
        <div class="infoFirst">
            <p v-for="(info, key) in item.posts.subInfo.slice(0, 3)" :key="key">
                <span class="title">{{ info.title }}</span> :
                {{ info.content }},
            </p>
        </div>
        <div class="infoSecond">
            <p>
                <span>{{ item.posts.subInfo[3].title }}</span> :
                {{ item.posts.subInfo[3].content }}
            </p>
        </div>
        <div class="infoThird">
            <h2>사용기술</h2>
            <ul>
                <li
                    v-for="(name, key) in item.posts.skill"
                    :key="key"
                    :class="name"
                ></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import type { ProjectItem } from '@/store/types';
import { defineComponent, type PropType } from 'vue';
export default defineComponent({
    props: {
        item: {
            type: Object as PropType<ProjectItem>,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/MainItemInfo.scss';
</style>
