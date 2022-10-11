<template>
    <div class="contact">
        <h1>CONTACT</h1>
        <ContactInfo />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactInfo from '../components/contact/ContactInfo.vue';

export default defineComponent({
    components: {
        ContactInfo,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/ContactPage';
</style>
