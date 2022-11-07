<template>
    <ul class="contactInfo">
        <li>
            <p>Address</p>
            <span>경상남도 진주시 평거동</span>
        </li>
        <li>
            <p>Cell Phone</p>
            <span>010-6660-8915</span>
        </li>
        <li>
            <p>E-mail</p>
            <span>g_ala@naver.com</span>
        </li>
        <li>
            <p>Web Site</p>
            <span
                ><a href="https://whitetree.netlify.app"
                    >whitetree.netlify.app</a
                ></span
            >
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/contact/ContactInfo';
</style>
